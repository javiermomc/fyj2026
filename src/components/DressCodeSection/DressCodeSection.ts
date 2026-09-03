import template from './DressCodeSection.html?raw';

class DressCodeSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
  }
}

customElements.define('dress-code-section', DressCodeSection);