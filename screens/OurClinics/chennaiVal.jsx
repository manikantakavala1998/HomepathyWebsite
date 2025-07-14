import "./chennaiVal.css";
import React, { useState } from "react";
import clinic1 from "../../../assets/images/hcurahomeopathyclinicinvalasaravakkam1.jpg";
import { Link } from "react-router-dom";

const ValasaravakkamClinic = () => {
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
  };

  const [activeDoctor, setActiveDoctor] = useState("DR.HARIKRISHNA");

  return (
    <div className="val-page-layout">
      {/* Left Side Navigation */}
      <div className="val-branch-nav">
        <h3 className="val-nav-title">Chennai Branches</h3>
        <div className="val-branch-links">
          <Link to="/homeopathy-clinic-in-chennai/" className="val-branch-link">
            CHENNAI BRANCH
          </Link>
          <Link
            to="/homeopathy-clinic-in-madanandapuram-chennai/"
            className="val-branch-link"
          >
             GERUGAMBAKKAM BRANCH
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="val-main-content">
        <article className="val-branch-container">
          <div className="val-branch-inner">
            {/* Header */}
            <header className="val-branch-header">
              <h1 className="val-branch-heading">
                Welcome to H-Cura Homeopathy – Your Trusted Homeopathy Clinic in
                Valasaravakkam, Chennai
              </h1>
              <p className="val-branch-tagline">
                Your Trusted Destination for Natural Health and Healing
              </p>
            </header>
          </div>

          {/* Content Wrapper */}
          <div className="val-branch-content">
            {/* Welcome Section */}
            <section className="val-welcome-block">
              <h2 className="val-welcome-heading">
                H-Cura Homeopathy Clinic in Valasaravakkam, Chennai
              </h2>
              <p className="val-welcome-text">
                We specialize in providing personalized, natural treatment
                solutions for a wide range of health concerns. Located in the
                heart of Valasaravakkam, Chennai, our clinic offers both online
                and offline consultations to cater to your wellness needs.
                Whether you're seeking treatment for chronic ailments, skin
                conditions, hormonal imbalances, or any other health issues, we
                are here to help you lead a healthier, more vibrant life.
              </p>
            </section>

            {/* Why Choose Section */}
            <section className="val-why-choose-section">
              <h2>Why Choose H-Cura Homeopathy in Valasaravakkam?</h2>
              <p className="val-features-list">
                At our Gerugambakkam clinic, we offer more than just treatment
                – we provide a holistic approach to health. Our team, led by
                renowned homeopaths like Dr. Samanvitha, focuses on
                individualized care that targets the root cause of your health
                concerns. Our clinic is dedicated to treating a variety of
                conditions, including:
              </p>
              <div className="val-features-grid">
                {/* Features Items */}
                <div className="val-features-row">
                  <div className="val-feature-item">
                    <div className="val-feature-icon1" />
                    <h3>Chronic Diseases</h3>
                    <p>
                      H-Cura Homeopathy Gerugambakkam, Chennai, offers holistic
                      homeopathic care for chronic diseases, focusing on
                      long-term relief and natural healing.
                    </p>
                  </div>
                  <div className="val-feature-item">
                    <div className="val-feature-icon1" />
                    <h3>Skin Conditions</h3>
                    <p>
                      H-Cura Homeopathy, Gerugambakkam, Chennai, offers
                      natural, effective treatments for skin conditions like
                      acne, eczema, and psoriasis, ensuring healthy, glowing
                      skin.
                    </p>
                  </div>
                </div>
                <div className="val-features-row">
                  <div className="val-feature-item">
                    <div className="val-feature-icon1" />
                    <h3>Hair Fall and Hair Treatment Solutions</h3>
                    <p>
                      H-Cura Homeopathy in Gerugambakkam, Chennai offers
                      effective, natural hair fall treatments using personalized
                      homeopathic solutions to promote healthy hair growth and
                      restore confidence.
                    </p>
                  </div>
                  <div className="val-feature-item">
                    <div className="val-feature-icon1" />
                    <h3>Weight Management and Fatty Liver</h3>
                    <p>
                      At H-Cura Homeopathy Gerugambakkam, Chennai, we provide
                      natural treatments for weight management and fatty liver.
                      Our homeopathic remedies help improve metabolism, reduce
                      liver fat, and promote overall health for effective weight
                      control and liver function.
                    </p>
                  </div>
                </div>
                <div className="val-feature-item">
                  <div className="val-feature-icon1" />
                  <h3>Infertility and PCOS/PCOD Treatment</h3>
                  <p>
                    H-Cura Homeopathy, Gerugambakkam, Chennai, offers effective
                    treatment for Infertility and PCOS/PCOD. Our natural
                    homeopathic remedies help balance hormones, regulate cycles,
                    and improve fertility, supporting your path to better
                    reproductive health.
                  </p>
                </div>
              </div>
            </section>

            {/* Treatments Section */}
            <section className="val-treatments-block">
              <h2 className="val-treatments-headings">
                What We Treat at Our Valasaravakkam, Chennai Clinic
              </h2>
              <div className="val-treatments-wrapper">
                <article className="val-treatment-box">
                  <h3 className="val-treatment-title">Skin & Hair Care</h3>
                  <ul className="val-treatment-list">
                    <li className="val-treatment-item">
                      Acne & Eczema Treatment
                    </li>
                    <li className="val-treatment-item">Hair Fall Solutions</li>
                    <li className="val-treatment-item">Psoriasis Management</li>
                    <li className="val-treatment-item">
                      Pigmentation Treatment
                    </li>
                  </ul>
                </article>
                <article className="val-treatment-box">
                  <h3 className="val-treatment-title">Chronic Conditions</h3>
                  <ul className="val-treatment-list">
                    <li className="val-treatment-item">Arthritis Management</li>
                    <li className="val-treatment-item">Thyroid Disorders</li>
                    <li className="val-treatment-item">Diabetes Care</li>
                    <li className="val-treatment-item">Autoimmune Diseases</li>
                  </ul>
                </article>
                <article className="val-treatment-box">
                  <h3 className="val-treatment-title">Women's Health</h3>
                  <ul className="val-treatment-list">
                    <li className="val-treatment-item">PCOS Treatment</li>
                    <li className="val-treatment-item">Menstrual Problems</li>
                    <li className="val-treatment-item">Fertility Support</li>
                    <li className="val-treatment-item">Hormonal Balance</li>
                  </ul>
                </article>
                <article className="val-treatment-box">
                  <h3 className="val-treatment-title">Respiratory Health</h3>
                  <ul className="val-treatment-list">
                    <li className="val-treatment-item">Bronchitis</li>
                    <li className="val-treatment-item">Sinusitis</li>
                    <li className="val-treatment-item">Chronic Cough</li>
                  </ul>
                </article>
                <article className="val-treatment-box">
                  <h3 className="val-treatment-title">Mental Health Support</h3>
                  <ul className="val-treatment-list">
                    <li className="val-treatment-item">
                      Holistic Care for Anxiety
                    </li>
                    <li className="val-treatment-item">Depression</li>
                    <li className="val-treatment-item">Stress</li>
                    <li className="val-treatment-item">Insomnia</li>
                  </ul>
                </article>
              </div>
            </section>

            {/* Doctors Section */}
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

            {/* Clinic Image */}
            <section className="val-clinic-section">
              <h2>Our Clinic Gallery</h2>
              <div className="val-clinic-image">
                <img
                  src={clinic1}
                  alt="Clinic View"
                  className="val-clinic-single-image"
                />
              </div>
            </section>

            {/* Map and Contact Section */}
            <section className="val-map-contact">
              <div className="val-map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.902869980286!2d80.16973060000001!3d13.0418542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52615c36adbb19%3A0x472a744277cc9342!2sH-Cura%20Homeopathy%20Clinic%2C%20Valasaravakkam%2C%20Chennai!5e0!3m2!1sen!2sin!4v1735041558514!5m2!1sen!2sin"
                  className="val-google-map"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="H-Cura Homeopathy Clinic Location"
                ></iframe>
              </div>
            </section>

            {/* Why We're the Best Section */}
            <div className="val-best-section">
              <h2 className="val-best-heading">
                Why We're the Best Homeopathy Clinic in Valasaravakkam, Chennai
              </h2>
              <div className="val-best-content">
                <p className="val-best-description">
                  Homeopathy is a time-tested, natural healing system that
                  focuses on treating the root causes of illnesses rather than
                  just the symptoms. At H-Cura Homeopathy, we believe in
                  providing gentle, yet effective remedies that enhance your
                  body's ability to heal itself. Our homeopathic treatments in
                  Valasaravakkam are personalized, ensuring that each patient
                  receives a treatment plan tailored to their unique health
                  concerns.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="val-cta-section">
              <h2 className="val-cta-title">Book Your Appointment Today</h2>
              <p className="val-cta-text">
                Our Valasaravakkam clinic is here to offer you the best
                homeopathy treatments in Chennai. Whether you're looking for
                natural healing options for chronic ailments or seeking holistic
                health solutions, H-Cura Homeopathy is your trusted partner on
                the path to wellness. For offline consultations in
                Valasaravakkam, book an appointment today or visit our clinic
                directly. We're here to guide you every step of the way toward
                better health and vitality!
              </p>
              <Link to="/bookconsultation" className="val-cta-button">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ValasaravakkamClinic;