import "../css/OtherSectionCard.css"
import logoImage from "../assets/logo-senza-background.png";

function OtherSectionCard() {
    return(

        <div className="containerAnnunci">
      <nav className="navAnnunci">
      <div className="logoNav">
        <img className="logoNav" src={logoImage} alt="FurFind Logo" />
      </div>
      <div className="contSelect">
      <div className="textSelect">Animale:</div>
      <select className="selectAnnunci">
                  <option value="cane">Cane</option>
                <option value="gatto">Gatto</option>
            </select>
            </div>
            <div className="contSelect">
                <div className="textSelect">Taglia:</div>
                <select className="selectAnnunci">
<option value="tagliapiccola">Taglia piccola</option>
<option value="tagliamedia">Taglia media</option>
<option value="tagliagrande">Taglia grande</option>
                </select>  
            </div>
        <div >
     <input className="formAnnunci"  type="text" placeholder="Inserisci Razza" />              
                </div>
                <div >
                    <input className="formAnnunci" type="text" placeholder="Inserisci città" />
                  
                </div>


      </nav>
        <div class="card">
  <div class="card-inner">
    <div class="card-front">
      <p>Front Side</p>
    </div>
    <div class="card-back">
      <p>Back Side</p>
    </div>
  </div>
</div>
  </div>  )
    
}




export default OtherSectionCard