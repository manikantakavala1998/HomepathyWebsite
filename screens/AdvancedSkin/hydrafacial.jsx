// import React, { useEffect, useState } from "react";
// import "./hydrafacial.css";
// import { useNavigate, Link, useLocation } from "react-router-dom";
// import heroImage from "../../../assets/images/ad-hydrafacial1.jpg";
// import heroImage1 from "../../../assets/images/ad-hydrafacial2.jpg";
// import favicon from "../../../assets/images/favicon.ico";

// import deepCleansingIcon from "../../../assets/images/deep-cleansing.png";
// import enhancedHydrationIcon from "../../../assets/images/enhanced-hydration.png";
// import skinRenewalIcon from "../../../assets/images/skin-renewal.png";
// import nonInvasiveIcon from "../../../assets/images/non-invasive.png";
// // Import PNG icons for navigation treatments
// import hydrafacialIcon from "../../../assets/images/botox.png";
// import acneIcon from "../../../assets/images/navacne.png";
// import skinBrighteningIcon from "../../../assets/images/skin-brightening.png";
// import antiAgeingIcon from "../../../assets/images/anti-ageing.png";
// import youthIcon from "../../../assets/images/youth.png";
// import prpFaceIcon from "../../../assets/images/prpface.png";
// import co2FacialIcon from "../../../assets/images/co2.png";
// import acneScarIcon from "../../../assets/images/acnescar.png";
// import moleBirthMarkIcon from "../../../assets/images/wart.png";
// import tattoRemovalIcon from "../../../assets/images/tattoo.png";
// import wartsRemovalIcon from "../../../assets/images/blackhead.png";
// import antiAgeingLaserIcon from "../../../assets/images/laser.png";
// import laserHairRemovalIcon from "../../../assets/images/laserHairRemoval.png";

// const treatments = [
//   { name: "ADVANCED HYDRAFACIAL" },
//   { name: "ACNE" },
//   { name: "ANTI AGEING" },
//   { name: "YOUTH" },
//   { name: "PRP FACE" },
//   { name: "CO2 FACIAL" },
//   { name: "ACNE SCAR" },
//   { name: "MOLE & BIRTH MARK REMOVAL" },
//   { name: "SKIN BRIGHTENING" },
//   { name: "TATTO REMOVAL" },
//   { name: "WARTS REMOVAL" },
//   { name: "ANTI AGEING LASER" },
//   { name: "LASER HAIR REMOVAL" },
// ];

// // Mapping treatment names to their PNG icons
// const treatmentIconPNGMap = {
//   "ADVANCED HYDRAFACIAL": hydrafacialIcon,
//   "ACNE": acneIcon,
//   "SKIN BRIGHTENING": skinBrighteningIcon,
//   "ANTI AGEING": antiAgeingIcon,
//   "YOUTH": youthIcon,
//   "PRP FACE": prpFaceIcon,
//   "CO2 FACIAL": co2FacialIcon,
//   "ACNE SCAR": acneScarIcon,
//   "MOLE & BIRTH MARK REMOVAL": moleBirthMarkIcon,

//   "TATTO REMOVAL": tattoRemovalIcon,
//   "WARTS REMOVAL": wartsRemovalIcon,
//   "ANTI AGEING LASER": antiAgeingLaserIcon,
//   "LASER HAIR REMOVAL": laserHairRemovalIcon,
// };

// const images = [
//   {
//     src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80",
//     alt: "Before and After Results",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80",
//     alt: "Hydrafacial Procedure",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1606206522398-de3bd05b1615?q=80",
//     alt: "Hydrafacial Equipment",
//   },
  
// ];

// // Functions from antiageing.jsx
// function openModalWithNavigation(
//   image,
//   setModalImage,
//   setIsModalOpen,
//   setCurrentImageIndex,
//   images
// ) {
//   const index = images.findIndex((img) => img.src === image.src);
//   setCurrentImageIndex(index);
//   setModalImage(image);
//   setIsModalOpen(true);
// }

// function closeModal(setIsModalOpen, setModalImage) {
//   setIsModalOpen(false);
//   setModalImage(null);
// }

// function navigatePrevious(
//   e,
//   currentImageIndex,
//   images,
//   setCurrentImageIndex,
//   setModalImage
// ) {
//   e.stopPropagation();
//   const newIndex = (currentImageIndex - 1 + images.length) % images.length;
//   setCurrentImageIndex(newIndex);
//   setModalImage(images[newIndex]);
// }

// function navigateNext(
//   e,
//   currentImageIndex,
//   images,
//   setCurrentImageIndex,
//   setModalImage
// ) {
//   e.stopPropagation();
//   const newIndex = (currentImageIndex + 1) % images.length;
//   setCurrentImageIndex(newIndex);
//   setModalImage(images[newIndex]);
// }

// function navigateGalleryPrev(visibleGalleryImages, setVisibleGalleryImages) {
//   if (visibleGalleryImages[0] > 0) {
//     const newVisibleImages = visibleGalleryImages.map((idx) => idx - 1);
//     setVisibleGalleryImages(newVisibleImages);
//   }
// }

