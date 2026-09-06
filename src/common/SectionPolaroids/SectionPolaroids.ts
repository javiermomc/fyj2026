import polaroidConfig from './section-polaroids.json';
import './SectionPolaroids.css';

export type PolaroidPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type PolaroidTilt = 'left' | 'right';

export interface SectionPolaroid {
  position: PolaroidPosition;
  tilt?: PolaroidTilt;
  margin: string;
  minMargin: string;
  size: string;
  minSize: string;
  footerSize: string;
  minFooterSize: string;
  imageX?: string;
  imageY?: string;
  url: string;
}

export interface SectionPolaroidConfig {
  section: string;
  imgs: SectionPolaroid[];
}

const validPositions: PolaroidPosition[] = [
  'top-right',
  'top-left',
  'bottom-right',
  'bottom-left',
];

const validTilts: PolaroidTilt[] = ['left', 'right'];

const rotations: Record<PolaroidPosition, string> = {
  'top-left': '-8deg',
  'top-right': '8deg',
  'bottom-left': '8deg',
  'bottom-right': '-8deg',
};

const tiltRotations: Record<PolaroidTilt, string> = {
  left: '-8deg',
  right: '8deg',
};

const marginPattern = /^-?\d+(?:\.\d+)?(?:px|rem|%|vw|vh)$/;
const sizePattern = /^\d+(?:\.\d+)?(?:px|rem|%|vw|vh|vm)$/;
const imagePositionPattern = /^(?:-?\d+(?:\.\d+)?(?:px|rem|%|vw|vh|vm)|left|center|right|top|bottom)$/;

function normalizeSize(size: string) {
  return size.replace(/vm$/, 'vw');
}

export class SectionPolaroids extends HTMLElement {
  connectedCallback() {
    this.render(polaroidConfig as SectionPolaroidConfig[]);
  }

  private render(config: SectionPolaroidConfig[]) {
    config.forEach((sectionConfig) => {
      const target = this.findSection(sectionConfig.section);
      if (!target || sectionConfig.imgs.length === 0) return;

      target.classList.add('section-polaroid-target');
      const createLayer = () => {
        const layer = document.createElement('div');
        layer.className = 'section-polaroid-layer';
        layer.setAttribute('aria-hidden', 'true');

        sectionConfig.imgs.forEach((imageConfig) => {
          if (
            !validPositions.includes(imageConfig.position)
            || (imageConfig.tilt && !validTilts.includes(imageConfig.tilt))
            || !marginPattern.test(imageConfig.margin)
            || !marginPattern.test(imageConfig.minMargin)
            || !sizePattern.test(imageConfig.size)
            || !sizePattern.test(imageConfig.minSize)
            || !sizePattern.test(imageConfig.footerSize)
            || !sizePattern.test(imageConfig.minFooterSize)
            || (imageConfig.imageX && !imagePositionPattern.test(imageConfig.imageX))
            || (imageConfig.imageY && !imagePositionPattern.test(imageConfig.imageY))
          ) return;

          const polaroid = document.createElement('figure');
          polaroid.className = 'section-polaroid';
          polaroid.dataset.position = imageConfig.position;
          polaroid.style.setProperty('--polaroid-margin', imageConfig.margin);
          polaroid.style.setProperty('--polaroid-min-margin', imageConfig.minMargin);
          polaroid.style.width = normalizeSize(imageConfig.size);
          polaroid.style.minWidth = normalizeSize(imageConfig.minSize);
          polaroid.style.setProperty('--polaroid-footer-size', normalizeSize(imageConfig.footerSize));
          polaroid.style.setProperty('--polaroid-min-footer-size', normalizeSize(imageConfig.minFooterSize));
          polaroid.style.setProperty(
            '--polaroid-rotation',
            imageConfig.tilt ? tiltRotations[imageConfig.tilt] : rotations[imageConfig.position],
          );

          const image = document.createElement('img');
          image.src = imageConfig.url;
          image.alt = '';
          image.loading = 'lazy';
          image.style.objectPosition = `${normalizeSize(imageConfig.imageX ?? '50%')} ${normalizeSize(imageConfig.imageY ?? '50%')}`;

          polaroid.append(image);
          layer.append(polaroid);
        });
        return layer;
      };

      const appendLayer = () => {
        if (!target.querySelector(':scope > .section-polaroid-layer')) {
          target.append(createLayer());
        }
      };

      appendLayer();
      new MutationObserver(appendLayer).observe(target, { childList: true });
    });

    this.remove();
  }

  private findSection(section: string): HTMLElement | null {
    const normalizedSection = section.replace(/-section$/, '');
    return document.querySelector<HTMLElement>(section)
      ?? document.querySelector<HTMLElement>(`${normalizedSection}-section`)
      ?? document.querySelector<HTMLElement>(`#${normalizedSection}`);
  }
}

customElements.define('section-polaroids', SectionPolaroids);
