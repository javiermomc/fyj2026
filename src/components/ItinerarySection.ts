class ItinerarySection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="itinerary" class="w-full bg-neutral-50 text-neutral-800 py-20 px-6 md:px-12 flex flex-col items-center">
        <div class="max-w-5xl w-full">
          <div class="text-center mb-12">
            <p class="text-sm md:text-base tracking-[0.3em] uppercase font-light text-neutral-500">Agenda</p>
            <h2 class="mt-4 font-wedding text-5xl md:text-6xl text-amber-700/80">Itinerario</h2>
            <div class="mx-auto mt-6 w-16 h-0.5 bg-amber-700/30"></div>
          </div>

          <div class="space-y-6">
            <div class="flex flex-col md:flex-row md:items-center rounded-3xl border border-neutral-200 bg-white p-5 md:p-6 shadow-sm">
              <div class="md:w-40 text-amber-700 text-sm uppercase tracking-[0.25em] mb-2 md:mb-0">16:30</div>
              <div class="flex-1">
                <h3 class="text-2xl font-light text-neutral-900">Recepción de invitados</h3>
                <p class="mt-2 text-neutral-600">Bienvenida, fotos y aperitivos mientras esperamos el inicio de la ceremonia.</p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:items-center rounded-3xl border border-neutral-200 bg-white p-5 md:p-6 shadow-sm">
              <div class="md:w-40 text-amber-700 text-sm uppercase tracking-[0.25em] mb-2 md:mb-0">18:00</div>
              <div class="flex-1">
                <h3 class="text-2xl font-light text-neutral-900">Ceremonia</h3>
                <p class="mt-2 text-neutral-600">Nosotros nos comprometemos y celebramos este momento con ustedes.</p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:items-center rounded-3xl border border-neutral-200 bg-white p-5 md:p-6 shadow-sm">
              <div class="md:w-40 text-amber-700 text-sm uppercase tracking-[0.25em] mb-2 md:mb-0">20:00</div>
              <div class="flex-1">
                <h3 class="text-2xl font-light text-neutral-900">Cena y brindis</h3>
                <p class="mt-2 text-neutral-600">Recorrido gastronómico, toasts y momentos de celebración con nuestros seres queridos.</p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:items-center rounded-3xl border border-neutral-200 bg-white p-5 md:p-6 shadow-sm">
              <div class="md:w-40 text-amber-700 text-sm uppercase tracking-[0.25em] mb-2 md:mb-0">22:30</div>
              <div class="flex-1">
                <h3 class="text-2xl font-light text-neutral-900">Fiesta y baile</h3>
                <p class="mt-2 text-neutral-600">La música, la pista y la alegría para cerrar la noche con un gran recuerdo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('itinerary-section', ItinerarySection);
