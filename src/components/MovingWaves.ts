class MovingWaves extends HTMLElement {
  connectedCallback() {
    const color = this.getAttribute('color') || 'currentColor';
    
    // Set base layout classes on the custom element wrapper itself
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
    
    this.innerHTML = `
      <!-- Wave 1 (Back Layer - Slowest) -->
      <svg class="absolute bottom-0 left-0 w-[200%] h-full animate-wave-slow opacity-25" viewBox="0 0 2400 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 70 Q 300 45, 600 70 T 1200 70 T 1800 70 T 2400 70 L 2400 120 L 0 120 Z" fill="${color}"></path>
      </svg>
      <!-- Wave 2 (Middle Layer - Medium Speed) -->
      <svg class="absolute bottom-0 left-0 w-[200%] h-full animate-wave-medium opacity-45" viewBox="0 0 2400 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 60 Q 300 35, 600 60 T 1200 60 T 1800 60 T 2400 60 L 2400 120 L 0 120 Z" fill="${color}"></path>
      </svg>
      <!-- Wave 3 (Front Layer - Fast) -->
      <svg class="absolute bottom-0 left-0 w-[200%] h-full animate-wave-fast" viewBox="0 0 2400 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 50 Q 300 20, 600 50 T 1200 50 T 1800 50 T 2400 50 L 2400 120 L 0 120 Z" fill="${color}"></path>
      </svg>
    `;
  }
}

customElements.define('moving-waves', MovingWaves);
