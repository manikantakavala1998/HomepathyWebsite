import React, { useState,useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import './contactus.css'; // Import CSS for Contact Us page
import axios from 'axios';
import { API_CONFIG } from './../../../utils/config'; // Make sure to import the config
import LoadingBar from './../../screens/LoadingBar/LoadingBar'; // Import the LoadingBar component
import { ToastContainer, toast, cssTransition} from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import favicon from "./../../../assets/images/favicon.ico"

const ContactUs = () => {
    const [phoneNo, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('+91'); // Default country code
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Loading state for form submission
    const bounce = cssTransition({
        enter: "animate__animated animate__bounceIn",
        exit: "animate__animated animate__bounceOut",
      });
    const validatePhone = (value) => {
        const phonePattern = /^[0-9]{10}$/; // Simple regex for 10-digit phone numbers
        return phonePattern.test(value);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validatePhone(phoneNo)) {
            setError('Please enter a valid 10-digit phone number.');
            toast.error('Please enter a valid 10-digit phone number.', {
                position: 'top-center',
                hideProgressBar:true,
                autoClose: 3000,
                className: 'custom-toast',
            });
        } else {
            setError('');
            setLoading(true); // Show loading bar when submitting

            const formData = {
                name,
                emailId: email,
                phoneNo: `${countryCode} ${phoneNo}`,
                city,
                comment,
            };

            try {
                const response = await axios.post(
                    `${API_CONFIG.baseURL7001}${API_CONFIG.apiPath}${API_CONFIG.apiName.contactFormFilling}`,
                    formData
                );
                if (response.status === 200) {
                    // Show success toast with animation
                    toast.success('🎉 Form submitted successfully!', {
                        position: 'top-center',
                        transition: bounce,
                        autoClose: 3000,
                        className: 'custom-toast',
                    });

                    // Reset form
                    setPhone('');
                    setEmail('');
                    setName('');
                    setCity('');
                    setComment('');
                } else {
                    // Show error toast
                    toast.error('Failed to submit the form.', {
                        position: 'top-center',
                        transition: bounce,
                        autoClose: 3000,
                    
                    });
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                toast.error(
                    'Something went wrong. Please contact us at email: admin@h-cura.com.',
                    {
                        position: 'top-center',
                        transition:bounce,
                        autoClose: 3000,
        
                    }
                );
            } finally {
                setLoading(false); // Hide loading bar after submission
            }
        }        
                
    };
    useEffect(() => {
         document.title = "Contact H-Cura Homeopathy | Book Appointments & Inquire About Treatments";
         const metaDescription = document.querySelector("meta[name='description']");
         if (metaDescription) {
           metaDescription.setAttribute(
             "content",
             "Get in touch with H-Cura Homeopathy for expert homeopathic treatments. Book your consultation or ask about our multispeciality services. Our clinics are located in Chennai and Bangalore."
           );
         }
         const metaKeywords = document.querySelector("meta[name='keywords']");
         if (metaKeywords) {
           metaKeywords.setAttribute(
             "content",
             "Contact H-Cura Homeopathy, H-Cura Homeopathy phone number, H-Cura clinic address, Homeopathy clinic contact details, H-Cura Homeopathy email address, Book an appointment H-Cura, Homeopathy consultation contact, H-Cura Chennai contact information, Reach H-Cura Homeopathy clinic, Locate H-Cura clinics near me, H-Cura clinic operating hours, Call H-Cura Homeopathy clinic, Find H-Cura homeopathy clinic, H-Cura customer service contact, H-Cura clinic support."
           );
         }
          // Set canonical link
          const existingCanonical = document.querySelector("link[rel='canonical']");
          if (existingCanonical) {
            existingCanonical.setAttribute("href", "https://www.h-cura.com/contact-us/");
          } else {
            const canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            canonicalLink.setAttribute("href", "https://www.h-cura.com/contact-us/");
            document.head.appendChild(canonicalLink);
          }
          // Set favicon
       const existingFavicon = document.querySelector("link[rel='icon']");
       if (existingFavicon) {
         existingFavicon.setAttribute("href", favicon);
       } else {
         const faviconLink = document.createElement("link");
         faviconLink.setAttribute("rel", "icon");
         faviconLink.setAttribute("type", "image/x-icon");
         faviconLink.setAttribute("href", favicon);
         document.head.appendChild(faviconLink);
       }
       }, []);

    return (
        <div className="contact-container">
            <div className="contact-info">
                <h1>Contact Us</h1>
            </div>
            <div className="info-wrapper">
                <div className="info-item">
                    {/* Clickable phone icon using tel: link */}
                    <a href="tel:+91817938">
                        <FaPhoneAlt className="icon" />
                    </a>
                    <p className='bold'>Phone:</p>
                    <p>+91 8870 001 377</p>
                </div>
                <div className="info-item">
                    <a href='https://mail.google.com/mail/?view=cm&fs=1&to=narendrat091@gmail.com'>
                        <FaEnvelope className="icon" />
                    </a>
                    <p className='bold'>Email:</p>
                    <p>admin@h-cura.com</p>
                </div>
                <div className="info-item">
                    <a href="">
                        <FaCalendarAlt className="icon" />
                    </a>
                    <p className='bold'>Working Days:</p>
                    <p>Mon-Sun / 10 AM to 8 PM</p>
                </div>
            </div>

            <div className="image-appointment-wrapper">
                <div className="appointment-form">
                    <div className="formheading">
                        <h2>Make An Enquiry</h2>
                    </div>
                    <div className="formcontainer">
                    {loading && <LoadingBar />} {/* Show LoadingBar during form submission */}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:<span>*</span></label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    placeholder="Enter your name" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:<span>*</span></label>
                                <input 
                                    type="email" 
                                    id="emailId" 
                                    placeholder="Enter your email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number:<span>*</span></label>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <select
                                        value={countryCode}
                                        onChange={(e) => setCountryCode(e.target.value)}
                                        style={{ marginRight: '5px', padding: '8px', fontSize: 'small', border:'none'  }}
                                    >
                                        <option value="+91">+91 (India)</option>
                                        {/* Add more country codes as needed */}
                                    </select>
                                    <input
                                        type="text"
                                        id="phoneNo"
                                        placeholder="Enter your phone number"
                                        value={phoneNo}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                        style={{ flex: 1 }} // Allow input to take available space
                                    />
                                </div>
                                {error && <p className="error-message">{error}</p>} {/* Display error message */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City:</label>
                                <input 
                                    type="text" 
                                    id="city" 
                                    placeholder="Enter your city" 
                                    value={city} 
                                    onChange={(e) => setCity(e.target.value)} 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Description:<span>*</span></label>
                                <textarea 
                                    placeholder="How can we help you" 
                                    id="comment" 
                                    value={comment} 
                                    onChange={(e) => setComment(e.target.value)} 
                                    required
                                />
                            </div>
                            <div className="appointment-btn">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                        <ToastContainer /> {/* Add ToastContainer for toast notifications */}
                    </div>
                </div>
            </div>

            {/* Iframe for the map */}
            <div className="map-frame">
                <h2>Our Location</h2>
                <iframe
                    title="Clinic Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8564155194267!2d77.59308977484041!3d12.916948587393456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15806e5923b1%3A0x4bee30a7e1551886!2sH-Cura%20Homeopathy%20Clinic%2C%20Jayanagar%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1728972389091!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=" "
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactUs;
