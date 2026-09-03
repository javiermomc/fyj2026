import template from './ChurchSection.html?raw';

class ChurchSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
  }
}

customElements.define('church-section', ChurchSection);