import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { Weather } from "../../weather-base/src/weather-base";

interface WeatherState {
  weather: Weather;
  weatherText: string;
  temperature: number;
  minTemperature: number;
  maxTemperature: number;
}

function convertWeatherCode(code: number): [string, Weather] {
  switch (code) {
    // Clear and Cloudy Conditions
    case 0:
      return ["Clear", Weather.Clear];
    case 1:
      return ["Partly Cloudy", Weather.PartlyCloudy];
    case 2:
      return ["Cloudy", Weather.Cloudy];
    case 3:
      return ["Overcast", Weather.Overcast];

    // Fog
    case 45:
    case 48:
      return ["Fog", Weather.Overcast];

    // Drizzle
    case 51:
    case 53:
    case 55:
      return ["Light, Moderate, or Heavy Drizzle", Weather.Drizzle];
    case 56:
    case 57:
      return ["Freezing Drizzle", Weather.Drizzle];

    // Rain
    case 61:
      return ["Light Rain", Weather.Rain];
    case 63:
      return ["Moderate Rain", Weather.Rain];
    case 65:
      return ["Heavy Rain", Weather.Rain];
    case 66:
    case 67:
      return ["Freezing Rain", Weather.Rain];

    // Snow
    case 71:
      return ["Light Snow", Weather.Snow];
    case 73:
      return ["Moderate Snow", Weather.Snow];
    case 75:
      return ["Heavy Snow", Weather.Snow];
    case 77:
      return ["Snow Grains", Weather.Snow];

    // Showers
    case 80:
      return ["Light Rain Showers", Weather.Rain];
    case 81:
      return ["Moderate Rain Showers", Weather.Rain];
    case 82:
      return ["Heavy Rain Showers", Weather.Rain];
    case 85:
      return ["Light Snow Showers", Weather.Snow];
    case 86:
      return ["Heavy Snow Showers", Weather.Snow];

    // Thunderstorms
    case 95:
    case 96:
    case 99:
      return ["Thunderstorm", Weather.Thunderstorm];

    // Default case for unknown weather codes
    default:
      return ["Unknown", Weather.Unknown];
  }
}

@customElement("weather-open-meteo")
export class WeatherOpenMeteo extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      height: 100%;
    }
  `;

  @property({ type: String, attribute: "background-color" }) backgroundColor =
    "var(--color-background)";
  @property({ type: String, attribute: "text-color" }) textColor =
    "var(--color-text)";

  @property({ type: String, attribute: "timezone" }) timezone = "Asia/Tokyo";
  @property({ type: Number, attribute: "update-interval" }) updateInterval =
    60 * 30; // 30 minutes

  @property({ type: String, attribute: "city" }) city = "Tokyo";
  @property({ type: Number, attribute: "latitude" }) latitude = 35.6895;
  @property({ type: Number, attribute: "longitude" }) longitude = 139.6917;

  @state()
  weather: WeatherState | null = null;

  timeout: number | null = null;

  oldAttributes = {
    latitude: this.latitude,
    longitude: this.longitude,
    updateInterval: this.updateInterval,
  };
  checkTimeout!: number;
  isUpdating: boolean = false;

  connectedCallback() {
    super.connectedCallback();

    this.checkTimeout = setInterval(this.shouldUpdateWeather.bind(this), 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    clearInterval(this.checkTimeout);
  }

  shouldUpdateWeather() {
    const currentAttributes = {
      latitude: this.latitude,
      longitude: this.longitude,
      updateInterval: this.updateInterval,
    };

    if (
      JSON.stringify(currentAttributes) !==
        JSON.stringify(this.oldAttributes) ||
      this.weather === null
    ) {
      if (this.timeout) clearTimeout(this.timeout);
      this.updateWeather();

      this.oldAttributes = currentAttributes;
    }
  }

  async updateWeather() {
    if (this.isUpdating) return;
    this.isUpdating = true;

    const resp = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current=temperature_2m%2Cweather_code&timezone=${this.timezone}&forecast_days=1&hourly=temperature_2m`
    );

    if (resp.ok) {
      const json = await resp.json();

      const [weatherText, weather] = convertWeatherCode(
        json.current.weather_code
      );
      const temperature = json.current.temperature_2m;

      const temperature_2m = json.hourly.temperature_2m;
      const minTemperature = Math.min(...temperature_2m);
      const maxTemperature = Math.max(...temperature_2m);

      this.weather = {
        weather,
        weatherText,
        temperature,
        minTemperature,
        maxTemperature,
      };
    }

    // Set next weather update
    this.timeout = setTimeout(
      this.updateWeather.bind(this),
      this.updateInterval * 1000
    );

    this.isUpdating = false;
  }

  render() {
    return html`<weather-base
      city=${this.city}
      timezone=${this.timezone}
      weather="${this.weather?.weather || Weather.Unknown}"
      weather-text="${this.weather?.weatherText || "Unknown"}"
      temperature="${this.weather?.temperature || NaN}"
      min-temperature="${this.weather?.minTemperature || NaN}"
      max-temperature="${this.weather?.maxTemperature || NaN}"
      unit="°C"
    ></weather-base>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "weather-open-meteo": WeatherOpenMeteo;
  }
}
