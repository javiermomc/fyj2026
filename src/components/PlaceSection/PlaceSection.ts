import template from './PlaceSection.html?raw';

class PlaceSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
  }
}

customElements.define('place-section', PlaceSection);