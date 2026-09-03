import template from './TicketsSection.html?raw';

type Ticket = {
  name: string;
  surnames: string;
  label: string;
  guests: string;
};

const csvUrl = '/assets/tickets/tickets.csv';

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLocaleLowerCase();
}

function parseCsv(csv: string): Ticket[] {
  const rows = csv.match(/(?:^|\n)(?:"(?:[^"]|"")*"|[^,\n]*)?(?:,(?:"(?:[^"]|"")*"|[^,\n]*))*?(?=\n|$)/g) ?? [];
  const values = rows.map((row) => row.replace(/^\n/, '').split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map((value) =>
    value.trim().replace(/^"|"$/g, '').replace(/""/g, ''))
  );
  const headers = values.shift()?.map(normalize) ?? [];
  const indexOf = (header: string) => headers.indexOf(normalize(header));
  const nameIndex = indexOf('Nombre');
  const surnamesIndex = indexOf('Apellido(s)');
  const labelIndex = indexOf('Etiqueta');
  const guestsIndex = indexOf('Invitados');

  return values
    .filter((row) => row.some((value) => value.length > 0))
    .map((row) => ({
      name: row[nameIndex] ?? '',
      surnames: row[surnamesIndex] ?? '',
      label: row[labelIndex] ?? '',
      guests: row[guestsIndex] ?? '',
    }));
}

class TicketsSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
    this.hidden = true;
    void this.loadTicket();
  }

  private async loadTicket() {
    const nameElement = this.querySelector<HTMLElement>('[data-ticket-name]');
    const messageElement = this.querySelector<HTMLElement>('[data-ticket-message]');

    if (!nameElement || !messageElement) {
      return;
    }

    try {
      const response = await fetch(csvUrl);
      if (!response.ok) throw new Error(`Unable to load ${csvUrl}`);
      const parameters = new URLSearchParams(window.location.search);
      const ticket = parseCsv(await response.text()).find((item) =>
        Array.from(parameters.keys()).some((parameter) => normalize(parameter) === normalize(item.label))
      );

      if (!ticket) {
        return;
      }

      nameElement.textContent = `${ticket.name} ${ticket.surnames}`.trim();
      messageElement.textContent = `Hemos reservado ${ticket.guests} ${ticket.guests === '1' ? 'boleto' : 'boletos'} en su honor`;
      this.hidden = false;
    } catch {
      return;
    }
  }
}

customElements.define('tickets-section', TicketsSection);