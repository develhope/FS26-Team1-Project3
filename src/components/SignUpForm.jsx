import "../css/form.css";
import FormBackground from "./FormBackground";

export default function LoginForm() {
  return (
    <div className="form-container">
      <FormBackground />
      <div className="form_area">
        <p className="title">ISCRIVITI</p>
        <form action="">
          <div className="form_group">
            <label className="sub_title" htmlFor="name">
              Nome
            </label>
            <input
              placeholder="Inserisci nome completo"
              className="form_style"
              type="text"
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
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="password">
              Numero di Telefono
            </label>
            <input
              placeholder="inserisci il tuo numero"
              id="password"
              className="form_style"
              type="password"
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
            />
          </div>
          <div className="btn-area">
            <button className="btn">ISCRIVITI</button>
            <p>
              Hai gia un account?{" "}
              <a className="link" href="/login">
                Entra qua!
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
