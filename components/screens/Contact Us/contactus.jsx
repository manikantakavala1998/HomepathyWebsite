import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import './contactus.css'; // Import CSS for Contact Us page

const ContactUs = () => {
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('+91'); // Default country code
    const [error, setError] = useState('');

    const validatePhone = (value) => {
        const phonePattern = /^[0-9]{10}$/; // Simple regex for 10-digit phone numbers
        return phonePattern.test(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validatePhone(phone)) {
            setError('Please enter a valid 10-digit phone number.');
        } else {
            setError('');
            // Handle form submission (e.g., send data to server)
            alert('Form submitted successfully!');
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-info">
                <h2>Contact Us</h2>
            </div>
            <div className="info-wrapper">
                <div className="info-item">
                    {/* Clickable phone icon using tel: link */}
                    <a href="tel:+91817938">
                        <FaPhoneAlt className="icon" />
                    </a>
                    <p className='bold'>Phone:</p>
                    <p>+91 8309 554 582</p>
                </div>
                <div className="info-item">
                   <a href='https://mail.google.com/mail/?view=cm&fs=1&to=narendrat091@gmail.com'> <FaEnvelope className="icon" /></a>
                <p className='bold'>Email:</p>
                    <p>admin@h-cura.com</p>
                    
                </div>
                <div className="info-item">
                   <a href=""> <FaCalendarAlt className="icon" /></a>
                    <p className='bold'>Working Days:</p>
                    <p>Mon-Sun / 10 AM to 8 PM</p>
                </div>
            </div>

            <div className="image-appointment-wrapper">
                <div className="appointment-form">
                    <div className="formheading">
                        <h2>Make An Appointment</h2>
                    </div>
                    <div className="formcontainer">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input style={{}} type="text" id="name" placeholder="Enter your name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" placeholder="Enter your email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number:</label>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <select 
                                        value={countryCode} 
                                        onChange={(e) => setCountryCode(e.target.value)} 
                                        style={{ marginRight: '5px', padding: '8px', fontSize: 'small', border:'none'  }}
                                    >
                                        <option value="+91">+91 (India)</option>
                                        <option value="+1">+11 (USA)</option>
                                        <option value="+44">+44 (UK)</option>
                                        <option value="+61">+61 (Australia)</option>
                                        {/* Add more country codes as needed */}
                                    </select>
                                    <input
                                        type="text"
                                        id="phone"
                                        placeholder="Enter your phone number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                        style={{ flex: 1 }} // Allow input to take available space
                                    />
                                </div>
                                {error && <p className="error-message">{error}</p>} {/* Display error message */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City:</label>
                                <input type="text" id="city" placeholder="Enter your city" required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="How can we help you" id="message" required></textarea>
                            </div>
                            <div className="appointment-btn">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
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
