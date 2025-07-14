import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/images/logo.png';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube,FaLinkedin } from 'react-icons/fa';
import offerImage from '../../assets/images/homeopathy offer image.png';
import chiristmas from './../../assets/images/Christmas offer banner.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [showReopenButton, setShowReopenButton] = useState(false);
    const menuRef = useRef(null);
    const [isHoveredAbout, setIsHoveredAbout] = useState(false);
    const [isHoveredTreatments, setIsHoveredTreatments] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false); // State for form visibility
    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };
    const handleLinkClick = () => {
        setIsMenuOpen(false);
       
      
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
            if (window.innerWidth > 768) {

                setIsMenuOpen(false);
             
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (menuRef.current) {
            menuRef.current.style.height = isMenuOpen ? '390px' : '0';
        }
    }, [isMenuOpen]);

    

    // New useEffect for the popup
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPopupOpen(true);
        }, 2000); // Show popup after 2 seconds

        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    const closePopup = () => {
        setIsPopupOpen(false);
        setShowReopenButton(true); // Show the reopen button when the popup closes
    };

    const reopenPopup = () => {
        setShowReopenButton(false); // Hide the reopen button when reopening the popup
        setIsPopupOpen(true); // Show the popup again
    };
    // Function to handle opening the form
    const openForm = () => {
        setIsFormOpen(true);
        setIsPopupOpen(false); // Close the popup when opening the form
    };
    

    return (
        <>
            <div className="navbar">
                {!isSmallScreen && (
                    <div className="scroll">
                        <div className="marquee">
                            <div className="marquee-content">
                                <marquee behavior="" direction="">
                                    Branches @ Bangalore, Jayanagar | Chennai, Madhanandapuram | Chennai, Valasaravakkam
                                </marquee>
                            </div>
                        </div>
                        <div className="fonts">
                            <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="social-icon facebook" />
                            </a>
                            <a href="https://www.instagram.com/your-page" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="social-icon instagram" />
                            </a>
                            <a href="https://www.youtube.com/your-channel" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="social-icon youtube" />
                            </a>
                            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="social-icon whatsapp" />
                            </a>
                            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="social-icon LinkedIn" />
                            </a>
                        </div>
                        <div className="appoint">
                            <a href="/bookconsultation" className="appointment-button">Book Appointment</a>
                        </div>
                        <div className="appoint1">
                        <a href="/login" className="appointment-button">Login</a>
                        </div>
                    </div>
                )}
    
                <header className="header">
                    <div className="logo">
                        {isSmallScreen ? (
                            <img src={logo} alt="H-Cura Logo" className="logo-img center-logo" />
                        ) : (
                            <div className="bigscreen">
                                <nav className="navigation">
                                    <img src={logo} alt="H-Cura Logo" className="logo-img" />
                                    {/* <Link to="/online" className="anotherclass1" onClick={handleLinkClick}><small>Online </small></Link>
                                    <Link to="/video" className="anotherclass" onClick={handleLinkClick}><small>Doctors</small></Link> */}
                                    {/* <Link to="/doctors" className="anotherclass" onClick={handleLinkClick}><small>corporates</small></Link> */}
                                </nav>
                            </div>
                        )}
                    </div>
    
                    <div className="content ">
                            <div className="bigscreen">
                               <nav className="navigation">
                               <Link to="/" className="nav-link" onClick={handleLinkClick}><small>Home</small></Link>
                               <Link to="/online" className="nav-link" onClick={handleLinkClick}><small>Online </small></Link>
                              <div> 
                              <div
                                  className="about-us-container"
                                  onMouseEnter={() => setIsHoveredAbout(true)}
                                  onMouseLeave={() => setIsHoveredAbout(false)} >
                                  <div className="aboutus">
                               <Link to="/about-us" className="nav-link" onClick={handleLinkClick}>
                               <small>About Us</small>
                               </Link>
                               </div>
                               {isHoveredAbout && (
                              <div className="dropdown-menu">
                               <Link to="/aboutus" className="dropdown-item">About Us</Link>
                               <Link to="/doctors" className="dropdown-item">Doctors</Link>
                               <Link to="/our-clinics" className="dropdown-item">Our Clinics</Link>
                               <Link to="/blogs" className="dropdown-item">Blogs</Link>
                               <Link to="/contact-us" className="dropdown-item">Contact Us</Link>
                            </div>
                        )}
                    </div>
                      <div
                        className="about-us-container1"
                        onMouseEnter={() => setIsHoveredTreatments(true)}
                        onMouseLeave={() => setIsHoveredTreatments(false)}>
                        <div className="aboutus1">
                     <Link to="/about-us" className="nav-link" onClick={handleLinkClick}>
                     <small>Treatments</small>
                      </Link>
                </div>
                {isHoveredTreatments && (
                    <div className="dropdown-menu1">
                        <Link to="/doctors" className="dropdown-item1">Treatment 1</Link>
                        <Link to="/our-clinics" className="dropdown-item1">Treatment 2</Link>
                        <Link to="/blogs" className="dropdown-item1">Treatment 3</Link>
                        <Link to="/contact-us" className="dropdown-item1">Treatment 4</Link>
                    </div>
                )}
            </div>
            </div>
                <Link to="/corporates" className="nav-link" onClick={handleLinkClick}><small>Corporates</small></Link>
         </nav>
         </div>
         </div>
            </header>

                {/* {these all are about small screens code} */}
    
             {isSmallScreen && (
                    <button
                        className="menu-toggle"
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-controls="side-navigation"
                        aria-label="Toggle navigation menu"
                    >
                        ☰
                    </button>
                )}
                {/* Mobile dropdown menu */}
                <nav id="side-navigation" ref={menuRef} className={`side-navigation ${isMenuOpen ? 'open' : ''}`}>
                    <button className="close-menu" onClick={toggleMenu} aria-label="Close menu">✖</button>
                    <div className="main_navbar">
                        <div className="navbar1">
                            <button><a href="/" className="appointment-button">Login/Signup</a></button>
                        </div>
                        <Link to="/online" className="nav-link" onClick={handleLinkClick}>Online Consult</Link>
                        <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
                        <Link to="/about-us" className="nav-link" onClick={handleLinkClick}>Our Doctors</Link>
                        <Link to="/our-clinics" className="nav-link" onClick={handleLinkClick}>Our Clinics</Link>
                        <Link to="/our-clinics" className="nav-link" onClick={handleLinkClick}>Treatments</Link>
                        <Link to="/bookconsultation" className="nav-link" onClick={handleLinkClick}>BookConsultation</Link>
                        <Link to="/blogs" className="nav-link" onClick={handleLinkClick}>Blogs</Link>
                        <Link to="/contact-us" className="nav-link" onClick={handleLinkClick}>Contact Us</Link>
                    </div>
                </nav>
    

                    {/* Popup for offers */}
            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-container">
                        <button className="close-popup" onClick={closePopup} aria-label="Close popup">✖</button>
                        <h2>New Offers!</h2>
                        <img src={chiristmas} alt="" className='offerimage' />
                        <p>Your personalized homeopathic journey begins here.</p>
                        <div className="offerbtn">
                            <button onClick={openForm}>To get this offer click here</button>
                        </div>
                    </div>
                </div>
            )}
                {/* Form for homeopathy problems */}
            {isFormOpen && (
                <div className="form-overlay">
                    <div className="form-container">
                        <h2>Homeopathy Problem Form</h2>
                        <form>
                            <label>
                                Username:
                                <input type="text" name="username" required />
                            </label>
                            <label>
                                Last Name:
                                <input type="text" name="lastname" required />
                            </label>
                            <label>
                                Phone Number:
                                <input type="tel" name="phone" required />
                            </label>
                            <label>
                                Email:
                                <input type="email" name="email" required />
                            </label>
                                <label>
                                    Coupon Code:
                                    <div className="entercode">
                                        <input type="text" name="couponCode" required />
                                    </div>
                                </label>
                                <label>
                                    <div className="generatecode">
                                        Coupon Code:
                                        <button type="button" onClick={() => document.querySelector('.entercode input').value = 'namasthey'}>
                                            Click here
                                        </button>
                                    </div>
                                </label>

                            {/* Add more fields as needed */}
                            <button type="submit">Submit</button>
                       
                       {/* <button type="button" onClick={() => setIsFormOpen(false)}>Close</button> */}

                       {/* <button type="submit">Submit</button> */}
                <button type="button" onClick={() => {
                    setIsFormOpen(false); // Close the form
                    setShowReopenButton(true); // Show the reopen button
                }}>Close</button>
                     
                        </form>
                    </div>
                </div>
            )}

            {/* Reopen Button for Popup */}
            {showReopenButton && (
                <button className="reopen-popup-button" onClick={reopenPopup}>
                   <img src={offerImage} alt="" />
                </button>
            )}
            </div>
        </>
    );
};

export default Header;
