import React, { useEffect, useState } from "react";
import "./hydrafacial.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import heroImage from "../../../assets/images/ad-tattoremoval.jpg";
import heroImage1 from "../../../assets/images/ad-tattoremoval1.jpg";


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
  ACNE: acneIcon,
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
  { src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80", alt: "tattoremoval Procedure Close-Up" },
  { src: "https://images.unsplash.com/photo-1606206522398-de3bd05b1615?q=80", alt: "Advanced tattoremoval Equipment" },
];

function TreatmentNav() {
  const [activeTab, setActiveTab] = useState("TATTO REMOVAL");
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
      <h2>Innovative Tattoo Removal Solutions</h2>
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


function Tattoremoval() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleGalleryImages, setVisibleGalleryImages] = useState([0, 1, 2]);
  
  // Added useEffect for tattoo removal related SEO metadata
  useEffect(() => {
    document.title = "Tattoo Removal - Advanced & Safe Procedures - H-Cura Homeopathy";
    
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get professional tattoo removal services at H-Cura. Our advanced laser technology safely and effectively removes unwanted tattoos with minimal discomfort and scarring. Experience the latest in tattoo removal treatments from our expert team."
      );
    }
    
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "Tattoo Removal, Laser Tattoo Removal, Professional Tattoo Removal, Safe Tattoo Removal, Effective Tattoo Removal, Unwanted Tattoo Removal, Tattoo Removal Chennai, H-Cura Tattoo Removal, Advanced Tattoo Removal, Painless Tattoo Removal, Minimal Scarring Tattoo Removal, Q-Switched Laser Tattoo Removal, Picosecond Laser Tattoo Removal, Multicolor Tattoo Removal, Black Ink Removal, Colored Tattoo Removal, Tattoo Fading Treatment, Complete Tattoo Removal, Tattoo Removal Consultation, Tattoo Removal Aftercare"
      );
    }
    
    // Set canonical link
    const existingCanonical = document.querySelector("link[rel='canonical']");
