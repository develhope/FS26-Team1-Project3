import '../css/form.css';

export default function LoginForm() {
  return (
    <div className="form-container">
    <div className="form_area">
        <p className="title">LOG IN</p>
        <form action="">
            <div className="form_group">
                <label className="sub_title" htmlFor="name">Dati di accesso</label>
                <input placeholder="Inserisci nome o e-mail" className="form_style" type="text"/>
            </div>
            <div className="form_group">
                <label className="sub_title" htmlFor="password">Password</label>
                <input placeholder="inserisci la tua password" id="password" className="form_style" type="password"/>
            </div>
            <div className='btn-area'>
                <button className="btn">ACCEDI</button>
                <p>Non hai un Account? <a className="link" href="">Iscriviti qua!</a></p><a className="link" href="">
            </a></div><a className="link" href="">
        
    </a></form></div><a className="link" href="">
</a></div>
  )
 
}