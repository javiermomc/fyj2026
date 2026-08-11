class GiftRegistrySection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="gifts" class="w-full bg-neutral-50 text-neutral-800 py-20 px-6 md:px-12 flex flex-col items-center">
        <div class="max-w-6xl w-full">
          <div class="text-center mb-12">
            <p class="text-sm md:text-base tracking-[0.3em] uppercase font-light text-neutral-500">Agradecimiento</p>
            <h2 class="mt-4 font-wedding text-5xl md:text-6xl text-amber-700/80">Mesa de regalos</h2>
            <div class="mx-auto mt-6 w-16 h-0.5 bg-amber-700/30"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article class="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xl">🏡</div>
              <h3 class="text-xl font-semibold text-neutral-900">Hogar</h3>
              <p class="mt-3 text-neutral-600 leading-relaxed">
                Si deseas ayudarnos a crear nuestro nuevo hogar, puedes contribuir a artículos para la casa y detalles cotidianos.
              </p>
            </article>

            <article class="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xl">💍</div>
              <h3 class="text-xl font-semibold text-neutral-900">Luna de miel</h3>
              <p class="mt-3 text-neutral-600 leading-relaxed">
                Tu apoyo también nos acompañará en este nuevo comienzo con una escapada especial para celebrar nuestro inicio como familia.
              </p>
            </article>

            <article class="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xl">🎁</div>
              <h3 class="text-xl font-semibold text-neutral-900">Contribución</h3>
              <p class="mt-3 text-neutral-600 leading-relaxed">
                Si prefieres un regalo en efectivo, lo agradecemos mucho y lo destinaremos a nuestro próximo proyecto juntos.
              </p>
            </article>
          </div>

          <div class="mt-10 flex justify-center">
            <a href="#" class="inline-flex items-center justify-center rounded-full bg-neutral-900 px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] text-white transition hover:bg-neutral-800">
              Ver lista
            </a>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('gift-registry-section', GiftRegistrySection);
