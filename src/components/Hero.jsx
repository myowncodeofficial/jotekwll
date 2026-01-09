import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    LEADING MEP CONTRACTORS <span className="highlight">& SPECIALIST</span> CONTRACTORS FOR LV WORKS
                </h1>
                <p className="hero-subtitle">
                    Leading Electrical Subcontracting Specialist providing high-quality electrical installation services for commercial, industrial, and residential projects.
                </p>
                <div className="hero-btns">
                    <a href="#expertise" className="btn-primary">Our Expertise</a>
                    <a href="#contact" className="btn-secondary">Get In Touch</a>
                </div>
            </div>
            <div className="hero-scroll">
                <div className="mouse"></div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
};

export default Hero;
