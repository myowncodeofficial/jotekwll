import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <div className="logo-container">
                        <img src="/assets/logo.svg" alt="JOTEK W.L.L Logo" className="logo-img-footer" />
                    </div>
                    <p className="footer-desc">
                        Your trusted partner for high-voltage and low-voltage electrical solutions across commercial and industrial landscapes.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#expertise">Our Expertise</a></li>
                        <li><a href="#projects">Major Projects</a></li>
                        <li><Link to="/login" style={{ opacity: 0.3, fontSize: '0.8rem' }}>Admin Portal</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Information</h4>
                    <p>Email: <a href="mailto:info@jotek-wll.com">info@jotek-wll.com</a></p>
                    <p>Location: Kingdom of Bahrain</p>
                    <button className="btn-primary" style={{ marginTop: '1.5rem' }}>Get a Quote</button>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} JOTEK W.L.L. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
