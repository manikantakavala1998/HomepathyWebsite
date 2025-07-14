import React from 'react';
import './doctors.css';
import { doctors } from "../../../utils/constant";
import bannerImage from '../../../assets/images/bannerfordoctors.png';
import { useEffect } from "react";
import favicon from "./../../../assets/images/favicon.ico";
const Doctors = () => {
  const handleCall = () => {
    // Replace with the phone number you want to call
    const phoneNumber = "+917411845662"; // Add your desired phone number with the country code
    window.location.href = `tel:${phoneNumber}`;
  };
   useEffect(() => {
      document.title = "Meet Our Expert Doctors | H-Cura Homeopathy Multispeciality Clinic";
      const metaDescription = document.querySelector("meta[name='description']");
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Get to know the expert doctors at H-Cura Homeopathy Clinic. Our experienced team provides personalized homeopathic and naturopathy treatments for a wide range of health concerns. Learn more about our specialists and their approach"
        );
      }
      const metaKeywords = document.querySelector("meta[name='keywords']");
      if (metaKeywords) {
        metaKeywords.setAttribute(
          "content",
          "Homeopathy Doctors in Bangalore, Homeopathy Doctors for Chronic Diseases, Top Homeopathy Doctors for Skin Treatments, Homeopathy Doctors for Anxiety and Stress, Homeopathy Doctors for Joint Pain, Renowned Homeopathy Doctors in Chennai, Homeopathy Doctors for Women's Health, Homeopathy Doctors for Cancer Support, Homeopathy Doctors for PCOS, Homeopathy Doctors for Allergies, Leading Homeopathy Doctors for Kidney Disorders, Homeopathy Doctors for Immune Support, Homeopathy Doctors Near Me, Homeopathy Doctors for Skin Issues, Homeopathy Doctors for Infertility Treatment."
        );
      }
       // Set canonical link
       const existingCanonical = document.querySelector("link[rel='canonical']");
       if (existingCanonical) {
         existingCanonical.setAttribute("href", "https://www.h-cura.com/doctors-list/");
       } else {
         const canonicalLink = document.createElement("link");
         canonicalLink.setAttribute("rel", "canonical");
         canonicalLink.setAttribute("href", "https://www.h-cura.com/doctors-list/");
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

  const handleBookingRedirect = () => {
    // Redirect to the Book Consultation page
    window.location.href = "/bookconsultation"; // Replace with your actual URL for the Book Consultation page
  };
 
  return (
    
    <div className="doctors-page">
        {/* Banner Section */}
        <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner-content">
        {/* <h1>Meet Our Expert Doctors</h1> */}
        
      </div>
    </div>

    <div className="meetourdoctors">
          <h2>Meet Our Homeopathy Doctors
          </h2>
          <p>
          Welcome to H-Cura Homeopathy, where our team of highly qualified and experienced doctors is dedicated to providing holistic and effective care for all your health needs. At our multispeciality homeopathy clinic, we believe that the right doctor can make all the difference in your healing journey. That’s why we’ve assembled a team of experts who are not only skilled in their fields but also compassionate in their approach.</p>
        </div>
      
   <div className="cards-container">
      {doctors.map((doctor) => (
        <div className="doctor-card" key={doctor.id}>
          <span className="card-rating">★ {doctor.rating}</span>
          <div className="card-content1">
            <div className="card-image1">
              <img src={doctor.image} alt={doctor.name} />
            </div>
            <div className="card-info">
              <h3>{doctor.name}</h3>
              <p>{doctor.address}</p>
              <p className="specialization">{doctor.specialization}</p>
            </div>
            <div className="card-actions">
            <button onClick={handleBookingRedirect}>Book Consultation</button>
            <button onClick={handleCall}>Make a Call</button>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="whyhcura">
       <div className="doctorsy">
       <h2>Why Choose Our Doctors?
       </h2>
       </div>
          <div className="hcurawhy">
          
         <div className="doctorslist">
            <p>
            <ul className="custom-list">
                        <li className="custom-item">
                            <span className="highlight-text">Experience & Expertise: </span> 
                             Our doctors have years of experience in diagnosing and treating various health conditions with homeopathic remedies.

                        </li>

                        <li className="custom-item">
                            <span className="highlight-text">Personalized Care: </span> 
                             Every patient is treated as an individual, with a treatment plan customized to their specific health needs.

                        </li>

                        <li className="custom-item">
                            <span className="highlight-text">Holistic Approach: </span> 
                             We treat the whole person, not just the symptoms. Our doctors incorporate homeopathy and naturopathy to promote overall health.

                        </li>

                        <li className="custom-item">
                            <span className="highlight-text">Patient-Centered Treatment: </span> 
                             Our doctors listen carefully, understand your concerns, and offer natural remedies that support your body’s innate ability to heal itself.

                        </li>

                       
                    </ul>
                    </p>
                    </div>
          </div>
          {/* <div className="whyhcuraimg">
            <img src={doctor} alt="" />
          </div> */}
        </div>
        <div className="consultour">
          <h2>Consult Our Experts Today
          </h2>
          <p>If you are looking for expert homeopathic care, our team at H-Cura Homeopathy is ready to help you achieve better health. Whether you're seeking treatment for chronic conditions, skin issues, mental health concerns, or looking for natural remedies for overall wellness, our doctors are here to guide you on your path to healing.</p>
          <button><a href="/bookconsultation">Book an appointment </a></button>
        </div>




    </div>
  );
};

export default Doctors;
