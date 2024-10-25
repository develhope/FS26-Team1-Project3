import "../css/HeroCaption.scss";
import { useNavigate } from "react-router-dom";

export default function HeroCaption() {
  const navigate = useNavigate();
  const handleNavigateAnnunci= () => navigate("/annunci")

  return (
    <div className="Captioncontent">
      <h2>
        Porta un amico a casa, <br />
        fai felice il tuo cuore!
      </h2>
      <p>
        Benvenuto nel nostro rifugio virtuale, dove cuori e zampe si incontrano.{" "}
        <br />
        Scopri gli adorabili amici pelosi in cerca di una famiglia. <br />
        Ogni adozione salva una vita e crea un legame speciale. <br />
        Entra nel nostro mondo e scopri il potere trasformante dell'amore.
      </p>
      <div className="buttons">
        <button className="btn-primary" onClick={handleNavigateAnnunci}>Guarda i nostri annunci</button>
      </div>
    </div>
  );
}
