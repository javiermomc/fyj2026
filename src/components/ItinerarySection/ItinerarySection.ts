import template from './ItinerarySection.html?raw';

type ItineraryItem = {
  time: string;
  title: string;
  description: string;
};

const itineraryUrl = '/assets/itinerary/itinerary.json';

class ItinerarySection extends HTMLElement {
  connectedCallback() {
    void this.loadItinerary();
  }

  private async loadItinerary() {
    const response = await fetch(itineraryUrl);
    const itineraryItems: ItineraryItem[] = await response.json();
    const items = itineraryItems.map((item) => `
      <div class="flex flex-col md:flex-row md:items-center rounded-3xl border border-neutral-200 bg-white p-5 md:p-6 shadow-sm">
        <div class="flex items-center justify-center text-center md:w-40 text-rose-900 text-md tracking-[0.25em]">${item.time}</div>
        <div class="flex-1"><h3 class="text-2xl font-light text-neutral-900">${item.title}</h3><p class="mt-2 text-neutral-600">${item.description}</p></div>
      </div>
    `).join('');
    this.innerHTML = template.replace('{{items}}', items);
  }
}

customElements.define('itinerary-section', ItinerarySection);