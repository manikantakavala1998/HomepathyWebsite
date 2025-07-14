// import React, { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import heroImage from "./../../../assets/images/advanced-laser1.jpg";

// import "./advancedhair.css";
// //bannerimg
// import laser1 from "./../../../assets/images/advanced-laser.jpg";
// //before and after
// import laser2 from "./../../../assets/images/advanced-laser2.jpg";
// import laser3 from "./../../../assets/images/advanced-laser3.jpg";
// import laser4 from "./../../../assets/images/advanced-laser4.jpg";

// // Import icons
// import groHairIcon from "./../../../assets/images/grow-hair treatment-icons.png";
// import prpIcon from "./../../../assets/images/prp-treatment-icons1.png";
// import gfcIcon from "./../../../assets/images/gfc-treatment-icons.png";
// import stmIcon from "./../../../assets/images/treatment.png";
// import laserIcon from "./../../../assets/images/laserhair.png";

// const treatments = [
//   { name: "GROHAIR TREATMENT", navName: "GROHAIR" },
//   { name: "PRP TREATMENT", navName: "PRP" },
//   { name: "GFC TREATMENT", navName: "GFC" },
//   { name: "STM TREATMENT", navName: "STM" },
//   { name: "LASER TREATMENT", navName: "LASER" },
// ];

// const treatmentIconPNGMap = {
//   GROHAIR: groHairIcon,
//   PRP: prpIcon,
//   GFC: gfcIcon,
//   STM: stmIcon,
//   LASER: laserIcon,
// };

// const images = [
//   { src: laser2, alt: "Before and After Results" },
//   { src: laser3, alt: "Treatment Procedure" },
//   { src: laser4, alt: "Advanced Equipment" },
//   // Add more images as needed
// ];

// function Hair() {
//   const [activeTab, setActiveTab] = useState("LASER TREATMENT");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalImage, setModalImage] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     document.title = "Advanced Laser Hair Treatment - H-Cura Multispeciality Clinic";
//     const metaDescription = document.querySelector("meta[name='description']");
//     if (metaDescription) {
//       metaDescription.setAttribute(
//         "content",
//         "Revitalize your hair with H-Cura's advanced laser therapy. Our non-invasive treatment stimulates hair follicles, enhances scalp circulation, and promotes natural hair regrowth for thicker, healthier hair."
//       );
//     }
//     const metaKeywords = document.querySelector("meta[name='keywords']");
//     if (metaKeywords) {
//       metaKeywords.setAttribute(
//         "content",
//         "Laser Hair Treatment, Hair Regrowth Therapy, Advanced Hair Restoration, H-Cura Laser Treatment, Non-Invasive Hair Therapy, Hair Loss Solutions, Laser Hair Stimulation, Hair Follicle Activation, Scalp Circulation Enhancement, Hair Density Improvement, H-Cura Hair Specialists, Painless Hair Treatment, Quick Hair Restoration, Hair Rejuvenation, Laser Hair Technology, Hair Strengthening Therapy, Modern Hair Solutions, H-Cura Multispeciality Clinic, Professional Hair Care, Hair Wellness Treatment"
//       );
//     }
//     // Set canonical link
//     const existingCanonical = document.querySelector("link[rel='canonical']");
//     if (existingCanonical) {
//       existingCanonical.setAttribute("href", "https://www.h-cura.com/home/laser");
//     } else {
//       const canonicalLink = document.createElement("link");
//       canonicalLink.setAttribute("rel", "canonical");
//       canonicalLink.setAttribute("href", "https://www.h-cura.com/home/laser");
//       document.head.appendChild(canonicalLink);
//     }

//     // Get the current path from window.location
//     const path = window.location.pathname;

//     // Extract the treatment name from the path
//     const pathSegments = path.split("/");
//     const currentPage = pathSegments[pathSegments.length - 1]?.toLowerCase();

//     // Find the matching treatment based on the URL path
//     if (currentPage) {
//       const matchingTreatment = treatments.find(
//         (treatment) => treatment.navName.toLowerCase() === currentPage
//       );

//       if (matchingTreatment) {
//         setActiveTab(matchingTreatment.name);
//       }
//     }

//     // Original effect code for process steps
//     const steps = document.querySelectorAll(".hc-process-step");
//     steps.forEach((step, index) => {
//       step.style.setProperty("--index", index);
//       step.style.opacity = "1";
//     });
//   }, []);

