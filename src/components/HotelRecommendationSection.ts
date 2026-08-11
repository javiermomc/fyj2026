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
            <article class="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm">
              <div class="h-40 bg-gradient-to-br from-neutral-200 to-neutral-300"></div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-neutral-900">Hotel Boutique El Sol</h3>
                <p class="mt-2 text-neutral-600">A 10 minutos del salón, ideal para una estancia tranquila y cómoda.</p>
                <p class="mt-4 text-sm uppercase tracking-[0.15em] text-amber-700">Desde $2,400 / noche</p>
              </div>
            </article>

            <article class="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm">
              <div class="h-40 bg-gradient-to-br from-stone-200 to-stone-300"></div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-neutral-900">Casa de Campo Vista Azul</h3>
                <p class="mt-2 text-neutral-600">Ambiente elegante, muy recomendado para invitados que viajan desde fuera de la ciudad.</p>
                <p class="mt-4 text-sm uppercase tracking-[0.15em] text-amber-700">Desde $3,100 / noche</p>
              </div>
            </article>

            <article class="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm">
              <div class="h-40 bg-gradient-to-br from-zinc-200 to-zinc-300"></div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-neutral-900">Residencial Mar de Flores</h3>
                <p class="mt-2 text-neutral-600">Excelente opción para quienes buscan comodidad, seguridad y buen servicio.</p>
                <p class="mt-4 text-sm uppercase tracking-[0.15em] text-amber-700">Desde $2,800 / noche</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hotel-recommendation-section', HotelRecommendationSection);
