import "../css/form.css";
import "../css/UploadPhoto.scss";
import FormBackground from "./FormBackground";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function NewAnnounce() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [razza, setRazza] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("razza", razza); // Assicurati che sia coerente con il backend
    formData.append("city", city); // Assicurati che sia coerente con il backend
    formData.append("description", description);
    if (file) {
      formData.append("image", file);
    }

    console.log("Submitting form with data:", formData);

    try {
      const response = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response from server:", response.data);
      alert('Il tuo annuncio è stato caricato con successo!');
    } catch (error) {
      console.error("Error uploading the image:", error);
      alert('Si è verificato un errore durante il caricamento.');
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/; font-src 'self' https://fonts.gstatic.com/; connect-src 'self' http://localhost:5173/; img-src 'self' data:;"
        />
      </Helmet>
      <div className="form-container">
        <FormBackground />
        <div className="navbarcontainer">
          <Navbar />
        </div>
        <div className="form_area">
          <p className="title">AGGIUNGI ANNUNCIO</p>
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <label className="sub_title" htmlFor="name">
                Nome
              </label>
              <input
                placeholder="Inserisci nome animale"
                className="form_style"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="age">
                Età
              </label>
              <input
                placeholder="età dell'animale"
                id="age"
                className="form_style"
                type="text" // Cambiato da email a text
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="razza">
                Razza
              </label>
              <input
                placeholder="inserisci razza dell'animale"
                id="razza"
                className="form_style"
                type="text"
                value={razza}
                onChange={(e) => setRazza(e.target.value)}
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="city">
                Luogo
              </label>
              <input
                placeholder="inserisci la città"
                id="city"
                className="form_style"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="description">
                Descrizione
              </label>
              <input
                placeholder="inserisci una breve descrizione"
                id="description"
                className="form_style"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="file-input">
                Foto
              </label>
              <section className="photowrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        {preview && (
                          <div className="preview-zone">
                            <div className="box box-solid">
                              <div className="box-header with-border">
                                <div>
                                  <b>Preview</b>
                                </div>
                                <div className="box-tools pull-right">
                                  <button
                                    type="button"
                                    className="btn btn-danger btn-xs remove-preview"
                                    onClick={() => { setPreview(null); setFile(null); setFileName(""); }}
                                  >
                                    <i className="fa fa-times"></i> Reset This
                                    Form
                                  </button>
                                </div>
                              </div>
                              <div className="box-body">
                                <img width="200" src={preview} alt="Preview" />
                                <p>{fileName}</p>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="dropzone-wrapper">
                          <div className="dropzone-desc">
                            <i className="glyphicon glyphicon-download-alt"></i>
                            <p>Clicca per caricare una immagine.</p>
                          </div>
                          <input
                            id="file-input"
                            type="file"
                            name="image"
                            className="dropzone"
                            onChange={handleFileChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="btn-area">
              <button type="submit" className="btn">AGGIUNGI</button>
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