// function navigateGalleryNext(
//   visibleGalleryImages,
//   setVisibleGalleryImages,
//   images
// ) {
//   if (
//     visibleGalleryImages[visibleGalleryImages.length - 1] <
//     images.length - 1
//   ) {
//     const newVisibleImages = visibleGalleryImages.map((idx) => idx + 1);
//     setVisibleGalleryImages(newVisibleImages);
//   }
// }

// // function TreatmentNav() {
// //   const [activeTab, setActiveTab] = useState("HYDRAFACIAL");
// //   const navigate = useNavigate();

// //   const renderTreatmentIcon = (name, fallbackIcon) => {
// //     return treatmentIconPNGMap[name] ? (
// //       <img
// //         src={treatmentIconPNGMap[name]}
// //         alt={name}
// //         style={{ width: "100px", height: "100px" }}
// //       />
// //     ) : (
// //       fallbackIcon
// //     );
// //   };

// //   return (
// //     <div className="ads-treatment-nav-container">
// //       <h2>Explore Our Treatments</h2>
// //       <div className="ads-treatment-nav-cards">
// //         {treatments.map(({ name, icon }) => (
// //           <div
// //             key={name}
// //             className={`ads-treatment-nav-card ${
// //               activeTab === name ? "active" : ""
// //             }`}
// //             onClick={() => {
// //               setActiveTab(name);
// //               navigate(`/home/${name.toLowerCase()}`);
// //             }}
// //           >
// //             <div className="ads-card-icon">
// //               {renderTreatmentIcon(name, icon)}
// //             </div>{" "}
// //             <div className="ads-card-title">{name}</div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// function TreatmentNav() {
//   const [activeTab, setActiveTab] = useState("ADVANCED HYDRAFACIAL");
//   const navigate = useNavigate();
//   const location = useLocation(); // Use location to track the current path

//   useEffect(() => {
//     // Set activeTab based on the current URL
//     const pathSegments = location.pathname.split("/");
//     const treatmentName = pathSegments[pathSegments.length - 1].toUpperCase();

//     if (treatments.some((treatment) => treatment.name === treatmentName)) {
//       setActiveTab(treatmentName);
//     }
//   }, [location.pathname]); // Re-run when location changes

//   const renderTreatmentIcon = (name) => {
//     return treatmentIconPNGMap[name] ? (
//       <img
//         src={treatmentIconPNGMap[name]}
//         alt={name}
//         style={{ width: "100px", height: "100px" }}
//       />
//     ) : null; // Return null if no icon is available
//   };

//   const handleCardClick = (name) => {
//     setActiveTab(name);
//     navigate(`/home/${name.toLowerCase()}`);
//   };

//   return (
//     <div className="ads-treatment-nav-container">
//       <h2>Explore Our Treatments</h2>
//       <div className="ads-treatment-nav-cards">
//         {treatments.map(({ name }) => (
//           <div
//             key={name}
//             className={`ads-treatment-nav-card ${activeTab === name ? "active" : ""}`}
//             onClick={() => handleCardClick(name)} // Handle click for navigation
//           >
//             <div className="ads-card-icon">
//               {renderTreatmentIcon(name)}
//             </div>
//             <div className="ads-card-title">{name}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function AdvancedSkin() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalImage, setModalImage] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [visibleGalleryImages, setVisibleGalleryImages] = useState([0, 1, 2]);

//   useEffect(() => {
//     document.title =
//       "Advanced Hydrafacial Treatment for Skin Rejuvenation - H-Cura";
//     const metaDescription = document.querySelector("meta[name='description']");
//     if (metaDescription) {
//       metaDescription.setAttribute(
//         "content",
//         "Experience revolutionary Hydrafacial therapy that cleanses, exfoliates, and hydrates for radiant skin. Our advanced treatments combine cutting-edge technology with personalized care for optimal skin health and rejuvenation."
//       );
//     }
//     const metaKeywords = document.querySelector("meta[name='keywords']");
//     if (metaKeywords) {
//       metaKeywords.setAttribute(
//         "content",
//         "Hydrafacial Treatment, Skin Rejuvenation, Advanced Skin Care, Deep Cleansing Facial, Enhanced Hydration, Skin Renewal, Non-Invasive Treatment, Facial Therapy, Skin Texture Improvement, Anti-Aging Treatment, Pore Minimizing, Skin Brightening, Acne Treatment, Customized Skin Care, Professional Facial, Skin Health, Radiant Complexion, Skin Exfoliation, Facial Hydration, Skin Care Technology"
//       );
//     }
//     // Set canonical link
//     const existingCanonical = document.querySelector("link[rel='canonical']");
//     if (existingCanonical) {
//       existingCanonical.setAttribute(
//         "href",
//         "https://www.h-cura.com/home/advanced-hydrafacial"
//       );
//     } else {
//       const canonicalLink = document.createElement("link");
//       canonicalLink.setAttribute("rel", "canonical");
//       canonicalLink.setAttribute(
//         "href",
//         "https://www.h-cura.com/home/advanced-hydrafacial"
//       );
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
//     const steps = document.querySelectorAll(".ads-process-step");
//     steps.forEach((step, index) => {
//       step.style.setProperty("--index", index);
//       step.style.opacity = "1";
//     });
//   }, []);

