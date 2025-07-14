// import React, { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import heroImage from "./../../../assets/images/adanced-growhair6.jpg";
// import favicon from "./../../../assets/images/favicon.ico"; // Make sure to import favicon

// import "./advancedhair.css";
// //bannerimg
// import growhair1 from "./../../../assets/images/adanced-growhair.jpg";
// //before and after
// import growhair2 from "./../../../assets/images/advanced-growhair7.jpg";
// import growhair3 from "./../../../assets/images/advanced-growhair8.jpg";
// import growhair4 from "./../../../assets/images/advanced-growhair9.jpg";

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
//   { name: "LASER TREATMENT", navName: "LASER" }
// ];

// const treatmentIconPNGMap = {
//   GROHAIR: groHairIcon,
//   PRP: prpIcon,
//   GFC: gfcIcon,
//   STM: stmIcon,
//   LASER: laserIcon,
// };

// const images = [
//   { src: growhair2, alt: "Before Treatment 1" },
//   { src: growhair3, alt: "After Treatment 1" },
//   { src: growhair4, alt: "Before Treatment 2" },
//   // Add more images as needed
// ];

// function Hair() {
//   const [activeTab, setActiveTab] = useState("GFC TREATMENT");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalImage, setModalImage] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     document.title = "GROHAIR Treatment & Advanced Hair Regrowth Therapy - H-Cura";
//     const metaDescription = document.querySelector("meta[name='description']");
//     if (metaDescription) {
//       metaDescription.setAttribute(
//         "content",
//         "Boost your hair growth with GROHAIR Treatment at H-Cura, Bangalore and Chennai. Experience advanced, non-invasive therapy for thicker, healthier hair. Book your consultation today."
//       );
//     }
//     const metaKeywords = document.querySelector("meta[name='keywords']");
//     if (metaKeywords) {
//       metaKeywords.setAttribute(
//         "content",
//         "Corporate Health Camps, Employee Wellness Programs, Workplace Health Initiatives, H-Cura Corporate Wellness Solutions, Corporate Health Services in Chennai, Customized Health Camps for Companies, Employee Health Assessments, H-Cura Corporate Health Consultation, Corporate Health Screening Services, Health and Wellness for Employees, Corporate Wellness Programs Chennai, H-Cura Employee Wellness Initiatives, Workplace Health Risk Identification, Corporate Health Workshops, H-Cura Health Camps for Companies, Preventive Healthcare for Employees, Corporate Health Management, H-Cura Corporate Health Partnership, Health Camps Tailored for Businesses, Wellness Programs for Corporate Clients."
//       );
//     }
//     // Set canonical link
//     const existingCanonical = document.querySelector("link[rel='canonical']");
//     if (existingCanonical) {
//       existingCanonical.setAttribute("href", "https://www.h-cura.com/bookconsultation");
//     } else {
//       const canonicalLink = document.createElement("link");
//       canonicalLink.setAttribute("rel", "canonical");
//       canonicalLink.setAttribute("href", "https://www.h-cura.com/bookconsultation");
//       document.head.appendChild(canonicalLink);
//     }
//     // Set favicon
//     const existingFavicon = document.querySelector("link[rel='icon']");
//     if (existingFavicon) {
//       existingFavicon.setAttribute("href", favicon);
//     } else {
//       const faviconLink = document.createElement("link");
//       faviconLink.setAttribute("rel", "icon");
//       faviconLink.setAttribute("type", "image/x-icon");
//       faviconLink.setAttribute("href", favicon);
//       document.head.appendChild(faviconLink);
//     }
//   }, []);

//   useEffect(() => {
//     // Get the current path from window.location
//     const path = window.location.pathname;
    
//     // Extract the treatment name from the path
//     const pathSegments = path.split('/');
//     const currentPage = pathSegments[pathSegments.length - 1]?.toLowerCase();
    
//     // Find the matching treatment based on the URL path
//     if (currentPage) {
//       const matchingTreatment = treatments.find(
//         treatment => treatment.navName.toLowerCase() === currentPage
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
//     // Extract the base name without "TREATMENT"
//     const baseName = name.split(" ")[0];
//     return treatmentIconPNGMap[baseName] ? (
//       <img
//         src={treatmentIconPNGMap[baseName]}
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

//   const handleTreatmentClick = (name) => {
//     setActiveTab(name);
//     // Extract just the treatment type for navigation
//     const treatmentType = name.split(" ")[0].toLowerCase();
//     navigate(`/home/${treatmentType}`);
//   };

