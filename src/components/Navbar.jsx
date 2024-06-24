import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Navbar.scss';
import logoImage from '../assets/logo-senza-background.png';

export default function Navbar() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/iscriviti');
  };
  const handleLoginButton = () => {
    navigate('/login')
  };

  return (
    <nav className="Navbar">
      <div className="logo-container">
        <img className="logo-FurFind" src={logoImage} alt="FurFind Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">Chi siamo</a>
        </li>
        <li>
          <a href="#services">Servizi</a>
        </li>
        <li>
          <a href="#contact">Contatti</a>
        </li>
        <li>
          <div className="group">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input placeholder="Cerca" type="search" className="input" />
          </div>
        </li>
        <li>
          <button onClick={handleNavigate} className="btn-primary">
            Iscriviti
          </button>
        </li>
        <li>
          <button onClick={handleLoginButton} className="btn-primary">
            <p>Login</p>
          </button>
        </li>
        <li>
          <a href="#notifiche">
            <svg
              className="bell"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}