//   const renderTreatmentIcon = (name, fallbackIcon) => {
//     return treatmentIconPNGMap[name] ? (
//       <img
//         src={treatmentIconPNGMap[name]}
//         alt={name}
//         style={{ width: "100px", height: "100px" }}
//       />
//     ) : (
//       fallbackIcon
//     );
//   };

//   const openModal = (image) => {
//     setModalImage(image);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalImage(null);
//   };

//   return (
//     <div className="hc-wrapper">
//       {/* New Navigation Section */}
//       {/* New Navigation Section */}
//       <div className="hc-treatment-nav-container">
//         <h2>Explore Our Treatments</h2>
//         <div className="hc-treatment-nav-cards">
//           {treatments.map((treatment) => (
//             <div
//               key={treatment.name}
//               className={`hc-treatment-nav-card ${
//                 activeTab === treatment.name ? "active" : ""
//               }`}
//               style={{
//                 position: "relative",
//                 borderBottom:
//                   activeTab === treatment.name ? "3px solid #007bff" : "none",
//                 transition: "border-bottom 0.3s ease",
//               }}
//               onClick={() => {
//                 setActiveTab(treatment.name);
//                 navigate(`/home/${treatment.navName.toLowerCase()}`);
//               }}
//             >
//               <div className="hc-card-icon">
//                 {renderTreatmentIcon(treatment.navName)}
//               </div>
//               <div
//                 className="hc-card-title"
//                 style={{
//                   color: ["GROHAIR", "PRP", "GFC", "STM", "LASER"].includes(
//                     treatment.navName
//                   )
//                     ? "#007bff"
//                     : "black",
//                 }}
//               >
//                 {treatment.name.replace(" TREATMENT", "")}
//                 <span style={{ color: "black" }}> TREATMENT</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Hero Section */}
//       <section
//         className="hc-hero"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,
//         }}
//       >
//         <div className="hc-hero-content">
//           <h1 className="hc-hero-title">
//             Revolutionary laser Therapy for Hair Restoration
//           </h1>
//           <p className="hc-hero-text">
//             Harness the power of your own platelets to naturally rejuvenate your
//             scalp and restore hair density.
//           </p>
//           <Link
//             to="/bookconsultation"
//             style={{ textDecoration: "none" }}
//             className="hc-cta-button"
//           >
//             Book Consultation
//           </Link>
//         </div>
//       </section>

//       {/* Unique Treatment Navigation Tabs */}

//       {/* Treatment Section */}
//       <section className="hc-treatment-section" id="treatments">
//         <div className="hc-treatment-container">
//           <div className="hc-treatment-nav">
//             <h2>Help Your Hair with Our Advanced Treatments</h2>
//             <p className="hc-nav-description">
//               Our advanced laser treatment stimulates hair follicles and boosts
//               scalp circulation to promote natural hair regrowth. This
//               non-invasive therapy strengthens existing strands, enhancing hair
//               density and overall scalp health.
//             </p>
//             <ul>
//               <li className="hc-active">
//                 <strong>Gro Hair Therapy</strong>
//                 <p>Stimulate hair follicles & helps in hair regrowth .</p>
//                 <ul className="hc-treatment-details">
//                   <li>painless proess & noninvasive procedure</li>
//                   <li>helps in control hairfall</li>
//                   <li>Quick visible results</li>
//                   <li>reduce dandruff</li>
//                 </ul>
//               </li>
//               <li className="hc-active">
//                 <strong>Growth Factor Therapy</strong>
//                 <p>Stimulate hair follicles & helps in hair regrowth .</p>
//                 <ul className="hc-treatment-details">
//                   <li>Clinical proven and tested</li>
//                   <li>Minimal procedure</li>
//                   <li>Quick visible results</li>
//                   <li>
//                     Enrich with Biotin , Zinc , Minerals and other Vitamins
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <strong> Gfc Therapy</strong>
//                 <p>
//                   Restore your hair naturally by plasma rich protein therapy.
//                 </p>
//                 <ul className="hc-treatment-details">
//                   <li>Autologous treatment</li>
//                   <li>No synthetic additives</li>
//                   <li>Boosts regeneration</li>
//                 </ul>
//               </li>