//   return (
//     <div className="hc-wrapper">
//       {/* New Navigation Section */}
//       <div className="hc-treatment-nav-container">
//         <h2>Explore Our Treatments</h2>
//         <div className="hc-treatment-nav-cards">
//           {treatments.map((treatment) => {
//             const [treatmentName, treatmentSuffix] = treatment.name.split(" ");
//             return (
//               <div
//                 key={treatment.name}
//                 className={`hc-treatment-nav-card ${
//                   activeTab === treatment.name ? "active" : ""
//                 }`}
//                 style={{
//                   position: "relative",
//                   borderBottom: activeTab === treatment.name ? "3px solid #007bff" : "none",
//                   transition: "border-bottom 0.3s ease"
//                 }}
//                 onClick={() => handleTreatmentClick(treatment.name)}
//               >
//                 <div className="hc-card-icon">{renderTreatmentIcon(treatment.navName)}</div>
//                 <div className="hc-card-title">
//                   <span style={{ color: "#007bff" }}>{treatmentName}</span>{" "}
//                   {treatmentSuffix}
//                 </div>
//               </div>
//             );
//           })}
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
//           <h1 className="hc-hero-title">Advanced Gro Hair Treatment</h1>
//           <p className="hc-hero-text">
//             Experience Revolutionary Gro Hair Therapy
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
//               From growth factor enhancements to exclusive Grohair therapies, each
//               treatment is engineered to kickstart your natural hair regrowth.
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
//                 <strong>PRP Therapy</strong>
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
//             <h3> Advanced Grohair Treatment</h3>
//             <div className="hc-treatment-info">
//               <div className="hc-treatment-images">
//                 <img
//                   src={growhair1}
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
//                 <h4>Revolutionary Hair Growth Technology</h4>
//                 <div className="hc-treatment-intro">
//                   <Link
//                     to="/bookconsultation"
//                     style={{ textDecoration: "none" }}
//                   >
//                     <span className="hc-highlight-tag">Advanced Treatment</span>
//                   </Link>
//                   <p className="hc-lead-text">
//                     Experience the future of hair restoration with our
//                     FDA-approved Growth Factor Treatment.
//                   </p>
//                 </div>

//                 <div className="hc-key-benefits">
//                   <h5>How It Transforms Your Hair</h5>
//                   <p>
//                     Our scientifically proven treatment utilizes advanced growth
//                     factors and natural proteins to:
//                   </p>
//                   <ul>
//                     <li>
//                       <span className="hc-benefit-icon">🔬</span>
//                       <strong>Stimulate hair Follicles</strong>
//                       <p>Reactivates sleeping hair follicles for new growth</p>
//                     </li>
//                     <li>
//                       <span className="hc-benefit-icon">📈</span>
//                       <strong>Increase Hair Density</strong>
//                       <p>Up to 40% improvement in hair thickness</p>
//                     </li>
//                     <li>
//                       <span className="hc-benefit-icon">🌱</span>
//                       <strong>Natural Hair Growth</strong>
//                       <p>Promotes sustainable, natural-looking results</p>
//                     </li>
//                     <li>
//                       <span className="hc-benefit-icon">💪</span>
//                       <strong>Strengthen Existing Hair</strong>
//                       <p>Reduces breakage and improves hair quality</p>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="hc-treatment-highlights">
//                   <div className="hc-highlight-box">
//                     <h5>Success Rate</h5>
//                     <p>95%</p>
//                     <span className="hc-subtitle">Satisfied Clients</span>
//                   </div>
//                   <div className="hc-highlight-box">
//                     <h5>Treatment Time</h5>
//                     <p>60 mins</p>
//                     <span className="hc-subtitle">Per Session</span>
//                   </div>
//                   <div className="hc-highlight-box">
//                     <h5>Recovery</h5>
//                     <p>min to max</p>
//                     <span className="hc-subtitle">
//                       depends upon person to person{" "}
//                     </span>
//                   </div>
//                   <div className="hc-highlight-box">
//                     <h5>Result</h5>
//                     <p>6-10 sessions</p>
//                     <span className="hc-subtitle">for visible results</span>
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
//               desc: "We deploy the latest in growth factor technology and FDA-approved treatments to ensure optimal hair restoration results.",
//               features: [
//                 "Latest Medical Innovation",
//                 "Proven Clinical Results",
//                 "Safe & Effective",
//               ],
//             },
//             {
//               icon: "👨‍⚕",
//               title: "Expert Medical Team",
//               desc: "Our board-certified specialists bring decades of experience in advanced hair restoration techniques.",
//               features: [
//                 "Certified Specialists",
//                 "Ongoing Training",
//                 "Dedicated Care Team",
//               ],
//             },
//             {
//               icon: "🎯",
//               title: "Personalized Treatment",
//               desc: "Every treatment plan is tailored to your unique hair type, condition, and desired outcomes.",
//               features: [
//                 "Custom Solutions",
//                 "Regular Monitoring",
//                 "Adaptive Care Plans",
//               ],
//             },
//             {
//               icon: "✨",
//               title: "Natural Results",
//               desc: "Experience transformative results that look and feel completely natural, boosting your confidence.",
//               features: [
//                 "Lasting Results",
//                 "Natural Appearance",
//                 "High Success Rate",
//               ],
//             },
//             {
//               icon: "🛡",
//               title: "Safety First Approach",
//               desc: "H-Cura prioritizes your safety with stringent protocols and state-of-the-art facilities.",
//               features: [
//                 "Medical-Grade Facility",
//                 "Sterile Environment",
//                 "Safety Protocols",
//               ],
//             },
//             {
//               icon: "💯",
//               title: "Proven Track Record",
//               desc: "Join thousands of clients who have experienced the H-Cura difference in hair restoration.",
//               features: [
//                 "95% Success Rate",
//                 "10000+ Happy Clients",
//                 "Outstanding Reviews",
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
//             Experience our comprehensive 4-step approach to hair restoration
//           </p>
//         </div>

