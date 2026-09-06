import template from './ConfirmationSection.html?raw';

class ConfirmationSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
  }
}

customElements.define('confirmation-section', ConfirmationSection);