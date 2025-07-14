import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/images/hcura-homeopathy-logo.png';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaLinkedin } from 'react-icons/fa';
import chiristmas from './../../assets/images/Christmas_offer_banner1.jpg'
import Marquee from 'react-fast-marquee';
import { API_CONFIG } from "./../../utils/config";
// import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import gif from './../../assets/images/gift.gif';

const Header = () => {

    // const [formSubmitted, setFormSubmitted] = useState(false);
   
  
    // Handle form submission
    // const handleFormSubmit = (e) => {
    //     e.preventDefault();

    //     // Close the form after submission
    //     setIsFormOpen(false);

    //     // Create the success message div
    //     const successMessage = document.createElement('div');
    //     successMessage.classList.add('success-message');
    //     successMessage.innerHTML = '<span class="tick-icon">✔</span>Congratulations We will contact you soon!';

    //     // Append the success message to the body
    //     document.body.appendChild(successMessage);

    //     // Add confetti elements (increased number of confetti particles)
    //     for (let i = 0; i < 100; i++) {  // Increased number of confetti particles
    //         const confetti = document.createElement('div');
    //         confetti.classList.add('confetti');
    //         document.body.appendChild(confetti);
    //     }

    //     // Automatically remove the success message and confetti after 10 seconds
    //     setTimeout(() => {
    //         successMessage.remove();
    //         document.querySelectorAll('.confetti').forEach(confetti => confetti.remove());
    //     }, 10000);
    // };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [showReopenButton, setShowReopenButton] = useState(false);
    const [isHoveredAbout, setIsHoveredAbout] = useState(false);
    const [isHoveredTreatments, setIsHoveredTreatments] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false); // State for form visibility
    const [isSubmenuOpenAboutUs, setIsSubmenuOpenAboutUs] = useState(false);
    const [isSubmenuOpenTreatments, setIsSubmenuOpenTreatments] = useState(false);
    const [isHoveredClinics, setIsHoveredClinics] = useState(false);
    const [isHoveredBlogs, setIsHoveredBlogs] = useState(false);
    const [isSubmenuOpenClinics, setIsSubmenuOpenClinics] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const dropdownAboutRef = useRef(null);
    const dropdownTreatmentsRef = useRef(null);
    const aboutLinkRef = useRef(null);
    const treatmentsLinkRef = useRef(null);
    const menuRef = useRef(null);
    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };
    const handleLoginClick = () => {
        setShowPopup(true); // Show the popup
        setTimeout(() => setShowPopup(false), 2000); // Hide the popup after 5 seconds
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
        setIsSubmenuOpenAboutUs(false);
        setIsSubmenuOpenClinics(false);
        setIsSubmenuOpenTreatments(false)
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
        setIsPopupOpen(false); // Close the popup when opening the form
    };
// Mouse Enter and Leave Handlers
const handleMouseEnterAbout = () => setIsHoveredAbout(true);
const handleMouseLeaveAbout = (e) => {
  if (
    dropdownAboutRef.current &&
      !dropdownAboutRef.current.contains(e.relatedTarget) &&
      !aboutLinkRef.current.contains(e.relatedTarget)
  ) {
    setIsHoveredAbout(false);
    
  }
};

const handleMouseEnterTreatments = () => setIsHoveredTreatments(true);
const handleMouseLeaveTreatments = (e) => {
  if (
    dropdownTreatmentsRef.current &&
    !dropdownTreatmentsRef.current.contains(e.relatedTarget) &&
    !treatmentsLinkRef.current.contains(e.relatedTarget)
  ) {
    setIsHoveredTreatments(false);
  }
};
const handleMouseEnterClinics = () => setIsHoveredClinics(true);
  const handleMouseLeaveClinics = (e) => {
    if (
      dropdownAboutRef.current &&
      !dropdownAboutRef.current.contains(e.relatedTarget)
    ) {
      setIsHoveredClinics(false);
    }
  };
  const handleMouseEnterBlogs = () => setIsHoveredBlogs(true);
  const handleMouseLeaveBlogs = (e) => {
    if (
      dropdownAboutRef.current &&
      !dropdownAboutRef.current.contains(e.relatedTarget)
    ) {
      setIsHoveredBlogs(false);
    }
  };