//         <div className="hc-process-timeline">
//           {[
//             {
//               step: "01",
//               title: "Comprehensive Consultation",
//               desc: "Begin your transformation with a detailed assessment by our expert trichologists.",
//               details: [
//                 "Advanced scalp analysis",
//                 "Hair loss pattern evaluation",
//                 "Medical history review",
//                 "Treatment expectations discussion",
//               ],
//               icon: "🔍",
//             },
//             {
//               step: "02",
//               title: "Personalized Treatment Design",
//               desc: "Receive a custom-tailored treatment plan designed specifically for your needs.",
//               details: [
//                 "Growth factor concentration optimization",
//                 "Treatment schedule planning",
//                 "Expected timeline discussion",
//                 "Lifestyle recommendations",
//               ],
//               icon: "📋",
//             },
//             {
//               step: "03",
//               title: "Advanced Treatment Session",
//               desc: "Experience H-Cura's state-of-the-art growth factor therapy.",
//               details: [
//                 "Sterile environment preparation",
//                 "Growth factor application",
//                 "Scalp stimulation therapy",
//                 "Comfort-focused procedure",
//               ],
//               icon: "💉",
//             },
//             {
//               step: "04",
//               title: "Comprehensive Aftercare",
//               desc: "Ensure optimal results with our dedicated follow-up program.",
//               details: [
//                 "Progress monitoring",
//                 "Treatment adjustments",
//                 "Maintenance guidelines",
//                 "Long-term care planning",
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
//           <div className="hc-modal-content" onClick={(e) => e.stopPropagation()}>
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


// import React, { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import heroImage from "./../../../assets/images/adanced-growhair6.jpg";
// import favicon from "./../../../assets/images/favicon.ico"; // Make sure to import favicon

// import "./advancedhair.css";
// // Banner image
// import growhair1 from "./../../../assets/images/adanced-growhair.jpg";
// // Before and after images
// import growhair2 from "./../../../assets/images/advanced-growhair7.jpg";
// import growhair3 from "./../../../assets/images/advanced-growhair8.jpg";
// import growhair4 from "./../../../assets/images/advanced-growhair9.jpg";

// // Import icons
// import groHairIcon from "./../../../assets/images/grow-hair treatment-icons.png";
// import prpIcon from "./../../../assets/images/prp-treatment-icons1.png";
// import gfcIcon from "./../../../assets/images/gfc-treatment-icons.png";
// import stmIcon from "./../../../assets/images/treatment.png";
// import laserIcon from "./../../../assets/images/laserhair.png";

