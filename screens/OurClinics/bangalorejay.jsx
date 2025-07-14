import React, { useState } from "react";
import clinic1 from "../../../../src/assets/images/homeopathyjayanagarclinic.jpg";
import "./bangalorejay.css";
import { Link } from "react-router-dom";

const JayanagarBranch = () => {
  const [activeDoctor, setActiveDoctor] = useState("DR.JYOTI");

  const doctorContent = {
    "DR.JYOTI": {
      title: "Dr. Jyoti",
      specialty: "Chronic Diseases Specialist",
      description:
        "Dr. Jyoti is a highly experienced homeopath with over 9+ years of practice, recognized as a gold medalist in her field. She specializes in a variety of areas, including skin and hair conditions, male and female health issues, infertility, and respiratory problems. Additionally, she has expertise in managing health concerns related to aging, child health, and mental health.                               As a certified nutritionist, Dr. Jyoti integrates nutritional guidance into her treatment plans, ensuring a holistic approach to her patients' well-being. ",
      experience: "9+ years",
      expertise: [
        "Diabetes Management",
        "Arthritis Treatment",
        "Respiratory Disorders",
        "Chronic Pain Management",
        "Hair & Skin Specialist",
        "Male & female sexual health issues",
        "Mental health",
        "Paedeatric health issues",
        "Oldage health issues",
        "Infertility",
        "Dietician",
      ],
    },
    "DR.SPOORTHI": {
      title: "Dr. Spoorthi",
      specialty: "Women's Health Expert",
      description:
        "Dr. Spoorthi specializes in women's health issues and has helped countless patients with PCOS, fertility issues, and hormonal imbalances using homeopathic treatments.",
      experience: "7+ years",
      expertise: [
        "PCOS Treatment",
        "Fertility Issues",
        "Hormonal Balance",
        "Lifestyle Disorders",
        "Obesity",
        "Gastric Complaints",
      ],
    },
    "DR.SYED NELOFAR": {
      title: "DR.SYED NELOFAR",
      specialty: "Skin & Hair Specialist",
      description:
        "DR.Syed Nelofar is a renowned specialist in treating skin and hair conditions through homeopathy. Her expertise includes treating chronic skin conditions and hair loss problems.",
      experience: "6+ years",
      expertise: [
        "Hair Loss Treatment",
        "Renal Disorders",
        "Gastric Complaints",
        "Joint's Disorders",
        "Skin Disorders",

        "Female Disorders",
        "Respiratory Disorders",
      ],
    },
    "DR.VEENA": {
      title: "Dr. Veena",
      specialty: "Family physician",
      description:
        "Dr. Veena specializes in family care and has extensive experience in treating General/overall health issues with gentle homeopathic remedies.",
      experience: "6+ years",
      expertise: [
        "Child Healthcare",
        "Behavioral Issues",
        "Immunity Boosting",
        "Respiratory Condition",
        "Arthritis",
        "Allergic Condition",
        "Female Disorders",
        "Hormone Imbalance",

      ],
    },
    "DR.RENUKA ": {
      title: "Dr. Renuka",
      specialty: "General Physician",
      description:
        "Dr. Renuka provides comprehensive treatment plans focusing on overall wellness and chronic disease management through homeopathy.",
      experience: "13+ years",
      expertise: [
        "Gastric Complaints",
        "Gallbladder Complaints",
        "PCOD ",
        "Renal Complaint",

      ],
    },
  };

  return (
    <div className="jay-page-layout">
      {/* Left Side Navigation */}
      <div className="jay-branch-nav">
        <h3 className="jay-nav-title">Bangalore Branches</h3>
        <div className="jay-branch-links">
          <Link to="/homeopathy-clinic-in-bangalore/" className="jay-branch-link">
            BANGALORE - BRANCH
          </Link>
        </div>
      </div>
      {/* Wrap your existing article in this div */}
      <div className="jay-main-content">
        <article className="jay-branch-container">
          <div className="jay-branch-inner">
            {/* Header */}
            <header className="jay-branch-header">
              <h1 className="jay-branch-heading">
                H-Cura Homeopathy Clinic - Jayanagar Bangalore
              </h1>
              <p className="jay-branch-tagline">
                Your Trusted Destination for Natural Healthcare in Bangalore
              </p>
            </header>
          </div>
          {/* Content Wrapper */}
          <div className="jay-branch-content">
            {/* Welcome */}
            <section className="jay-welcome-block">
              <h2 className="jay-welcome-heading">
                Welcome to H-Cura Homeopathy Clinic
              </h2>
              <p className="jay-welcome-text">
                Welcome to H-Cura Homeopathy Clinic, your trusted destination
                for natural and holistic healthcare in Bangalore. Located in the
                heart of Jayanagar, our offline clinic is dedicated to providing
                personalized homeopathic treatments for various health concerns.
                Whether it’s managing chronic illnesses, improving skin and hair
                health, or addressing lifestyle-related conditions, we offer
                compassionate care and effective solutions for your well-being.
              </p>
            </section>
            {/* Features */}
            <section className="jay-why-choose-section">
              <h2>Why Choose Our Bangalore Clinic?</h2>
              <div className="jay-features-list">
                <div className="jay-features-grid">
                  {/* First Row */}
                  <div className="jay-features-row">
                    <div className="jay-feature-item">
                      <div className="jay-feature-icon1" />
                      <h3>Central Location</h3>
                      <p>
                        Our clinic is easily accessible for patients across
                        Bangalore, making it a convenient choice for quality
                        healthcare.
                      </p>
                    </div>
                    <div className="jay-feature-item">
                      <div className="jay-feature-icon1" />
                      <h3>Expert Team</h3>
                      <p>
                        With a team of skilled practitioners, we bring years of
                        expertise to treat various health issues naturally and
                        effectively.
                      </p>
                    </div>
                  </div>

                  {/* Second Row */}
                  <div className="jay-features-row">
                    <div className="jay-feature-item">
                      <div className="jay-feature-icon1" />
                      <h3>Comfortable Offline Clinic</h3>
                      <p>
                        Our Jayanagar clinic offers a welcoming and calming
                        environment, ensuring a stress-free healthcare
                        experience.
                      </p>
                    </div>
                    <div className="jay-feature-item">
                      <div className="jay-feature-icon1" />
                      <h3>Tailored Treatment Plans</h3>
                      <p>
                        We create customized solutions to address the root
                        causes of your health concerns, focusing on long-term
                        recovery and wellness.
                      </p>
                    </div>
                  </div>
                  <div className="jay-feature-item">
                    <div className="jay-feature-icon1" />
                    <h3>Trusted by Bangalore Families</h3>
                    <p>
                      Recognized as one of the most reliable homeopathy clinics
                      in Bangalore, we’ve earned the trust of countless families.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Treatments */}
            <section className="jay-treatments-block">
              <h2 className="jay-treatments-headings">
                What We Treat at Our Jayanagar Clinic
              </h2>
              <div className="jay-treatments-wrapper">
                <article className="jay-treatment-box">
                  <h3 className="jay-treatment-title">Skin & Hair Care</h3>
                  <ul className="jay-treatment-list">
                    <li className="jay-treatment-item">
                      Acne & Eczema Treatment
                    </li>
                    <li className="jay-treatment-item">Hair Fall Solutions</li>
                    <li className="jay-treatment-item">Psoriasis Management</li>
                    <li className="jay-treatment-item">
                      Pigmentation Treatment
                    </li>
                  </ul>
                </article>
                <article className="jay-treatment-box">
                  <h3 className="jay-treatment-title">Chronic Conditions</h3>
                  <ul className="jay-treatment-list">
                    <li className="jay-treatment-item">Arthritis Management</li>
                    <li className="jay-treatment-item">Thyroid Disorders</li>
                    <li className="jay-treatment-item">Diabetes Care</li>
                    <li className="jay-treatment-item">Autoimmune Diseases</li>
                  </ul>
                </article>
                <article className="jay-treatment-box">
                  <h3 className="jay-treatment-title">Women's Health</h3>
                  <ul className="jay-treatment-list">
                    <li className="jay-treatment-item">PCOS Treatment</li>
                    <li className="jay-treatment-item">Menstrual Problems</li>
                    <li className="jay-treatment-item">Fertility Support</li>
                    <li className="jay-treatment-item">Hormonal Balance</li>
                  </ul>
                </article>
                <article className="jay-treatment-box">
                  <h3 className="jay-treatment-title">Respiratory Health</h3>
                  <ul className="jay-treatment-list">
                    <li className="jay-treatment-item">Bronchitis</li>
                    <li className="jay-treatment-item">Sinusitis</li>
                    <li className="jay-treatment-item">Chronic Cough</li>
                  </ul>
                </article>
                <article className="jay-treatment-box">
                  <h3 className="jay-treatment-title">Mental Health Support</h3>
                  <ul className="jay-treatment-list">
                    <li className="jay-treatment-item">
                      Holistic Care for Anxiety
                    </li>
                    <li className="jay-treatment-item">Depression</li>
                    <li className="jay-treatment-item">Stress</li>
                    <li className="jay-treatment-item">Insomnia</li>
                  </ul>
                </article>
              </div>
            </section>

            {/* Doctors */}
            <section className="bangalore-doctors">
              <h1 className="bangalore-doctors-title">
                Expert Doctors at Our Bangalore Clinics
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

            <div className="bng-clinic-image">
              <img
                src={clinic1}
                alt="Clinic View"
                className="bng-image"
              />
            </div>

            <section className="jayanagar-map-contact">
              <div className="jayanagar-map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.855518904106!2d77.59318457341338!3d12.917006187393337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14d8dd315555%3A0x837b338b42d71825!2sH-Cura%20Homeopathy%20Clinic%2C%20Jayanagar%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1734589397892!5m2!1sen!2sin"
                  className="jayanagar-google-map"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="H-Cura Homeopathy Clinic in Jayanagar"
                ></iframe>
              </div>

              <div className="jayanagar-address-info">
                <div className="jayanagar-address-card">
                  <h3>H-Cura Homeopathy Clinic</h3>
                  <div className="jayanagar-address-content">
                    <div className="jayanagar-contact-details">
                      <p>No:779&780 2rd Floor, Sai Towers Building</p>
                      <p>South, EEnd Main Rd, opposite to Metro Pillar NO 92,</p>
                      <p>Corponation Colony, jayanagar 9th block</p>
                      <p>Bangalore, Karnataka 560069</p>
                    </div>
                    <div className="jayanagar-contact-timing">
                      <p>
                        <strong>Hours:</strong> Mon-Sat: 10:00 AM - 8:00 PM
                      </p>
                      <p>
                        <strong>Phone:</strong> +91 8870001377
                      </p>
                      <p>
                        <strong>Email:</strong> admin@hcuraclinic.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="jay-best-section">
              <h2 className="jay-best-heading">
                Why We're the Best Homeopathy Clinic in Bangalore
              </h2>
              <div className="jay-best-content">
                <p className="jay-best-description">
                  At H-Cura Homeopathy, we combine science, empathy, and natural
                  remedies to deliver exceptional healthcare. Our Jayanagar
                  clinic is known for its patient-first approach, making it one
                  of the most trusted offline homeopathy clinics in Bangalore.
                </p>
              </div>
            </div>

            <div className="jay-cta-section">
              <h2 className="jay-cta-title">Book Your Appointment Today</h2>
              <p className="jay-cta-text">
                Discover the power of homeopathy at H-Cura Homeopathy’s
                Jayanagar clinic. Our friendly team is here to guide you toward
                better health. Book your appointment now and experience holistic
                healing in a comfortable, offline setting.
              </p>
              <br></br>
              <Link to="/bookconsultation" className="jay-cta-button">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default JayanagarBranch;