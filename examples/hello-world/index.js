class HelloWorld extends HTMLElement {
  constructor() {
    super();

    // Attach a shadow DOM
    const shadow = this.attachShadow({ mode: "open" });

    // Create a container element
    const container = document.createElement("div");
    container.textContent = "Hello, World!";

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
  }
}

// Define the new element
customElements.define("hello-world", HelloWorld);
