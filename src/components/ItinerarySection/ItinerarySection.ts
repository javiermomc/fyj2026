import template from './ItinerarySection.html?raw';

const itineraryItems = [
  { time: '16:30', title: 'Recepción de invitados', description: 'Bienvenida, fotos y aperitivos mientras esperamos el inicio de la ceremonia.' },
  { time: '18:00', title: 'Ceremonia', description: 'Nosotros nos comprometemos y celebramos este momento con ustedes.' },
  { time: '20:00', title: 'Cena y brindis', description: 'Recorrido gastronómico, toasts y momentos de celebración con nuestros seres queridos.' },
  { time: '22:30', title: 'Fiesta y baile', description: 'La música, la pista y la alegría para cerrar la noche con un gran recuerdo.' },
];

class ItinerarySection extends HTMLElement {
  connectedCallback() {
    const items = itineraryItems.map((item) => `
      <div class="flex flex-col md:flex-row md:items-center rounded-3xl border border-neutral-200 bg-white p-5 md:p-6 shadow-sm">
        <div class="md:w-40 text-amber-700 text-sm uppercase tracking-[0.25em] mb-2 md:mb-0">${item.time}</div>
        <div class="flex-1"><h3 class="text-2xl font-light text-neutral-900">${item.title}</h3><p class="mt-2 text-neutral-600">${item.description}</p></div>
      </div>
    `).join('');
    this.innerHTML = template.replace('{{items}}', items);
  }
}

customElements.define('itinerary-section', ItinerarySection);