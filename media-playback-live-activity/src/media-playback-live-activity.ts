import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { MediaActivity, Send, Subscribe } from "./types";
import { next, pause, play, prev } from "./icons";

async function sleep(duration: number) {
  return new Promise((res) => setTimeout(res, duration));
}

function base64AsImg(img: string | null | undefined) {
  return img ? html`<img src="data:image/png;base64,${img}" />` : "";
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60);
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
}
@customElement("media-timeline")
class MediaTimeline extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      height: 100%;
      margin-top: 2rem;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .timeline {
      width: 100%;
      height: 1rem;
      border-radius: 0.5rem;
      position: relative;
      overflow: hidden;
    }

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      background-color: var(--color-text);
      width: 100%;
      height: 100%;
      opacity: 0.25;
    }

    .progress {
      background-color: var(--color-text);
      height: 100%;
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      transition: width 1s linear;
    }

    .info {
      display: flex;
      justify-content: space-between;
    }
  `;

  @property({ type: Number, attribute: "duration" }) duration = 60;
  @property({ type: Number, attribute: "elapsed" }) elapsed = 0;
  @property({ type: Number, attribute: "update-time" }) updateTime = 0;
  @property({ type: Boolean, attribute: "paused" }) paused = false;

  @state()
  calcatedElapsed = 0;

  connectedCallback() {
    super.connectedCallback();

    (async () => {
      while (this.isConnected) {
        await sleep(1000);
        const newElapsed = this.elapsed + (Date.now() / 1000 - this.updateTime);
        if (!this.paused && newElapsed <= this.duration)
          this.calcatedElapsed = newElapsed;
      }
    })();
  }

  render() {
    return html`<div class="container">
      <div class="timeline">
        <span
          class="progress"
          style="width:${(this.calcatedElapsed / this.duration) * 100}%;"
        ></span>
        <span class="bg"></span>
      </div>
      <div class="info">
        <span class="elapsed">${formatTime(this.calcatedElapsed)}</span>
        <span class="duration">${formatTime(this.duration)}</span>
      </div>
    </div>`;
  }
}

@customElement("overflow-text")
class OverflowText extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .text {
      display: inline-block;
      white-space: nowrap;
    }
  `;

  @property({ attribute: "text" }) text: string | null | undefined;
  @property({ type: Number, attribute: "duration" }) duration = 10;
  @property({ type: Number, attribute: "loop-duration" }) loopDuration = 5;

  @state()
  isOverflowed: boolean = false;

  connectedCallback() {
    super.connectedCallback();

    // Update media activity every 5 seconds
    (async () => {
      while (this.isConnected) {
        const text = this.shadowRoot?.querySelector(".text");
        const parent = this.shadowRoot?.host?.parentElement;
        if (!parent || !text) {
          await sleep(500);
          continue;
        }

        // check if overflow
        const clientWidth = text.clientWidth;
        const realWidth = this.isOverflowed ? clientWidth / 2 : clientWidth;
        if (parent.clientWidth >= realWidth) {
          this.isOverflowed = false;
          await sleep(500);
          continue;
        }
        if (!this.isOverflowed) this.isOverflowed = true;

        text.setAttribute(
          "style",
          `transform:translateX(-50%);transition:transform ${this.duration}s linear`
        );
        await sleep(this.duration * 1000);
        text.removeAttribute("style");

        await sleep(this.loopDuration * 1000);
      }
    })();
  }

  render() {
    const text = this.isOverflowed ? `${this.text}  ${this.text}` : this.text;
    return html`<span class="text">${text}</span>`;
  }
}

@customElement("media-playback-live-activity")
export default class MediaPlaybackLiveActivity extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      height: 100%;
    }

    .container {
      font-family: Arial, sans-serif;
      width: 100%;
      height: 100%;
      position: relative;
      padding: 5rem;
      box-sizing: border-box;
    }

    .no-media {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      font-size: 10rem;
      text-align: center;
      margin: 0;
      padding: 0;
    }

    .media-info {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3rem;
    }

    .artwork {
      position: relative;
      width: 25rem;
      height: 25rem;
      flex-shrink: 0;
    }

    .album-cover {
      width: calc(100% - 2rem);
      height: calc(100% - 2rem);
      border-radius: 2rem;
      overflow: hidden;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .app-icon {
      width: 6rem;
      height: 6rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 1;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      font-size: 2rem;
      overflow: hidden;
    }

    .title {
      font-size: 3rem;
    }

    .album {
      opacity: 0.75;
    }

    .artist {
      opacity: 0.5;
    }

    .controller {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5rem;
    }

    svg {
      width: 3rem;
      height: 3rem;
      cursor: pointer;
    }

    path {
      fill: var(--color-text);
    }

    .toggle svg {
      width: 6rem;
      height: 6rem;
    }
  `;

  @property({ type: String, attribute: "background-color" }) backgroundColor =
    "var(--color-background)";
  @property({ type: String, attribute: "text-color" }) textColor =
    "var(--color-text)";

  @state() mediaActivity?: MediaActivity;
  subscribe?: Subscribe;
  send?: Send;

  connectedCallback() {
    super.connectedCallback();

    this.subscribeToMessage();
  }

  async subscribeToMessage() {
    while (!this.subscribe || !this.send) await sleep(250);

    this.subscribe((mesg) => (this.mediaActivity = mesg.data));

    this.send({ type: "getState" });
  }

  render() {
    // TODO use average image color as main color

    const checkEmpty = (text: string | null | undefined, className: string) =>
      text
        ? html`<div class=${className}>
            <overflow-text text="${text}"></overflow-text>
          </div>`
        : "";

    const content = this.mediaActivity
      ? html`<div class="media-info">
          <div class="artwork">
            <div class="album-cover">
              ${base64AsImg(this.mediaActivity.albumCover)}
            </div>
            <div class="app-icon">
              ${base64AsImg(this.mediaActivity.appIcon)}
            </div>
          </div>
          <div class="info">
            ${checkEmpty(this.mediaActivity.title, "title")}
            ${checkEmpty(this.mediaActivity.album, "album")}
            ${checkEmpty(this.mediaActivity.artist, "artist")}
            <media-timeline
              duration="${this.mediaActivity.duration ?? 60}"
              elapsed="${this.mediaActivity.elapsed ?? 0}"
              update-time="${this.mediaActivity.infoUpdateTime ?? 0}"
              ?paused="${!this.mediaActivity.isPlaying}"
            ></media-timeline>
            <div class="controller">
              <span @click=${() => this.send!({ type: "prevTrack" })}
                >${prev}</span
              >
              <span
                class="toggle"
                @click=${() =>
                  this.send!({
                    type: this.mediaActivity?.isPlaying
                      ? "pauseMedia"
                      : "playMedia",
                  })}
              >
                ${this.mediaActivity.isPlaying ? pause : play}
              </span>
              <span @click=${() => this.send!({ type: "nextTrack" })}
                >${next}</span
              >
            </div>
          </div>
        </div>`
      : html`<h1 class="no-media">No Media Playing...</h1>`;

    return html`<div
      class="container"
      style="background: ${this.backgroundColor}; color: ${this.textColor};"
    >
      ${content}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "media-playback-live-activity": MediaPlaybackLiveActivity;
    "overflow-text": OverflowText;
    "media-timeline": MediaTimeline;
  }
}
