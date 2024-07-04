import { useState } from 'react';
import '../css/Footer.css';
import logo from '../assets/logo furfind white vertical.svg';
import { Link, useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const handleAboutButton = () => {
    navigate('/about');
  };


  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div>
      <div className="footer-container">
        <div className="div-footer block-footer">
          <div className="logoFooter">
            <img src={logo} alt="vertical logo" />
          </div>
          <div className="footer-list">
            <ul>
              <li id="home">
                <a href="./">Home</a>
              </li>
              <li id="about">
                <Link to="/about" onClick={handleAboutButton}>
                  Chi siamo
                </Link>
              </li>
              <li id="services">
                <a>Servizi</a>
              </li>
              <li
                id="contact"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a>Contatti</a>
                {isDropdownVisible && (
                  <div className="dropdown-menu">
                    <p>Telefono: +39 123 456 7890</p>
                    <p>Email: furfind@gmail.com</p>
                  </div>
                )}
              </li>
              <li>
                <a>Politica sulla privacy</a>
              </li>
            </ul>
          </div>
          <div className="social">
            <div className="media">
              <svg
                className="twitter"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="100"
                viewBox="0 0 50 50"
              >
                <path
                  fill="#f8f9fa"
                  d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"
                ></path>
              </svg>
            </div>
            <div className="media">
              <svg
                className="instagram"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 50 50"
              >
                <path
                  fill="#f8f9fa"
                  d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
                ></path>
              </svg>
            </div>
            <div className="media">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <path
                  fill="#f8f9fa"
                  d="M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z"
                ></path>
              </svg>
            </div>
            <div className="media">
              <svg
                className="linkedin"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 50 50"
              >
                <path
                  fill="#f8f9fa"
                  d="M 9 5 C 6.800781 5 5 6.800781 5 9 C 5 11.199219 6.800781 13 9 13 C 11.199219 13 13 11.199219 13 9 C 13 6.800781 11.199219 5 9 5 Z M 8 14 L 8 36 L 12 36 L 12 14 Z M 18 14 L 18 36 L 22 36 L 22 24 C 22 22.8 23.199219 21 25 21 C 26.800781 21 27 23 27 24 L 27 36 L 31 36 L 31 23 C 31 19.199219 28.800781 17 25 17 C 22.800781 17 21.199219 18 20 19.199219 L 20 19 L 20 14 Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
