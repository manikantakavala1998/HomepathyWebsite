import "./chennaimadh.css";
import React, { useState } from "react";
import clinic1 from "../../../assets/images/H-CuraHomeopathyClinicMadanandapuramChennai.jpg";
import clinic2 from "../../../assets/images/H-CuraHomeopathyClinicinMadanandapuramChennai.jpg";
// import clinic3 from '../../../assets/images/clinic1.jpg';
// import clinic4 from '../../../assets/images/clinic1.jpg';
// import clinic5 from '../../../assets/images/clinic1.jpg';
import { Link } from "react-router-dom";

const MadanandapuramClinic = () => {
  // const benefitsData = {
  //   "DR.JHOTHI":
  //     "Our services are accessible to patients worldwide, making quality homeopathic care available to everyone.",
  //   "DR.SPOORTHI":
  //     "Online consultations eliminate travel costs and reduce healthcare expenses, making holistic healthcare more affordable.",
  //   "DR.NILOFER":
  //     "Easy follow-ups ensure continuity of treatment, improving overall results.",
  //   "DR.VENA":
  //     "Consult from the comfort of your home, eliminating the need for travel.",
  //   "DR.RENUKA":
  //     "Every patient receives a tailored treatment plan for their unique needs.",
  // };

  // const [activeBenefit, setActiveBenefit] = useState("DR.JHOTHI");
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
    // Add this at the beginning of your component's return statement
    <div className="man-page-layout">
      {/* Left Side Navigation */}
      <div className="man-branch-nav">
        <h3 className="man-nav-title">Chennai Branches</h3>
        <div className="man-branch-links">
          <Link to="/homeopathy-clinic-in-chennai/" className="man-branch-link">
            CHENNAI BRANCH
          </Link>

          <Link
            to="/homeopathy-clinic-in-valasaravakkam-chennai/"
            className="man-branch-link"
          >
            {" "}
            VALASARAVAKKAM BRANCH
          </Link>
        </div>
      </div>
      {/* 2 */}
      {/* Wrap your existing article in this div */}
      <div className="man-main-content">
        <article className="man-branch-container">
          <div className="man-branch-inner">
            {/* Header */}
            <header className="man-branch-header">
              <h1 className="man-branch-heading">
                H-Cura Homeopathy Clinic - Gerugambakkam, Chennai
              </h1>
              <p className="man-branch-tagline">
                Your Trusted Destination for Natural Health and Healing
              </p>
            </header>
          </div>
          {/* 3 */}
          {/* Content Wrapper */}
          <div className="man-branch-content">
            {/* Welcome */}
            <section className="man-welcome-block">
              <br></br>
              <h2 className="man-welcome-heading">
                Welcome to H-Cura Homeopathy Clinic in Gerugambakkam, Chennai
              </h2>
              <p className="man-welcome-text">
                Welcome to H-Cura Homeopathy Clinic in Gerugambakkam, Chennai,
                where we provide effective and personalized homeopathic
                treatment for a wide range of health conditions. Whether you're
                dealing with chronic ailments, or skin issues, or seeking
                natural remedies for better overall health, our team of
                experienced homeopathic doctors is here to help you achieve your
                wellness goals.
              </p>
            </section>
            {/* 4 */}
            {/* Features */}
            <section className="man-why-choose-section">
              <h2>Why Choose H-Cura Homeopathy in Gerugambakkam, Chennai?</h2>
              <p className="man-features-list">
                At our Gerugambakkam clinic, we offer more than just treatment
                – we provide a holistic approach to health. Our team, led by
                renowned homeopaths like Dr. Samanvitha, focuses on
                individualized care that targets the root cause of your health
                concerns. Our clinic is dedicated to treating a variety of
                conditions, including:
              </p>
              <div className="man-features-grid">
                {/* First Row */}
                <div className="man-features-row">
                  <div className="man-feature-item">
                    <div className="man-feature-icon1" />
                    <h3>Chronic Diseases</h3>
                    <p>
                      H-Cura Homeopathy Gerugambakkam, Chennai, offers holistic
                      homeopathic care for chronic diseases, focusing on
                      long-term relief and natural healing.
                    </p>
                  </div>
                  <div className="man-feature-item">
                    <div className="man-feature-icon1" />
                    <h3>Skin Conditions</h3>
                    <p>
                      H-Cura Homeopathy, Gerugambakkam, Chennai, offers
                      natural, effective treatments for skin conditions like
                      acne, eczema, and psoriasis, ensuring healthy, glowing
                      skin.
                    </p>
                  </div>
                </div>

                {/* Second Row */}
                <div className="man-features-row">
                  <div className="man-feature-item">
                    <div className="man-feature-icon1" />
                    <h3>Hair Fall and Hair Treatment Solutions</h3>
                    <p>
                      H-Cura Homeopathy in Gerugambakkam, Chennai offers
                      effective, natural hair fall treatments using personalized
                      homeopathic solutions to promote healthy hair growth and
                      restore confidence.
                    </p>
                  </div>
                  <div className="man-feature-item">
                    <div className="man-feature-icon1" />
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
                <div className="man-feature-item">
                  <div className="man-feature-icon1" />
                  <h3>Infertility and PCOS/PCOD Treatment</h3>
                  <p>
                    {" "}
                    H-Cura Homeopathy, Gerugambakkam, Chennai, offers effective
                    treatment for Infertility and PCOS/PCOD. Our natural
                    homeopathic remedies help balance hormones, regulate cycles,
                    and improve fertility, supporting your path to better
                    reproductive health.
                  </p>
                </div>
              </div>
              {/* </div>        */}
            </section>

            {/* Treatments */}
            {/* 5 */}
            <section className="man-treatments-block">
              <h2 className="man-treatments-headings">
                What We Treat at Our Gerugambakkam, Chennai Clinic
              </h2>
              <div className="man-treatments-wrapper">
                <article className="man-treatment-box">
                  <h3 className="man-treatment-title">Skin & Hair Care</h3>
                  <ul className="man-treatment-list">
                    <li className="man-treatment-item">
                      Acne & Eczema Treatment
                    </li>
                    <li className="man-treatment-item">Hair Fall Solutions</li>
                    <li className="man-treatment-item">Psoriasis Management</li>
                    <li className="man-treatment-item">
                      Pigmentation Treatment
                    </li>
                  </ul>
                </article>
                <article className="man-treatment-box">
                  <h3 className="man-treatment-title">Chronic Conditions</h3>
                  <ul className="man-treatment-list">
                    <li className="man-treatment-item">Arthritis Management</li>
                    <li className="man-treatment-item">Thyroid Disorders</li>
                    <li className="man-treatment-item">Diabetes Care</li>
                    <li className="man-treatment-item">Autoimmune Diseases</li>
                  </ul>
                </article>
                <article className="man-treatment-box">
                  <h3 className="man-treatment-title">Women's Health</h3>
                  <ul className="man-treatment-list">
                    <li className="man-treatment-item">PCOS Treatment</li>
                    <li className="man-treatment-item">Menstrual Problems</li>
                    <li className="man-treatment-item">Fertility Support</li>
                    <li className="man-treatment-item">Hormonal Balance</li>
                  </ul>
                </article>
                <article className="man-treatment-box">
                  <h3 className="man-treatment-title">Respiratory Health</h3>
                  <ul className="man-treatment-list">
                    <li className="man-treatment-item">Bronchitis</li>
                    <li className="man-treatment-item">sinusitis</li>
                    <li className="man-treatment-item">chronic Cough</li>
                  </ul>
                </article>
                <article className="man-treatment-box">
                  <h3 className="man-treatment-title">Mental Health Support</h3>
                  <ul className="man-treatment-list">
                    <li className="man-treatment-item">
                      Holistic Care for Anxiety
                    </li>
                    <li className="man-treatment-item">Depression</li>
                    <li className="man-treatment-item">Stress</li>
                    <li className="man-treatment-item">Insomnia</li>
                  </ul>
                </article>
                <article className="man-treatment-box">
                  <h3 className="man-treatment-title">Mental Health Support</h3>
                  <ul className="man-treatment-list">
                    <li className="man-treatment-item">
                      Holistic Care for Anxiety
                    </li>
                    <li className="man-treatment-item">Depression</li>
                    <li className="man-treatment-item">Stress</li>
                    <li className="man-treatment-item">Insomnia</li>
                  </ul>
                </article>
              </div>
            </section>
            {/* </section> */}
            {/* 6 */}
            {/* Doctors */}
            {/* <section className="man-doctors-section">
              <div className="man-benefits2">
                <h2>Expert Doctors at Our Gerugambakkam, Chennai Clinics</h2>
                <div className="man-benefitpoints2">
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
                  <p className="man-benefit-description2">
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
                            <li
                              key={index}
                              className="bangalore-expertise-item"
                            >
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

            {/* 7 */}
            <div className="madhanandapuram-slider">
              <div className="madhanandapuram-slider-wrapper">
                {[clinic1, clinic2].map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Clinic View ${index + 1}`}
                    className="madhanandapuram-slider-image"
                  />
                ))}
              </div>
            </div>

            <section className="madhanandapuram-map-contact">
              <div className="madhanandapuram-map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.20568249492!2d80.14357607394321!3d13.022570113761056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526114605d5921%3A0x956d0577ffd1cbca!2sH-Cura%20Homeopathy%20Clinic%20in%20Madhanandapuram%2C%20Chennai!5e0!3m2!1sen!2sin!4v1735041679127!5m2!1sen!2sin"
                  className="madhanandapuram-google-map"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="H-Cura Homeopathy Clinic in Gerugambakkam, Chennai"
                />
              </div>

              {/* <div className="man-address-info">
                <div className="man-address-card">
                  <h3>H-Cura Homeopathy Clinic</h3>
                  <div className="man-address-content">
                    <div className="man-contact-details">
                      <p>30th Cross, Near Jain Temple</p>
                      <p>4th Block, Jayanagar</p>
                      <p>Bangalore - 560041</p>
                      <p>Karnataka, India</p>
                    </div>
                    <div className="man-contact-timing">
                      <p>
                        <strong>Hours:</strong> Mon-Sat: 9:00 AM - 8:00 PM
                      </p>
                      <p>
                        <strong>Phone:</strong> +91 98765 43210
                      </p>
                      <p>
                        <strong>Email:</strong> info@hcuraclinic.com
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </section>

            {/* 9 */}
            {/* Why We're the Best Section */}
            <div className="man-best-section">
              <h2 className="man-best-heading">
                Why We're the Best Homeopathy Clinic in Gerugambakkam, Chennai
              </h2>
              <div className="man-best-content">
                <p className="man-best-description">
                  Homeopathy is a time-tested, natural healing system that
                  focuses on treating the root causes of illnesses rather than
                  just the symptoms. At H-Cura Homeopathy, we believe in
                  providing gentle, yet effective remedies that enhance your
                  body's ability to heal itself. Our homeopathic treatments in
                  Gerugambakkam are personalized, ensuring that each patient
                  receives a treatment plan tailored to their unique health
                  concerns.
                </p>
              </div>
            </div>
            {/* 10 */}
            {/* Contact */}

            <div className="man-cta-section">
              <h2 className="man-cta-title">Book Your Appointment Today</h2>
              <p className="man-cta-text">
                Our Gerugambakkam clinic is here to offer you the best
                homeopathy treatments in Chennai. Whether you're looking for
                natural healing options for chronic ailments or seeking holistic
                health solutions, H-Cura Homeopathy is your trusted partner on
                the path to wellness. For offline consultations in
                Gerugambakkam, book an appointment today or visit our clinic
                directly. We're here to guide you every step of the way toward
                better health and vitality!
              </p>
              <br></br>
              <Link to="/bookconsultation" className="man-cta-button">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default MadanandapuramClinic;