//   // Using antiageing.jsx functions with the necessary parameters
//   const openModal = (image) => {
//     openModalWithNavigation(
//       image,
//       setModalImage,
//       setIsModalOpen,
//       setCurrentImageIndex,
//       images
//     );
//   };

//   const handleCloseModal = () => {
//     closeModal(setIsModalOpen, setModalImage);
//   };

//   const handleNavigatePrevious = (e) => {
//     navigatePrevious(
//       e,
//       currentImageIndex,
//       images,
//       setCurrentImageIndex,
//       setModalImage
//     );
//   };

//   const handleNavigateNext = (e) => {
//     navigateNext(
//       e,
//       currentImageIndex,
//       images,
//       setCurrentImageIndex,
//       setModalImage
//     );
//   };

//   const handleNavigateGalleryPrev = () => {
//     navigateGalleryPrev(visibleGalleryImages, setVisibleGalleryImages);
//   };

//   const handleNavigateGalleryNext = () => {
//     navigateGalleryNext(visibleGalleryImages, setVisibleGalleryImages, images);
//   };

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!isModalOpen) return;

//       if (e.key === "ArrowLeft") {
        
//       } else if (e.key === "ArrowRight") {
        
//       } else if (e.key === "Escape") {
//         handleCloseModal();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [isModalOpen, currentImageIndex]);

//   return (
//     <div className="ads-wrapper">
//       <TreatmentNav />
//       <section
//         className="ads-hero"
//         style={{
//           backgroundImage: `linear-gradient(rgba(128, 126, 126, 0.5), rgba(23, 23, 23, 0.5)), 
//           url(${heroImage})`,
//         }}
//       >
//         <div className="ads-hero-content">
//           <h1 className="ads-hero-title">
//             Revolutionary Hydrafacial Therapy for Skin Rejuvenation
//           </h1>
//           <p className="ads-hero-text">
//             Experience the ultimate skin treatment that cleanses, exfoliates,
//             and hydrates for a radiant complexion.
//           </p>
//           <Link
//             to="/bookconsultation"
//             style={{ textDecoration: "none" }}
//             className="ads-cta-button"
//           >
//             Book Consultation
//           </Link>
//         </div>
//       </section>

//       <section className="ads-treatment-section" id="treatments">
//         <div className="ads-treatment-container">
//           <div className="ads-treatment-nav">
//             <h2>Revitalize Your Skin with Hydra facial</h2>
//             <p className="ads-nav-description">
//               Our Hydra facial treatment combines advanced technology with
//               nourishing ingredients for optimal skin health.
//             </p>

//             <ul className="ads-treatment-list">
//               <li className="ads-treatment-item">
//                 <strong>HYDRAFACIAL</strong>
//                 <p>Thoroughly cleanses and purifies your skin.</p>
//                 <ul className="ads-treatment-details">
//                   <li>Improves Skin Texture and Tone</li>
//                   <li>Reduces Fine Lines and Wrinkles</li>
//                   <li>Minimized pores and make glowing skin</li>
//                 </ul>
//               </li>
//               <li className="ads-treatment-item">
//                 <strong>ACNE TREATMENT</strong>
//                 <p>Gently exfoliates to reveal smoother skin.</p>
//                 <ul className="ads-treatment-details">
//                   <li>Improves Skin appearance & balance oil control</li>
//                   <li>Reduced inflammation, prevent scarring</li>
//                   <li>Treats Acne and Blackheads</li>
//                 </ul>
//               </li>
//               <li className="ads-treatment-item">
//                 <strong>PRP FACE </strong>
//                 <p>Stimulates collagen production</p>
//                 <ul className="ads-treatment-details">
//                   <li>Reduced fine lines & wrinkles</li>
//                   <li>Safe for all Skin</li>
//                   <li>Treats hyperpigmentation</li>
//                 </ul>
//               </li>
//               <li className="ads-treatment-item">
//                 <strong>CO2 FACIAL</strong>
//                 <p>Improves acne scars & spots</p>
//                 <ul className="ads-treatment-details">
//                   <li>Stimulates collagen production</li>
//                   <li>Hydration and Brightness</li>
//                   <li>Improves Skin Texture and Tone</li>
//                 </ul>
//               </li>
//               <li className="ads-treatment-item">
//                 <strong>LASER HAIR REMOVAL</strong>
//                 <p>Infuses skin with essential moisture.</p>
//                 <ul className="ads-treatment-details">
//                   <li>Long-lasting hair removal</li>
//                   <li>Quick and safe removal of hair</li>
//                   <li>Ability to treat larger areas of the body</li>
//                 </ul>
//               </li>
//             </ul>

//             <p className="ads-treatment-description-text">
//               Our Hydra facial treatments are customized for each individual's
//               skin type and concerns.
//             </p>
//             <p className="ads-treatment-extra-info">
//               Book a consultation today to discover the benefits of Hydra facial
//               treatment.
//             </p>
//           </div>

