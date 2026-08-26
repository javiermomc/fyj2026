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

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article class="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="inline-flex items-center">
                <img src="/assets/gift/liverpool.png" alt="Liverpool" class="rounded-xl h-24 w-24 object-contain" />
                <h3 class="ml-2 text-3xl font-semibold text-neutral-900">Liverpool</h3>
              </div>
              <p class="my-3 text-neutral-600 text-lg leading-relaxed">
                Su presencia es nuestro mejor regalo; si desean tener un detalle adicional, les estaremos muy agradecidos.<br>
                Número de evento: 60008329
              </p>
              <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/60008329" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 rounded-full bg-[#D40086] px-5 py-3 text-sm font-medium text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#c9005c] hover:shadow-lg">
                <span>Mesa de regalos</span>
                <span aria-hidden="true" class="h-4 w-4 bg-current mask-no-repeat mask-center mask-contain [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] [-webkit-mask-size:contain]" style="mask-image: url('/assets/icons/link.svg'); -webkit-mask-image: url('/assets/icons/link.svg');"></span>
              </a>
            </article>

            <article class="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="inline-flex items-center">
                <img src="/assets/gift/palacio-de-hierro.png" alt="Palacio de Hierro" class="rounded-xl h-24 w-24 object-contain" />
                <h3 class="ml-2 text-3xl font-semibold text-neutral-900">Palacio de Hierro</h3>
              </div>
              <p class="my-3 text-neutral-600 text-lg leading-relaxed">
                El mejor obsequio es contar con su compañía. Cualquier muestra de afecto será recibida con profunda gratitud.<br>
                Número de evento: 5002240
              </p>
              <a href="https://www.elpalaciodehierro.com/listaregalos#/event/5002240" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFDE21] px-5 py-3 text-sm font-medium text-black shadow-sm ring-1 ring-inset ring-[#d4b900] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e6c81e] hover:shadow-md">
                <span>Mesa de regalos</span>
                <span aria-hidden="true" class="h-4 w-4 bg-current mask-no-repeat mask-center mask-contain [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] [-webkit-mask-size:contain]" style="mask-image: url('/assets/icons/link.svg'); -webkit-mask-image: url('/assets/icons/link.svg');"></span>
              </a>
            </article>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('gift-registry-section', GiftRegistrySection);
