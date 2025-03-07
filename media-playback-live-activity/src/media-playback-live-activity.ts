import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { MediaActivity, Send, Subscribe } from "./types";

const sleep = async (duration: number) =>
  new Promise((res) => setTimeout(res, duration));

const base64AsImg = (img: string | null | undefined) =>
  img ? html`<img src="data:image/png;base64,${img}" />` : "";

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
      width: 20rem;
      height: 20rem;
    }

    .album-cover {
      width: calc(100% - 1rem);
      height: calc(100% - 1rem);
      border-radius: 2rem;
      overflow: hidden;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .app-icon {
      width: 4rem;
      height: 4rem;
      border-radius: 1rem;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      position: absolute;
      padding: 0.25rem;
      right: 0;
      bottom: 0;
      z-index: 1;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      font-size: 2rem;
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
    // TODO add duration and elapsed
    // TODO add controller
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
            <div class="title">${this.mediaActivity.title}</div>
            <div class="album">${this.mediaActivity.album}</div>
            <div class="artist">${this.mediaActivity.artist}</div>
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
  }
}