if (existingCanonical) {
  existingCanonical.setAttribute(
    "href",
    "https://www.h-cura.com/home/advanced-tatto-removal-treatment"
  );
} else {
  const canonicalLink = document.createElement("link");
  canonicalLink.setAttribute("rel", "canonical");
  canonicalLink.setAttribute(
    "href",
    "https://www.h-cura.com/home/advanced-tatto-removal-treatment"
  );
  document.head.appendChild(canonicalLink);
}
  }, []);

  useEffect(() => {
    const steps = document.querySelectorAll(".ads-process-step");
    steps.forEach((step, index) => {
      step.style.setProperty("--index", index);
      step.style.opacity = "1";
    });
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

  const navigateGalleryPrev = () => {
    if (visibleGalleryImages[0] > 0) {
      const newVisibleImages = visibleGalleryImages.map(idx => idx - 1);
      setVisibleGalleryImages(newVisibleImages);
    }
  };

  const navigateGalleryNext = () => {
    if (visibleGalleryImages[visibleGalleryImages.length - 1] < images.length - 1) {
      const newVisibleImages = visibleGalleryImages.map(idx => idx + 1);
      setVisibleGalleryImages(newVisibleImages);
    }
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
            Innovative Tatto removal Solutions for Radiant Skin
          </h1>
          <p className="ads-hero-text">
            Experience cutting-edge tatto removal therapies designed to cleanse,
            rejuvenate, and transform your skin.
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
            <h2>Revitalize Your Skin with tatto removal</h2>
            <p className="ads-nav-description">
              Our tatto removal treatment combines advanced technology with
              nourishing ingredients for optimal skin health.
            </p>

            <ul className="ads-treatment-list">
              <li className="ads-treatment-item">
                <strong>HYDRAFACIAL</strong>
                <p>Thoroughly cleanses and purifies your skin.</p>
                <ul className="ads-treatment-details">
                  <li>Improves Skin Texture and Tone</li>
                  {/* <li>Hydration and Brightness
                  </li> */}
                  <li>Reduces Fine Lines and Wrinkles</li>
                  <li>minimized pores and make glowing skin</li>
                </ul>
              </li>
              <li className="ads-treatment-item">
                <strong>ACNE TREATMENT</strong>
                <p>Gently exfoliates to reveal smoother skin.</p>
                <ul className="ads-treatment-details">
                  <li>Improves Skin appearance & balance oil control</li>
                  <li>reduced inflammation , prevent scarring</li>
                  <li>Treats tatto removal and Blackheads</li>
                  {/* <li>Prepares skin for the next treatment step</li> */}
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
                <strong> CO2 FACIAL</strong>
                <p>Improves tatto removal scars & spots</p>
                <ul className="ads-treatment-details">
                  <li>stimulates collagen production</li>
                  <li>Hydration and Brightness</li>
                  <li>Improves Skin Texture and Tone</li>
                </ul>
              </li>
              <li className="ads-treatment-item">
                <strong> LASER HAIR REMOVAL</strong>
                <p>Infuses skin with essential moisture.</p>
                <ul className="ads-treatment-details">
                  <li>Long-lasting hair remova</li>
                  <li>Quick and safe removal of hair</li>
                  <li>Ability to treat larger areas of the body</li>
                </ul>
              </li>
            </ul>

            <p className="ads-treatment-description-text">
              Our skinbrightening treatments are customized for each
              individual's skin type and concerns.
            </p>
            <p className="ads-treatment-extra-info">
              Book a consultation today to discover the benefits of
              tatto removal.
            </p>
          </div>

          <div className="ads-treatment-content">
            <h3>Innovative tatto removal Treatment Overview</h3>
            <div className="ads-treatment-info">
              <div className="ads-treatment-images">
                <img
                  src={heroImage1}
                  alt="Innovative tatto removal Treatment Process"
                  className="ads-main-treatment-image"
                />
                <div className="ads-gallery-container">
                  <button 
                    className="ads-gallery-nav ads-gallery-prev ads-small-screen-nav"
                    onClick={(e) => {
                      e.preventDefault();
                      // For small screens, scroll the gallery directly
                      const gallery = document.querySelector('.ads-treatment-gallery');
                      if (gallery) {
                        gallery.scrollBy({ left: -gallery.clientWidth * 0.8, behavior: 'smooth' });
                      }
                      // Also update the visible images state for larger screens
                      navigateGalleryPrev();
                    }}
                    aria-label="Previous image"
                    style={{display: visibleGalleryImages[0] > 0 ? 'block' : 'none'}}
                  >
                    &#10094;
                  </button>
                  {/* <div className="ads-treatment-gallery">
                    {visibleGalleryImages.map(index => (
                      images[index] && (
                        <img
                          key={index}
                          src={images[index].src}
                          alt={images[index].alt}
                          onClick={() => openModal(images[index])}
                        />
                      )
                    ))}
                  </div> */}
                  <button 
                    className="ads-gallery-nav ads-gallery-next ads-small-screen-nav"
                    onClick={(e) => {
                      e.preventDefault();
                      // For small screens, scroll the gallery directly
                      const gallery = document.querySelector('.ads-treatment-gallery');
                      if (gallery) {
                        gallery.scrollBy({ left: gallery.clientWidth * 0.8, behavior: 'smooth' });
                      }
                      // Also update the visible images state for larger screens
                      navigateGalleryNext();
                    }}
                    aria-label="Next image"
                    style={{display: visibleGalleryImages[visibleGalleryImages.length - 1] < images.length - 1 ? 'block' : 'none'}}
                  >
                    &#10095;
                  </button>
                </div>
                <div className="ads-gallery-dots">
                  {images.map((_, index) => (
                    <span 
                      key={index} 
                      className={`ads-gallery-dot ${visibleGalleryImages.includes(index) ? 'active' : ''}`}
                      onClick={() => {
                        // Show this image and its neighbors
                        const start = Math.max(0, index - 1);
                        const end = Math.min(images.length - 1, index + 1);
                        const newVisible = [];
                        for (let i = start; i <= end; i++) {
                          newVisible.push(i);
                        }
                        setVisibleGalleryImages(newVisible);
                      }}
                    ></span>
                  ))}
                </div>
              </div>

              <div className="ads-treatment-description">
                <h4>Empowering Innovative tatto removal Solutions</h4>
                <div className="ads-treatment-intro">
                  <span className="ads-highlight-tag">
                   INNOVATIVE TATTO REMOVAL
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
                      </span>{" "}
                      <strong>Effective ink removal</strong>
                      <p>Improves Skin texture and complication </p>
                    </li>
                    <li>
                      <span className="ads-benefit-icon">
                        <img
                          src={enhancedHydrationIcon}
                          alt="Enhanced Hydration"
                        />
                      </span>{" "}
                      <strong>Anti scarring</strong>
                      <p>reduced inflammation , prevent scarring </p>
                    </li>
                    <li>
                      <span className="ads-benefit-icon">
                        <img
                          src={skinRenewalIcon}
                          alt="Promotes Skin Renewal"
                        />
                      </span>{" "}
                      <strong>Safe procedure</strong>
                      <p>less chance of infection </p>
                    </li>
                    <li>
                      <span className="ads-benefit-icon">
                        <img
                          src={deepCleansingIcon}
                          alt="Non-Invasive Treatment"
                        />
                      </span>{" "}
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
                    <span className="ads-subtitle">Per Treatment</span>
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
          {[
            {
              icon: "🔬",
              title: "State-of-the-Art Technology",
              desc: "We deploy the latest in tatto removal treatment technology for precise and effective results.",
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
          ].map((benefit, index) => (
            <div className="ads-benefit-card" key={index}>
              <div className="ads-benefit-icon">{benefit.icon}</div>
              <div className="ads-benefit-content">
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
                <ul className="ads-feature-list">
                  {benefit.features.map((feature, idx) => (
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
          {[
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
              title: "Tailored Treatment Planning",
              desc: "Our specialists design a personalized tatto removal treatment plan just for you.",
              details: [
                "Individualized regimen design",
                "Session scheduling",
                "Lifestyle coaching",
              ],
              icon: "📋",
            },
            {
              step: "03",
              title: "Expert tatto removal Session",
              desc: "Experience our precise techniques for targeted and effective tatto removal treatment.",
              details: [
                "Sterile preparation",
                "Precise application",
                "Targeted skin care",
                "Comfort-focused procedure",
              ],
              icon: "💉",
            },
            {
              step: "04",
              title: "Comprehensive Aftercare",
              desc: "Benefit from our dedicated follow-up care ensuring your skin remains at its best.",
              details: [
                "Routine progress reviews",
                "Adaptive treatment adjustments",
                "Maintenance plans",
                "Long-term support",
              ],
              icon: "📈",
            },
          ].map((process, index) => (
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
                    {process.details.map((detail, idx) => (
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
      {isModalOpen && (
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

export default Tattoremoval;
