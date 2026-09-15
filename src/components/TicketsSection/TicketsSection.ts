import template from './TicketsSection.html?raw';
import { getTicketFromUrl } from '../../common/GuestList';

class TicketsSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
    void this.loadTicket();
  }

  private async loadTicket() {
    const contentElement = this.querySelector<HTMLElement>('[data-ticket-content]');
    const nameElement = this.querySelector<HTMLElement>('[data-ticket-name]');
    const messageElement = this.querySelector<HTMLElement>('[data-ticket-message]');

    if (!contentElement || !nameElement || !messageElement) {
      return;
    }

    try {
      const ticket = await getTicketFromUrl();

      if (!ticket) {
        return;
      }

      nameElement.textContent = ticket.name.trim() + ' ' + ticket.surnames.trim();
      messageElement.innerHTML = `
      Hemos reservado <br>
      <span class="font-bold text-rose-900 text-6xl">${ticket.guests} ${ticket.guests === '1' ? 'lugar' : 'lugares'}</span> <br>
      en su honor`;
      contentElement.hidden = false;
    } catch {
      return;
    }
  }
}

customElements.define('tickets-section', TicketsSection);