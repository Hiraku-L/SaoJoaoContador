/**
 * Data-math para a contagem regressiva do São João de Campina Grande.
 *
 * O Dia de São João é sempre 24 de junho. Campina Grande fica no fuso
 * America/Recife, que não observa horário de verão desde 2019, então o
 * offset -03:00 é seguro para construir a data-alvo sem depender de
 * bibliotecas externas de fuso horário.
 */

export const SAO_JOAO_UTC_OFFSET = "-03:00";

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
};

/** Retorna a próxima ocorrência de 24 de junho às 00:00 (horário de Campina Grande). */
export function getNextSaoJoao(now: Date): Date {
  const year = now.getFullYear();
  const thisYear = new Date(`${year}-06-24T00:00:00${SAO_JOAO_UTC_OFFSET}`);

  if (thisYear.getTime() > now.getTime()) {
    return thisYear;
  }

  return new Date(`${year + 1}-06-24T00:00:00${SAO_JOAO_UTC_OFFSET}`);
}

export function getTimeLeft(now: Date, target: Date): TimeLeft {
  const totalMs = Math.max(0, target.getTime() - now.getTime());

  const days = Math.floor(totalMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor(totalMs / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(totalMs / (1000 * 60)) % 60;
  const seconds = Math.floor(totalMs / 1000) % 60;

  return { days, hours, minutes, seconds, totalMs };
}
