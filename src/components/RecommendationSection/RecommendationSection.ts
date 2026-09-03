import template from './RecommendationSection.html?raw';

export interface Recommendation {
  name: string;
  description: string;
  backgroundUrl: string;
  googleMapsUrl: string;
  appleMapsUrl: string;
}

export interface RecommendationSectionConfig {
  recommendations: Recommendation[];
  title: string;
  subtitle: string;
}

export class RecommendationSection extends HTMLElement {
  private config?: RecommendationSectionConfig;

  setConfig(config: RecommendationSectionConfig) {
    this.config = config;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  private render() {
    if (!this.config) return;
    const { recommendations, title, subtitle } = this.config;
    const cards = recommendations.map((recommendation) => `
      <article class="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm">
        <div class="h-40 bg-cover bg-center" style="background-image: url('${recommendation.backgroundUrl}')"></div>
        <div class="p-6"><h3 class="text-xl font-semibold text-neutral-900">${recommendation.name}</h3><p class="mt-2 h-20 overflow-hidden text-neutral-600 leading-relaxed">${recommendation.description}</p>
          <div class="mt-5 flex flex-col sm:flex-row gap-3"><a href="${recommendation.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center space-x-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium px-5 py-3 rounded-full transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm"><img src="/assets/place/google_logo.svg" alt="Google Logo" class="w-4 h-4 object-contain" /><span>Google Maps</span></a><a href="${recommendation.appleMapsUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center space-x-2 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 font-medium px-5 py-3 rounded-full transition duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 text-sm"><img src="/assets/place/apple_logo.svg" alt="Apple Logo" class="w-4 h-4 object-contain" /><span>Maps</span></a></div>
        </div>
      </article>
    `).join('');
    this.innerHTML = template.replace('{{subtitle}}', subtitle).replace('{{title}}', title).replace('{{recommendations}}', cards);
  }
}

customElements.define('recommendation-section', RecommendationSection);