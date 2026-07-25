import Countdown from "@/components/Countdown";
import FestaScene from "@/components/FestaScene";

export default function Home() {
  return (
    <main className="page">
      <FestaScene />

      <div className="content">
        <p className="eyebrow">Campina Grande · Paraíba</p>
        <h1 className="title">
          São João de
          <br />
          Campina Grande
        </h1>
        <p className="subtitle">
          Contagem regressiva pro maior São João do mundo
        </p>

        <Countdown />

        <p className="detail">
          24 de junho · no Parque do Povo
        </p>
      </div>

      <footer className="footer">
        <p>Criado por Ícaro Pinto Lira</p>
      </footer>
    </main>
  );
}
