import FormBackground from "./FormBackground";
import Navbar from "./Navbar";
import "../css/Privacy.scss";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from 'react-helmet-async';

export default function Privacy() {
  return (
    <HelmetProvider>
            <Helmet>
      <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/; font-src 'self' https://fonts.gstatic.com/; connect-src 'self' http://gc.kis.v2.scr.kaspersky-labs.com/;"
        />
      </Helmet>
    <div className="containerprivacy">
      <FormBackground />
      <Navbar />
      <div className="caption">
        <h1>Politiche sulla Privacy</h1>
        <p>
         1. Introduzione La presente politica sulla
          privacy descrive come raccogliamo, utilizziamo e proteggiamo i dati
          personali degli utenti del nostro sito web dedicato all'adozione di
          animali. La protezione della tua privacy è di fondamentale importanza
          per noi, e ci impegniamo a trattare i tuoi dati personali con la
          massima riservatezza e sicurezza. <br /> 2. Raccolta dei Dati Personali
          Raccogliamo i tuoi dati personali in diverse circostanze, tra cui: *
          Quando visiti il nostro sito web * Quando ti registri per creare un
          account * Quando compili un modulo di adozione * Quando ci contatti
          per assistenza o per fare una donazione I dati raccolti possono
          includere il tuo nome, indirizzo email, indirizzo postale, numero di
          telefono, informazioni sull'abitazione e altre informazioni necessarie
          per valutare la tua idoneità all'adozione di un animale. <br /> 3. Utilizzo
          dei Dati Personali I tuoi dati personali vengono utilizzati per: *
          Gestire e facilitare il processo di adozione degli animali *
          Verificare la tua idoneità come adottante * Fornire informazioni e
          aggiornamenti sugli animali disponibili per l'adozione * Rispondere
          alle tue richieste di assistenza * Inviarti comunicazioni relative al
          nostro servizio, se hai acconsentito a riceverle <br /> 4. Condivisione dei
          Dati Personali Non vendiamo, scambiamo o altrimenti trasferiamo a
          terzi i tuoi dati personali senza il tuo consenso, salvo nei seguenti
          casi: * Fornitori di servizi di fiducia che ci assistono nel gestire
          il nostro sito web e le nostre attività, a patto che accettino di
          mantenere queste informazioni riservate. * Quando richiesto dalla
          legge o per proteggere i nostri diritti legali. * Con rifugi e
          organizzazioni partner coinvolti nel processo di adozione. <br /> 5.
          Protezione dei Dati Personali Implementiamo una serie di misure di
          sicurezza per proteggere i tuoi dati personali. Queste includono: *
          L'uso di tecnologie di crittografia per proteggere i dati durante la
          trasmissione * L'implementazione di firewall e sistemi di protezione
          dei dati * La limitazione dell'accesso ai dati personali solo al
          personale autorizzato. <br /> 6. Diritti dell'Utente Hai il diritto di
          accedere, rettificare, cancellare e limitare il trattamento dei tuoi
          dati personali. Puoi esercitare questi diritti contattandoci tramite
          le informazioni fornite sul nostro sito web. <br /> 7. Modifiche alla
          Politica sulla Privacy Potremmo aggiornare periodicamente questa
          politica sulla privacy. Ti invitiamo a consultarla regolarmente per
          rimanere informato su come proteggiamo i tuoi dati. <br /> 8. Contatti Per
          qualsiasi domanda o richiesta relativa alla nostra politica sulla
          privacy, puoi contattarci all'indirizzo email indicato sul nostro sito
          web. <br />
          Data dell'ultimo aggiornamento: 11/07/2024
        </p>
      </div>
    </div>
    </HelmetProvider>
  );
}
