import { Link, useNavigate } from "react-router-dom";
import "../css/about.css";
import FormBackground from "./FormBackground";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from 'react-helmet-async';

function About() {
  const navigate = useNavigate();
  const handleHomeNavigate = () => {
    navigate("/HomePage.jsx");
  };
  return (
    <>
    <HelmetProvider>
    <Helmet>
      <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/; font-src 'self' https://fonts.gstatic.com/; connect-src 'self' http://gc.kis.v2.scr.kaspersky-labs.com/;"
        />
      </Helmet>
    <div className="about-container">
      <div className="navbar">
        <Navbar />
      </div>
      <FormBackground />
      <div className="about-text-container">
        <h2 className="about-title">Chi siamo?</h2>
        <p className="about-text">
          Benvenuti nel nostro rifugio per animali! Siamo un gruppo di volontari
          appassionati e dediti al benessere degli animali abbandonati e in
          difficoltà. La nostra missione è trovare una casa amorevole per ogni
          animale che accogliamo, offrendo loro una seconda possibilità di
          vivere una vita felice e serena.
          <p>&nbsp;</p>
          La nostra storia inizia alcuni anni fa, quando un piccolo gruppo di
          amici, accomunati dall&#39;amore per gli animali, ha deciso di fare la
          differenza nella loro comunità. Inizialmente, ci siamo uniti per
          salvare e accudire animali abbandonati nelle nostre case. Con il
          passare del tempo, la nostra passione e il nostro impegno hanno
          attratto altri volontari e sostenitori, permettendoci di crescere e
          trasformarci in un&#39;organizzazione dedicata.
          <p>&nbsp;</p>
          Oggi, grazie alla generosità e al supporto di molte persone, siamo in
          grado di accogliere un numero sempre maggiore di animali e di offrire
          loro le cure necessarie. Collaboriamo con veterinari e
          comportamentalisti per assicurarci che siano in salute e pronti per
          essere adottati.
          <p>&nbsp;</p>
          Crediamo che ogni animale meriti amore e rispetto. Per questo, ci
          dedichiamo con tutto il cuore a creare connessioni significative tra
          animali e famiglie, promuovendo l&#39;adozione responsabile e
          consapevole.
          <p>&nbsp;</p>
          <p className="about-title  align-text">
            Grazie per visitare il nostro sito e per considerare l&#39;adozione
            come una scelta d&#39;amore. Insieme possiamo fare la differenza
            nella vita di molti animali.
          </p>
        </p>
        <div className="zampettando">
          <svg
            className="mission-zampetta2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
          </svg>
          <svg
            className="mission-zampetta2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
          </svg>
          <svg
            className="mission-zampetta2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
          </svg>
          <svg
            className="mission-zampetta2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
          </svg>
        </div>
      </div>
    </div>
    </HelmetProvider>
  </>
  );
}

export default About;