//           <div className="ads-treatment-content">
//             <h3> Advanced Hydra facial Treatment </h3>
//             <div className="ads-treatment-info">
//               <div className="ads-treatment-images">
//                 <img
//                   src={heroImage1}
//                   alt="Hydra facial Treatment Process"
//                   className="ads-main-treatment-image"
//                 />
//                 <div className="ads-gallery-container">
//                   <button
//                     className="ads-gallery-nav ads-gallery-prev ads-small-screen-nav"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       // For small screens, scroll the gallery directly
//                       const gallery = document.querySelector(
//                         ".ads-treatment-gallery"
//                       );
//                       if (gallery) {
//                         gallery.scrollBy({
//                           left: -gallery.clientWidth * 0.8,
//                           behavior: "smooth",
//                         });
//                       }
//                       // Also update the visible images state for larger screens
//                       handleNavigateGalleryPrev();
//                     }}
//                     style={{
//                       display: visibleGalleryImages[0] > 0 ? "block" : "none",
//                     }}
//                   >
//                     &#10094;
//                   </button>
//                   {/* <div className="ads-treatment-gallery">
//                     {visibleGalleryImages.map(
//                       (index) =>
//                         images[index] && (
//                           <img
//                             key={index}
//                             src={images[index].src}
//                             alt={images[index].alt}
//                             onClick={() => openModal(images[index])}
//                           />
//                         )
//                     )}
//                   </div> */}
//                   <button
//                     className="ads-gallery-nav ads-gallery-next ads-small-screen-nav"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       // For small screens, scroll the gallery directly
//                       const gallery = document.querySelector(
//                         ".ads-treatment-gallery"
//                       );
//                       if (gallery) {
//                         gallery.scrollBy({
//                           left: gallery.clientWidth * 0.8,
//                           behavior: "smooth",
//                         });
//                       }
//                       // Also update the visible images state for larger screens
//                       handleNavigateGalleryNext();
//                     }}
//                     style={{
//                       display:
//                         visibleGalleryImages[visibleGalleryImages.length - 1] <
//                         images.length - 1
//                           ? "block"
//                           : "none",
//                     }}
//                   >
//                     &#10095;
//                   </button>
//                 </div>

//                 <div className="ads-gallery-dots">
//                   {images.map((_, index) => (
//                     <span
//                       key={index}
//                       className={`ads-gallery-dot ${
//                         visibleGalleryImages.includes(index) ? "active" : ""
//                       }`}
//                       onClick={() => {
//                         // Show this image and its neighbors
//                         const start = Math.max(0, index - 1);
//                         const end = Math.min(images.length - 1, index + 1);
//                         const newVisible = [];
//                         for (let i = start; i <= end; i++) {
//                           newVisible.push(i);
//                         }
//                         setVisibleGalleryImages(newVisible);
//                       }}
//                     ></span>
//                   ))}
//                 </div>
//               </div>

//               <div className="ads-treatment-description">
//                 <h4>Empowering Skin Rejuvenation with Hydra facial</h4>
//                 <div className="ads-treatment-intro">
//                   <span className="ads-highlight-tag">
//                       INNOVATIVE HYDRA FACIAL                      
//                   </span>
//                   <p className="ads-lead-text">
//                     Our breakthrough Hydra facial technology combines cleansing,
//                     exfoliation, and hydration for a complete skin treatment.
//                   </p>
//                 </div>

//                 <div className="ads-key-benefits">
//                   <h5>Transformative Benefits of Hydra facial</h5>
//                   <p>Hydra facial provides the following benefits:</p>
//                   <ul>
//                     <li>
//                       <span className="ads-benefit-icon">
//                         <img src={nonInvasiveIcon} alt="Deep Cleansing" />
//                       </span>{" "}
//                       <strong>Deep Cleansing</strong>
//                       <p>
//                         Thoroughly removes impurities and pollutants, leaving
//                         skin refreshed.
//                       </p>
//                     </li>
//                     <li>
//                       <span className="ads-benefit-icon">
//                         <img
//                           src={enhancedHydrationIcon}
//                           alt="Enhanced Hydration"
//                         />
//                       </span>{" "}
//                       <strong>Enhanced Hydration</strong>
//                       <p>
//                         Infuses skin with hydrating serums for maximum moisture
//                         retention.
//                       </p>
//                     </li>
//                     <li>
//                       <span className="ads-benefit-icon">
//                         <img
//                           src={skinRenewalIcon}
//                           alt="Promotes Skin Renewal"
//                         />
//                       </span>{" "}
//                       <strong>Promotes Skin Renewal</strong>
//                       <p>
//                         Stimulates cell turnover for a healthier, more youthful
//                         appearance.
//                       </p>
//                     </li>
//                     <li>
//                       <span className="ads-benefit-icon">
//                         <img
//                           src={deepCleansingIcon}
//                           alt="Non-Invasive Treatment"
//                         />
//                       </span>{" "}
//                       <strong>Non-Invasive Treatment</strong>
//                       <p>
//                         Gentle on the skin while providing significant results
//                         without downtime.
//                       </p>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="ads-treatment-highlights">
//                   <div className="ads-highlight-box">
//                     <h5>Client Satisfaction Rate</h5>
//                     <p>98%</p>
//                     <span className="ads-subtitle">Happy Clients</span>
//                   </div>
//                   <div className="ads-highlight-box">
//                     <h5>Session Duration</h5>
//                     <p>45 mins</p>
//                     <span className="ads-subtitle">Per Treatment</span>
//                   </div>
//                   <div className="ads-highlight-box">
//                     <h5>Minimal Downtime</h5>
//                     <p>Immediate Results</p>
//                     <span className="ads-subtitle">Quick Recovery</span>
//                   </div>
//                 </div>

