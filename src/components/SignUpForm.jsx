import "../css/form.css";
import FormBackground from "./FormBackground";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/iscriviti", {
        name,
        email,
        phone,
        password,
      });
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      setError("Registrazione fallita. Riprova.");
      console.error(error);
    }
  }

  return (
    <div className="form-container">
      <FormBackground />
      <div className="navbarcontainer">
        <Navbar />
      </div>
      <div className="form_area">
        <p className="title">ISCRIVITI</p>
        <form onSubmit={submit}>
          {error && <p className="error-message">{error}</p>}
          <div className="form_group">
            <label className="sub_title" htmlFor="name">
              Nome
            </label>
            <input
              placeholder="Inserisci nome completo"
              className="form_style"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="email">
              Email
            </label>
            <input
              placeholder="inserisci e-mail"
              id="email"
              className="form_style"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="phone">
              Numero di Telefono
            </label>
            <input
              placeholder="inserisci il tuo numero"
              id="phone"
              className="form_style"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="password">
              Password
            </label>
            <input
              placeholder="inserisci la tua password"
              id="password"
              className="form_style"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="btn-area">
            <button type="submit" className="btn">
              ISCRIVITI
            </button>
            <p>
              Hai già un account?{" "}
              <Link to="/login" className="link">
                Entra qua!
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
