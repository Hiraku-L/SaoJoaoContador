"use client";

import { useEffect, useState } from "react";
import { getNextSaoJoao, getTimeLeft, type TimeLeft } from "@/lib/countdown";

const UNITS: Array<{ key: keyof Omit<TimeLeft, "totalMs">; label: string }> = [
  { key: "days", label: "dias" },
  { key: "hours", label: "horas" },
  { key: "minutes", label: "minutos" },
  { key: "seconds", label: "segundos" },
];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const target = getNextSaoJoao(now);
      setTimeLeft(getTimeLeft(now, target));
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const isLive = timeLeft !== null && timeLeft.totalMs === 0;

  return (
    <div className="garland-wrap">
      <div className="garland-rope" aria-hidden="true" />

      {!timeLeft ? (
        <ul className="flag-row" aria-hidden="true">
          {UNITS.map((u, i) => (
            <li key={u.key} className={`flag flag-c${i}`} style={{ ["--i" as string]: i }}>
              <span className="flag-number">--</span>
              <span className="flag-label">{u.label}</span>
            </li>
          ))}
        </ul>
      ) : isLive ? (
        <p className="live-banner" role="status">
          🔥 A fogueira já tá acesa — chegou o São João de Campina Grande!
        </p>
      ) : (
        <ul className="flag-row" role="timer" aria-live="off">
          {UNITS.map((u, i) => (
            <li key={u.key} className={`flag flag-c${i}`} style={{ ["--i" as string]: i }}>
              <span className="flag-number">{pad(timeLeft[u.key])}</span>
              <span className="flag-label">{u.label}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Resumo para leitores de tela, sem o ruído de atualizar a cada segundo */}
      <p className="sr-only" aria-live="polite">
        {timeLeft && !isLive
          ? `Faltam ${timeLeft.days} dias e ${timeLeft.hours} horas para o São João de Campina Grande.`
          : isLive
            ? "Chegou o São João de Campina Grande."
            : "Calculando a contagem regressiva."}
      </p>
    </div>
  );
}
