import template from './LandingSection.html?raw';

const LANDING_GUIDE_STORAGE_KEY = 'landing-guide-complete';

class LandingSection extends HTMLElement {
  private initialTimer?: number;
  private bounceTimer?: number;
  private nextCycleTimer?: number;

  connectedCallback() {
    this.innerHTML = template;

    const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const isReload = navigationEntries.some((entry) => entry.type === 'reload');

    if (isReload) {
      sessionStorage.removeItem(LANDING_GUIDE_STORAGE_KEY);
    }

    if (sessionStorage.getItem(LANDING_GUIDE_STORAGE_KEY) === 'done') {
      return;
    }

    const cue = this.querySelector('.landing-scroll-cue');
    const nextSection = this.nextElementSibling as HTMLElement | null;

    if (!cue || !nextSection) {
      sessionStorage.setItem(LANDING_GUIDE_STORAGE_KEY, 'done');
      return;
    }

    const finishGuide = () => {
      if (this.initialTimer) {
        window.clearTimeout(this.initialTimer);
      }

      if (this.bounceTimer) {
        window.clearTimeout(this.bounceTimer);
      }

      if (this.nextCycleTimer) {
        window.clearTimeout(this.nextCycleTimer);
      }

      cue.classList.remove('landing-scroll-cue--active');
      sessionStorage.setItem(LANDING_GUIDE_STORAGE_KEY, 'done');
    };

    const handleScroll = () => {
      if (window.scrollY > 0 || document.documentElement.scrollTop > 0) {
        finishGuide();
        window.removeEventListener('scroll', handleScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);

    const startBounceSequence = (remainingRuns: number) => {
      const cueElement = cue as HTMLElement;

      cueElement.classList.remove('landing-scroll-cue--active');
      void cueElement.offsetWidth;
      cueElement.classList.add('landing-scroll-cue--active');

      this.bounceTimer = window.setTimeout(() => {
        cue.classList.remove('landing-scroll-cue--active');

        if (remainingRuns > 1) {
          this.nextCycleTimer = window.setTimeout(() => startBounceSequence(remainingRuns - 1), 6000);
          return;
        }

        this.nextCycleTimer = window.setTimeout(() => {
          if (window.scrollY === 0 && document.documentElement.scrollTop === 0) {
            nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }

          sessionStorage.setItem(LANDING_GUIDE_STORAGE_KEY, 'done');
          window.removeEventListener('scroll', handleScroll);
        }, 600);
      }, 1600);
    };

    this.initialTimer = window.setTimeout(() => {
      startBounceSequence(3);
    }, 10000);
  }

  disconnectedCallback() {
    if (this.initialTimer) {
      window.clearTimeout(this.initialTimer);
    }

    if (this.bounceTimer) {
      window.clearTimeout(this.bounceTimer);
    }

    if (this.nextCycleTimer) {
      window.clearTimeout(this.nextCycleTimer);
    }
  }
}

customElements.define('landing-section', LandingSection);