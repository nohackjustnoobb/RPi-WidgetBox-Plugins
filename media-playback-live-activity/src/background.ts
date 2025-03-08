import { invoke } from "@tauri-apps/api/core";
import { listen, UnlistenFn } from "@tauri-apps/api/event";

import { MediaActivity, Send, Subscribe } from "./types";

function isRunningInTauri() {
  return "__TAURI_INTERNALS__" in window;
}

class Background {
  send?: Send;
  cache?: MediaActivity;
  unlisten?: UnlistenFn;

  sendState() {
    if (!this.send) return;

    this.send({
      type: "updateState",
      data: this.cache,
    });
  }

  async start(send: Send, subscribe: Subscribe) {
    if (!isRunningInTauri()) return;

    this.send = send;
    subscribe((mesg) => {
      switch (mesg.type) {
        case "getState":
          this.sendState();
          break;
        case "playMedia":
          invoke("play_media");
          break;
        case "pauseMedia":
          invoke("pause_media");
          break;
        case "nextTrack":
          invoke("next_track");
          break;
        case "prevTrack":
          invoke("prev_track");
          break;
      }
    });

    this.unlisten = await listen("media-activity", (event) => {
      this.cache = event.payload as MediaActivity;
      this.sendState();
    });

    invoke("register_media_activity_event");
  }

  stop() {
    if (this.unlisten) this.unlisten();

    invoke("unregister_media_activity_event");
  }
}

export default new Background();
