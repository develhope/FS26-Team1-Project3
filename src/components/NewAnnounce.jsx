import "../css/form.css";
import FormBackground from "./FormBackground";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from 'react-helmet-async';
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import UploadPhoto from "./UploadPhoto";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [locatio , setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const navigate = useNavigate();

  return (
    <HelmetProvider>
      <Helmet>
      <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/; font-src 'self' https://fonts.gstatic.com/; connect-src 'self' http://gc.kis.v2.scr.kaspersky-labs.com/;"
        />
      </Helmet>
    <div className="form-container">
      <FormBackground />
      <div className="navbarcontainer">
        <Navbar/>
      </div>
      <div className="form_area">
        <p className="title">AGGIUNGI ANNUNCIO</p>
        <form action="">
          <div className="form_group">
            <label className="sub_title" htmlFor="name">
              Nome
            </label>
            <input
              placeholder="Inserisci nome animale"
              className="form_style"
              type="text"
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="email">
              Eta
            </label>
            <input
              placeholder="eta dell'animale"
              id="email"
              className="form_style"
              type="email"
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="password">
              Razza
            </label>
            <input
              placeholder="inserisci razza dell'animale"
              id="password"
              className="form_style"
              type="password"
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="password">
              Luogo
            </label>
            <input
              placeholder="inserisci la tua password"
              id="password"
              className="form_style"
              type="password"
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="password">
              Descrizione
            </label>
            <input
              placeholder="inserisci una breve descrizione"
              id="password"
              className="form_style"
              type="password"
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="password">
              Foto
            </label>
            <UploadPhoto/>
          </div>
          <div className="btn-area">
            <button className="btn">AGGIUNGI</button>
            <p>
              Non hai un Account?{" "}
              <a className="link" href="/iscriviti">
                Iscriviti qua!
              </a>
            </p>
            <a className="link" href=""></a>
          </div>
          <a className="link" href=""></a>
        </form>
      </div>
      <a className="link" href=""></a>
    </div>
    </HelmetProvider>
  );
}
