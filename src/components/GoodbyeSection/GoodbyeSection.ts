import template from './GoodbyeSection.html?raw';

class GoodbyeSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
  }
}

customElements.define('goodbye-section', GoodbyeSection);