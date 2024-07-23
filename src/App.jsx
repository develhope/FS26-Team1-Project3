import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm.jsx";
import NewAnnounce from "./components/NewAnnounce.jsx";
import About from "./components/About.jsx";
import Dashboard from "./components/Dashboard.jsx";
import OtherSectionCard from "./components/OtherSectionCard.jsx";
import Privacy from "./components/Privacy.jsx";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
      <meta
          httpEquiv="Content-Security-Policy"
          content="
            default-src 'self';
            img-src 'self' data: https://assets.annuncianimali.it https://animaliadozionetoscana.wordpress.com https://www.rescuebouledoguefranceseitalia.it https://i.pinimg.com https://manualstech.ams3.cdn.digitaloceanspaces.com https://citynews-trevisotoday.stgy.ovh https://www.animaleamico.com https://lh6.googleusercontent.com;
            style-src 'self' 'unsafe-inline' https://fonts.googleapis.com http://gc.kis.v2.scr.kaspersky-labs.com;
            font-src 'self' https://fonts.gstatic.com;
            connect-src 'self' http://gc.kis.v2.scr.kaspersky-labs.com;
            frame-src 'self';
            script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
          "
        />
        <title>FurFind</title>
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/iscriviti" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/annuncio" element={<NewAnnounce />} />
          <Route path="/about" element={<About />} />
          <Route path="/annunci" element={<OtherSectionCard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;