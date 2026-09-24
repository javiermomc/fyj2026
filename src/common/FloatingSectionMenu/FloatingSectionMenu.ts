import './FloatingSectionMenu.css';
import template from './FloatingSectionMenu.html?raw';

class FloatingSectionMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;

    const menu = this.querySelector('.floating-section-menu');
    const panel = this.querySelector('.floating-section-menu__panel');
    const toggle = this.querySelector('.floating-section-menu__toggle');
    const toggleIcon = toggle?.querySelector('.material-symbols-outlined');
    const items = this.querySelectorAll('.floating-section-menu__item');

    const closeMenu = () => {
      panel?.classList.remove('is-open');
      window.setTimeout(() => {
        menu?.classList.remove('is-open');
      }, 180);
      toggle?.setAttribute('aria-expanded', 'false');
      if (toggleIcon) {
        toggleIcon.textContent = 'menu';
      }
      toggle?.setAttribute('aria-label', 'Abrir menú');
    };

    const openMenu = () => {
      menu?.classList.add('is-open');
      window.setTimeout(() => {
        panel?.classList.add('is-open');
      }, 60);
      toggle?.setAttribute('aria-expanded', 'true');
      if (toggleIcon) {
        toggleIcon.textContent = 'close';
      }
      toggle?.setAttribute('aria-label', 'Cerrar menú');
    };

    toggle?.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = panel?.classList.contains('is-open');

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    items.forEach((item) => {
      item.addEventListener('click', () => {
        const selector = item.getAttribute('data-target');
        const target = selector ? document.querySelector(selector) : null;

        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        closeMenu();
      });
    });

    document.addEventListener('click', (event) => {
      if (!(event.target instanceof Node) || this.contains(event.target)) {
        return;
      }

      closeMenu();
    });
  }
}

customElements.define('floating-section-menu', FloatingSectionMenu);
