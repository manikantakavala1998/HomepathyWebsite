import React, { useEffect, useState } from "react";
import "./hydrafacial.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import heroImage from "../../../assets/images/ad-laserhairremoval.jpg";
import heroImage1 from "../../../assets/images/ad-laserhairremoval1.jpg";

import deepCleansingIcon from "../../../assets/images/deep-cleansing.png";
import enhancedHydrationIcon from "../../../assets/images/enhanced-hydration.png";
import skinRenewalIcon from "../../../assets/images/skin-renewal.png";
import nonInvasiveIcon from "../../../assets/images/non-invasive.png";
// Import PNG icons for navigation treatments
import hydrafacialIcon from "../../../assets/images/botox.png";
import acneIcon from "../../../assets/images/navacne.png";
import skinBrighteningIcon from "../../../assets/images/skin-brightening.png";
import antiAgeingIcon from "../../../assets/images/anti-ageing.png";
import youthIcon from "../../../assets/images/youth.png";
import prpFaceIcon from "../../../assets/images/prpface.png";
import co2FacialIcon from "../../../assets/images/co2.png";
import acneScarIcon from "../../../assets/images/acnescar.png";
import moleBirthMarkIcon from "../../../assets/images/wart.png";
import tattoRemovalIcon from "../../../assets/images/tattoo.png";
import wartsRemovalIcon from "../../../assets/images/blackhead.png";
import antiAgeingLaserIcon from "../../../assets/images/laser.png";
import laserHairRemovalIcon from "../../../assets/images/laserHairRemoval.png";
import favicon from "../../../assets/images/favicon.ico";

const treatments = [
  { name: "ADVANCED HYDRAFACIAL" },
  { name: "ACNE" },
  { name: "ANTI AGEING" },
  { name: "YOUTH" },
  { name: "PRP FACE" },
  { name: "CO2 FACIAL" },
  { name: "ACNE SCAR" },
  { name: "MOLE & BIRTH MARK REMOVAL" },
  { name: "SKIN BRIGHTENING" },
  { name: "TATTO REMOVAL" },
  { name: "WARTS REMOVAL" },
  { name: "ANTI AGEING LASER" },
  { name: "LASER HAIR REMOVAL" },
];

// Mapping treatment names to their PNG icons
const treatmentIconPNGMap = {
  "ADVANCED HYDRAFACIAL": hydrafacialIcon,
  "ACNE": acneIcon,
  "SKIN BRIGHTENING": skinBrighteningIcon,
  "ANTI AGEING": antiAgeingIcon,
  YOUTH: youthIcon,
  "PRP FACE": prpFaceIcon,
  "CO2 FACIAL": co2FacialIcon,
  "ACNE SCAR": acneScarIcon,
  "MOLE & BIRTH MARK REMOVAL": moleBirthMarkIcon,
  "TATTO REMOVAL": tattoRemovalIcon,
  "WARTS REMOVAL": wartsRemovalIcon,
  "ANTI AGEING LASER": antiAgeingLaserIcon,
  "LASER HAIR REMOVAL": laserHairRemovalIcon,
};

// Add this after your treatmentIconPNGMap
const treatmentUrlMap = {
  "ADVANCED HYDRAFACIAL": "/advanced-hydrafacial-treatment",
  "ACNE": "/advanced-acne-treatment",
  "ANTI AGEING": "/advanced-anti-ageing-treatment",
  "YOUTH": "/advanced-youth-treatment",
  "PRP FACE": "/advanced-prp-face-treatment",
  "CO2 FACIAL": "/advanced-co2-facial-treatment",
  "ACNE SCAR": "/advanced-acne-scar-treatment",
  "MOLE & BIRTH MARK REMOVAL": "/advanced-mole-birth-mark-removal-treatment",
  "SKIN BRIGHTENING": "/advanced-skin-brightening-treatment",
  "TATTO REMOVAL": "/advanced-tatto-removal-treatment",
  "WARTS REMOVAL": "/advanced-warts-removal-treatment",
  "ANTI AGEING LASER": "/advanced-anti-ageing-laser-treatment",
  "LASER HAIR REMOVAL": "/advanced-laser-hair-removal-treatment",
};

