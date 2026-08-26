class ChurchSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="place" class="w-full bg-neutral-50 text-neutral-800 py-20 px-6 md:px-12 flex flex-col items-center">
        <div class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <h2 class="text-3xl md:text-4xl tracking-[0.2em] uppercase font-light text-neutral-500">Iglesia</h2>

            <p class="font-wedding text-5xl md:text-6xl text-amber-700/80 leading-none">Templo De San Antonio De Padua</p>

            <div class="w-16 h-0.5 bg-amber-700/30 my-2"></div>

            <div class="space-y-4 max-w-md">
              <div class="flex items-start justify-center lg:justify-start space-x-3 text-left">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-amber-700 mt-1 shrink-0">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <div>
                  <h4 class="font-semibold text-neutral-900 tracking-wide">Dirección</h4>
                  <p class="text-neutral-600 mt-1">Angela Peralta 16, Centro, 76000 Santiago de Querétaro, Qro.</p>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 mt-6 w-full justify-center lg:justify-start">
              <a href="https://maps.app.goo.gl/kucTdvJhxySuqCFt7" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center space-x-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium px-6 py-3 rounded-full transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm">
                <img src="/assets/place/google_logo.svg" alt="Google Logo" class="w-4 h-4 object-contain" />
                <span>Google Maps</span>
              </a>
              <a href="https://maps.apple/p/6pqbndJpPuugHc" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center space-x-2 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 font-medium px-6 py-3 rounded-full transition duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 text-sm">
                <img src="/assets/place/apple_logo.svg" alt="Apple Logo" class="w-4 h-4 object-contain" />
                <span>Maps</span>
              </a>
            </div>
          </div>

          <div class="relative w-full aspect-video lg:aspect-square h-75 sm:h-100 lg:h-112.5 rounded-2xl overflow-hidden shadow-2xl border border-neutral-100 group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.8397715226165!2d-100.394344125297!3d20.594600002549882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b2bd3750e2d%3A0xbe55535775fc450!2sTemplo%20De%20San%20Antonio%20De%20Padua!5e0!3m2!1ses!2smx!4v1787715047179!5m2!1ses!2smx"
              class="absolute inset-0 w-full h-full border-0 grayscale-20 hover:grayscale-0 transition-all duration-700"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('church-section', ChurchSection);
