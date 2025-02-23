const sleep = async (duration) =>
  new Promise((res) => setTimeout(res, duration));

class BackgroundScript extends HTMLElement {
  constructor() {
    super();

    // Attach a shadow DOM
    const shadow = this.attachShadow({ mode: "open" });

    // Create a container element
    const container = document.createElement("div");
    container.textContent =
      "Check the console to see if the background script is working.";

    // Apply minimal styles
    const style = document.createElement("style");
    style.textContent = `
          div {
            font-size: 5rem;
            color: red;
          }
        `;

    // Append elements to shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(container);

    this.subscribeToMessage();
  }

  async subscribeToMessage() {
    while (!this.subscribe) await sleep(250);

    this.subscribe((mesg) =>
      console.log("Received:\n" + JSON.stringify(mesg, null, 4))
    );
  }
}

// Define the new element
customElements.define("background-script", BackgroundScript);
