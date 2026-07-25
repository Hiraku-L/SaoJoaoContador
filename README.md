# São João de Campina Grande — Contagem Regressiva

Site em Next.js (App Router + TypeScript + Tailwind CSS v4) com um contador de
dias, horas, minutos e segundos até o São João de Campina Grande (24 de
junho), com toda a temática visual do Maior São João do Mundo: garland de
bandeirinhas, céu estrelado, fogueira e mandacarus.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura

- `src/lib/countdown.ts` — cálculo da próxima data de 24/06 (fuso
  America/Recife, UTC-3, sem horário de verão) e o tempo restante.
- `src/components/Countdown.tsx` — componente client que atualiza a contagem
  a cada segundo e renderiza os "flags" (dias/horas/min/seg).
- `src/components/FestaScene.tsx` — cenário decorativo em SVG: garland de
  bandeirinhas no topo, estrelas, fogueira e mandacarus.
- `src/app/globals.css` — paleta de cores, tipografia e animações (respeitam
  `prefers-reduced-motion`).

As fontes (Alfa Slab One e Inter) são auto-hospedadas via `@fontsource`, sem
requisições externas em tempo de execução.
