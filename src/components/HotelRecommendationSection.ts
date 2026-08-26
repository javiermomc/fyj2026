const hotelRecommendations = [
  {
    name: 'Real de Minas',
    description: 'A 10 minutos del salón, ideal para una estancia tranquila y cómoda.',
    backgroundUrl: '/assets/hotels/real-de-minas.jpg',
    googleMapsUrl: 'https://maps.app.goo.gl/ABeQxaRFEQwgJL9x5',
    appleMapsUrl: 'https://maps.apple/p/~owo3.NWDrAz3r',
  },
  {
    name: 'Plaza Camelinas',
    description: 'A 10min de la Iglesia, A 15min del salón',
    backgroundUrl: '/assets/hotels/plaza-camelinas.jpg',
    googleMapsUrl: 'https://maps.app.goo.gl/tRqRwR5J9wesazdx8',
    appleMapsUrl: 'https://maps.apple/p/t0qufBIrsNC0eb',
  },
  {
    name: 'Flamingo Inn',
    description: 'Excelente opción para quienes buscan comodidad, seguridad y buen servicio.',
    backgroundUrl: '/assets/hotels/flamingo-inn.jpg',
    googleMapsUrl: 'https://maps.app.goo.gl/6MAaGhGkxyjNfAqF8',
    appleMapsUrl: 'https://maps.apple/p/F9HChcPP0xf4Dp',
  },
];

class HotelRecommendationSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="hotels" class="w-full bg-white text-neutral-800 py-20 px-6 md:px-12 flex flex-col items-center">
        <div class="max-w-6xl w-full">
          <div class="text-center mb-12">
            <p class="text-sm md:text-base tracking-[0.3em] uppercase font-light text-neutral-500">Hospedaje</p>
            <h2 class="mt-4 font-wedding text-5xl md:text-6xl text-amber-700/80">Recomendación hotelera</h2>
            <div class="mx-auto mt-6 w-16 h-0.5 bg-amber-700/30"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${hotelRecommendations.map((hotel) => `
              <article class="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm">
                <div class="h-40 bg-cover bg-center" style="background-image: url('${hotel.backgroundUrl}')"></div>
                <div class="p-6">
                  <h3 class="text-xl font-semibold text-neutral-900">${hotel.name}</h3>
                  <p class="mt-2 h-20 overflow-hidden text-neutral-600 leading-relaxed">${hotel.description}</p>
                  <div class="mt-5 flex flex-col sm:flex-row gap-3">
                    <a href="${hotel.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center space-x-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium px-5 py-3 rounded-full transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm">
                      <img src="/assets/place/google_logo.svg" alt="Google Logo" class="w-4 h-4 object-contain" />
                      <span>Google Maps</span>
                    </a>
                    <a href="${hotel.appleMapsUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center space-x-2 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 font-medium px-5 py-3 rounded-full transition duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 text-sm">
                      <img src="/assets/place/apple_logo.svg" alt="Apple Logo" class="w-4 h-4 object-contain" />
                      <span>Maps</span>
                    </a>
                  </div>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hotel-recommendation-section', HotelRecommendationSection);