//               <li>
//                 <strong>Stem Cell Treatment</strong>
//                 <p>Rejuvenate your hair using regenerative technology.</p>
//                 <ul className="hc-treatment-details">
//                   <li>Based on plant poly peptides </li>
//                   <li>Supports tissue repair</li>
//                   <li>Long-lasting results</li>
//                 </ul>
//               </li>
//               <li>
//                 <strong>Laser Hair Therapy</strong>
//                 <p>Enhance hair density with precision laser treatments.</p>
//                 <ul className="hc-treatment-details">
//                   <li>Pain-free procedure</li>
//                   <li>It stimulate hair follicles</li>
//                   <li>hair boosting therapy</li>
//                   <li>Quick sessions</li>
//                 </ul>
//               </li>
//             </ul>
//             <p className="hc-treatment-description-text">
//               Our state-of-the-art therapies are administered by experienced
//               specialists.
//             </p>
//             <p className="hc-treatment-extra-info">
//               Book a consultation today to create your personalized treatment
//               plan.
//             </p>
//           </div>

//           <div className="hc-treatment-content">
//             <h3> Advanced Laser Treatment</h3>
//             <div className="hc-treatment-info">
//               <div className="hc-treatment-images">
//                 <img
//                   src={laser1}
//                   alt="Growth Factor Treatment Process"
//                   className="hc-main-treatment-image"
//                 />
//                 <div className="hc-treatment-gallery">
//                   {images.map((image, index) => (
//                     <img
//                       key={index}
//                       src={image.src}
//                       alt={image.alt}
//                       onClick={() => openModal(image)}
//                     />
//                   ))}
//                 </div>
//               </div>

//               <div className="hc-treatment-description">
//                 <h4>Empowering Hair Regrowth with Science</h4>
//                 <div className="hc-treatment-intro">
//                   <Link
//                     to="/bookconsultation"
//                     style={{ textDecoration: "none" }}
//                   >
//                     <span className="hc-highlight-tag">INNOVATIVE LASER</span>
//                   </Link>{" "}
//                   <p className="hc-lead-text">
//                     Our breakthrough technology fuses advanced growth factors
//                     with your body's own healing proteins to restore thicker,
//                     healthier hair.
//                   </p>
//                 </div>

//                 <div className="hc-key-benefits">
//                   <h5>Transformative Benefits of Our laser Approach</h5>
//                   <p>
//                     Our method leverages state-of-the-art laser technology to:
//                   </p>
//                   <ul>
//                     <li>
//                       <span className="hc-benefit-icon">🔬</span>
//                       <strong>Revitalize Dormant Follicles</strong>
//                       <p>Pain-free procedure </p>
//                     </li>
//                     <li>
//                       <span className="hc-benefit-icon">📈</span>
//                       <strong>Boost Hair Density</strong>
//                       <p>It stimulate hair follicles.</p>
//                     </li>
//                     <li>
//                       <span className="hc-benefit-icon">🌱</span>
//                       <strong>Promote Natural Regeneration</strong>
//                       <p>Hair boosting therapy.</p>
//                     </li>
//                     <li>
//                       <span className="hc-benefit-icon">💪</span>
//                       <strong>Strengthen Existing Hair</strong>
//                       <p>
//                         Enrich with Biotin , Zinc , Minerals and other Vitamins.
//                       </p>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="hc-treatment-highlights">
//                   <div className="hc-highlight-box">
//                     <h5>Client Success Rate</h5>
//                     <p>95%</p>
//                     <span className="hc-subtitle">Satisfied Clients</span>
//                   </div>
//                   <div className="hc-highlight-box">
//                     <h5>Result</h5>
//                     <p>6-10 sessions</p>
//                     <span className="hc-subtitle">for visible results</span>
//                   </div>
//                   <div className="hc-highlight-box">
//                     <h5>Session Duration</h5>
//                     <p>60 mins</p>
//                     <span className="hc-subtitle">Per Treatment</span>
//                   </div>
//                   <div className="hc-highlight-box">
//                     <h5>Minimal Recovery</h5>
//                     <p>Quick</p>
//                     <span className="hc-subtitle">Rapid Return to Routine</span>
//                   </div>
//                 </div>

