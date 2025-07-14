import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Chennai.css";

const ChennaiClinic = () => {
  // const benefitsData = {
  //   "DR.HARIKRISHNA":
  //     "Our services are accessible to patients worldwide, making quality homeopathic care available to everyone.",
  //   "DR.BHARGAVI":
  //     "Online consultations eliminate travel costs and reduce healthcare expenses, making holistic healthcare more affordable.",
  //   "DR.PRIYANKA":
  //     "Easy follow-ups ensure continuity of treatment, improving overall results.",
  // };

  // const [activeBenefit, setActiveBenefit] = useState("DR.HARIKRISHNA");

const [activeDoctor, setActiveDoctor] = useState("DR.HARIKRISHNA");

  const doctorContent = {
    "DR.HARIKRISHNA": {
      title: "DR.HARIKRISHNA",
      specialty: "Chronic Diseases Specialist",
      description:
        "DR.HARIKRISHNA is an experienced homeopathic physician specializing in chronic diseases. With over 15 years of practice, she has successfully treated numerous cases of diabetes, arthritis, and respiratory conditions.",
      experience: "15+ years",
      expertise: [
        "Diabetes Management",
        "Arthritis Treatment",
        "Respiratory Disorders",
        "Chronic Pain Management",
      ],
    },
    "DR.BHARGAVI": {
      title: "DR.BHARGAVI",
      specialty: "Women's Health Expert",
      description:
        "DR.BHARGAVI specializes in women's health issues and has helped countless patients with PCOS, fertility issues, and hormonal imbalances using homeopathic treatments.",
      experience: "10+ years",
      expertise: [
        "PCOS Treatment",
        "Fertility Issues",
        "Hormonal Balance",
        "Pregnancy Care",
      ],
    },
    "DR.PRIYANKA": {
      title: "DR.PRIYANKA",
      specialty: "Skin & Hair Specialist",
      description:
        "DR.PRIYANKA is a renowned specialist in treating skin and hair conditions through homeopathy. Her expertise includes treating chronic skin conditions and hair loss problems.",
      experience: "12+ years",
      expertise: [
        "Skin Disorders",
        "Hair Loss Treatment",
        "Acne Management",
        "Psoriasis Care",
      ],
    },
    // "DR.VEENA": {
    //   title: "Dr. Veena",
    //   specialty: "Pediatric Care Expert",
    //   description:
    //     "Dr. Veena specializes in pediatric care and has extensive experience in treating children's health issues with gentle homeopathic remedies.",
    //   experience: "8+ years",
    //   expertise: [
    //     "Child Healthcare",
    //     "Growth & Development",
    //     "Behavioral Issues",
    //     "Immunity Boosting",
    //   ],
    // },
    // "DR.RENUKA": {
    //   title: "Dr. Renuka",
    //   specialty: "General Physician",
    //   description:
    //     "Dr. Renuka provides comprehensive treatment plans focusing on overall wellness and chronic disease management through homeopathy.",
    //   experience: "13+ years",
    //   expertise: [
    //     "Wellness Programs",
    //     "Chronic Disease Management",
    //     "Lifestyle Disorders",
    //     "Preventive Care",
    //   ],
    // },
  };


  
  return (
    // Inside ChennaiClinic.jsx, add this before the chen-clinic-wrapper div
    <div className="chen-page-layout">
      {/* Left Side Navigation */}
      <div className="chen-branch-nav">
        <h2 className="chen-nav-title">Chennai Branches</h2>
        <div className="chen-branch-links">
          <Link to="/homeopathy-clinic-in-madanandapuram-chennai/" className="chen-branch-link">
             GERUGAMBAKKAM  BRANCH
          </Link>
          <Link to="/homeopathy-clinic-in-valasaravakkam-chennai/" className="chen-branch-link">
            VALASARAVAKKAM  BRANCH
          </Link>
        </div>
      </div>

      
      <div className="chen-clinic-wrapper">
        {/* Header Section */}
        <div className="chen-header-section">
          <h1 className="chen-main-title">
            H-Cura Homeopathy Clinic - Chennai
          </h1>
          <p className="chen-main-subtitle">
            Your Trusted Destination for Holistic Healthcare in Chennai
          </p>
        </div>

        {/* Welcome Section */}
        <section className="clinic-intro">
          <h2>Welcome to H-Cura Homeopathy's Chennai Clinic</h2>

          <section className="chen-welcome-block">
            <div className="chen-welcome-content">
              <p className="chen-welcome-text">
                Welcome to H-Cura Homeopathy Clinic, your trusted destination
                for holistic and natural healthcare in Chennai. With two easily
                accessible locations in Gerugambakkam and Valasaravakkam, our
                Chennai clinics provide expert homeopathic care for a variety of
                health concerns. Whether you're seeking treatment for chronic
                illnesses, skin and hair problems, or lifestyle disorders,
                H-Cura Homeopathy delivers personalized solutions for
                long-lasting wellness.
              </p>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="chen-features-section">
            <h2 className="chen-section-title">
              Why Choose H-Cura Homeopathy in Chennai?
            </h2>
            <div className="chen-features-grid">
              <div className="chen-feature-card">
                <h3 className="chen-feature-title">
                  Prime Locations Across Chennai
                </h3>
                <br></br>
                <p className="chen-feature-text">
                  Our clinics in Gerugambakkam (near Kundrathur Main Road) and
                  Valasaravakkam make it convenient for patients across Chennai
                  to access quality care.
                </p>
              </div>
              <div className="chen-feature-card">
                <h3 className="chen-feature-title">
                  Top Homeopathic Specialists
                </h3>
                <br></br>{" "}
                <p className="chen-feature-text">
                  Our experienced doctors provide natural, safe, and effective
                  treatments for a wide range of conditions.
                </p>
              </div>
              <div className="chen-feature-card">
                <h3 className="chen-feature-title">
                  Modern and Patient-Friendly Clinics
                </h3>
                <br></br>{" "}
                <p className="chen-feature-text">
                  Equipped with advanced facilities and a comfortable
                  environment to ensure a seamless healthcare experience.
                </p>
              </div>
              <div className="chen-feature-card">
                <h3 className="chen-feature-title">
                  Personalized Homeopathy Treatments
                </h3>
                <br></br>{" "}
                <p className="chen-feature-text">
                  Customized plans for skin issues, respiratory problems,
                  chronic diseases, women’s health, and more.{" "}
                </p>
              </div>
              <div className="chen-feature-card1">
                <h3 className="chen-feature-title">
                  Trusted by Chennai Residents
                </h3>
                <br></br>
                <p className="chen-feature-text">
                  With a track record of successful treatments, we are one of
                  the most trusted homeopathy clinics in Chennai.{" "}
                </p>
              </div>
            </div>

            {/* Treatments Section */}
            <section className="chen-treatments-section">
              <h2 className="chen-section-title">
                Comprehensive Homeopathy Treatments at Our Chennai Clinics
              </h2>
              <p className="chen-treatments-intro">
                Our clinics in Gerugambakkam and Valasaravakkam provide a wide
                range of treatments, including:
              </p>
              <div className="chen-treatments-grid">
                <div className="chen-treatment-card">
                  <h3 className="chen-treatment-title">Skin & Hair Care</h3>
                  <ul className="chen-treatment-list">
                    <li>Acne Treatment</li>
                    <li>Eczema</li>
                    <li>Pigmentation</li>
                    <li>Hair Fall Solutions</li>
                    <li>Psoriasis Management</li>
                  </ul>
                </div>
                <div className="chen-treatment-card">
                  <h3 className="chen-treatment-title">Chronic Conditions</h3>
                  <ul className="chen-treatment-list">
                    <li>Solutions For Arthritis</li>
                    <li>Diabetes Care.</li>
                    <li>Thyroid Disorders.</li>
                    <li>Autoimmune diseases.</li>
                  </ul>
                </div>
                <div className="chen-treatment-card">
                  <h3 className="chen-treatment-title">Women's Health</h3>
                  <ul className="chen-treatment-list">
                    <li> Homeopathic Care For PCOS.</li>
                    <li>Menstrual Problems.</li>
                    <li>Hormonal Imbalance.</li>
                    <li>Infertility.</li>
                  </ul>
                </div>
                <div className="chen-treatment-card">
                  <h3 className="chen-treatment-title">Respiratory Issues</h3>
                  <ul className="chen-treatment-list">
                    <li>Relief From Asthma.</li>
                    <li>Sinusitis.</li>
                    <li>Bronchitis.</li>
                    <li>chronic cough.</li>
                  </ul>
                </div>

                <div className="chen-treatment-card">
                  <h3 className="chen-treatment-title">Mental Health</h3>
                  <ul className="chen-treatment-list">
                    <li>Effective treatment for anxiety.</li>
                    <li>Stress.</li>
                    <li>Depression.</li>
                    <li>Insomnia.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Doctors Section */}
            {/* <section className="chen-doctors-section3">
              <div className="benefits3">
                <h2>Expert Doctors at Our Chennai Clinics</h2>
                <p></p>

                <div className="benefitpoints3">
                  {Object.keys(benefitsData).map((benefit) => (
                    <h3
                      key={benefit}
                      onClick={() => setActiveBenefit(benefit)}
                      className={activeBenefit === benefit ? "active" : ""}
                    >
                      {benefit}
                    </h3>
                  ))}
                </div>

                {activeBenefit && (
                  <p className="benefit-description3">
                    {benefitsData[activeBenefit]}
                  </p>
                )}
              </div>
            </section> */}
            <section className="bangalore-doctors">
              <h1 className="bangalore-doctors-title">
                Expert Doctors at Our Chennai Clinics
              </h1>

              <div className="bangalore-doctors-tabs">
                {Object.keys(doctorContent).map((doctor) => (
                  <button
                    key={doctor}
                    className={`bangalore-doctor-tab ${
                      activeDoctor === doctor ? "active" : ""
                    }`}
                    onClick={() => setActiveDoctor(doctor)}
                  >
                    {doctor}
                  </button>
                ))}
              </div>

              <div className="bangalore-doctors-content">
                {doctorContent[activeDoctor] && (
                  <div className="bangalore-doctor-details">
                    <h2 className="bangalore-doctor-name">
                      {doctorContent[activeDoctor].title}
                    </h2>
                    <h3 className="bangalore-doctor-specialty">
                      {doctorContent[activeDoctor].specialty}
                    </h3>
                    <p className="bangalore-doctor-description">
                      {doctorContent[activeDoctor].description}
                    </p>
                    <div className="bangalore-doctor-experience">
                      Experience: {doctorContent[activeDoctor].experience}
                    </div>
                    <div className="bangalore-doctor-expertise">
                      <h4 className="bangalore-expertise-title">
                        Areas of Expertise:
                      </h4>
                      <ul className="bangalore-expertise-list">
                        {doctorContent[activeDoctor].expertise.map(
                          (item, index) => (
                            <li key={index} className="bangalore-expertise-item">
                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Locations Section */}
            <section className="chen-locations-section">
              <h2 className="chen-section-title">Our Locations</h2>
              <div className="chen-locations-grid">
                {/* Gerugambakkam Branch */}
                <div className="chen-location-card">
                  <h3 className="chen-location-title">Gerugambakkam Branch</h3>
                  <div className="chen-map-container">
                    <div className="chen-map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0876611681344!2d80.1674!3d13.0325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52611000000000%3A0x0!2zMTPCsDAyJzE3LjAiTiA4MMKwMTAnMDIuNiJF!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                        title="Gerugambakkam Branch Location"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                  <div className="chen-location-details">
                    <p>1668, sathyavanimuthu street,</p>
                    <p>Ramachandra Nagar, keezh colony</p>
                    <p>Gerugambakkam, Chennai,</p>
                    <p>Tamil Nadu 600128</p>
                  </div>
                </div>

                {/* Valasaravakkam Branch */}
                <div className="chen-location-card">
                  <h3 className="chen-location-title">Valasaravakkam Branch</h3>
                  <div className="chen-map-container">
                    <div className="chen-map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8876611681344!2d80.1774!3d13.0425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52611000000000%3A0x0!2zMTPCsDAyJzE3LjAiTiA4MMKwMTAnMDIuNiJF!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                        title="Valasaravakkam Branch Location"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                  <div className="chen-location-details">
                    <p>48, 1st Main Rd , Krishnamachari Nagar</p> 
                    <p> Valasaravakkam</p>
                    <p> Chennai, Tamil Nadu 600087</p>
                  </div>
                </div>

              </div>
            </section>

            {/*  */}
            {/* Why We Are the Best Section - Add this before your appointment section */}
            <section className="chen-best-section">
              <h2 className="chen-section-title">
                Why We Are the Best Homeopathy Clinic in Chennai
              </h2>
              <div className="chen-best-content">
                <p className="chen-best-description">
                  At H-Cura Homeopathy, we combine expertise, compassion, and
                  personalized care to provide effective treatments. As one of
                  the top homeopathy clinics in Chennai, we have helped
                  countless patients achieve better health naturally. From
                  consultation to recovery, we are committed to your well-being.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="chen-cta-section3">
              <h2 className="chen-cta-title3">Book Your Appointment Today</h2>
              <p className="chen-cta-text3">
                Take the first step toward a healthier life with H-Cura
                Homeopathy. Visit our clinics in Gerugambakkam or
                Valasaravakkam, Chennai, or book an online consultation for
                expert care wherever you are. Experience holistic healing and
                lasting results with H-Cura Homeopathy – your trusted homeopathy
                clinic in Chennai.
              </p>
              <br></br>
              <Link to="/bookconsultation" className="chen-cta-button3">
                Schedule Consultation
              </Link>
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};

export default ChennaiClinic;