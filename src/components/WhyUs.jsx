import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
    const reasons = [
        {
            title: 'Experienced Team',
            desc: 'Our team of skilled electricians and engineers brings years of industry expertise.'
        },
        {
            title: 'Competitive Pricing',
            desc: 'We offer high-quality services with flexible payment terms and competitive rates.'
        },
        {
            title: 'Safety & Quality',
            desc: 'Unwavering commitment to the highest safety and quality standards in every project.'
        },
        {
            title: 'Timely Completion',
            desc: 'Proven track record of completing complex electrical projects within agreed timelines.'
        }
    ];

    return (
        <section id="why-us" className="why-us">
            <div className="container">
                <div className="why-us-content">
                    <div className="why-us-text">
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Why Choose JOTEK?</h2>
                        <div className="reasons-list">
                            {reasons.map((reason, index) => (
                                <div className="reason-item" key={index}>
                                    <div className="reason-dot"></div>
                                    <div className="reason-info">
                                        <h3>{reason.title}</h3>
                                        <p>{reason.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="why-us-visual glass">
                        <img src="/assets/whyus.png" alt="Safety and Precision" className="why-us-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
