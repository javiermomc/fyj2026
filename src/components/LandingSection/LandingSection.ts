import template from './LandingSection.html?raw';

class LandingSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
  }
}

customElements.define('landing-section', LandingSection);