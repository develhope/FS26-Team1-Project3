import ArticleSectionCard from "./ArticleSectionCard";
import DynamicBackground from "./DynamicBackground";
import "../css/articleSection.css";
import MoreArticlesBtn from "./MoreArticlesBtn";

export default function ArticleSection() {
  return (
    <div className="article-section-wrapper">
      <DynamicBackground />
      <div className="article-section-container">
        <div className="txt-wrapper">
          <div className="txt-container">
            <h2 className="section-title">
              Consigli per la Cura dei Tuoi Amici a Quattro Zampe
            </h2>
            <p className="section-description">
              Scopri i migliori suggerimenti e pratiche per mantenere i tuoi
              animali domestici felici e in salute. Dal cibo giusto alle
              attività quotidiane, abbiamo tutto ciò di cui hai bisogno per
              garantire il benessere dei tuoi amati compagni.
            </p>
          </div>
        </div>
        <div className="card-container">
          <ArticleSectionCard
            img="https://it.virbac.com/files/live/sites/virbac-it/files/Blog/nutribound%20articolo%201.jpg"
            title="Come identificare i segni della disidratazione negli animali domestici"
            desc="In questo articolo troverai alcuni consigli su come aiutare il tuo amico a quattro zampe nelle stagioni piu calde."
            url="https://it.virbac.com/consigli/Nutribound-disidratazione-cani-e-gatti"
          />
          <ArticleSectionCard
            img="https://img.freepik.com/premium-photo/girl-combs-hair-catthe-girl-strokes-cat-s-head_650650-3509.jpg"
            title="Come ci si prende cura della cute e del pelo del gatto?"
            desc="Quali sono i segnali di allarme che ci aiutano e riconoscere una cattiva salute partendo dal pelo del gatto?"
            url="https://it.virbac.com/tutte-le-patologie/come-ci-si-prende-cura-della-cute-e-del-pelo-del-gatto"
          />
          <ArticleSectionCard
            img="https://spca.bc.ca/wp-content/uploads/2023/06/happy-samoyed-dog-outdoors-in-summer-field.jpg"
            title="Come si applica un antiparassitario spot-on?"
            desc="Come si applica un antiparassitario spot-on?"
            url="https://it.virbac.com/tutti-i-consigli/prevenzione-con-spot-on"
          />
        </div>
      </div>
      <div className="article-section-container thin-row">
        <MoreArticlesBtn />
      </div>
    </div>
  );
}
