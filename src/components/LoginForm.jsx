import "../css/form.css";
import FormBackground from "./FormBackground";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email, password
      }, {
        withCredentials: true, // necessario per inviare i cookie di sessione
      });

      if (response.status === 200) {
        navigate('/');
      }
    } catch (error) {
      setError('Accesso fallito. Riprova.');
      console.error(error);
    }
  }

  return (
    <div className="form-container">
      <FormBackground />
      <div className="form_area">
        <p className="title">ACCEDI</p>
        <form onSubmit={submit}>
          {error && <p className="error-message">{error}</p>}
          <div className="form_group">
            <label className="sub_title" htmlFor="email">
              Dati di accesso
            </label>
            <input
              placeholder="Inserisci qui la tua e-mail"
              id="email"
              className="form_style"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <button type="submit" className="btn">ACCEDI</button>
            <p>
              Non hai un Account?{" "}
              <Link to='/iscriviti' className="link">
                Iscriviti qua!
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