//                 <Link to="/bookconsultation" style={{ textDecoration: "none" }}>
//                   <button className="ads-book-treatment-btn">
//                     Schedule Your Consultation
//                     <span className="ads-btn-icon">→</span>
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="ads-benefits-section">
//         <div className="ads-benefits-header">
//           <span className="ads-section-tag">Why Choose Us</span>
//           <h2>Experience Excellence with H-Cura Multispeciality clinic</h2>
//           <p className="ads-section-subtitle">
//             Our advanced treatments combine cutting-edge science with
//             personalized care to restore your skin's health and confidence.
//           </p>
//         </div>
//         <div className="ads-benefits-grid">
//           {[
//             {
//               icon: "🔬",
//               title: "State-of-the-Art Technology",
//               desc: "We deploy the latest in Hydra facial technology to deliver natural skin rejuvenation results.",
//               features: [
//                 "Innovative Treatment Protocols",
//                 "FDA-Approved Procedures",
//                 "Clinically Proven Results",
//               ],
//             },
//             {
//               icon: "👨‍⚕",
//               title: "Expert Medical Team",
//               desc: "Our board-certified specialists are experts in skin treatments and are dedicated to your care.",
//               features: [
//                 "Highly Trained Professionals",
//                 "Years of Experience",
//                 "Personalized Attention",
//               ],
//             },
//             {
//               icon: "🎯",
//               title: "Customized Therapy",
//               desc: "Every Hydra facial treatment plan is tailored to your skin type and concerns.",
//               features: [
//                 "Individualized Sessions",
//                 "Continuous Progress Tracking",
//                 "Optimized Treatment Frequency",
//               ],
//             },
//             {
//               icon: "✨",
//               title: "Natural-Looking Results",
//               desc: "Achieve smoother, healthier skin that looks completely natural with our Hydra facial solutions.",
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
//               desc: "Join thousands of clients who have experienced astonishing results with Hydra facial.",
//               features: [
//                 "Over 5000 Happy Clients",
//                 "Remarkable Clinical Outcomes",
//                 "Consistently High Success Rates",
//               ],
//             },
//           ].map((benefit, index) => (
//             <div className="ads-benefit-card" key={index}>
//               <div className="ads-benefit-icon">{benefit.icon}</div>
//               <div className="ads-benefit-content">
//                 <h3>{benefit.title}</h3>
//                 <p>{benefit.desc}</p>
//                 <ul className="ads-feature-list">
//                   {benefit.features.map((feature, idx) => (
//                     <li key={idx}>{feature}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="ads-process-section" id="process">
//         <div className="ads-process-header">
//           <span className="ads-process-tag">Our Process</span>
//           <h2>Your Journey to Radiant Skin with Hydra facial</h2>
//           <p className="ads-process-subtitle">
//             Embrace our comprehensive 4-step approach for sustainable skin
//             rejuvenation.
//           </p>
//         </div>
//         <div className="ads-process-timeline">
//           {[
//             {
//               step: "01",
//               title: "In-Depth Consultation",
//               desc: "Kick off your journey with a thorough consultation to assess your skin health and treatment goals.",
//               details: [
//                 "Detailed skin analysis",
//                 "Personal health review",
//                 "Customized treatment roadmap",
//                 "Expectation setting",
//               ],
//               icon: "🔍",
//             },
//             {
//               step: "02",
//               title: "Tailored Treatment Planning",
//               desc: "Our team collaborates with you to design a bespoke Hydra facial treatment plan that best suits your skin needs.",
//               details: [
//                 "Personalized regimen design",
//                 "Session scheduling",
//                 "Lifestyle coaching",
//               ],
//               icon: "📋",
//             },
//             {
//               step: "03",
//               title: "Expert Hydra facial Session",
//               desc: "Experience our precise techniques as we apply Hydra facial for optimal skin rejuvenation.",
//               details: [
//                 "Sterile preparation",
//                 "Precision Hydra facial application",
//                 "Targeted skin treatment",
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
//             <div className="ads-process-step" key={index}>
//               <div className="ads-step-container">
//                 <div className="ads-step-number-container">
//                   <div className="ads-step-number">{process.step}</div>
//                   <div className="ads-step-icon">{process.icon}</div>
//                 </div>
//                 <div className="ads-step-content">
//                   <h3>{process.title}</h3>
//                   <p className="ads-step-description">{process.desc}</p>
//                   <ul className="ads-step-details">
//                     {process.details.map((detail, idx) => (
//                       <li key={idx}>{detail}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               {index < 3 && <div className="ads-connector-line"></div>}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Modal for Image Viewing with Navigation */}
//       {isModalOpen && (
//         <div className="ads-modal-overlay" onClick={handleCloseModal}>
//           <div
//             className="ads-modal-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button className="ads-close-modal" onClick={handleCloseModal}>
//               &times;
//             </button>
//             <button
//               className="ads-modal-nav ads-modal-prev"
//               onClick={handleNavigatePrevious}
//             >
//               &#10094;
//             </button>
//             <img
//               src={modalImage.src}
//               alt={modalImage.alt}
//               className="ads-modal-image"
//             />
//             <button
//               className="ads-modal-nav ads-modal-next"
//               onClick={handleNavigateNext}
//             >
//               &#10095;
//             </button>
//             <div className="ads-modal-counter">
//               {currentImageIndex + 1} / {images.length}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdvancedSkin;

