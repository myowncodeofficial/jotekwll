import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo-container">
          <img src="/assets/logo.svg" alt="JOTEK W.L.L Logo" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#expertise">Expertise</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" className="btn-nav">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
