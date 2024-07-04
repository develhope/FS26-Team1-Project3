import "../css/button.css";

export default function MoreArticlesBtn() {
  return (
    <button
      className="btnaltriannunci"
      onClick={() => (window.location.href = "https://it.virbac.com/")}
    >
      Leggi gli Articoli
    </button>
  );
}
