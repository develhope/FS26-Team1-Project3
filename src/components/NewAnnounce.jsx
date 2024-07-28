import "../css/form.css";
import FormBackground from "./FormBackground";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function NewAnnounce() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('breed', breed);
    formData.append('location', location);
    formData.append('description', description);
    formData.append('type', type);
    formData.append('size', size);
    formData.append('ownerName', ownerName);
    formData.append('ownerPhone', ownerPhone);
    formData.append('ownerEmail', ownerEmail);
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 201) {
        setMessage('Annuncio aggiunto con successo!');
        navigate("/"); // Reindirizza l'utente dopo il caricamento
      } else {
        throw new Error('Errore durante il caricamento del file');
      }
    } catch (error) {
      setMessage(error.response ? error.response.data.error : 'Errore durante il caricamento del file');
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;"
        />
      </Helmet>

      <div className="form-container">
        <FormBackground />
        <Navbar />
        <div className="form_area">
          <p className="title">AGGIUNGI ANNUNCIO</p>
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <label className="sub_title" htmlFor="name">Nome</label>
              <input
                id="name"
                className="form_style"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome"
                required
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="age">Età</label>
              <input
                id="age"
                className="form_style"
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Età"
                required
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="breed">Razza</label>
              <input
                id="breed"
                className="form_style"
                type="text"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                placeholder="Razza"
                required
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="location">Luogo</label>
              <input
                id="location"
                className="form_style"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Luogo"
                required
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="description">Descrizione</label>
              <input
                id="description"
                className="form_style"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descrizione"
                required
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="type">Tipo</label>
              <input
                id="type"
                className="form_style"
                type="text"
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="Tipo"
                required
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="size">Taglia</label>
              <input
                id="size"
                className="form_style"
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                placeholder="Taglia"
                required
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="ownerName">Nome del Proprietario</label>
              <input
                id="ownerName"
                className="form_style"
                type="text"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                placeholder="Nome del Proprietario"
                required
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="ownerPhone">Telefono del Proprietario</label>
              <input
                id="ownerPhone"
                className="form_style"
                type="text"
                value={ownerPhone}
                onChange={(e) => setOwnerPhone(e.target.value)}
                placeholder="Telefono del Proprietario"
                required
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="ownerEmail">Email del Proprietario</label>
              <input
                id="ownerEmail"
                className="form_style"
                type="email"
                value={ownerEmail}
                onChange={(e) => setOwnerEmail(e.target.value)}
                placeholder="Email del Proprietario"
                required
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="image">Foto</label>
              <input
                id="image"
                className="form_style"
                type="file"
                onChange={handleFileChange}
                required
              />
            </div>
            <div className="btn-area">
              <button type="submit" className="btn">Aggiungi Annuncio</button>
            </div>
            {message && <p>{message}</p>}
          </form>
        </div>
      </div>
    </HelmetProvider>
  );
}