import React, { useEffect, useState } from "react";
import "./hydrafacial.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import heroImage from "../../../assets/images/ad-hydrafacial1.jpg";
import heroImage1 from "../../../assets/images/ad-hydrafacial2.jpg";
import favicon from "../../../assets/images/favicon.ico";

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
  "ACNE": acneIcon,
  "SKIN BRIGHTENING": skinBrighteningIcon,
  "ANTI AGEING": antiAgeingIcon,
  "YOUTH": youthIcon,
  "PRP FACE": prpFaceIcon,
  "CO2 FACIAL": co2FacialIcon,
  "ACNE SCAR": acneScarIcon,
  "MOLE & BIRTH MARK REMOVAL": moleBirthMarkIcon,
  "TATTO REMOVAL": tattoRemovalIcon,
  "WARTS REMOVAL": wartsRemovalIcon,
  "ANTI AGEING LASER": antiAgeingLaserIcon,
  "LASER HAIR REMOVAL": laserHairRemovalIcon,
};

// Mapping treatment names to their URLs with "advanced" prefix
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

const images = [
  {
    src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80",
    alt: "Before and After Results",
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80",
    alt: "Hydrafacial Procedure",
  },
  {
    src: "https://images.unsplash.com/photo-1606206522398-de3bd05b1615?q=80",
    alt: "Hydrafacial Equipment",
  },
  
];

// Functions from antiageing.jsx
function openModalWithNavigation(
  image,
  setModalImage,
  setIsModalOpen,
  setCurrentImageIndex,
  images
) {
  const index = images.findIndex((img) => img.src === image.src);
  setCurrentImageIndex(index);
  setModalImage(image);
  setIsModalOpen(true);
}

function closeModal(setIsModalOpen, setModalImage) {
  setIsModalOpen(false);
  setModalImage(null);
}

function navigatePrevious(
  e,
  currentImageIndex,
  images,
  setCurrentImageIndex,
  setModalImage
) {
  e.stopPropagation();
  const newIndex = (currentImageIndex - 1 + images.length) % images.length;
  setCurrentImageIndex(newIndex);
  setModalImage(images[newIndex]);
}

function navigateNext(
  e,
  currentImageIndex,
  images,
  setCurrentImageIndex,
  setModalImage
) {
  e.stopPropagation();
  const newIndex = (currentImageIndex + 1) % images.length;
  setCurrentImageIndex(newIndex);
  setModalImage(images[newIndex]);
}

function navigateGalleryPrev(visibleGalleryImages, setVisibleGalleryImages) {
  if (visibleGalleryImages[0] > 0) {
    const newVisibleImages = visibleGalleryImages.map((idx) => idx - 1);
    setVisibleGalleryImages(newVisibleImages);
  }
}

function navigateGalleryNext(
  visibleGalleryImages,
  setVisibleGalleryImages,
  images
) {
  if (
    visibleGalleryImages[visibleGalleryImages.length - 1] <
    images.length - 1
  ) {
    const newVisibleImages = visibleGalleryImages.map((idx) => idx + 1);
    setVisibleGalleryImages(newVisibleImages);
  }
}

