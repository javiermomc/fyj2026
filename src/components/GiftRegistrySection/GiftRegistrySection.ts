import template from './GiftRegistrySection.html?raw';

const gifts = [
  { name: 'Liverpool', image: '/assets/gift/liverpool.png', description: 'Su presencia es nuestro mejor regalo; si desean tener un detalle adicional, les estaremos muy agradecidos.<br>Número de evento: 60008329', url: 'https://mesaderegalos.liverpool.com.mx/milistaderegalos/60008329', buttonClass: 'bg-[#D40086] text-white hover:bg-[#c9005c]' },
  { name: 'Palacio de Hierro', image: '/assets/gift/palacio-de-hierro.png', description: 'El mejor obsequio es contar con su compañía. Cualquier muestra de afecto será recibida con profunda gratitud.<br>Número de evento: 5002240', url: 'https://www.elpalaciodehierro.com/listaregalos#/event/5002240', buttonClass: 'bg-[#FFDE21] text-black ring-1 ring-inset ring-[#d4b900] hover:bg-[#e6c81e]' },
];

class GiftRegistrySection extends HTMLElement {
  connectedCallback() {
    const cards = gifts.map((gift) => `
      <article class="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div class="inline-flex items-center"><img src="${gift.image}" alt="${gift.name}" class="rounded-xl h-24 w-24 object-contain" /><h3 class="ml-2 text-3xl font-semibold text-neutral-900">${gift.name}</h3></div>
        <p class="my-3 text-neutral-600 text-lg leading-relaxed">${gift.description}</p>
        <a href="${gift.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 rounded-full ${gift.buttonClass} px-5 py-3 text-sm font-medium shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"><span>Mesa de regalos</span><span aria-hidden="true" class="h-4 w-4 bg-current mask-no-repeat mask-center mask-contain [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] [-webkit-mask-size:contain]" style="mask-image: url('/assets/icons/link.svg'); -webkit-mask-image: url('/assets/icons/link.svg');"></span></a>
      </article>
    `).join('');
    this.innerHTML = template.replace('{{gifts}}', cards);
  }
}

customElements.define('gift-registry-section', GiftRegistrySection);