import React from 'react'
import './Footer.css'
import logo from '../assets/logo-senza-background.png'



function Footer(params) {
    return(
        <div>
          <div className="footer-container">
             <div className="div-footer block-footer">
                <div>

                </div>
                <div className='footer-logo'>
                   <img src={logo} alt="logo" /> 
                </div>
                 <div className='footer-list'>
                    <ul>
                   <li>Home</li>
                   <li>About us</li>
                   <li>Service</li>
                   <li>Cart</li>
                 </ul>
                 </div>
                 
             </div>
             <div className="div-form  block-footer">
                <div className='form-title'>
                    <h2>Contattaci</h2>
                </div>
                <form className='form-footer'>
                    <div className='fullname-footer '>
                    <input placeholder="Fullname" className="input" name="text" type="text"/>

                       <input type="email" name='email' placeholder='Email' className="input"/> 
                    </div>
                    <div>
                      <input type="text" name='message' className="input message" placeholder='Message' />   
                    </div>
                    <div className="container">
                      <button type="submit" className="button">Submit</button>
                    </div>
                </form>

             </div>
          </div>  
           <div>
            
           </div>
        </div>
        
    )
}

export default Footer