function TreatmentNav() {
  const [activeTab, setActiveTab] = useState("ADVANCED HYDRAFACIAL");
  const navigate = useNavigate();
  const location = useLocation(); // Use location to track the current path

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
  }, [location.pathname]); // Re-run when location changes

  const renderTreatmentIcon = (name) => {
    return treatmentIconPNGMap[name] ? (
      <img
        src={treatmentIconPNGMap[name]}
        alt={name}
        style={{ width: "100px", height: "100px" }}
      />
    ) : null; // Return null if no icon is available
  };

  const handleCardClick = (name) => {
    setActiveTab(name);
    navigate(treatmentUrlMap[name]);
  };

  return (
    <div className="ads-treatment-nav-container">
      <h2>Explore Our Treatments</h2>
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

function AdvancedSkin() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleGalleryImages, setVisibleGalleryImages] = useState([0, 1, 2]);

  useEffect(() => {
    document.title =
      "Advanced Hydrafacial Treatment for Skin Rejuvenation - H-Cura";
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Experience revolutionary Hydrafacial therapy that cleanses, exfoliates, and hydrates for radiant skin. Our advanced treatments combine cutting-edge technology with personalized care for optimal skin health and rejuvenation."
      );
    }
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "Hydrafacial Treatment, Skin Rejuvenation, Advanced Skin Care, Deep Cleansing Facial, Enhanced Hydration, Skin Renewal, Non-Invasive Treatment, Facial Therapy, Skin Texture Improvement, Anti-Aging Treatment, Pore Minimizing, Skin Brightening, Acne Treatment, Customized Skin Care, Professional Facial, Skin Health, Radiant Complexion, Skin Exfoliation, Facial Hydration, Skin Care Technology"
      );
    }
    // Set canonical link
    const existingCanonical = document.querySelector("link[rel='canonical']");
    if (existingCanonical) {
      existingCanonical.setAttribute(
        "href",
        "https://www.h-cura.com/home/advanced-hydrafacial-treatment"
      );
    } else {
      const canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute(
        "href",
        "https://www.h-cura.com/home/advanced-hydrafacial-treatment"
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

  useEffect(() => {
    const steps = document.querySelectorAll(".ads-process-step");
    steps.forEach((step, index) => {
      step.style.setProperty("--index", index);
      step.style.opacity = "1";
    });
  }, []);

  // Using antiageing.jsx functions with the necessary parameters
  const openModal = (image) => {
    openModalWithNavigation(
      image,
      setModalImage,
      setIsModalOpen,
      setCurrentImageIndex,
      images
    );
  };

  const handleCloseModal = () => {
    closeModal(setIsModalOpen, setModalImage);
  };

  const handleNavigatePrevious = (e) => {
    navigatePrevious(
      e,
      currentImageIndex,
      images,
      setCurrentImageIndex,
      setModalImage
    );
  };

  const handleNavigateNext = (e) => {
    navigateNext(
      e,
      currentImageIndex,
      images,
      setCurrentImageIndex,
      setModalImage
    );
  };

  const handleNavigateGalleryPrev = () => {
    navigateGalleryPrev(visibleGalleryImages, setVisibleGalleryImages);
  };

  const handleNavigateGalleryNext = () => {
    navigateGalleryNext(visibleGalleryImages, setVisibleGalleryImages, images);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      if (e.key === "ArrowLeft") {
        
      } else if (e.key === "ArrowRight") {
        
      } else if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, currentImageIndex]);

  return (
    <div className="ads-wrapper">
      <TreatmentNav />
      <section
        className="ads-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(128, 126, 126, 0.5), rgba(23, 23, 23, 0.5)), 
          url(${heroImage})`,
        }}
      >
        <div className="ads-hero-content">
          <h1 className="ads-hero-title">
            Revolutionary Hydrafacial Therapy for Skin Rejuvenation
          </h1>
          <p className="ads-hero-text">
            Experience the ultimate skin treatment that cleanses, exfoliates,
            and hydrates for a radiant complexion.
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
            <h2>Revitalize Your Skin with Hydra facial</h2>
            <p className="ads-nav-description">
              Our Hydra facial treatment combines advanced technology with
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
                  <li>Treats Acne and Blackheads</li>
                </ul>
              </li>
              <li className="ads-treatment-item">
                <strong>PRP FACE </strong>
                <p>Stimulates collagen production</p>
                <ul className="ads-treatment-details">
                  <li>Reduced fine lines & wrinkles</li>
                  <li>Safe for all Skin</li>
                  <li>Treats hyperpigmentation</li>
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
              Our Hydra facial treatments are customized for each individual's
              skin type and concerns.
            </p>
            <p className="ads-treatment-extra-info">
              Book a consultation today to discover the benefits of Hydra facial
              treatment.
            </p>
          </div>

          <div className="ads-treatment-content">
            <h3> Advanced Hydra facial Treatment </h3>
            <div className="ads-treatment-info">
              <div className="ads-treatment-images">
                <img
                  src={heroImage1}
                  alt="Hydra facial Treatment Process"
                  className="ads-main-treatment-image"
                />
                <div className="ads-gallery-container">
                  <button
                    className="ads-gallery-nav ads-gallery-prev ads-small-screen-nav"
                    onClick={(e) => {
                      e.preventDefault();
                      // For small screens, scroll the gallery directly
                      const gallery = document.querySelector(
                        ".ads-treatment-gallery"
                      );
                      if (gallery) {
                        gallery.scrollBy({
                          left: -gallery.clientWidth * 0.8,
                          behavior: "smooth",
                        });
                      }
                      // Also update the visible images state for larger screens
                      handleNavigateGalleryPrev();
                    }}
                    style={{
                      display: visibleGalleryImages[0] > 0 ? "block" : "none",
                    }}
                  >
                    &#10094;
                  </button>
                  {/* <div className="ads-treatment-gallery">
                    {visibleGalleryImages.map(
                      (index) =>
                        images[index] && (
                          <img
                            key={index}
                            src={images[index].src}
                            alt={images[index].alt}
                            onClick={() => openModal(images[index])}
                          />
                        )
                    )}
                  </div> */}
                  <button
                    className="ads-gallery-nav ads-gallery-next ads-small-screen-nav"
                    onClick={(e) => {
                      e.preventDefault();
                      // For small screens, scroll the gallery directly
                      const gallery = document.querySelector(
                        ".ads-treatment-gallery"
                      );
                      if (gallery) {
                        gallery.scrollBy({
                          left: gallery.clientWidth * 0.8,
                          behavior: "smooth",
                        });
                      }
                      // Also update the visible images state for larger screens
                      handleNavigateGalleryNext();
                    }}
                    style={{
                      display:
                        visibleGalleryImages[visibleGalleryImages.length - 1] <
                        images.length - 1
                          ? "block"
                          : "none",
                    }}
                  >
                    &#10095;
                  </button>
                </div>

                <div className="ads-gallery-dots">
                  {images.map((_, index) => (
                    <span
                      key={index}
                      className={`ads-gallery-dot ${
                        visibleGalleryImages.includes(index) ? "active" : ""
                      }`}
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
                <h4>Empowering Skin Rejuvenation with Hydra facial</h4>
                <div className="ads-treatment-intro">
                  <span className="ads-highlight-tag">
                      INNOVATIVE HYDRA FACIAL                      
                  </span>
                  <p className="ads-lead-text">
                    Our breakthrough Hydra facial technology combines cleansing,
                    exfoliation, and hydration for a complete skin treatment.
                  </p>
                </div>

                <div className="ads-key-benefits">
                  <h5>Transformative Benefits of Hydra facial</h5>
                  <p>Hydra facial provides the following benefits:</p>
                  <ul>
                    <li>
                      <span className="ads-benefit-icon">
                        <img src={nonInvasiveIcon} alt="Deep Cleansing" />
                      </span>{" "}
                      <strong>Deep Cleansing</strong>
                      <p>
                        Thoroughly removes impurities and pollutants, leaving
                        skin refreshed.
                      </p>
                    </li>
                    <li>
                      <span className="ads-benefit-icon">
                        <img
                          src={enhancedHydrationIcon}
                          alt="Enhanced Hydration"
                        />
                      </span>{" "}
                      <strong>Enhanced Hydration</strong>
                      <p>
                        Infuses skin with hydrating serums for maximum moisture
                        retention.
                      </p>
                    </li>
                    <li>
                      <span className="ads-benefit-icon">
                        <img
                          src={skinRenewalIcon}
                          alt="Promotes Skin Renewal"
                        />
                      </span>{" "}
                      <strong>Promotes Skin Renewal</strong>
                      <p>
                        Stimulates cell turnover for a healthier, more youthful
                        appearance.
                      </p>
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
                        Gentle on the skin while providing significant results
                        without downtime.
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
                    <span className="ads-subtitle">Quick Recovery</span>
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
            Our advanced treatments combine cutting-edge science with
            personalized care to restore your skin's health and confidence.
          </p>
        </div>
        <div className="ads-benefits-grid">
          {[
            {
              icon: "🔬",
              title: "State-of-the-Art Technology",
              desc: "We deploy the latest in Hydra facial technology to deliver natural skin rejuvenation results.",
              features: [
                "Innovative Treatment Protocols",
                "FDA-Approved Procedures",
                "Clinically Proven Results",
              ],
            },
            {
              icon: "👨‍⚕",
              title: "Expert Medical Team",
              desc: "Our board-certified specialists are experts in skin treatments and are dedicated to your care.",
              features: [
                "Highly Trained Professionals",
                "Years of Experience",
                "Personalized Attention",
              ],
            },
            {
              icon: "🎯",
              title: "Customized Therapy",
              desc: "Every Hydra facial treatment plan is tailored to your skin type and concerns.",
              features: [
                "Individualized Sessions",
                "Continuous Progress Tracking",
                "Optimized Treatment Frequency",
              ],
            },
            {
              icon: "✨",
              title: "Natural-Looking Results",
              desc: "Achieve smoother, healthier skin that looks completely natural with our Hydra facial solutions.",
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
              desc: "Join thousands of clients who have experienced astonishing results with Hydra facial.",
              features: [
                "Over 5000 Happy Clients",
                "Remarkable Clinical Outcomes",
                "Consistently High Success Rates",
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
          <h2>Your Journey to Radiant Skin with Hydra facial</h2>
          <p className="ads-process-subtitle">
            Embrace our comprehensive 4-step approach for sustainable skin
            rejuvenation.
          </p>
        </div>
        <div className="ads-process-timeline">
          {[
            {
              step: "01",
              title: "In-Depth Consultation",
              desc: "Kick off your journey with a thorough consultation to assess your skin health and treatment goals.",
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
              desc: "Our team collaborates with you to design a bespoke Hydra facial treatment plan that best suits your skin needs.",
              details: [
                "Personalized regimen design",
                "Session scheduling",
                "Lifestyle coaching",
              ],
              icon: "📋",
            },
            {
              step: "03",
              title: "Expert Hydra facial Session",
              desc: "Experience our precise techniques as we apply Hydra facial for optimal skin rejuvenation.",
              details: [
                "Sterile preparation",
                "Precision Hydra facial application",
                "Targeted skin treatment",
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
            <div className="ads-process-step" key={index}>
              <div className="ads-step-container">
                <div className="ads-step-number-container">
                  <div className="ads-step-number">{process.step}</div>
                  <div className="ads-step-icon">{process.icon}</div>
                </div>
                <div className="ads-step-content">
                  <h3>{process.title}</h3>
                  <p className="ads-step-description">{process.desc}</p>
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
       {isModalOpen && (
        <div className="ads-modal-overlay" onClick={handleCloseModal}>
          <div
            className="ads-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="ads-close-modal" onClick={handleCloseModal}>
              &times;
            </button>
            <button
              className="ads-modal-nav ads-modal-prev"
              onClick={handleNavigatePrevious}
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
              onClick={handleNavigateNext}
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

export default AdvancedSkin;
