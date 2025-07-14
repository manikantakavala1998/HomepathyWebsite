import "./Bangalore.css";
import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

const BangaloreLocations = () => {
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
  const [currentImageIndex, setCurrentImageIndex] = useState({
    Jayanagar: 0,
    Whitefield: 0,
  });

  const locations = useMemo(() => [
    {
      name: "Jayanagar",
      address: "No:779&780 2rd Floor, Sai Towers Building, South, E End Main Rd, opposite to Metro Pillar No 92, Corporation Colony, Jayanagara 9th Block, Jayanagar, Bengaluru, Karnataka 560069",
      images: [
        // require("../../../../src/assets/images/hcurahomeopathyjayanagaraclinic.jpg"),
        require("../../../../src/assets/images/homeopathyjayanagarclinic.jpg"),
        // require("../../../../src/assets/images/hcurahomeopathyclinicinjayanagar.jpg"),
        // require("../../../../src/assets/images/hcurahomeopathyclinicinvalasaravakkam5.jpg"),
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8554375130057!2d77.5931845739414!3d12.917011416075074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14d8dd315555%3A0x837b338b42d71825!2sH-Cura%20Homeopathy%20Clinic%2C%20Jayanagar%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1736335344712!5m2!1sen!2sin",
    },
    {
      name: "Whitefield",
      address: "coming soon",
      images: [
        require("../../../../src/assets/images/whitefieldhcurahomeopathyclinic.jpg"),
        
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8554375130057!2d77.5931845739414!3d12.917011416075074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14d8dd315555%3A0x837b338b42d71825!2sH-Cura%20Homeopathy%20Clinic%2C%20Jayanagar%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1736335344712!5m2!1sen!2sin",
    },
  ], []);

  useEffect(() => {
    const intervals = locations.map((location) => {
      return setInterval(() => {
        setCurrentImageIndex((prev) => ({
          ...prev,
          [location.name]: (prev[location.name] + 1) % location.images.length,
        }));
      }, 3000);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [locations]);

  return (
    <div className="bangalore-page-container">
      <div className="bangalore-side-nav">
        <h2 className="bangalore-side-title">Our Locations</h2>
        <div className="bangalore-nav-links">
          <Link
            to="/homeopathy-clinic-in-jayanagar-bangalore/"
            className="bangalore-nav-btn"
          >
            JAYANAGAR - BRANCH
          </Link>
          
        </div>
      </div>
      <div className="bangalore-main-content">
        {/* Main Header */}
        <div className="bangalore-main-header">
          <h1 className="bangalore-clinic-title">
            H-Cura Homeopathy Clinic - Bangalore
          </h1>
          <p className="bangalore-clinic-tagline">
            Your Trusted Partner in Holistic Healing
          </p>
        </div>

        {/* Welcome Section */}
        <div class="bangalore-welcome-section">
          <h2 class="bangalore-welcome-heading">
            Welcome to H-Cura Homeopathy's Bangalore Clinic
          </h2>
          <div class="bangalore-welcome-text">
            <p>
              Welcome to H-Cura Homeopathy’s Bangalore clinic, where holistic
              health and compassionate care come together. Conveniently located
              in Jayanagar, our Bangalore clinic is designed to provide a
              welcoming and healing environment for all our patients. Whether
              you’re seeking treatment for chronic conditions, skin and hair
              issues, or lifestyle disorders, our expert doctors are here to
              guide you every step of the way.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <section className="bangalore-features">
          <h2 className="bangalore-section-title">
            Why Choose Our Bangalore Clinic?
          </h2>
          <div className="bangalore-features-grid">
            <div className="bangalore-feature-card">
              <h3 className="bangalore-feature-title">Central Location</h3>
              <p className="bangalore-feature-description">
                Our Jayanagar clinic is easily accessible, with a peaceful
                setting that fosters healing and comfort.{" "}
              </p>
            </div>

            <div className="bangalore-feature-card">
              <h3 className="bangalore-feature-title">Expert Team</h3>
              <p className="bangalore-feature-description">
                The clinic is staffed by experienced homeopathic specialists who
                bring their vast expertise to treat a variety of health concerns{" "}
              </p>
            </div>

            <div className="bangalore-feature-card">
              <h3 className="bangalore-feature-title">
                State-of-the-Art Facilities
              </h3>
              <p className="bangalore-feature-description">
                Equipped with modern amenities and a patient-friendly design,
                our clinic ensures a seamless healthcare experience{" "}
              </p>
            </div>

            <div className="bangalore-feature-card">
              <h3 className="bangalore-feature-title">Holistic Treatments</h3>
              <p className="bangalore-feature-description">
                From acute ailments to chronic diseases, our treatments address
                the root cause and promote overall well-being{" "}
              </p>
            </div>

            <div className="bangalore-feature-card">
              <h3 className="bangalore-feature-title">Personalized Care</h3>
              <p className="bangalore-feature-description">
                We prioritize your health journey, offering tailored solutions
                to meet your specific needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bangalore-services">
          <h2 className="bangalore-section-title">
            Services Offered at Bangalore Clinic
          </h2>
          <div className="bangalore-services-grid">
            <div className="bangalore-service-card">
              <h3 className="bangalore-service-title">Skin & Hair Care</h3>
              <ul className="bangalore-service-list">
                <li className="bangalore-service-item">Acne Treatment</li>
                <li className="bangalore-service-item">Psoriasis Management</li>
                <li className="bangalore-service-item">Hair Fall Solutions</li>
              </ul>
            </div>

            <div className="bangalore-service-card">
              <h3 className="bangalore-service-title">Respiratory Health</h3>
              <ul className="bangalore-service-list">
                <li className="bangalore-service-item">Asthma Treatment</li>
                <li className="bangalore-service-item">Bronchitis Care</li>
                <li className="bangalore-service-item">Sinusitis Management</li>
              </ul>
            </div>

            <div className="bangalore-service-card">
              <h3 className="bangalore-service-title">Chronic Illnesses</h3>
              <ul className="bangalore-service-list">
                <li className="bangalore-service-item">Arthritis Treatment</li>
                <li className="bangalore-service-item">Thyroid Management</li>
                <li className="bangalore-service-item">
                  Autoimmune Conditions
                </li>
              </ul>
            </div>

            <div className="bangalore-service-card">
              <h3 className="bangalore-service-title">Women's Health</h3>
              <ul className="bangalore-service-list">
                <li className="bangalore-service-item">Expert care for PCOS</li>
                <li className="bangalore-service-item">Menstrual Issues</li>
                <li className="bangalore-service-item">infertility</li>
              </ul>
            </div>

            <div className="bangalore-service-card">
              <h3 className="bangalore-service-title">Mental Health</h3>
              <ul className="bangalore-service-list">
                <li className="bangalore-service-item">Holistic treatments</li>
                <li className="bangalore-service-item">Anxiety</li>

                <li className="bangalore-service-item">Depression</li>
                <li className="bangalore-service-item">Stress Management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
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

        {/* Location Details */}
        <section className="clinic-locations">
          <h2 className="section-title">Our Clinical Facilities</h2>

          <div className="locations-grid">
            {locations.map((location, index) => (
              <div key={index} className="location-card">
                <div className="location-content">
                  <div className="location-media">
                    <div className="image-section">
                      <h3 className="location-name">{location.name} Branch</h3>
                      <div className="image-carousel">
                        {location.images.map((image, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={image}
                            alt={`${location.name} clinic view ${imgIndex + 1}`}
                            className={`carousel-image ${
                              currentImageIndex[location.name] === imgIndex
                                ? "active"
                                : ""
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="location-info">
                      <div className="map-container">
                        <iframe
                          src={location.mapUrl}
                          className="map-frame"
                          title={`${location.name} clinic location`}
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                      <div className="address-container">
                        <div className="address-header">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>Location Details</span>
                        </div>
                        <p className="address-text">
                          {location.address.split("\n").map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bng-cta-section">
        <h2 className="bng-cta-title">Book Your Appointment Today</h2>
              <p className="bng-cta-text">
                Discover the power of homeopathy at H-Cura Homeopathy’s
                Jayanagar clinic. Our friendly team is here to guide you toward
                better health. Book your appointment now and experience holistic
                healing in a comfortable, offline setting.
              </p>
          {/* <button className="appointment-cta__button">
            Schedule Consultation
          </button> */}
          <Link to="/bookconsultation" className="bng-cta-button">
            Schedule Consultation
          </Link>
        </section>
      </div>
    </div>
  );
};

export default BangaloreLocations;