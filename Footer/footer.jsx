import React from 'react';
import './footer.css'; // Import Footer CSS
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaWhatsapp,FaYoutube } from 'react-icons/fa';
import logo from './../../assets/images/footer logo.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo Section */}
                <div className="footer-logo-section">
                    <img src={logo} alt="Hcura Logo" className="footer-logo" />
                    <p className="footer-description">
                        Hcura Homeopathy Multi-Speciality Hospital, led by expert homeopaths, delivers quality healthcare combining expertise and compassion for all sections of society.
                    </p>
                </div>

                {/* Links Section */}
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Enquiry Us</h4>
                        <p><a href="tel:8870001377">+91 8870001377</a></p>
                        <p><a href="tel:7411845662">+91 7411845662</a></p>
                        <h4>Email Us</h4>
                        <p><a href="mailto:care@h-cura.com">care@h-cura.com</a></p>
                        <p><a href="mailto:admin@h-cura.com">admin@h-cura.com</a></p>
                    </div>

                    <div className="footer-column">
                        <h4>Registered Office</h4>
                        <p>H-Cura Homeopathy Multispecialty Clinic,<br/>
                            No:779&780 2nd Floor, Sai Towers Building,<br/>
                            South, E End Main Rd, Bengaluru,<br/>
                            Karnataka 560069, India
                        </p>
                    </div>

                    <div className="footer-column">
                        <h4>Useful Links</h4>
                        <p onClick={() => handleNavigation('/')}>Home</p>
                        <p onClick={() => handleNavigation('/about/')}>About Us</p>
                        <p onClick={() => handleNavigation('/contact-us/')}>Contact Us</p>
                    </div>

                    <div className="footer-column">
                        <h4>Our Clinics</h4>
                        <h5>Bangalore</h5>
                        <p onClick={() => handleNavigation('/homeopathy-clinic-in-bangalore/')}>1. Jayanagar</p>

                        <h5>Chennai</h5>
                        <p onClick={() => handleNavigation('/homeopathy-clinic-in-valasaravakkam-chennai/')}>1. Valasaravakkam</p>
                        <p onClick={() => handleNavigation('/homeopathy-clinic-in-madanandapuram-chennai/')}>2. Gerugambakkam</p>
                    </div>

                    {/* <div className="footer-column">
                        <h4>Treatments</h4>
                        <p>Skin Diseases</p>
                        <p>Hairfall</p>
                        <p>Diabetes</p>
                        <p>Piles</p>
                        <p>Male Infertility</p>
                    </div> */}

                    <div className="footer-column">
                        <h4>Policies</h4>
                        <p onClick={() => handleNavigation('/privacypolicy')}>Privacy Policy</p>
                        <p onClick={() => handleNavigation('/disclaimer')}>Disclaimer</p>
                        <p onClick={() => handleNavigation('/terms')}>Terms and Conditions</p>
                        {/* <p onClick={() => handleNavigation('/refund-policy')}>Refund & Cancellation Policy</p> */}
                    </div>
                </div>

                {/* Social Media & Copyright Section */}
                <div className="footer-social">
                  
                    <div className="social-icons">
                        <a href="https://www.instagram.com/hcura_healthcare/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/company/h-cura.app/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://www.facebook.com/H.CuraApp" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://wa.me/+918870001377" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.youtube.com/channel/UCPHp97GCyIxyN7kRNOGET0A" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                        
                    </div>
                    <p>&copy; 2024 H-Cura Pvt Ltd. All rights reserved. Developed by <strong>Manikanta Kavala &amp; Iliyas</strong> and Designed by <strong>Kiran &amp; Vegi Ram Prasanth</strong></p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