// const treatments = [
//   { name: "GROHAIR TREATMENT", url: "/advanced-grohair-treatment", navName: "GROHAIR" },
//   { name: "PRP TREATMENT", url: "/advanced-prp-treatment", navName: "PRP" },
//   { name: "GFC TREATMENT", url: "/advanced-gfc-treatment", navName: "GFC" },
//   { name: "STM TREATMENT", url: "/advanced-stm-treatment", navName: "STM" },
//   { name: "LASER TREATMENT", url: "/advanced-laser-treatment", navName: "LASER" }
// ];

// const treatmentIconPNGMap = {
//   GROHAIR: groHairIcon,
//   PRP: prpIcon,
//   GFC: gfcIcon,
//   STM: stmIcon,
//   LASER: laserIcon,
// };

// const images = [
//   { src: growhair2, alt: "Before Treatment 1" },
//   { src: growhair3, alt: "After Treatment 1" },
//   { src: growhair4, alt: "Before Treatment 2" },
// ];

// function Hair() {
//   const [activeTab, setActiveTab] = useState("GFC TREATMENT");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalImage, setModalImage] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     document.title = "GROHAIR Treatment & Advanced Hair Regrowth Therapy - H-Cura";
//     const metaDescription = document.querySelector("meta[name='description']");
//     if (metaDescription) {
//       metaDescription.setAttribute(
//         "content",
//         "Boost your hair growth with GROHAIR Treatment at H-Cura, Bangalore and Chennai. Experience advanced, non-invasive therapy for thicker, healthier hair. Book your consultation today."
//       );
//     }
//     const metaKeywords = document.querySelector("meta[name='keywords']");
//     if (metaKeywords) {
//       metaKeywords.setAttribute(
//         "content",
//         "Corporate Health Camps, Employee Wellness Programs, Workplace Health Initiatives, H-Cura Corporate Wellness Solutions, Corporate Health Services in Chennai, Customized Health Camps for Companies, Employee Health Assessments, H-Cura Corporate Health Consultation, Corporate Health Screening Services, Health and Wellness for Employees, Corporate Wellness Programs Chennai, H-Cura Employee Wellness Initiatives, Workplace Health Risk Identification, Corporate Health Workshops, H-Cura Health Camps for Companies, Preventive Healthcare for Employees, Corporate Health Management, H-Cura Corporate Health Partnership, Health Camps Tailored for Businesses, Wellness Programs for Corporate Clients."
//       );
//     }
//     // Set canonical link
//     const existingCanonical = document.querySelector("link[rel='canonical']");
//     if (existingCanonical) {
//       existingCanonical.setAttribute("href", "https://www.h-cura.com/bookconsultation");
//     } else {
//       const canonicalLink = document.createElement("link");
//       canonicalLink.setAttribute("rel", "canonical");
//       canonicalLink.setAttribute("href", "https://www.h-cura.com/bookconsultation");
//       document.head.appendChild(canonicalLink);
//     }
//     // Set favicon
//     const existingFavicon = document.querySelector("link[rel='icon']");
//     if (existingFavicon) {
//       existingFavicon.setAttribute("href", favicon);
//     } else {
//       const faviconLink = document.createElement("link");
//       faviconLink.setAttribute("rel", "icon");
//       faviconLink.setAttribute("type", "image/x-icon");
//       faviconLink.setAttribute("href", favicon);
//       document.head.appendChild(faviconLink);
//     }
//   }, []);

//   useEffect(() => {
//     const path = window.location.pathname;
    
//     const pathSegments = path.split('/');
//     const currentPage = pathSegments[pathSegments.length - 1]?.toLowerCase();
    
//     if (currentPage) {
//       const matchingTreatment = treatments.find(
//         treatment => treatment.navName.toLowerCase() === currentPage
//       );
      
//       if (matchingTreatment) {
//         setActiveTab(matchingTreatment.name);
//       }
//     }
    
//     const steps = document.querySelectorAll(".hc-process-step");
//     steps.forEach((step, index) => {
//       step.style.setProperty("--index", index);
//       step.style.opacity = "1";
//     });
//   }, []);

//   const renderTreatmentIcon = (name) => {
//     const baseName = name.split(" ")[0];
//     return treatmentIconPNGMap[baseName] ? (
//       <img
//         src={treatmentIconPNGMap[baseName]}
//         alt={name}
//         style={{ width: "100px", height: "100px" }}
//       />
//     ) : null;
//   };

//   const openModal = (image) => {
//     setModalImage(image);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalImage(null);
//   };

