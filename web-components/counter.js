class MyCounter extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    get count() {
        return this.getAttribute("count");
    }

    set count(val) {
        this.setAttribute("count", val);
    }

    static get observedAttributes() {
        return ["count"];
    }

    attributeChangedCallback(prop, oldVal, newVal) {
        if (prop === "count") {
            this.render();
            let button = this.shadow.querySelector('#btn');
            button.addEventListener("click", this.increment.bind(this));
        }
    }

    increment() {
        this.count++;
    }

    connectedCallback() {
        this.render();
        let button = this.shadow.querySelector('#btn');
        console.log(this);
        button.addEventListener("click", this.increment.bind(this));
    }

    render() {
        this.shadow.innerHTML = `
            <h1>Counter</h1>
            <p>Count: ${this.count}</p>
            <button id="btn">Increment</button>
        `;
    }
}

customElements.define("my-counter", MyCounter);