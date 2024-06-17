import './Footer.css'
import logo from '../assets/logo furfind white vertical.svg'
import twitter from '../assets/twitter-icon.svg'
import instagram from '../assets/instagram-icon.svg'
import facebook from '../assets/facebook-icon.svg'
import youtube from '../assets/youtube-icon.svg'



function Footer() {
    return(
        <div>
          <div className="footer-container">
             <div className="div-footer block-footer">
                  <div className='logoFooter'>
                     <img src={logo} alt="vertical logo" />
                  </div>
                 <div className='footer-list'>
                    <ul>
                      <li>Home</li>
                      <li>Chi siamo</li>
                      <li>Servizi</li>
                      <li>Carrello</li>
                      <li>Politica sulla privacy</li>
                   </ul>
                 </div>
                 <div className='social'> 
                   <div className='media'>
                     <img src={twitter} alt="twitter icon" />
                   </div>
                   <div className='media'>
                     <img src={instagram} alt="instagram icon" />
                   </div>
                   <div className='media'>
                     <img src={facebook} alt="facebook icon" />
                   </div>
                   <div className='media'>
                     <img src={youtube} alt="youtube icon" />
                   </div>
                 </div> 
                 <div className='copyright'>
                    <p>Le informazioni riguardanti gli animali adottabili presentati su Furfind sono fornite dalle persone che ne hanno assunto la cura. Furfind non effettua alcun controllo o verifica sull&#39;accuratezza di queste informazioni. Tutte queste informazioni devono essere verificate con il rifugio e/o la persona interessata e in particolare che l&#39;animale sia ancora disponibile per l&#39;adozione.Lo stato di salute e il comportamento degli animali presentati, trovati o adottati tramite Furfind sono sotto la piena responsabilità dell&#39;organismo che li propone per l&#39;adozione o della persona che li adotta. La responsabilità dell&#39;uso di Furfind è esclusivamente e integralmente dell&#39;utente che esonera Furfind da ogni responsabilità riguardante l&#39;adozione di un animale presentato su questo sito.</p>
                    <p>©2024 Furfind</p>
                 </div>
             </div>   
          </div>  
        </div>
        
    )
}

export default Footer