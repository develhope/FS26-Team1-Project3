import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm.jsx";
import NewAnnounce from "./components/NewAnnounce.jsx";
import About from "./components/About.jsx";
import Dashboard from "./components/Dashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/iscriviti" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/annuncio" element={<NewAnnounce />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