//                 <Link to="/bookconsultation" style={{ textDecoration: "none" }}>
//                   <button className="hc-book-treatment-btn">
//                     Schedule Your Consultation
//                     <span className="hc-btn-icon">→</span>
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="hc-benefits-section">
//         <div className="hc-benefits-header">
//           <span className="hc-section-tag">Why Choose Us</span>
//           <h2>Experience Excellence with H-Cura Multispeciality clinic</h2>
//           <p className="hc-section-subtitle">
//             Our advanced treatments combine cutting-edge science with
//             personalized care to restore your hair and confidence.
//           </p>
//         </div>
//         <div className="hc-benefits-grid">
//           {[
//             {
//               icon: "🔬",
//               title: "State-of-the-Art Technology",
//               desc: "We deploy the latest in laser and growth factor science to deliver natural hair regeneration results.",
//               features: [
//                 "Innovative Treatment Protocols",
//                 "FDA-Approved Procedures",
//                 "Clinically Proven Results",
//               ],
//             },
//             {
//               icon: "👨‍⚕",
//               title: "Expert Medical Team",
//               desc: "Our board-certified specialists are experts in hair restoration and are dedicated to your care.",
//               features: [
//                 "Highly Trained Professionals",
//                 "Years of Experience",
//                 "Personalized Attention",
//               ],
//             },
//             {
//               icon: "🎯",
//               title: "Customized Therapy",
//               desc: "Every treatment plan is tailored to your genetic profile and hair restoration goals.",
//               features: [
//                 "Individualized Sessions",
//                 "Continuous Progress Tracking",
//                 "Optimized Treatment Frequency",
//               ],
//             },
//             {
//               icon: "✨",
//               title: "Natural-Looking Results",
//               desc: "Achieve fuller, healthier hair that looks completely natural with our laser solutions.",
//               features: [
//                 "Subtle Enhancements",
//                 "Long-Lasting Benefits",
//                 "Effortless Aesthetics",
//               ],
//             },
//             {
//               icon: "🛡",
//               title: "Safety First",
//               desc: "Our treatments meet the highest medical standards, ensuring a safe and sterile environment at all times.",
//               features: [
//                 "Medical-Grade Facilities",
//                 "Strict Safety Protocols",
//                 "Patient-Centric Care",
//               ],
//             },
//             {
//               icon: "💯",
//               title: "Proven Success",
//               desc: "Join thousands of clients who have experienced astonishing hair regeneration results with H-Cura.",
//               features: [
//                 "Over 5000 Happy Clients",
//                 "Remarkable Clinical Outcomes",
//                 "Consistently High Success Rates",
//               ],
//             },
//           ].map((benefit, index) => (
//             <div className="hc-benefit-card" key={index}>
//               <div className="hc-benefit-icon">{benefit.icon}</div>
//               <div className="hc-benefit-content">
//                 <h3>{benefit.title}</h3>
//                 <p>{benefit.desc}</p>
//                 <ul className="hc-feature-list">
//                   {benefit.features.map((feature, idx) => (
//                     <li key={idx}>{feature}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="hc-process-section" id="process">
//         <div className="hc-process-header">
//           <span className="hc-process-tag">Our Process</span>
//           <h2>Your Journey to Fuller Hair with H-Cura</h2>
//           <p className="hc-process-subtitle">
//             Embrace our comprehensive 4-step approach for sustainable hair
//             restoration.
//           </p>
//         </div>
//         <div className="hc-process-timeline">
//           {[
//             {
//               step: "01",
//               title: "In-Depth Consultation",
//               desc: "Kick off your journey with a thorough consultation to assess your scalp health and treatment goals.",
//               details: [
//                 "Detailed scalp analysis",
//                 "Personal health review",
//                 "Customized treatment roadmap",
//                 "Expectation setting",
//               ],
//               icon: "🔍",
//             },
//             {
//               step: "02",
//               title: "Tailored Treatment Planning",
//               desc: "Our team collaborates with you to design a bespoke laser treatment plan that best suits your hair needs.",
//               details: [
//                 "Personalized regimen design",
//                 "Optimized platelet extraction",
//                 "Session scheduling",
//                 "Lifestyle coaching",
//               ],
//               icon: "📋",
//             },
//             {
//               step: "03",
//               title: "Expert laser Session",
//               desc: "Experience our precise injection techniques as we apply concentrated platelets to trigger natural regrowth.",
//               details: [
//                 "Sterile preparation",
//                 "Precision laser injection",
//                 "Targeted hair follicle activation",
//                 "Comfort-focused procedure",
//               ],
//               icon: "💉",
//             },
//             {
//               step: "04",
//               title: "Comprehensive Aftercare",
//               desc: "Benefit from our dedicated follow-up care, ensuring your progress is monitored and optimized.",
//               details: [
//                 "Routine progress reviews",
//                 "Adaptive treatment refinement",
//                 "Maintenance plans",
//                 "Long-term support",
//               ],
//               icon: "📈",
//             },
//           ].map((process, index) => (
//             <div className="hc-process-step" key={index}>
//               <div className="hc-step-container">
//                 <div className="hc-step-number-container">
//                   <div className="hc-step-number">{process.step}</div>
//                   <div className="hc-step-icon">{process.icon}</div>
//                 </div>
//                 <div className="hc-step-content">
//                   <h3>{process.title}</h3>
//                   <p className="hc-step-description">{process.desc}</p>
//                   <ul className="hc-step-details">
//                     {process.details.map((detail, idx) => (
//                       <li key={idx}>{detail}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               {index < 3 && <div className="hc-connector-line"></div>}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Modal for Image Viewing */}
//       {isModalOpen && (
//         <div className="hc-modal-overlay" onClick={closeModal}>
//           <div
//             className="hc-modal-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button className="hc-close-modal" onClick={closeModal}>
//               &times;
//             </button>
//             <img
//               src={modalImage.src}
//               alt={modalImage.alt}
//               className="hc-modal-image"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Hair;

