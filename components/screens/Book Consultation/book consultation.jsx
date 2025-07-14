import React, { useState } from 'react';
import './bookconsultation.css';

function BookConsultation() {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        age: '',
        email: '',
        phone: '',
        whatsapp: '',
        helpText: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formData); // For debugging
    };

    return (
        <div className="page-container">
            <div className="form-container">
                <h2>Book Appointment</h2>
                <form onSubmit={handleSubmit}>
                    {/* Name Row */}
                    <div className="form-group">
                        <label>Name</label>
                        <div className="name-fields">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="middleName"
                                placeholder="Middle Name"
                                value={formData.middleName}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Gender Row */}
                    <div className="form-group">
                        <label>Gender</label>
                        <div className="gender-options">
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    onChange={handleChange}
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    onChange={handleChange}
                                />
                                Female
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    onChange={handleChange}
                                />
                                Others
                            </label>
                        </div>
                    </div>

                    {/* Age Row */}
                    <div className="form-group">
                        <label>Age</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email Row */}
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Phone Number Row */}
                    <div className="form-group phone-row">
                        <label>Phone Number</label>
                        <div className="phone-inputs">
                            <select name="countryCode" required>
                                <option value="">Select Country Code</option>
                                <option value="+1">+1 (USA)</option>
                                <option value="+44">+44 (UK)</option>
                                <option value="+91">+91 (India)</option>
                                {/* Add more country codes as needed */}
                            </select>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Phone Number"
                            />
                        </div>
                    </div>

                    {/* WhatsApp Number Row */}
                    <div className="form-group whatsapp-row">
                        <label>WhatsApp Number</label>
                        <div className="whatsapp-inputs">
                            <select name="whatsappCountryCode" required>
                                <option value="">Select Country Code</option>
                                <option value="+1">+1 (USA)</option>
                                <option value="+44">+44 (UK)</option>
                                <option value="+91">+91 (India)</option>
                                {/* Add more country codes as needed */}
                            </select>
                            <input
                                type="tel"
                                name="whatsapp"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                required
                                placeholder="WhatsApp Number"
                            />
                        </div>
                    </div>

                    {/* Help Text Row */}
                    <div className="form-group">
                        <label>How can we help you?</label>
                        <textarea
                            name="helpText"
                            value={formData.helpText}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="submit-buttonbtn">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default BookConsultation;
