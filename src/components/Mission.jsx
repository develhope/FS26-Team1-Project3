import React from "react"
import './Mission.css'
import paw from '../assets/paw-2-svgrepo-com.svg'


function Mission() {
    return(
        <div className="mission-container">
            
            <div className="mission-text">
                <div className="mission-zampetta">
                 <img src={paw} alt="zampetta"/>
                </div>
                
                <div>
                    <div>
                      <h2 className="mission-title">La nostra missione</h2>    
                    </div>
                    <div>
                        <p className="misssion-parag">
                      La nostra missione è quella di salvaguardare la vita di cani e gatti abbandonati, <br/>promuovendo l'adozione responsabile e consapevole,  offrendo un rifugio temporaneo, sicuro e amorevole <br />per gli animali in attesa di trovare una famiglia permanente.
                      </p>
                </div>
                  
                </div>

                <div>
                    <h3 className="mission-htre">I nostri Valori Fondamentali:</h3>
                 <p><b>Amore e Rispetto per gli Animali: </b> Ogni animale merita una vita piena di amore, rispetto e dignità.</p>

                 <p> <b>Trasparenza: </b>Forniamo informazioni chiare e oneste su ogni animale e sul processo di adozione.</p>

                 <p><b>Responsabilità: </b>Promuoviamo l'adozione responsabile e ci assicuriamo che i nostri adottanti siano<br />  preparati per leresponsabilità che comporta prendersi cura di un animale domestico.</p>
                
                 <p> <b>Comunità: </b>Crediamo nella forza della comunità e nel lavorare insieme per il bene degli animali.</p>
                 </div>
                 

                 <div>
                   <b> <p className="mission-thanks">Insieme possiamo fare la differenza nella vita di molti amici a quattro zampe,<br /> dando loro una seconda possibilità e una famiglia amorevole.</p> </b> 
                </div>                   

                
                <div>
                    <p><b>Grazie per il vostro sostegno e per essere parte della nostra missione!</b></p>  
                </div>
            
                <div className="mission-zampetta2 ">
                 <img src={paw} alt="zampetta"/>
                </div>

            </div>
        </div>
    )
}

export default Mission