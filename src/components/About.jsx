import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-grid">
                <div className="about-image glass">
                    <img src="/assets/about.png" alt="JOTEK Professional Team" className="about-img-main" />
                    <div className="experience-badge">
                        <span className="years">15+</span>
                        <span className="label">Years of Excellence</span>
                    </div>
                </div>
                <div className="about-text">
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>About JOTEK W.L.L</h2>
                    <p className="description">
                        We are a leading electrical subcontracting company specializing in providing high-quality electrical
                        installation services for commercial, industrial, and residential projects.
                    </p>
                    <p className="description">
                        Our commitment to excellence and safety has made us a trusted partner in the industry,
                        delivering complex power solutions with precision and reliability across various sectors.
                    </p>
                    <div className="stats-row">
                        <div className="stat-item">
                            <span className="stat-num">50+</span>
                            <span className="stat-label">Projects Done</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-num">100%</span>
                            <span className="stat-label">Safety Record</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-num">24/7</span>
                            <span className="stat-label">Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
