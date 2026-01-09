import React from 'react';
import './Expertise.css';

const Expertise = () => {
    const services = [
        {
            title: 'Electrical Installation',
            desc: 'Expert electrical installation and maintenance services for various sectors.',
            icon: '⚡'
        },
        {
            title: 'LV and HV Works',
            desc: 'Specialized low voltage and high voltage electrical infrastructure works.',
            icon: '🔌'
        },
        {
            title: 'Cable Installation',
            desc: 'Professional cable installation and precise termination services.',
            icon: '🧬'
        },
        {
            title: 'Bus Bar Installations',
            desc: 'Reliable high-current bus bar system installations for industrial use.',
            icon: '🏗️'
        },
        {
            title: 'Conduit and Trunking',
            desc: 'Robust containment solutions including professional conduit and trunking works.',
            icon: '🛠️'
        },
        {
            title: 'Panel Fabrication',
            desc: 'High-quality electrical panel fabrication and on-site installation.',
            icon: '⚙️'
        }
    ];

    return (
        <section id="expertise" className="expertise">
            <div className="container">
                <h2 className="section-title">Our Expertise</h2>
                <div className="expertise-featured glass">
                    <img src="/assets/expertise.png" alt="Electrical Engineering Expertise" className="expertise-img" />
                    <div className="expertise-overlay-text">
                        <h3>Technical Excellence</h3>
                        <p>Mastering complex electrical systems with precision engineering and state-of-the-art technology.</p>
                    </div>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card glass" key={index}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <div className="service-link">Read More →</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
