import dividerConfig from './section-dividers.json';
import './SectionDividers.css';

export interface SectionDividerConfig {
  afterSection: string;
  id?: string;
  size: string;
  minSize: string;
  backgroundX?: string;
  backgroundY?: string;
  url: string;
}

const dimensionPattern = /^\d+(?:\.\d+)?(?:px|rem|%|vw|vh|vm)$/;
const positionPattern = /^(?:-?\d+(?:\.\d+)?(?:px|rem|%|vw|vh|vm)|left|center|right|top|bottom)$/;

function normalizeUnit(value: string) {
  return value.replace(/vm$/, 'vw');
}

export class SectionDividers extends HTMLElement {
  connectedCallback() {
    this.render(dividerConfig as SectionDividerConfig[]);
    this.remove();
  }

  private render(config: SectionDividerConfig[]) {
    config.forEach((divider) => {
      if (
        !dimensionPattern.test(divider.size)
        || !dimensionPattern.test(divider.minSize)
        || (divider.backgroundX && !positionPattern.test(divider.backgroundX))
        || (divider.backgroundY && !positionPattern.test(divider.backgroundY))
      ) return;

      const section = this.findSection(divider.afterSection, divider.id);
      if (!section) return;

      const element = document.createElement('section-divider');
      const image = document.createElement('div');
      image.className = 'section-divider-image';
      image.style.setProperty('--divider-size', normalizeUnit(divider.size));
      image.style.setProperty('--divider-min-size', normalizeUnit(divider.minSize));
      image.style.setProperty('--divider-x', normalizeUnit(divider.backgroundX ?? '50%'));
      image.style.setProperty('--divider-y', normalizeUnit(divider.backgroundY ?? '50%'));
      image.style.setProperty('--divider-image', `url('${divider.url}')`);
      image.setAttribute('role', 'img');
      image.setAttribute('aria-label', 'Imagen decorativa');

      element.append(image);
      section.insertAdjacentElement('afterend', element);
    });
  }

  private findSection(section: string, id?: string): HTMLElement | null {
    const normalizedSection = section.replace(/-section$/, '');
    return (id ? document.querySelector<HTMLElement>(`#${id}`) : null)
      ?? document.querySelector<HTMLElement>(section)
      ?? document.querySelector<HTMLElement>(`${normalizedSection}-section`)
      ?? document.querySelector<HTMLElement>(`#${normalizedSection}`);
  }
}

customElements.define('section-dividers', SectionDividers);