import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import heroImage from "./../../../assets/images/advanced-laser1.jpg";

import "./advancedhair.css";
//bannerimg
import laser1 from "./../../../assets/images/advanced-laser.jpg";
//before and after
import laser2 from "./../../../assets/images/advanced-laser2.jpg";
import laser3 from "./../../../assets/images/advanced-laser3.jpg";
import laser4 from "./../../../assets/images/advanced-laser4.jpg";

// Import icons
import groHairIcon from "./../../../assets/images/grow-hair treatment-icons.png";
import prpIcon from "./../../../assets/images/prp-treatment-icons1.png";
import gfcIcon from "./../../../assets/images/gfc-treatment-icons.png";
import stmIcon from "./../../../assets/images/treatment.png";
import laserIcon from "./../../../assets/images/laserhair.png";

const treatments = [
  { name: "GROHAIR TREATMENT", navName: "GROHAIR" },
  { name: "PRP TREATMENT", navName: "PRP" },
  { name: "GFC TREATMENT", navName: "GFC" },
  { name: "STM TREATMENT", navName: "STM" },
  { name: "LASER TREATMENT", navName: "LASER" },
];

const treatmentIconPNGMap = {
  GROHAIR: groHairIcon,
  PRP: prpIcon,
  GFC: gfcIcon,
  STM: stmIcon,
  LASER: laserIcon,
};

const images = [
  { src: laser2, alt: "Before and After Results" },
  { src: laser3, alt: "Treatment Procedure" },
  { src: laser4, alt: "Advanced Equipment" },
  // Add more images as needed
];

