import {
  css,
  html,
  LitElement,
} from 'lit';
import {
  customElement,
  property,
  state,
} from 'lit/decorators.js';

interface Time {
  time: string;
  weekday?: string | false;
  date?: string | false;
  timezone?: string | false;
}

@customElement("fullscreen-clock")
export class FullscreenClock extends LitElement {
  static styles = css`
    div {
      font-family: Arial, sans-serif;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 5rem;
    }

    h1,
    h3 {
      margin: 0;
      padding: 0;
    }

    h1 {
      font-size: 15rem;
    }

    h3 {
      opacity: 0.5;
      font-size: 3rem;
    }
  `;

  @property({ type: String, attribute: "background-color" }) backgroundColor =
    "var(--color-background)";
  @property({ type: String, attribute: "text-color" }) textColor =
    "var(--color-text)";
  @property({ type: String, attribute: "timezone" }) timezone:
    | string
    | undefined;
  @property({ type: Boolean, attribute: "use-24-hour" }) is24HourFormat = false;
  @property({ type: Boolean, attribute: "display-date" }) displayDate = false;
  @property({ type: Boolean, attribute: "display-weekday" }) displayWeekday =
    false;
  @property({ type: Boolean, attribute: "display-timezone" }) displayTimezone =
    false;

  @state()
  private time = this.getCurrentTime();

  private _interval?: number;

  connectedCallback() {
    super.connectedCallback();
    this._interval = window.setInterval(
      () => (this.time = this.getCurrentTime()),
      1000
    );
  }

  disconnectedCallback() {
    if (this._interval) clearInterval(this._interval);

    super.disconnectedCallback();
  }

  private getCurrentTime(): Time {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !this.is24HourFormat,
      timeZone: this.timezone,
    };

    const time = now.toLocaleTimeString(undefined, options).toUpperCase();

    const offset = now.getTimezoneOffset();
    const hoursOffset = Math.abs(offset) / 60;
    const minutesOffset = Math.abs(offset) % 60;
    const sign = offset > 0 ? "-" : "+";
    const offsetString = `UTC${sign}${hoursOffset
      .toString()
      .padStart(2, "0")}:${minutesOffset.toString().padStart(2, "0")}`;
    const timezone =
      now
        .toLocaleDateString(undefined, { day: "2-digit", timeZoneName: "long" })
        .substring(4) + ` (${offsetString})`;

    const weekday = now.toLocaleDateString(undefined, { weekday: "long" });

    const date = now.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return {
      time: time,
      timezone: this.displayTimezone && timezone,
      weekday: this.displayWeekday && weekday,
      date: this.displayDate && date,
    };
  }

  render() {
    const date = this.time.date
      ? html`<h3>
          ${this.time.date}
          ${this.time.weekday ? ` (${this.time.weekday})` : ""}
        </h3>`
      : "";

    const timezone = this.time.timezone
      ? html`<h3>${this.time.timezone}</h3>`
      : "";

    return html`<div
      style="background: ${this.backgroundColor}; color: ${this.textColor};"
    >
      ${date}
      <h1>${this.time.time}</h1>
      ${timezone}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "fullscreen-clock": FullscreenClock;
  }
}

export default FullscreenClock;
