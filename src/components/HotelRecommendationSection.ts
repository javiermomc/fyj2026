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
  background: 'bg-neutral-50' | 'bg-white';
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
    if (!this.config) {
      return;
    }

    const { recommendations, title, subtitle, background } = this.config;

    this.innerHTML = `
      <section class="w-full ${background} text-neutral-800 py-20 px-6 md:px-12 flex flex-col items-center">
        <div class="max-w-6xl w-full">
          <div class="text-center mb-12">
            <p class="text-sm md:text-base tracking-[0.3em] uppercase font-light text-neutral-500">${subtitle}</p>
            <h2 class="mt-4 font-wedding text-5xl md:text-6xl text-amber-700/80">${title}</h2>
            <div class="mx-auto mt-6 w-16 h-0.5 bg-amber-700/30"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${recommendations.map((recommendation) => `
              <article class="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm">
                <div class="h-40 bg-cover bg-center" style="background-image: url('${recommendation.backgroundUrl}')"></div>
                <div class="p-6">
                  <h3 class="text-xl font-semibold text-neutral-900">${recommendation.name}</h3>
                  <p class="mt-2 h-20 overflow-hidden text-neutral-600 leading-relaxed">${recommendation.description}</p>
                  <div class="mt-5 flex flex-col sm:flex-row gap-3">
                    <a href="${recommendation.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center space-x-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium px-5 py-3 rounded-full transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm">
                      <img src="/assets/place/google_logo.svg" alt="Google Logo" class="w-4 h-4 object-contain" />
                      <span>Google Maps</span>
                    </a>
                    <a href="${recommendation.appleMapsUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center space-x-2 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 font-medium px-5 py-3 rounded-full transition duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 text-sm">
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

customElements.define('recommendation-section', RecommendationSection);
