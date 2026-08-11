class DressCodeSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="dress-code" class="w-full bg-neutral-100 text-neutral-800 py-20 px-6 md:px-12 flex flex-col items-center">
        <div class="max-w-5xl w-full rounded-[2rem] border border-neutral-200 bg-white p-8 md:p-12 shadow-sm">
          <div class="text-center mb-10">
            <p class="text-sm md:text-base tracking-[0.3em] uppercase font-light text-neutral-500">Código</p>
            <h2 class="mt-4 font-wedding text-5xl md:text-6xl text-amber-700/80">Código de vestimenta</h2>
            <div class="mx-auto mt-6 w-16 h-0.5 bg-amber-700/30"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div class="space-y-4">
              <div class="rounded-2xl bg-neutral-50 border border-neutral-200 p-5">
                <p class="text-sm uppercase tracking-[0.2em] text-neutral-500">Estilo sugerido</p>
                <h3 class="mt-2 text-3xl font-light text-neutral-900">Formal elegante</h3>
              </div>

              <p class="text-lg leading-relaxed text-neutral-600">
                Te invitamos a vestir con looks formales y elegantes, en tonos sobrios y sofisticados. Para las mujeres, vestidos largos o de coctel; para los hombres, traje o saco con corbata.
              </p>
            </div>

            <div class="rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-900 p-6 text-white">
              <p class="text-sm uppercase tracking-[0.25em] text-neutral-300">Paleta recomendada</p>
              <div class="mt-6 flex flex-wrap gap-3">
                <span class="h-12 w-12 rounded-full border border-white/30 bg-[#f5efe5]" title="Blanco crema"></span>
                <span class="h-12 w-12 rounded-full border border-white/30 bg-[#d6c3a5]" title="Beige dorado"></span>
                <span class="h-12 w-12 rounded-full border border-white/30 bg-[#b98a4d]" title="Oro suave"></span>
                <span class="h-12 w-12 rounded-full border border-white/30 bg-[#4b4b4b]" title="Gris oscuro"></span>
                <span class="h-12 w-12 rounded-full border border-white/30 bg-[#1f1f1f]" title="Negro elegante"></span>
              </div>
              <p class="mt-6 text-sm leading-relaxed text-neutral-200">
                Los colores tierra, blanco, beige, champagne y tonos neutros son perfectos para completar la estética del evento.
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('dress-code-section', DressCodeSection);