//   const handleTreatmentClick = (name) => {
//     const matchingTreatment = treatments.find(treatment => treatment.name === name);
//     if (matchingTreatment) {
//       setActiveTab(matchingTreatment.name);
//       navigate(matchingTreatment.url);
//     }
//   };

//   return (
//     <div className="hc-wrapper">
//       {/* Treatment Navigation Section */}
//       <div className="hc-treatment-nav-container">
//         <h2>Explore Our Treatments</h2>
//         <div className="hc-treatment-nav-cards">
//           {treatments.map((treatment) => (
//             <div
//               key={treatment.name}
//               className={`hc-treatment-nav-card ${activeTab === treatment.name ? "active" : ""}`}
//               style={{
//                 position: "relative",
//                 borderBottom: activeTab === treatment.name ? "3px solid #007bff" : "none",
//                 transition: "border-bottom 0.3s ease"
//               }}
//               onClick={() => handleTreatmentClick(treatment.name)}
//             >
//               <div className="hc-card-icon">{renderTreatmentIcon(treatment.navName)}</div>
//               <div className="hc-card-title">
//                 <span style={{ color: "#007bff" }}>{treatment.name.split(" ")[0]}</span>{" "}
//                 {treatment.name.split(" ")[1]}
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
//           <h1 className="hc-hero-title">Advanced Gro Hair Treatment</h1>
//           <p className="hc-hero-text">
//             Experience Revolutionary Gro Hair Therapy
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

//       {/* Treatment Section */}
//       <section className="hc-treatment-section" id="treatments">
//         <div className="hc-treatment-container">
//           <div className="hc-treatment-nav">
//             <h2>Help Your Hair with Our Advanced Treatments</h2>
//             <p className="hc-nav-description">
//               From growth factor enhancements to exclusive Grohair therapies, each
//               treatment is engineered to kickstart your natural hair regrowth.
//             </p>
//             <ul>
//               {/* UI Content for Treatments would follow here */}
//             </ul>
//           </div>

//           <div className="hc-treatment-content">
//             <h3> Advanced Grohair Treatment</h3>
//             {/* Treatment description... */}
//           </div>
//         </div>
//       </section>


//       {/* Modal for Image Viewing */}
//       {isModalOpen && (
//         <div className="hc-modal-overlay" onClick={closeModal}>
//           <div className="hc-modal-content" onClick={(e) => e.stopPropagation()}>
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
import heroImage from "./../../../assets/images/adanced-growhair6.jpg";
import favicon from "./../../../assets/images/favicon.ico"; // Make sure to import favicon

import "./advancedhair.css";
//bannerimg
import growhair1 from "./../../../assets/images/adanced-growhair.jpg";
//before and after
import growhair2 from "./../../../assets/images/advanced-growhair7.jpg";
import growhair3 from "./../../../assets/images/advanced-growhair8.jpg";
import growhair4 from "./../../../assets/images/advanced-growhair9.jpg";

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
  { name: "LASER TREATMENT", navName: "LASER" }
];

const treatmentIconPNGMap = {
  GROHAIR: groHairIcon,
  PRP: prpIcon,
  GFC: gfcIcon,
  STM: stmIcon,
  LASER: laserIcon,
};

const images = [
  { src: growhair2, alt: "Before Treatment 1" },
  { src: growhair3, alt: "After Treatment 1" },
  { src: growhair4, alt: "Before Treatment 2" },
  // Add more images as needed
];

