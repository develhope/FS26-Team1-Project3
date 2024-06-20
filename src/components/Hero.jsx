import "../css/Hero.scss";
import heroImage from "../assets/hero.jpg";
import Navbar from "./Navbar";
import HeroCaption from "./HeroCaption";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function Hero() {
  return (
    <main>
      <div className="hero-container">
        <div>
          <img className="background-image" src={heroImage} alt="Doggo" />
        </div>
        <Navbar />
        <HeroCaption />
      </div>
    </main>
  );
}
