import template from './MovingWaves.html?raw';

class MovingWaves extends HTMLElement {
  connectedCallback() {
    const color = this.getAttribute('color') || 'currentColor';

    this.classList.add(
      'absolute',
      'bottom-0',
      'left-0',
      'w-full',
      'overflow-hidden',
      'leading-none',
      'z-20',
      'pointer-events-none',
      'h-[60px]',
      'md:h-[120px]',
      'lg:h-[150px]'
    );

    this.innerHTML = template.replaceAll('{{color}}', color);
  }
}

customElements.define('moving-waves', MovingWaves);