const toggleSubmenuTreatments= () => setIsSubmenuOpenTreatments(!isSubmenuOpenTreatments);
const toggleSubmenuAboutUs = () => setIsSubmenuOpenAboutUs(!isSubmenuOpenAboutUs);

const toggleSubmenuClinics = () => {
    setIsSubmenuOpenClinics(!isSubmenuOpenClinics);
  };

        const [data, setData] = useState({
            name: '',
            phoneNo: '',
            emailId: '',
            state: '',
            couponCode: ''
        });


    const submit = async (e) => {
        e.preventDefault(); // Prevent page refresh

        console.log(JSON.stringify(data),"aaaaaaaaaaaaaa")

        // Your API endpoint here
        // const apiUrl = 'http://65.2.126.18:7001/api/v1/super_admin/appt/offer/form';
        const apiUrl=`${API_CONFIG.baseURL7001}${API_CONFIG.apiPath}${API_CONFIG.apiName.offerFormFilling}`

 try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) // Send the form data as JSON
            });

            if (response.ok) {
                // Handle success (you can show a message or reset form)
                console.log('Form submitted successfully');
                const successMessage = document.createElement('div');
                successMessage.classList.add('success-message');
                successMessage.innerHTML = '<span class="tick-icon">✔</span>Congratulations We will contact you soon!';
        
                // Append the success message to the body
                document.body.appendChild(successMessage);
        
                // Add confetti elements (increased number of confetti particles)
                for (let i = 0; i < 100; i++) {  // Increased number of confetti particles
                    const confetti = document.createElement('div');
                    confetti.classList.add('confetti');
                    document.body.appendChild(confetti);
                }
        
                // Automatically remove the success message and confetti after 10 seconds
                setTimeout(() => {
                    successMessage.remove();
                    document.querySelectorAll('.confetti').forEach(confetti => confetti.remove());
                }, 10000);

                setIsFormOpen(false)
            } else {
                // Handle error (show a message or alert)
                console.error('Error submitting form');
            }
        } catch (error) {
            console.error('API call failed:', error);
        }
    };

   
    
    const handle = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    return (
        <>
            <div className="navbar">
                {!isSmallScreen && (
                    <div className="scroll">
                        <div className="marquee">
                            <div className="marquee-content">
                            <Marquee gradient={false} speed={50}>
                              Branches @ Bangalore, Jayanagar | Chennai, Gerumgambakkam | Chennai, Valasaravakkam
                            </Marquee>
                            </div>
                        </div>
                        <div className="fonts">
                            <a href="https://www.facebook.com/H.CuraApp" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="social-icon facebook" />
                            </a>
                            <a href="https://www.instagram.com/hcura_healthcare/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="social-icon instagram" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCPHp97GCyIxyN7kRNOGET0A" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="social-icon youtube" />
                            </a>
                            <a href="https://wa.me/+918870001377" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="social-icon whatsapp" />
                            </a>
                            <a href="https://www.linkedin.com/company/h-cura.app/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="social-icon LinkedIn" />
                            </a>
                        </div>

                        <div className="appoint-buttons">
                            <span>
                                <div className="book ">
                                    {/* <button className="appointment-button"><a href="/bookconsultation">Book Appointment</a></button> */}
                                    <button className="appointment-button">
                                              <Link to="/bookconsultation">Book Appointment</Link>
                                    </button>
                                </div>
                            </span>
                            <span>
                                {/* <button className="login-button"><a href="/login">Login</a></button> */}
                                       
                                <button className="login-button" onClick={handleLoginClick}>
                                    Login
                            </button>
                            </span>
                        </div>
                            {/* Popup */}
                                    {showPopup && (
                                        <div className="popup-container1">
                                            <p> patient webview Coming Soon</p>
                                        </div>
                                    )}
                            </div>
                )}

                <header className="header">
                    <div className="logo">
                        {isSmallScreen ? (

                            <>
                                {/* NEW OFFER text on the left side for small screens */}
                                <div className="offertext-small-screen">
                                    <button className="reopen-popup-button" onClick={reopenPopup}>
                                    {/* <div className="offer-container">
                                        <img src={gif} alt="Offer GIF" className="offer-gif" />
                                    </div> */}
                                    </button>
                                </div>
                                <img src={logo} alt="H-Cura Logo" className="logo-img center-logo" />
                            </>) : (
                            <div className="bigscreen">

                                
                                <Link to="/" className="navigation">
                                    <img src={logo} alt="H-Cura Logo" className="logo-img" />
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="content ">
                        <div className="bigscreen">
                        <nav className="navigation">
                            <Link to="/" className="nav-link" onClick={handleLinkClick}><small>Home</small></Link>
                            <Link to="/homeopathy-online-consultation/" className="nav-link" onClick={handleLinkClick}><small>Online </small></Link>
                            <Link to="/about/" className="nav-link about-us-container" ref={aboutLinkRef}
                                onMouseEnter={handleMouseEnterAbout}
                                onMouseLeave={handleMouseLeaveAbout}>
                                <small>About Us</small>
                            </Link>
                            {isHoveredAbout && (
                                <div className="dropdown-menu" ref={dropdownAboutRef}
                                    onMouseEnter={handleMouseEnterAbout}
                                    
                                    onMouseLeave={() => {
                                        setIsHoveredClinics(false); // Close sub-dropdown when mouse leaves the entire dropdown menu
                                        setIsHoveredBlogs(false); // Close any other dropdowns
                                        handleMouseLeaveAbout(false);
                                      }}>
                                    <Link to="/about/" className="dropdown-item" onClick={() => setIsHoveredAbout(false)}>About Us</Link>
                                    <Link to="/doctors-list/" className="dropdown-item" onClick={() => setIsHoveredAbout(false)}>Doctors</Link>
                                      {/* Our Clinics Multi-Level Dropdown */}
                                            <div
                                                className="dropdown-item our-clinics-container"
                                                onMouseEnter={handleMouseEnterClinics}
                                                onMouseLeave={handleMouseLeaveClinics}
                                            >
                                                <span>Our Clinics</span>
                                                {isHoveredClinics && (
                                                <div className="sub-dropdown">
                                                    <Link to="/homeopathy-clinic-in-bangalore/" className="sub-dropdown-item" onClick={() => setIsHoveredAbout(false)}>
                                                   Bangalore
                                                    </Link>
                                                    <Link to="/homeopathy-clinic-in-chennai/" className="sub-dropdown-item" onClick={() => setIsHoveredAbout(false)}>
                                                    Chennai
                                                    </Link>
                                                    
                                                </div>
                                                )}
                                            </div>
                                    {isHoveredBlogs}
                                    <Link to="https://h-cura.in/blogs/" className="dropdown-item"  onMouseEnter={handleMouseEnterBlogs}
                                          onMouseLeave={handleMouseLeaveBlogs} onClick={() => setIsHoveredAbout(false)}>Blogs</Link>
                                    <Link to="/contact-us/" className="dropdown-item" onClick={() => setIsHoveredAbout(false)}>Contact Us</Link>
                                </div>
                            )}

                                <Link  className="nav-link about-us-container1" ref={treatmentsLinkRef}
                                    onMouseEnter={handleMouseEnterTreatments}
                                    onMouseLeave={handleMouseLeaveTreatments}>
                                    <small>Treatments</small>
                                </Link>
                                {isHoveredTreatments && (
                                    <div className="dropdown-menu1" ref={dropdownTreatmentsRef}
                                        onMouseEnter={handleMouseEnterTreatments}
                                        onMouseLeave={handleMouseLeaveTreatments}>
                                        <Link to="/homeopathy-best-treatments/" className="dropdown-item1" onClick={() => setIsHoveredTreatments(false)}>Homeopathy</Link>
                                        <Link to="/advanced-hydrafacial-treatment" className="dropdown-item1" onClick={() => setIsHoveredTreatments(false)}>Skin </Link>
                                        <Link to="/advanced-grow-hair-treatment" className="dropdown-item1" onClick={() => setIsHoveredTreatments(false)}>Hair</Link>
                                        <Link to="/blogs" className="dropdown-item1" onClick={() => setIsHoveredTreatments(false)}>Dental</Link>
                                       
                                    </div>
                                )}
                                <Link to="/homeopathy-corporate-camps/" className="nav-link" onClick={handleLinkClick}><small>Corporates</small></Link>
                            </nav>

                                                                    
                        </div>
                        {/* NEW OFFER text for large screens */}
                        {/* {!isSmallScreen && (
                            <div className="offertext">
                                {showReopenButton && (
                                    <button className="reopen-popup-button" onClick={reopenPopup}>
                                       
                                        <div className="offer-container">
                                        <img src={gif} alt="Offer GIF" className="offer-gif" />
                                    </div>
                                    </button>
                                )}
                            </div>
                        )}
                        {isSmallScreen && (
                             <div className="offertext1">
                             {showReopenButton && (
                                 <button className="reopen-popup-button1" onClick={reopenPopup}>
                                     <div className="offer-container">
                                        <img src={gif} alt="Offer GIF" className="offer-gif" />
                                    </div>
                                 </button>
                             )}
                         </div>

                )} */}

                {/* Render the GIF only on larger screens */}
{!isSmallScreen && (
    <div className="offertext ">
        {showReopenButton && (
            <button className="reopen-popup-button" onClick={reopenPopup}>
                <div className="offer-container">
                    <img src={gif} alt="Offer GIF" className="offer-gif" />
                </div>
            </button>
        )}
    </div>
)}

{/* For small screens, render the button without the GIF */}
{isSmallScreen && (
    <div className="offertext1">
        {showReopenButton && (
            <button className="reopen-popup-button1" onClick={reopenPopup}>
                {/* Button content without GIF */}
                <div className="offer-container">
                    
                    <img src={gif} alt="Offer GIF" className="offer-gif" />
                </div>
                
            </button>
        )}
    </div>
)}
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
                {/* Mobile Dropdown Menu */}
            <nav ref={menuRef} className={`side-navigation ${isMenuOpen ? 'open' : ''}`}>
                <button className="close-menu" onClick={toggleMenu} aria-label="Close menu">✖</button>
                <div className="main_navbar">
                    <div className="navbar1">
                        <button><a href="/login" className="login-button1">Login/Signup</a></button>
                    </div>
                    
                    <Link to="/" className="nav-link1" onClick={handleLinkClick}>Home</Link>
                    <Link to="/homeopathy-online-consultation/" className="nav-link1" onClick={handleLinkClick}>Online</Link>
                    {/* <Link to="/homeopathy-best-treatments/" className="nav-link1" onClick={handleLinkClick}>Treatments</Link> */}
                    <diV className="nav-link1 nav-link-with-submenu" onClick={toggleSubmenuTreatments}> Treatments

                    </diV>
                    <ul className={`submenu ${isSubmenuOpenTreatments ? 'open' : ''}`}>
                            <li>
                            <Link to="/homeopathy-best-treatments/" onClick={handleLinkClick}>Homeopathy</Link>
                            </li>
                            <li>
                            <Link to="/advanced-hydrafacial-treatment" onClick={handleLinkClick}>Skin</Link>
                            </li>
                            <li>
                            <Link to="/advanced-grow-hair-treatment" onClick={handleLinkClick}>Hair</Link>
                            </li>
                            <li>
                            <Link to="" onClick={handleLinkClick}>Dental</Link>
                            </li>
                            </ul>
                    {/* <div className="nav-link-with-submenu"> */}
                    
                    <div className="nav-link1 nav-link-with-submenu" onClick={toggleSubmenuAboutUs}> About Us</div>
                        <ul className={`submenu ${isSubmenuOpenAboutUs ? 'open' : ''}`}>
                            <li>
                            <Link to="/about/" onClick={handleLinkClick}>About Us</Link>
                            </li>
                            <li>
                            <Link to="/doctors-list/" onClick={handleLinkClick}>Doctors</Link>
                            </li>
                            <li className="submenu-item">
                            <div onClick={toggleSubmenuClinics}>Our Clinics</div>
                            <ul className={`sub-submenu ${isSubmenuOpenClinics ? 'open' : ''}`}>
                                <li><Link to="/homeopathy-clinic-in-bangalore/" onClick={handleLinkClick}> Bangalore</Link></li>
                                <li><Link to="/homeopathy-clinic-in-chennai/" onClick={handleLinkClick}> Chennai</Link></li>
                            </ul>
                            </li>
                            <li>
                                <Link to="https://h-cura.in/blogs/" onClick={handleLinkClick}>Blogs</Link>
                                </li>
                                <li>
                                <Link to="/homeopathy-corporate-camps/" onClick={handleLinkClick}>Corporates</Link>
                                </li>
                                <li>
                                <Link to="/contact-us/" onClick={handleLinkClick}>Contact Us</Link>
                                </li>
                            </ul>
                    </div>
            </nav>
                {/* Popup for offers */}
                {isPopupOpen && (
                    <div className="popup-overlay">
                        <div className="popup-container">
                            <button className="close-popup" onClick={closePopup} aria-label="Close popup">✖</button>
                            <h2>New Offers!</h2>
                            <img src={chiristmas} alt="" className='offerimage' />
                            <p>Limited Slots Available</p>
                            <div className="offerbtn">
                                <button onClick={openForm}>Claim Your Offer Now!</button>
                            </div>
                        </div>
                    </div>
                )}
                {isFormOpen && (
                <div className="form-overlay">
                    <div className="form-container">
                        <h2>Offer Appilicable Form</h2>
                        <form onSubmit={submit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    required
                    onChange={handle}
                    id="name"
                    value={data.name}
                />
            </label>

            <label>
                Phone Number:
                <input
                    type="tel"
                    name="phoneNo"
                    required
                    onChange={handle}
                    id="phoneNo"
                    value={data.phoneNo}
        //              pattern="^[0-9]{10}$"  
        // title="Phone number must be exactly 10 digits"
                />
            </label>

            

            <label>
                Email:
                <input
                    type="email"
                    name="emailId"
                    required
                    onChange={handle}
                    id="emailId"
                    value={data.emailId}
                />
            </label>

            <label>
                State:
                <input
                    type="text"
                    name="state"
                    required
                    onChange={handle}
                    id="state"
                    value={data.state}
                />
            </label>

            <label>
                Coupon Code:
                <div className="entercode">
                    <input
                        type="text"
                        name="couponCode"
                        required
                        onChange={handle}
                        id="couponCode"
                        value={data.couponCode}
                    />
                </div>
            </label>

            <label>
            <div className="generatecode">
                Coupon Code:
                <button
                    type="button"
                    onClick={() =>
                        setData(prevData => ({
                            ...prevData,
                            couponCode: 'HOFF30%'
                        }))
                    }
                >
                    Click here
                </button>
            </div>
            </label>

            <button type="submit">Submit</button>
            <button
                type="button"
                onClick={() => {
                    setIsFormOpen(false); // Close the form
                    setShowReopenButton(true); // Show the reopen button
                }}
            >
                Close
            </button>
        </form>

                      
                    </div>
                </div>
            )}
                      

            {showReopenButton && (
                <button
                    className="reopen-popup-button"
                    onClick={() => {
                        setIsFormOpen(true);
                        setShowReopenButton(false);
                    }}
                >
                    
                </button>
            )}
            </div>
        </>
    );
};

export default Header;