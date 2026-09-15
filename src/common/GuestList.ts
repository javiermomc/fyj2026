export type Ticket = {
  name: string;
  surnames: string;
  label: string;
  guests: string;
  confirmation: string;
};

export const confirmationUrl = 'https://script.google.com/macros/s/AKfycbyVYBCmZL-kKm1nRoL6tTO_ax-gzJzjpx7_SNOFrzWyU7jpD3_kPGtuDtkPvJYexc3t0w/exec';

const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSpmUBJwEM4gD_2ov7K3WXUjSMyd__tI7ObNeJkceiJnfw9R__avcaKAgkJRMb_U2BB0JCmeypfltmH/pub?gid=899378204&single=true&output=csv';

export function normalize(value: string) {
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
  const confirmationIndex = indexOf('Confirmación');

  return values
    .filter((row) => row.some((value) => value.length > 0))
    .map((row) => ({
      name: row[nameIndex] ?? '',
      surnames: row[surnamesIndex] ?? '',
      label: row[labelIndex] ?? '',
      guests: row[guestsIndex] ?? '',
      confirmation: row[confirmationIndex] ?? '',
    }));
}

let ticketsPromise: Promise<Ticket[]> | undefined;

export function getTickets() {
  ticketsPromise ??= fetch(csvUrl).then(async (response) => {
    if (!response.ok) throw new Error(`Unable to load ${csvUrl}`);
    return parseCsv(await response.text());
  });

  return ticketsPromise;
}

export function getTicketFromUrl() {
  const parameters = new URLSearchParams(window.location.search);

  return getTickets().then((tickets) => tickets.find((item) =>
    Array.from(parameters.keys()).some((parameter) => normalize(parameter) === normalize(item.label))
  ));
}

export function getHostFromUrl(): 'Fer' | 'Javi' {
  return normalize(new URLSearchParams(window.location.search).get('host') ?? '') === 'javi' ? 'Javi' : 'Fer';
}