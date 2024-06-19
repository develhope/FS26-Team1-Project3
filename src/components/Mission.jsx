import '../css/Mission.css'
import paw from '../assets/paw-2-svgrepo-com.svg'


function Mission() {
    return(
        <div className="mission-container">
            
            <div className="mission-text">
                
                <div>
                    <div>
                      <h2 className="mission-title">La nostra missione</h2>    
                    </div>
                    <div>
                        <p className="misssion-parag">
                      La nostra missione è quella di salvaguardare la vita di cani e gatti abbandonati, promuovendo l&#39;adozione responsabile e consapevole,  offrendo un rifugio temporaneo, sicuro e amorevole per gli animali in attesa di trovare una famiglia permanente.
                      </p>
                </div>
                  
                </div>

                <div>
                    <h3 className="mission-htre">I nostri Valori Fondamentali:</h3> <br />
                 <p><b>Amore e Rispetto per gli Animali: </b> Ogni animale merita una<br /> vita  piena di amore, rispetto e dignità.</p>

                 <p> <b>Trasparenza:</b>Forniamo informazioni chiare e oneste su ogni <br /> animale e sul processo di adozione.</p>

                 <p><b>Responsabilità:  </b>Promuoviamo l&#39;adozione responsabile e ci assicuriamo che i nostri adottanti siano  preparati per le responsabilità che comporta prendersi cura di un animale domestico.</p>
                
                 <p> <b>Comunità: </b>Crediamo nella forza della comunità e nel <br /> lavorare insieme per il bene degli animali.</p>
                 </div>
                 

                 <div>
                   <b> <p className="mission-thanks">Insieme possiamo fare la differenza nella vita di molti amici a quattro zampe, dando loro una seconda possibilità e una famiglia amorevole.</p> </b> 
                </div>                   

                
                <div>
                    <p><b>Grazie per il vostro sostegno e per essere parte della nostra missione!</b></p>  
                </div>
            
                <div className="mission-zampetta2 ">
                 <img src={paw} alt="zampetta"/>
                 <img src={paw} alt="zampetta"/>
                 <img src={paw} alt="zampetta"/>
                 <img src={paw} alt="zampetta"/>
                </div>

            </div>
        </div>
    )
}

export default Mission