function Hair() {
  const [activeTab, setActiveTab] = useState("GFC TREATMENT");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "GROHAIR Treatment & Advanced Hair Regrowth Therapy - H-Cura";
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Boost your hair growth with GROHAIR Treatment at H-Cura, Bangalore and Chennai. Experience advanced, non-invasive therapy for thicker, healthier hair. Book your consultation today."
      );
    }
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "GroHair treatment in Bangalore,Advanced hair regrowth therapy,Best hair growth treatment in Bangalore,Non-invasive hair regrowth solutions,Hair loss treatment Bangalore,Effective hair restoration therapy,Hair thinning solutions Bangalore,Scalp rejuvenation treatment,"
      );
    }
    // Set canonical link
    const existingCanonical = document.querySelector("link[rel='canonical']");
    if (existingCanonical) {
      existingCanonical.setAttribute("href", "https://www.h-cura.com/advanced-grow-hair-treatment");
    } else {
      const canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute("href", "https://www.h-cura.com/advanced-grow-hair-treatment");
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

  useEffect(() => {
    // Get the current path from window.location
    const path = window.location.pathname;
    
    // Check specifically for the grow-hair-treatment path
    if (path.includes('advanced-grow-hair-treatment')) {
      // Set GROHAIR TREATMENT as active
      setActiveTab("GROHAIR TREATMENT");
    } else {
      // For other paths, try to match based on the last segment
      const pathSegments = path.split('/');
      const currentPage = pathSegments[pathSegments.length - 1]?.toLowerCase();
      
      if (currentPage) {
        // Try to match with navName first
        const matchingTreatment = treatments.find(
          treatment => treatment.navName.toLowerCase() === currentPage
        );
        
        if (matchingTreatment) {
          setActiveTab(matchingTreatment.name);
        }
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
    // Extract the base name without "TREATMENT"
    const baseName = name.split(" ")[0];
    return treatmentIconPNGMap[baseName] ? (
      <img
        src={treatmentIconPNGMap[baseName]}
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

  const handleTreatmentClick = (name) => {
    setActiveTab(name);
    // Map treatment names to specific URLs
    const treatmentUrlMap = {
      "GROHAIR TREATMENT": "/advanced-grow-hair-treatment",
      "PRP TREATMENT": "/advanced-prp-treatment",
      "GFC TREATMENT": "/advanced-gfc-treatment",
      "STM TREATMENT": "/advanced-stm-treatment",
      "LASER TREATMENT": "/advanced-laser-treatment"
    };
    
    // Use the mapped URL if available, otherwise fallback to the original pattern
    const url = treatmentUrlMap[name] || `/home/${name.split(" ")[0].toLowerCase()}`;
    navigate(url);
  };

  return (
    <div className="hc-wrapper">
      {/* New Navigation Section */}
      <div className="hc-treatment-nav-container">
        <h2>Explore Our Treatments</h2>
        <div className="hc-treatment-nav-cards">
          {treatments.map((treatment) => {
            const [treatmentName, treatmentSuffix] = treatment.name.split(" ");
            return (
              <div
                key={treatment.name}
                className={`hc-treatment-nav-card ${
                  activeTab === treatment.name ? "active" : ""
                }`}
                style={{
                  position: "relative",
                  borderBottom: activeTab === treatment.name ? "3px solid #007bff" : "none",
                  transition: "border-bottom 0.3s ease"
                }}
                onClick={() => handleTreatmentClick(treatment.name)}
              >
                <div className="hc-card-icon">{renderTreatmentIcon(treatment.navName)}</div>
                <div className="hc-card-title">
                  <span style={{ color: "#007bff" }}>{treatmentName}</span>{" "}
                  {treatmentSuffix}
                </div>
              </div>
            );
          })}
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
          <h1 className="hc-hero-title">Advanced Gro Hair Treatment</h1>
          <p className="hc-hero-text">
            Experience Revolutionary Gro Hair Therapy
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
              From growth factor enhancements to exclusive Grohair therapies, each
              treatment is engineered to kickstart your natural hair regrowth.
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
                <strong>PRP Therapy</strong>
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
            <h3> Advanced Grohair Treatment</h3>
            <div className="hc-treatment-info">
              <div className="hc-treatment-images">
                <img
                  src={growhair1}
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
                <h4>Revolutionary Hair Growth Technology</h4>
                <div className="hc-treatment-intro">
                  <Link
                    to="/bookconsultation"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="hc-highlight-tag">Advanced Treatment</span>
                  </Link>
                  <p className="hc-lead-text">
                    Experience the future of hair restoration with our
                    FDA-approved Growth Factor Treatment.
                  </p>
                </div>

                <div className="hc-key-benefits">
                  <h5>How It Transforms Your Hair</h5>
                  <p>
                    Our scientifically proven treatment utilizes advanced growth
                    factors and natural proteins to:
                  </p>
                  <ul>
                    <li>
                      <span className="hc-benefit-icon">🔬</span>
                      <strong>Stimulate hair Follicles</strong>
                      <p>Reactivates sleeping hair follicles for new growth</p>
                    </li>
                    <li>
                      <span className="hc-benefit-icon">📈</span>
                      <strong>Increase Hair Density</strong>
                      <p>Up to 40% improvement in hair thickness</p>
                    </li>
                    <li>
                      <span className="hc-benefit-icon">🌱</span>
                      <strong>Natural Hair Growth</strong>
                      <p>Promotes sustainable, natural-looking results</p>
                    </li>
                    <li>
                      <span className="hc-benefit-icon">💪</span>
                      <strong>Strengthen Existing Hair</strong>
                      <p>Reduces breakage and improves hair quality</p>
                    </li>
                  </ul>
                </div>

                <div className="hc-treatment-highlights">
                  <div className="hc-highlight-box">
                    <h5>Success Rate</h5>
                    <p>95%</p>
                    <span className="hc-subtitle">Satisfied Clients</span>
                  </div>
                  <div className="hc-highlight-box">
                    <h5>Treatment Time</h5>
                    <p>60 mins</p>
                    <span className="hc-subtitle">Per Session</span>
                  </div>
                  <div className="hc-highlight-box">
                    <h5>Recovery</h5>
                    <p>min to max</p>
                    <span className="hc-subtitle">
                      depends upon person to person{" "}
                    </span>
                  </div>
                  <div className="hc-highlight-box">
                    <h5>Result</h5>
                    <p>6-10 sessions</p>
                    <span className="hc-subtitle">for visible results</span>
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
          <h2>Experience Excellence with H-Cura Multispeciality clinic</h2>
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
              desc: "We deploy the latest in growth factor technology and FDA-approved treatments to ensure optimal hair restoration results.",
              features: [
                "Latest Medical Innovation",
                "Proven Clinical Results",
                "Safe & Effective",
              ],
            },
            {
              icon: "👨‍⚕",
              title: "Expert Medical Team",
              desc: "Our board-certified specialists bring decades of experience in advanced hair restoration techniques.",
              features: [
                "Certified Specialists",
                "Ongoing Training",
                "Dedicated Care Team",
              ],
            },
            {
              icon: "🎯",
              title: "Personalized Treatment",
              desc: "Every treatment plan is tailored to your unique hair type, condition, and desired outcomes.",
              features: [
                "Custom Solutions",
                "Regular Monitoring",
                "Adaptive Care Plans",
              ],
            },
            {
              icon: "✨",
              title: "Natural Results",
              desc: "Experience transformative results that look and feel completely natural, boosting your confidence.",
              features: [
                "Lasting Results",
                "Natural Appearance",
                "High Success Rate",
              ],
            },
            {
              icon: "🛡",
              title: "Safety First Approach",
              desc: "H-Cura prioritizes your safety with stringent protocols and state-of-the-art facilities.",
              features: [
                "Medical-Grade Facility",
                "Sterile Environment",
                "Safety Protocols",
              ],
            },
            {
              icon: "💯",
              title: "Proven Track Record",
              desc: "Join thousands of clients who have experienced the H-Cura difference in hair restoration.",
              features: [
                "95% Success Rate",
                "10000+ Happy Clients",
                "Outstanding Reviews",
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
            Experience our comprehensive 4-step approach to hair restoration
          </p>
        </div>

        <div className="hc-process-timeline">
          {[
            {
              step: "01",
              title: "Comprehensive Consultation",
              desc: "Begin your transformation with a detailed assessment by our expert trichologists.",
              details: [
                "Advanced scalp analysis",
                "Hair loss pattern evaluation",
                "Medical history review",
                "Treatment expectations discussion",
              ],
              icon: "🔍",
            },
            {
              step: "02",
              title: "Personalized Treatment Design",
              desc: "Receive a custom-tailored treatment plan designed specifically for your needs.",
              details: [
                "Growth factor concentration optimization",
                "Treatment schedule planning",
                "Expected timeline discussion",
                "Lifestyle recommendations",
              ],
              icon: "📋",
            },
            {
              step: "03",
              title: "Advanced Treatment Session",
              desc: "Experience H-Cura's state-of-the-art growth factor therapy.",
              details: [
                "Sterile environment preparation",
                "Growth factor application",
                "Scalp stimulation therapy",
                "Comfort-focused procedure",
              ],
              icon: "💉",
            },
            {
              step: "04",
              title: "Comprehensive Aftercare",
              desc: "Ensure optimal results with our dedicated follow-up program.",
              details: [
                "Progress monitoring",
                "Treatment adjustments",
                "Maintenance guidelines",
                "Long-term care planning",
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
          <div className="hc-modal-content" onClick={(e) => e.stopPropagation()}>
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

export default Hair;
