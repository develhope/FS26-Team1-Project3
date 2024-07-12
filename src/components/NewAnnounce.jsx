import "../css/form.css";
import FormBackground from "./FormBackground";
import Navbar from "./Navbar";

export default function LoginForm() {
  return (
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
            <input
              placeholder="Aggiungi una foto"
              id="password"
              className="form_style"
              type="password"
            />
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
  );
}