function Laserhair() {
  const [activeTab, setActiveTab] = useState("LASER TREATMENT");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Laser Hair Treatment in India | Advanced Laser Hair Regrowth Therapy - H-Cura";
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Boost hair regrowth with Laser Hair Treatment at H-Cura. A safe, non-invasive therapy to reduce hair loss and stimulate hair follicles. Book your consultation today."
      );
    }
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "Laser hair treatment in Bangalore,Best laser therapy for hair regrowth,Low-level laser therapy for hair loss,Non-invasive hair restoration Bangalore,Advanced laser hair regrowth treatment,Hair thinning solution with laser,Effective laser therapy for hair loss,Laser hair treatment clinic Bangalore,"
      );
    }
    // Set canonical link
    const existingCanonical = document.querySelector("link[rel='canonical']");
    if (existingCanonical) {
      existingCanonical.setAttribute("href", "https://www.h-cura.com/advanced-laser-treatment");
    } else {
      const canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute("href", "https://www.h-cura.com/advanced-laser-treatment");
      document.head.appendChild(canonicalLink);
    }

    // Get the current path from window.location
    const path = window.location.pathname;

    // Extract the treatment name from the path
    const pathSegments = path.split("/");
    const currentPage = pathSegments[pathSegments.length - 1]?.toLowerCase();

    // Find the matching treatment based on the URL path
    if (currentPage) {
      const matchingTreatment = treatments.find(
        (treatment) => treatment.navName.toLowerCase() === currentPage
      );

      if (matchingTreatment) {
        setActiveTab(matchingTreatment.name);
      }
    }

    // Original effect code for process steps
    const steps = document.querySelectorAll(".hc-process-step");
    steps.forEach((step, index) => {
      step.style.setProperty("--index", index);
      step.style.opacity = "1";
    });
  }, []);

  const renderTreatmentIcon = (name, fallbackIcon) => {
    return treatmentIconPNGMap[name] ? (
      <img
        src={treatmentIconPNGMap[name]}
        alt={name}
        style={{ width: "100px", height: "100px" }}
      />
    ) : (
      fallbackIcon
    );
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  // Updated handleTreatmentClick function with the new URL pattern
  const handleTreatmentClick = (treatment) => {
    setActiveTab(treatment.name);
    // Map treatment names to specific URLs
    const treatmentUrlMap = {
      "GROHAIR TREATMENT": "/advanced-grow-hair-treatment",
      "PRP TREATMENT": "/advanced-prp-treatment",
      "GFC TREATMENT": "/advanced-gfc-treatment",
      "STM TREATMENT": "/advanced-stm-treatment",
      "LASER TREATMENT": "/advanced-laser-treatment"
    };
    
    // Use the mapped URL if available, otherwise fallback to the original pattern
    const url = treatmentUrlMap[treatment.name] || `/home/${treatment.navName.toLowerCase()}`;
    console.log("Navigating to:", url); // Debug log
    navigate(url);
  };

  return (
    <div className="hc-wrapper">
      {/* New Navigation Section */}
      <div className="hc-treatment-nav-container">
        <h2>Explore Our Treatments</h2>
        <div className="hc-treatment-nav-cards">
          {treatments.map((treatment) => (
            <div
              key={treatment.name}
              className={`hc-treatment-nav-card ${
                activeTab === treatment.name ? "active" : ""
              }`}
              style={{
                position: "relative",
                borderBottom:
                  activeTab === treatment.name ? "3px solid #007bff" : "none",
                transition: "border-bottom 0.3s ease",
              }}
              onClick={() => handleTreatmentClick(treatment)}
            >
              <div className="hc-card-icon">
                {renderTreatmentIcon(treatment.navName)}
              </div>
              <div
                className="hc-card-title"
                style={{
                  color: ["GROHAIR", "PRP", "GFC", "STM", "LASER"].includes(
                    treatment.navName
                  )
                    ? "#007bff"
                    : "black",
                }}
              >
                {treatment.name.replace(" TREATMENT", "")}
                <span style={{ color: "black" }}> TREATMENT</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="hc-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,
        }}
      >
        <div className="hc-hero-content">
          <h1 className="hc-hero-title">
            Revolutionary Laser Therapy for Hair Restoration
          </h1>
          <p className="hc-hero-text">
            Harness the power of advanced laser technology to naturally rejuvenate your
            scalp and restore hair density.
          </p>
          <Link
            to="/bookconsultation"
            style={{ textDecoration: "none" }}
            className="hc-cta-button"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      {/* Unique Treatment Navigation Tabs */}

      {/* Treatment Section */}
      <section className="hc-treatment-section" id="treatments">
        <div className="hc-treatment-container">
          <div className="hc-treatment-nav">
            <h2>Help Your Hair with Our Advanced Treatments</h2>
            <p className="hc-nav-description">
              Our advanced laser treatment stimulates hair follicles and boosts
              scalp circulation to promote natural hair regrowth. This
              non-invasive therapy strengthens existing strands, enhancing hair
              density and overall scalp health.
            </p>
            <ul>
              <li className="hc-active">
                <strong>Gro Hair Therapy</strong>
                <p>Stimulate hair follicles & helps in hair regrowth .</p>
                <ul className="hc-treatment-details">
                  <li>painless proess & noninvasive procedure</li>
                  <li>helps in control hairfall</li>
                  <li>Quick visible results</li>
                  <li>reduce dandruff</li>
                </ul>
              </li>
              <li className="hc-active">
                <strong>Growth Factor Therapy</strong>
                <p>Stimulate hair follicles & helps in hair regrowth .</p>
                <ul className="hc-treatment-details">
                  <li>Clinical proven and tested</li>
                  <li>Minimal procedure</li>
                  <li>Quick visible results</li>
                  <li>
                    Enrich with Biotin , Zinc , Minerals and other Vitamins
                  </li>
                </ul>
              </li>
              <li>
                <strong> Gfc Therapy</strong>
                <p>
                  Restore your hair naturally by plasma rich protein therapy.
                </p>
                <ul className="hc-treatment-details">
                  <li>Autologous treatment</li>
                  <li>No synthetic additives</li>
                  <li>Boosts regeneration</li>
                </ul>
              </li>

              <li>
                <strong>Stem Cell Treatment</strong>
                <p>Rejuvenate your hair using regenerative technology.</p>
                <ul className="hc-treatment-details">
                  <li>Based on plant poly peptides </li>
                  <li>Supports tissue repair</li>
                  <li>Long-lasting results</li>
                </ul>
              </li>
              <li>
                <strong>Laser Hair Therapy</strong>
                <p>Enhance hair density with precision laser treatments.</p>
                <ul className="hc-treatment-details">
                  <li>Pain-free procedure</li>
                  <li>It stimulate hair follicles</li>
                  <li>hair boosting therapy</li>
                  <li>Quick sessions</li>
                </ul>
              </li>
            </ul>
            <p className="hc-treatment-description-text">
              Our state-of-the-art therapies are administered by experienced
              specialists.
            </p>
            <p className="hc-treatment-extra-info">
              Book a consultation today to create your personalized treatment
              plan.
            </p>
          </div>

          <div className="hc-treatment-content">
            <h3> Advanced Laser Treatment</h3>
            <div className="hc-treatment-info">
              <div className="hc-treatment-images">
                <img
                  src={laser1}
                  alt="Growth Factor Treatment Process"
                  className="hc-main-treatment-image"
                />
                <div className="hc-treatment-gallery">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      onClick={() => openModal(image)}
                    />
                  ))}
                </div>
              </div>

              <div className="hc-treatment-description">
                <h4>Empowering Hair Regrowth with Science</h4>
                <div className="hc-treatment-intro">
                  <Link
                    to="/bookconsultation"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="hc-highlight-tag">INNOVATIVE LASER</span>
                  </Link>{" "}
                  <p className="hc-lead-text">
                    Our breakthrough technology fuses advanced growth factors
                    with your body's own healing proteins to restore thicker,
                    healthier hair.
                  </p>
                </div>

                <div className="hc-key-benefits">
                  <h5>Transformative Benefits of Our Laser Approach</h5>
                  <p>
                    Our method leverages state-of-the-art laser technology to:
                  </p>
                  <ul>
                    <li>
                      <span className="hc-benefit-icon">🔬</span>
                      <strong>Revitalize Dormant Follicles</strong>
                      <p>Pain-free procedure </p>
                    </li>
                    <li>
                      <span className="hc-benefit-icon">📈</span>
                      <strong>Boost Hair Density</strong>
                      <p>It stimulate hair follicles.</p>
                    </li>
                    <li>
                      <span className="hc-benefit-icon">🌱</span>
                      <strong>Promote Natural Regeneration</strong>
                      <p>Hair boosting therapy.</p>
                    </li>
                    <li>
                      <span className="hc-benefit-icon">💪</span>
                      <strong>Strengthen Existing Hair</strong>
                      <p>
                        Enrich with Biotin, Zinc, Minerals and other Vitamins.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="hc-treatment-highlights">
                  <div className="hc-highlight-box">
                    <h5>Client Success Rate</h5>
                    <p>95%</p>
                    <span className="hc-subtitle">Satisfied Clients</span>
                  </div>
                  <div className="hc-highlight-box">
                    <h5>Result</h5>
                    <p>6-10 sessions</p>
                    <span className="hc-subtitle">for visible results</span>
                  </div>
                  <div className="hc-highlight-box">
                    <h5>Session Duration</h5>
                    <p>60 mins</p>
                    <span className="hc-subtitle">Per Treatment</span>
                  </div>
                  <div className="hc-highlight-box">
                    <h5>Minimal Recovery</h5>
                    <p>Quick</p>
                    <span className="hc-subtitle">Rapid Return to Routine</span>
                  </div>
                </div>

                <Link to="/bookconsultation" style={{ textDecoration: "none" }}>
                  <button className="hc-book-treatment-btn">
                    Schedule Your Consultation
                    <span className="hc-btn-icon">→</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="hc-benefits-section">
        <div className="hc-benefits-header">
          <span className="hc-section-tag">Why Choose Us</span>
          <h2>Experience Excellence with H-Cura Multispeciality Clinic</h2>
          <p className="hc-section-subtitle">
            Our advanced treatments combine cutting-edge science with
            personalized care to restore your hair and confidence.
          </p>
        </div>
        <div className="hc-benefits-grid">
          {[
            {
              icon: "🔬",
              title: "State-of-the-Art Technology",
              desc: "We deploy the latest in Laser and growth factor science to deliver natural hair regeneration results.",
              features: [
                "Innovative Treatment Protocols",
                "FDA-Approved Procedures",
                "Clinically Proven Results",
              ],
            },
            {
              icon: "👨‍⚕",
              title: "Expert Medical Team",
              desc: "Our board-certified specialists are experts in hair restoration and are dedicated to your care.",
              features: [
                "Highly Trained Professionals",
                "Years of Experience",
                "Personalized Attention",
              ],
            },
            {
              icon: "🎯",
              title: "Customized Therapy",
              desc: "Every treatment plan is tailored to your genetic profile and hair restoration goals.",
              features: [
                "Individualized Sessions",
                "Continuous Progress Tracking",
                "Optimized Treatment Frequency",
              ],
            },
            {
              icon: "✨",
              title: "Natural-Looking Results",
              desc: "Achieve fuller, healthier hair that looks completely natural with our Laser solutions.",
              features: [
                "Subtle Enhancements",
                "Long-Lasting Benefits",
                "Effortless Aesthetics",
              ],
            },
            {
              icon: "🛡",
              title: "Safety First",
              desc: "Our treatments meet the highest medical standards, ensuring a safe and sterile environment at all times.",
              features: [
                "Medical-Grade Facilities",
                "Strict Safety Protocols",
                "Patient-Centric Care",
              ],
            },
            {
              icon: "💯",
              title: "Proven Success",
              desc: "Join thousands of clients who have experienced astonishing hair regeneration results with H-Cura.",
              features: [
                "Over 5000 Happy Clients",
                "Remarkable Clinical Outcomes",
                "Consistently High Success Rates",
              ],
            },
          ].map((benefit, index) => (
            <div className="hc-benefit-card" key={index}>
              <div className="hc-benefit-icon">{benefit.icon}</div>
              <div className="hc-benefit-content">
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
                <ul className="hc-feature-list">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="hc-process-section" id="process">
        <div className="hc-process-header">
          <span className="hc-process-tag">Our Process</span>
          <h2>Your Journey to Fuller Hair with H-Cura</h2>
          <p className="hc-process-subtitle">
            Embrace our comprehensive 4-step approach for sustainable hair
            restoration.
          </p>
        </div>
        <div className="hc-process-timeline">
          {[
            {
              step: "01",
              title: "In-Depth Consultation",
              desc: "Kick off your journey with a thorough consultation to assess your scalp health and treatment goals.",
              details: [
                "Detailed scalp analysis",
                "Personal health review",
                "Customized treatment roadmap",
                "Expectation setting",
              ],
              icon: "🔍",
            },
            {
              step: "02",
              title: "Tailored Treatment Planning",
              desc: "Our team collaborates with you to design a bespoke Laser treatment plan that best suits your hair needs.",
              details: [
                "Personalized regimen design",
                "Optimized treatment protocol",
                "Session scheduling",
                "Lifestyle coaching",
              ],
              icon: "📋",
            },
            {
              step: "03",
              title: "Expert Laser Session",
              desc: "Experience our precise application techniques as we apply concentrated laser energy to trigger natural regrowth.",
              details: [
                "Sterile preparation",
                "Precision Laser application",
                "Targeted hair follicle activation",
                "Comfort-focused procedure",
              ],
              icon: "💉",
            },
            {
              step: "04",
              title: "Comprehensive Aftercare",
              desc: "Benefit from our dedicated follow-up care, ensuring your progress is monitored and optimized.",
              details: [
                "Routine progress reviews",
                "Adaptive treatment refinement",
                "Maintenance plans",
                "Long-term support",
              ],
              icon: "📈",
            },
          ].map((process, index) => (
            <div className="hc-process-step" key={index}>
              <div className="hc-step-container">
                <div className="hc-step-number-container">
                  <div className="hc-step-number">{process.step}</div>
                  <div className="hc-step-icon">{process.icon}</div>
                </div>
                <div className="hc-step-content">
                  <h3>{process.title}</h3>
                  <p className="hc-step-description">{process.desc}</p>
                  <ul className="hc-step-details">
                    {process.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < 3 && <div className="hc-connector-line"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Image Viewing */}
      {isModalOpen && (
        <div className="hc-modal-overlay" onClick={closeModal}>
          <div
            className="hc-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="hc-close-modal" onClick={closeModal}>
              &times;
            </button>
            <img
              src={modalImage.src}
              alt={modalImage.alt}
              className="hc-modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Laserhair;
