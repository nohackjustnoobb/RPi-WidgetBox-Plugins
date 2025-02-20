import {
  css,
  html,
  LitElement,
} from 'lit';
import {
  customElement,
  property,
} from 'lit/decorators.js';

import { DotLottie } from '@lottiefiles/dotlottie-web';

enum Weather {
  Clear = "clear",
  PartlyCloudy = "partlyCloudy",
  Cloudy = "cloudy",
  Overcast = "overcast",
  Drizzle = "drizzle",
  Rain = "rain",
  Thunderstorm = "thunderstorm",
  Snow = "snow",
  Unknown = "unknown",
}

function toKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

const weatherDayLotties = Object.fromEntries(
  Object.values(Weather)
    .filter((v) => v !== Weather.Unknown)
    .map((v) => [v as Weather, `../assets/day-${toKebabCase(v)}.lottie`])
);

const weatherNightLotties = Object.fromEntries(
  Object.values(Weather)
    .filter((v) => v !== Weather.Unknown)
    .map((v) => [v as Weather, `../assets/night-${toKebabCase(v)}.lottie`])
);

const sleep = async (duration: number): Promise<void> =>
  new Promise((res) => setTimeout(res, duration));

function isNight(timeZone: string): boolean {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    hour12: false,
    timeZone: timeZone || undefined,
  };
  const hour = new Intl.DateTimeFormat("en-US", options).format(now);

  const hourNumber = Number(hour);
  return hourNumber >= 18 || hourNumber < 6;
}

@customElement("fullscreen-weather")
export class FullscreenWeather extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      height: 100%;
    }

    .container {
      font-family: Arial, sans-serif;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      grid-gap: 5rem;
    }

    .weather {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
    }

    canvas {
      width: 35rem;
      height: 35rem;
    }

    h1,
    h3,
    h4 {
      margin: 0;
    }

    h1 {
      font-size: 15rem;
      margin: 1rem;
    }

    h3 {
      font-size: 3rem;
    }

    h4 {
      font-size: 2rem;
      font-weight: normal;
      margin: 0.25rem;
    }

    .range {
      display: flex;
      gap: 1rem;
    }

    .temperature {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `;

  @property({ type: String, attribute: "background-color" }) backgroundColor =
    "var(--color-background)";
  @property({ type: String, attribute: "text-color" }) textColor =
    "var(--color-text)";

  @property({ type: String, attribute: "city" }) city = "";
  @property({ type: String, attribute: "weather" }) weather = Weather.Unknown;
  @property({ type: String, attribute: "weather-text" }) weatherText = "";
  @property({ type: String, attribute: "timezone" }) timezone = "";
  @property({ type: String, attribute: "unit" }) unit = "";
  @property({ type: Number, attribute: "temperature" }) temperature = NaN;
  @property({ type: Number, attribute: "max-temperature" }) maxTemperature =
    NaN;
  @property({ type: Number, attribute: "min-temperature" }) minTemperature =
    NaN;

  oldWeather: Weather | null = null;

  async updateCanvas() {
    const weather = this.weather as Weather;
    if (
      !weather ||
      !Object.values(Weather).includes(weather) ||
      weather === Weather.Unknown ||
      !this.shadowRoot
    )
      return;

    let canvas = null;
    while (!canvas) {
      await sleep(250);
      canvas = this.shadowRoot.querySelector("#dotLottie-canvas");
    }

    new DotLottie({
      canvas: canvas as HTMLCanvasElement,
      src: isNight(this.timezone)
        ? weatherNightLotties[weather]
        : weatherDayLotties[weather],
      loop: true,
      autoplay: true,
    });
  }

  render() {
    if (this.oldWeather !== this.weather) {
      this.updateCanvas();
      this.oldWeather = this.weather;
    }

    return html`<div
      class="container"
      style="background: ${this.backgroundColor}; color: ${this.textColor};"
    >
      <div class="weather">
        <canvas id="dotLottie-canvas"></canvas>
      </div>
      <div class="temperature">
        <h3>${this.city}</h3>
        <h1>${this.temperature}${this.unit}</h1>
        ${this.weatherText && html`<h4>${this.weatherText}</h4>`}
        <div class="range">
          <h4><b>H:</b> ${this.maxTemperature}${this.unit}</h4>
          <h4><b>L:</b> ${this.minTemperature}${this.unit}</h4>
        </div>
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "fullscreen-weather": FullscreenWeather;
  }
}
