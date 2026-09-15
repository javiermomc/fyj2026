import template from './ConfirmationSection.html?raw';
import { confirmationUrl, getHostFromUrl, getTicketFromUrl } from '../../common/GuestList';

type Confirmation = {
  host: 'Fer' | 'Javi';
  tag: string;
  confirmation: number;
};

class ConfirmationSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
    void this.loadConfirmation();
  }

  private async loadConfirmation() {
    const contentElement = this.querySelector<HTMLElement>('[data-confirmation-content]');
    const errorElement = this.querySelector<HTMLElement>('[data-confirmation-error]');
    const nameElement = this.querySelector<HTMLElement>('[data-confirmation-name]');
    const guestsElement = this.querySelector<HTMLInputElement>('[data-confirmation-guests]');
    const formElement = this.querySelector<HTMLFormElement>('[data-confirmation-form]');
    const cancelElement = this.querySelector<HTMLButtonElement>('[data-cancel-confirmation]');
    const statusElement = this.querySelector<HTMLElement>('[data-confirmation-status]');
    const validationElement = this.querySelector<HTMLElement>('[data-confirmation-guests-error]');
    const existingConfirmationElement = this.querySelector<HTMLElement>('[data-existing-confirmation]');
    const successElement = this.querySelector<HTMLElement>('[data-confirmation-success]');
    const successMessageElement = this.querySelector<HTMLElement>('[data-confirmation-success-message]');
    const editElement = this.querySelector<HTMLButtonElement>('[data-edit-confirmation]');

    if (!contentElement || !errorElement || !nameElement || !guestsElement || !formElement || !cancelElement || !statusElement || !validationElement || !existingConfirmationElement || !successElement || !successMessageElement || !editElement) {
      return;
    }

    try {
      const ticket = await getTicketFromUrl();
      if (!ticket) {
        errorElement.hidden = false;
        return;
      }

      const maximumGuests = Math.max(0, Number.parseInt(ticket.guests, 10) || 0);
      const existingConfirmation = Number(ticket.confirmation);
      const hasExistingConfirmation = ticket.confirmation.trim() !== ''
        && Number.isInteger(existingConfirmation)
        && existingConfirmation >= 0
        && existingConfirmation <= maximumGuests;
      nameElement.textContent = `${ticket.name.trim()} ${ticket.surnames.trim()}`;
      guestsElement.max = String(maximumGuests);
      guestsElement.value = hasExistingConfirmation ? String(existingConfirmation) : String(maximumGuests);
      existingConfirmationElement.hidden = !hasExistingConfirmation;
      contentElement.hidden = false;

      const actionElements = formElement.querySelectorAll<HTMLButtonElement>('button');
      const validateGuests = () => {
        const confirmation = Number(guestsElement.value);
        const isValid = guestsElement.value !== ''
          && Number.isInteger(confirmation)
          && confirmation >= 0
          && confirmation <= maximumGuests;

        validationElement.textContent = isValid
          ? ''
          : `Indica un número entero entre 0 y ${maximumGuests}.`;
        validationElement.hidden = isValid;
        actionElements.forEach((button) => { button.disabled = !isValid; });
        return isValid;
      };

      guestsElement.addEventListener('input', validateGuests);
      validateGuests();

      const sendConfirmation = async (confirmation: number) => {
        const payload: Confirmation = {
          host: getHostFromUrl(),
          tag: ticket.label,
          confirmation,
        };
        actionElements.forEach((button) => { button.disabled = true; });
        statusElement.textContent = 'Enviando confirmación...';

        try {
          const response = await fetch(confirmationUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload),
          });
          if (!response.ok) throw new Error('Unable to send confirmation');
          statusElement.textContent = confirmation === 0
            ? 'Hemos registrado que no podrás asistir.'
            : 'Hemos registrado tu confirmación. ¡Gracias!';
          successMessageElement.textContent = confirmation === 0
            ? 'Tu respuesta ha sido registrada.'
            : `Hemos registrado ${confirmation} ${confirmation === 1 ? 'lugar' : 'lugares'}.`;
          formElement.hidden = true;
          successElement.hidden = false;
        } catch {
          statusElement.textContent = 'No fue posible enviar la confirmación. Inténtalo nuevamente.';
        } finally {
          validateGuests();
        }
      };

      formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const confirmation = Number(guestsElement.value);
        if (validateGuests()) {
          void sendConfirmation(confirmation);
        }
      });
      cancelElement.addEventListener('click', () => {
        if (validateGuests()) void sendConfirmation(0);
      });
      editElement.addEventListener('click', () => {
        formElement.hidden = false;
        successElement.hidden = true;
        statusElement.textContent = '';
        validateGuests();
        guestsElement.focus();
      });
    } catch {
      errorElement.hidden = false;
    }
  }
}

customElements.define('confirmation-section', ConfirmationSection);