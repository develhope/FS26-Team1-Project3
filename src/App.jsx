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
          content="default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;"
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