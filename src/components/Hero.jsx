import React from 'react';
import './Hero.scss';
import heroImage from '../assets/hero.jpg';
import Navbar from './Navbar';

export default function Hero() {
    return (
        <main>
        <div className="hero-container">
            <div className="background-image">
                <img src={heroImage} alt="Doggo" />
            </div>
            <Navbar />
        </div>
        </main>
    );
}
