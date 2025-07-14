import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './whatsapp.css';

const WhatsAppChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userInfo, setUserInfo] = useState({ name: '', age: '', contact: '', issue: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // Automatically connect to a live agent immediately after submission
        setTimeout(() => {
            // Change the phone number as needed
            window.location.href = "tel:8309554582"; // Replace with preferred number
        }, 0); // Call immediately

        // You can add logic here to send the userInfo to your backend if needed
        console.log('User Info Submitted:', userInfo);
    };

    return (
        <div>
            <FaWhatsapp className="whatsapp-icon" onClick={() => setIsOpen(!isOpen)} />
            {isOpen && (
                <div className="chatbot-container">
                    <span className="close-btn" onClick={() => setIsOpen(false)}>&times;</span>
                    <h2>Welcome to H-Cura Homeopathy Hospital!</h2>
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="chat-form">
                            <input type="text" name="name" placeholder="Your Name" value={userInfo.name} onChange={handleChange} required />
                            <input type="number" name="age" placeholder="Your Age" value={userInfo.age} onChange={handleChange} required />
                            <input type="text" name="contact" placeholder="Your Contact" value={userInfo.contact} onChange={handleChange} required />
                            <textarea name="issue" placeholder="Describe Your Health Issue" value={userInfo.issue} onChange={handleChange} required />
                            <button type="submit">Submit</button>
                        </form>
                    ) : (
                        <div className="thank-you-message">
                            <p>Thank you for your submission!</p>
                            <p>You will be connected shortly.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default WhatsAppChatbot;