// Define the gallery images
const images = [
  { src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80", alt: "Before and After Results" },
  { src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80", alt: "laserhairremoval Procedure Close-Up" },
  { src: "https://images.unsplash.com/photo-1606206522398-de3bd05b1615?q=80", alt: "Advanced laserhairremoval Equipment" },
];

function TreatmentNav() {
  const [activeTab, setActiveTab] = useState("LASER HAIR REMOVAL");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Set activeTab based on the current URL
    const pathSegments = location.pathname.split("/");
    const treatmentPath = pathSegments[pathSegments.length - 1];
    
    // Find the treatment that matches the current URL
    const currentTreatment = Object.entries(treatmentUrlMap).find(
      ([name, url]) => url.includes(treatmentPath)
    );
    
    if (currentTreatment) {
      setActiveTab(currentTreatment[0]);
    }
  }, [location.pathname]);

  const renderTreatmentIcon = (name) => {
    return treatmentIconPNGMap[name] ? (
      <img
        src={treatmentIconPNGMap[name]}
        alt={name}
        style={{ width: "100px", height: "100px" }}
      />
    ) : null;
  };

  const handleCardClick = (name) => {
    setActiveTab(name);
    navigate(treatmentUrlMap[name]);
  };

  return (
    <div className="ads-treatment-nav-container">
      <h2>Innovative Laser Hair Removal Solutions</h2>
      <div className="ads-treatment-nav-cards">
        {treatments.map(({ name }) => (
          <div
            key={name}
            className={`ads-treatment-nav-card ${activeTab === name ? "active" : ""}`}
            onClick={() => handleCardClick(name)}
          >
            <div className="ads-card-icon">
              {renderTreatmentIcon(name)}
            </div>
            <div className="ads-card-title">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


function Laserhairremoval() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const steps = document.querySelectorAll(".ads-process-step");
    steps.forEach((step, index) => {
      step.style.setProperty("--index", index);
      step.style.opacity = "1";
    });
  }, []);

  useEffect(() => {
    document.title = "Laser Hair Removal Services - Safe & Effective Solutions";
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Experience our advanced laser hair removal treatments for long-lasting results. Our safe, effective technology provides permanent hair reduction with minimal discomfort. Book your consultation today."
      );
    }
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "laser hair removal, permanent hair reduction, hair removal treatment, unwanted hair, smooth skin, painless hair removal, laser treatment, professional hair removal, hair free skin, laser technology, safe hair removal, effective hair removal, long-lasting results, hair reduction, laser clinic, body hair removal, facial hair removal, bikini line, underarm hair removal, laser specialist"
      );
    }
    // Set canonical link
    // Inside the first useEffect in Laserhairremoval component
const existingCanonical = document.querySelector("link[rel='canonical']");
if (existingCanonical) {
  existingCanonical.setAttribute(
    "href",
    "https://www.h-cura.com/home/advanced-laser-hair-removal-treatment"
  );
} else {
  const canonicalLink = document.createElement("link");
  canonicalLink.setAttribute("rel", "canonical");
  canonicalLink.setAttribute(
    "href",
    "https://www.h-cura.com/home/advanced-laser-hair-removal-treatment"
  );
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

  const openModal = (image) => {
    const index = images.findIndex(img => img.src === image.src);
    setCurrentImageIndex(index);
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const navigatePrevious = (e) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
    setModalImage(images[newIndex]);
  };

  const navigateNext = (e) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
    setModalImage(images[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      if (e.key === 'ArrowLeft') {
        
      } else if (e.key === 'ArrowRight') {
       
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentImageIndex]);

  // Define process steps array
  const processSteps = [
    {
      step: "01",
      title: "In-Depth Consultation",
      desc: "Kick off your journey with a thorough consultation to assess your skin and needs.",
      details: [
        "Detailed skin analysis",
        "Personal health review",
        "Customized treatment roadmap",
        "Expectation setting",
      ],
      icon: "🔍",
    },
    {
      step: "02",
      title: "Expert Medical Team",
      desc: "Our board-certified specialists provide personalized care tailored to your skin.",
      details: [
        "Highly experienced professionals",
        "Individual consultations",
        "Focused attention to detail",
      ],
      icon: "👨‍⚕",
    },
    {
      step: "03",
      title: "Customized Therapy",
      desc: "Every treatment plan is designed specifically for your skin type and concerns.",
      details: [
        "Tailored sessions",
        "Ongoing progress monitoring",
        "Optimized treatment frequency",
      ],
      icon: "🎯",
    },
    {
      step: "04",
      title: "Natural-Looking Results",
      desc: "Achieve visible, natural skin improvement with our gentle, effective treatments.",
      details: [
        "Subtle enhancements",
        "Long-lasting benefits",
        "Effortless aesthetics",
      ],
      icon: "✨",
    },
  ];

  // Define benefits array
  const benefits = [
    {
      icon: "🔬",
      title: "State-of-the-Art Technology",
      desc: "We deploy the latest in laser hair removal treatment technology for precise and effective results.",
      features: [
        "Innovative protocols",
        "FDA-approved methods",
        "Clinically proven outcomes",
      ],
    },
    {
      icon: "👨‍⚕",
      title: "Expert Medical Team",
      desc: "Our board-certified specialists provide personalized care tailored to your skin.",
      features: [
        "Highly experienced professionals",
        "Individual consultations",
        "Focused attention to detail",
      ],
    },
    {
      icon: "🎯",
      title: "Customized Therapy",
      desc: "Every treatment plan is designed specifically for your skin type and concerns.",
      features: [
        "Tailored sessions",
        "Ongoing progress monitoring",
        "Optimized treatment frequency",
      ],
    },
    {
      icon: "✨",
      title: "Natural-Looking Results",
      desc: "Achieve visible, natural skin improvement with our gentle, effective treatments.",
      features: [
        "Subtle enhancements",
        "Long-lasting benefits",
        "Effortless aesthetics",
      ],
    },
    {
      icon: "🛡",
      title: "Safety First",
      desc: "We maintain the highest standards of safety and hygiene in our treatment facilities.",
      features: [
        "Medical-grade environment",
        "Strict protocols",
        "Patient-centric care",
      ],
    },
    {
      icon: "💯",
      title: "Proven Success",
      desc: "Join thousands of happy clients who have transformed their skin with our solutions.",
      features: [
        "Over 5000 satisfied clients",
        "Remarkable clinical outcomes",
        "Consistently high success rates",
      ],
    },
  ];

  return (
    <div className="ads-wrapper">
      <TreatmentNav />
      <section
        className="ads-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,
        }}
      >
        <div className="ads-hero-content">
          <h1 className="ads-hero-title">
            Innovative laser hair removal Solutions for Radiant Skin
          </h1>
          <p className="ads-hero-text">
            Experience cutting-edge laser hair removal therapies designed to
            cleanse, rejuvenate, and transform your skin.
          </p>
          <Link
            to="/bookconsultation"
            style={{ textDecoration: "none" }}
            className="ads-cta-button"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      <section className="ads-treatment-section" id="treatments">
        <div className="ads-treatment-container">
          <div className="ads-treatment-nav">
            <h2>Revitalize Your Skin with laser hair removal</h2>
            <p className="ads-nav-description">
              Our laser hair removal treatment combines advanced technology with
              nourishing ingredients for optimal skin health.
            </p>

            <ul className="ads-treatment-list">
              <li className="ads-treatment-item">
                <strong>HYDRAFACIAL</strong>
                <p>Thoroughly cleanses and purifies your skin.</p>
                <ul className="ads-treatment-details">
                  <li>Improves Skin Texture and Tone</li>
                  <li>Reduces Fine Lines and Wrinkles</li>
                  <li>Minimized pores and make glowing skin</li>
                </ul>
              </li>
              <li className="ads-treatment-item">
                <strong>ACNE TREATMENT</strong>
                <p>Gently exfoliates to reveal smoother skin.</p>
                <ul className="ads-treatment-details">
                  <li>Improves Skin appearance & balance oil control</li>
                  <li>Reduced inflammation, prevent scarring</li>
                  <li>Treats laser hair removal and Blackheads</li>
                </ul>
              </li>
              <li className="ads-treatment-item">
                <strong>PRP FACE </strong>
                <p>IStimulates collagen production</p>
                <ul className="ads-treatment-details">
                  <li>reduced fine lines & wrinkles</li>
                  <li>Safe for all Skin</li>
                  <li>treats hyperpigmentation</li>
                </ul>
              </li>
              <li className="ads-treatment-item">
                <strong>CO2 FACIAL</strong>
                <p>Improves acne scars & spots</p>
                <ul className="ads-treatment-details">
                  <li>Stimulates collagen production</li>
                  <li>Hydration and Brightness</li>
                  <li>Improves Skin Texture and Tone</li>
                </ul>
              </li>
              <li className="ads-treatment-item">
                <strong>LASER HAIR REMOVAL</strong>
                <p>Infuses skin with essential moisture.</p>
                <ul className="ads-treatment-details">
                  <li>Long-lasting hair removal</li>
                  <li>Quick and safe removal of hair</li>
                  <li>Ability to treat larger areas of the body</li>
                </ul>
              </li>
            </ul>

            <p className="ads-treatment-description-text">
              Our Prpface treatments are customized for each individual's skin
              type and concerns.
            </p>
            <p className="ads-treatment-extra-info">
              Book a consultation today to discover the benefits of
              laser hair removal.
            </p>
          </div>

          <div className="ads-treatment-content">
            <h3>Innovative Laser Hair Removal Treatment Overview</h3>
            <div className="ads-treatment-info">
              <div className="ads-treatment-images">
                <img
                  src={heroImage1}
                  alt="Innovative laser hair removal Treatment Process"
                  className="ads-main-treatment-image"
                />
                <div className="ads-gallery-container">
                  {/* <div className="ads-treatment-gallery">
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        onClick={() => openModal(image)}
                      />
                    ))}
                  </div> */}
                </div>
                <div className="ads-gallery-dots">
                  {images.map((_, index) => (
                    <span
                      key={index}
                      className={`ads-gallery-dot ${index < 3 ? 'active' : ''}`}
                    ></span>
                  ))}
                </div>
              </div>

              <div className="ads-treatment-description">
                <h4>Empowering Innovative Laser Hair Removal Solutions</h4>
                <div className="ads-treatment-intro">
                  <span className="ads-highlight-tag">
                     INNOVATIVE LASER HAIR REMOVAL
                  </span>
                  <p className="ads-lead-text">
                    Our breakthrough treatments combine deep cleansing, advanced
                    exfoliation, and targeted therapies to renew your skin.
                  </p>
                </div>

                <div className="ads-key-benefits">
                  <h5>Transformative Benefits of Our Treatments</h5>
                  <p>Enjoy benefits such as:</p>
                  <ul>
                    <li>
                      <span className="ads-benefit-icon">
                        <img src={nonInvasiveIcon} alt="Deep Cleansing" />
                      </span>
                      <strong>Long term Reduction</strong>
                      <p>effective and permanent hair loss </p>
                    </li>
                    <li>
                      <span className="ads-benefit-icon">
                        <img
                          src={enhancedHydrationIcon}
                          alt="Enhanced Hydration"
                        />
                      </span>
                      <strong>Cost effectiveness</strong>
                      <p>money saving and time effciency </p>
                    </li>
                    <li>
                      <span className="ads-benefit-icon">
                        <img
                          src={skinRenewalIcon}
                          alt="Promotes Skin Renewal"
                        />
                      </span>
                      <strong>Reduced Risk of Skin Irritaion</strong>
                      <p>less chances of irritation and redness </p>
                    </li>
                    <li>
                      <span className="ads-benefit-icon">
                        <img
                          src={deepCleansingIcon}
                          alt="Non-Invasive Treatment"
                        />
                      </span>
                      <strong>Non-Invasive Treatment</strong>
                      <p>
                        Achieve noticeable results without any downtime or
                        discomfort.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="ads-treatment-highlights">
                  <div className="ads-highlight-box">
                    <h5>Client Satisfaction Rate</h5>
                    <p>98%</p>
                    <span className="ads-subtitle">Happy Clients</span>
                  </div>
                  <div className="ads-highlight-box">
                    <h5>Session Duration</h5>
                    <p>45 mins</p>
                    <span className="ads-subtitle">
                      Per Treatment
                    </span>
                  </div>
                  <div className="ads-highlight-box">
                    <h5>Minimal Downtime</h5>
                    <p>Immediate Results</p>
                    <span className="ads-subtitle">
                      Quick Recovery
                    </span>
                  </div>
                </div>

                <Link to="/bookconsultation" style={{ textDecoration: "none" }}>
                  <button className="ads-book-treatment-btn">
                    Schedule Your Consultation
                    <span className="ads-btn-icon">→</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ads-benefits-section">
        <div className="ads-benefits-header">
          <span className="ads-section-tag">Why Choose Us</span>
          <h2>Experience Excellence with H-Cura Multispeciality clinic</h2>
          <p className="ads-section-subtitle">
            Our advanced treatments combine clinical expertise with innovative
            technology to restore your skin's natural beauty.
          </p>
        </div>
        <div className="ads-benefits-grid">
          {benefits && benefits.map((benefit, index) => (
            <div className="ads-benefit-card" key={index}>
              <div className="ads-benefit-icon">{benefit.icon}</div>
              <div className="ads-benefit-content">
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
                <ul className="ads-feature-list">
                  {benefit.features && benefit.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ads-process-section" id="process">
        <div className="ads-process-header">
          <span className="ads-process-tag">Our Process</span>
          <h2>Your Journey to Radiant, Clear Skin</h2>
          <p className="ads-process-subtitle">
            Follow our comprehensive 4-step approach for sustainable skin
            rejuvenation.
          </p>
        </div>
        <div className="ads-process-timeline">
          {processSteps && processSteps.map((process, index) => (
            <div className="ads-process-step" key={index}>
              <div className="ads-step-container">
                <div className="ads-step-number-container">
                  <div className="ads-step-number">{process.step}</div>
                  <div className="ads-step-icon">{process.icon}</div>
                </div>
                <div className="ads-step-content">
                  <h3>{process.title}</h3>
                  <p className="ads-step-description">
                    {process.desc}
                  </p>
                  <ul className="ads-step-details">
                    {process.details && process.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < 3 && <div className="ads-connector-line"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Image Viewing with Navigation */}
      {isModalOpen && modalImage && (
        <div className="ads-modal-overlay" onClick={closeModal}>
          <div className="ads-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="ads-close-modal" onClick={closeModal}>
              &times;
            </button>
            <button
              className="ads-modal-nav ads-modal-prev"
              onClick={navigatePrevious}
            >
              &#10094;
            </button>
            <img
              src={modalImage.src}
              alt={modalImage.alt}
              className="ads-modal-image"
            />
            <button
              className="ads-modal-nav ads-modal-next"
              onClick={navigateNext}
            >
              &#10095;
            </button>
            <div className="ads-modal-counter">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Laserhairremoval;
