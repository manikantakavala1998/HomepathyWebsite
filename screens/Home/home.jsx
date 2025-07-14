// src/components/Slider.jsx
import React, { useState, useEffect, useCallback,useRef } from 'react';
// import { Helmet } from "react-helmet-async";
import axios from 'axios'; // Importing axios
import './home.css';

import { FaStethoscope, FaCalendarAlt, FaClock } from 'react-icons/fa'; // Import icons from react-icons/fa
import { FaUserMd, FaTruck, FaFileMedical, FaLock, FaUsers } from 'react-icons/fa'; // Importing icons
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft,  faChevronRight, faTooth, faSmile, faTeeth  } from '@fortawesome/free-solid-svg-icons';

import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import Treatment images
import Eczematreatment from './../../../assets/images/eczema.jpg'
import alopecia from './../../../assets/images/AlopeciaAreata.jpg'
import Asthmatreatment from './../../../assets/images/Asthma.jpg'
import Irritable from './../../../assets/images/IrritableBowelSyndrome.jpg'
import Migraine from './../../../assets/images/Migraine.jpg'
import PCODtreatment from './../../../assets/images/PCOS.jpg'
import HairFall from './../../../assets/images/Hair_Fall.jpg'
import AnxietyNeurosis from './../../../assets/images/AnxietyNeurosis.jpg'
import Prostatitis from './../../../assets/images/Prostatitis.jpg'
import Psoriasis from './../../../assets/images/Psoriasis.jpg'
import Sleeplessness from './../../../assets/images/Sleeplessness.jpg'
import UlcerativeColitis from './../../../assets/images/Ulcerative_Colitis.jpg'
import piles from './../../../assets/images/piles.jpg'
import infertility from './../../../assets/images/infertility.jpg'
import gerd from './../../../assets/images/gerd.jpg'
import thyroid from './../../../assets/images/thyroid.jpg'
import diabetes from './../../../assets/images/diabetes.jpg'
import varicose from './../../../assets/images/varicose.jpg'
import consultationImage from './../../../assets/images/homeConsultation.jpg'; 
import doctors1 from '../../../assets/images/doctorsbannerimage.jpg'
import doctors2 from '../../../assets/images/doctorimagebannersmallscreen.jpg'


import dentalcosmetology from '../../../assets/images/Dental_cosmetology.jpg';
// for testimonials related
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//for healing stories

import testimonials from '../../../utils/testimonial';
import slides from '../../../utils/slide';
import { videos, members, faqs, treatments } from "../../../utils/constant";
import { useInView } from "react-intersection-observer";
import { API_CONFIG } from "../../../utils/config";
import LoadingBar from "./../../screens/LoadingBar/LoadingBar";
import favicon from "./../../../assets/images/favicon.ico"; // Adjust the path to your favicon file
// all const data
const featureData = [
  {
      icon: <FaUserMd className="feature-icon" />,
      title: "Consult Online, Anywhere & Anytime",
      description: "Get instant accessibility to India’s most trusted Online Homeopathy Doctors from the comfort of your home."
  },
  {
      icon: <FaTruck className="feature-icon" />,
      title: "Medicine Delivery at Your Doorstep",
      description: "Experience a hassle-free delivery of your medication delivery to your home with real-time tracking on our app."
  },
  {
      icon: <FaFileMedical className="feature-icon" />,
      title: "Store & Track Your Health Records",
      description: "Easily access and share your health records 24×7 on one platform."
  },
  {
      icon: <FaLock className="feature-icon" />,
      title: "100% Secure & Easy to Manage",
      description: "Our easy-to-use app is designed to give you a safe and smooth Online consultation experience."
  },
  {
      icon: <FaUsers className="feature-icon" />,
      title: "Personal Online/Offline Consultations",
      description: "Get expert homeopathic care personalized to your needs, online or at our clinics."
  },
  {
    icon: <FaClock className="feature-icon" />,
    title: "365 Days Offline Services",
    description: "Access expert homeopathic care every day of the year at our clinics. Our dedicated team is here to provide you with effective treatments"
  }
];
const Home = () => {
  const metaUrl = "https://h-cura.com/homeopathyconsultationImage";
   const [currentIndex, setCurrentIndex] = useState(0); // Current active image in the set
   const [activeIndex, setActiveIndex] = useState(null);
   const settings = {
    //arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1, // Only show one card
    slidesToScroll: 1, // Scroll one card at a time
    adaptiveHeight: true, // Adjust height dynamically based on content
    //prevArrow: <button className="slick-prev">←</button>,
    //nextArrow: <button className="slick-next">→</button>,
    responsive: [
      {
        breakpoint: 768, // Small screens (tablets and phones)
        settings: {
          //arrows: false, // Hide arrows for small screens
          //dots: true,
          autoplaySpeed: 15000,
        },
      },
    ],
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (slides?.length || 1)); // Safeguard against empty slides array
  }, []); // No need for slides as a dependency
  
  // Define custom animation for toast
const bounce = cssTransition({
  enter: "bounceIn",
  exit: "bounceOut",
  duration: [600, 300], // Enter and exit duration
});


  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
      document.title = "H-Cura Multispeciality Clinic | India’s Leading Dental, Skin, Hair & Homeopathy Center";
      const metaDescription = document.querySelector("meta[name='description']");
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "H-Cura Homeopathy, India's first online and offline multispeciality homeopathy clinic. Offering expert care in Bangalore, Chennai, and online consultations worldwide, we provide holistic treatment for skin, hair, chronic diseases, and more. Book an appointment today at H-Cura Homeopathy!"
        );
      }
      const metaKeywords = document.querySelector("meta[name='keywords']");
      if (metaKeywords) {
        metaKeywords.setAttribute(
          "content",
          "Best homeopathy clinic bangalore,Best homeopathy doctors in jayanagar bangalore,Homeopathy clinic in Madhanandapuram,best hair treatment in Madhanandapuram,best skin treatment in Madhanandapuram,Homeopathy clinic in Valasaravakkam,best hair treatment in Valasaravakkam,best skin treatment in Valasaravakkam,best hair treatment in Jayanagar,Homeopathic Hair Loss Treatment,best skin treatment bangalore,homeopathy treatment for psoriasis, eczema,best aesthetic clinic near me,aesthete clinic,best facial clinic near me,HydraFacial treatment,skin laser treatment,best skin whitening treatment,homeopathy treatment for plies,"
        );
      }
       // Set canonical link
       const existingCanonical = document.querySelector("link[rel='canonical']");
       if (existingCanonical) {
         existingCanonical.setAttribute("href", "https://www.h-cura.com/");
       } else {
         const canonicalLink = document.createElement("link");
         canonicalLink.setAttribute("rel", "canonical");
         canonicalLink.setAttribute("href", "https://www.h-cura.com/");
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
    const interval = setInterval(() => {
      nextSlide();
    }, 15000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  const [currentVideo, setCurrentVideo] = useState(null);
  // const [scrollPaused, setScrollPaused] = useState(false);
  const [imageScrollPaused, setImageScrollPaused] = useState(false);

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
    // setScrollPaused(true);
  };

  const handleImageClick = (link) => {
    setImageScrollPaused(true);
    window.location.href = link;
  };

  const scrollLeft = (containerClass) => {
    document.querySelector(`.${containerClass}`).scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = (containerClass) => {
    document.querySelector(`.${containerClass}`).scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };
  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the section is in view
  });
  const INITIAL_FORM_DATA = {
    name: "",
    age: "",
    phoneNo: "",
    state: "",
    message: "",
    consultationType: "",
    concern: "",
    branch: "",
  };
  
  const BRANCH_OPTIONS = [
    { value: "JAYANAGAR, BANGALORE", label: "JAYANAGAR, BANGALORE" },
    { value: "VALSARAVAKAM, CHENNAI", label: "VALSARAVAKAM, CHENNAI" },
    { value: "MADHANATHAPURAM, CHENNAI", label: "MADHANATHAPURAM, CHENNAI" },
  ];


  
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  console.log("Submitted form data:", formData);
  const [errors, setErrors] = useState({});
  const [showBranches, setShowBranches] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
     console.log("Input changed:", name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  
  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/; // Only accepts exactly 10 digits
  
    if (!formData.name.trim()) newErrors.name = "First name is required";

    if (!formData.phoneNo || !phoneRegex.test(formData.phoneNo))
      newErrors.phoneNo = "Please enter a valid 10-digit phone number";

   // Validate Phone number: Only 10 digits, no letters or special characters
  if (!formData.phoneNo) {
    newErrors.phoneNo = "Phone number is required."; // Field is empty
  } else if (!/^[0-9]+$/.test(formData.phoneNo)) {
    // Rejects letters and special characters
    newErrors.phoneNo = "Phone number can only contain numbers.";
  } else if (formData.phoneNo.length !== 10) {
    // Rejects incorrect length
    newErrors.phoneNo = "Phone number must be exactly 10 digits.";
  } else if (!phoneRegex.test(formData.phoneNo)) {
    // If it's not exactly 10 digits
    newErrors.phoneNo = "Please enter a valid 10-digit phone number.";
  }
 
    // if (!formData.message.trim()) newErrors.message = "Description is required";
    if (!formData.consultationType)
      newErrors.consultationType = "Please select a consultation type";
    if (formData.consultationType === "offline" && !formData.branch)
      newErrors.branch = "Please select a branch";
  
    return newErrors;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Log the form data to the console before submitting
    //  console.log("Submitted form data:", formData);
  
    setLoading(true);
    try {
      const response = await axios.post(
        `${API_CONFIG.baseURL7001}${API_CONFIG.apiPath}${API_CONFIG.apiName.apptFormFilling}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        // Show success toast with animation
        toast.success("🎉 Form submitted successfully!", {
          position: "top-center",
          transition: bounce,
          autoClose: 3000,
          className: "custom-toast",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
        });
      } else {
        // Show error toast
        toast.error("Failed to submit the form.", {
          position: "top-center",
          transition: bounce,
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Submission error:", error);

      // Show error toast
      toast.error("something went wrong sorry for inconvience please contact us on email:admin@h-cura.com .", {
        position: "top-center",
        transition: bounce,
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleConsultationTypeChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      consultationType: value,
      branch: value === "offline" ? "" : prev.branch,
    }));
    setShowBranches(value === "offline");
  };
  
  useEffect(() => {
    console.log("Form data updated:", formData); // Logs the form data after it has been updated
  }, [formData]);

  // const cardData = [
  //   { id: 1, heading: 'Total Online Consultation', count:  15000},
  //   { id: 2, heading: 'Offline consultation', count: 5000 },
  //   { id: 3, heading: 'Treatment Completed', count: 2500 },
  //   { id: 4, heading: 'Ongoing Patients', count: 1575 },
  //   { id: 5, heading: 'Skin Cured', count: 175},
  //   { id: 6, heading: 'Hair Treated', count: 182 },
  //   { id: 7, heading: 'PCOD cured', count: 125 },
  //   { id: 8, heading: 'Infertility Cured', count: 100 },
  //   {id:9, heading: 'Psoriasis Cure', count:124},
  //   { id: 9, heading: 'PRP', count: 100 },
  //   { id: 10, heading: 'GFC', count: 175 },
  //   { id: 11, heading: 'Hydrafacial', count: 225},
  // ];

  const [cardData, setCardData] = useState([]); // State to store card data

useEffect(() => {
  const fetchCardData = async () => {
    try {
      const response = await axios.get(
        `${API_CONFIG.baseURL7001}${API_CONFIG.apiPath}${API_CONFIG.apiName.patientsCount}`
      );

      console.log("API Response:", response);

      // Extract the actual data from the response
      const responseData = response.data.data;  // Assuming response.data.data is the key holding relevant data

      // Create an array with only the necessary data for the cards
      const cardData = [
        { heading: 'GFC', value: responseData.gfc },
        { heading: 'Hair Treated', value: responseData.hairTreated },
        { heading: 'Hydrafacial', value: responseData.hydrafacial },
        { heading: 'Infertility Cured', value: responseData.infertilityCured },
        { heading: 'Offline Consultation', value: responseData.offlineConsultation },
        { heading: 'Ongoing Patients', value: responseData.ongoingPatients },
        { heading: 'Online Consultation', value: responseData.onlineConsultation },
        { heading: 'PCOD Treated', value: responseData.pcodTreated },
        { heading: 'PRP', value: responseData.prp },
        { heading: 'Psoriasis', value: responseData.psoriasis },
        { heading: 'Skin Cured', value: responseData.skinCured },
        { heading: 'Treatment Completed', value: responseData.treatmentCompleted },
      ];

      setCardData(cardData); // Set the mapped data to state
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  fetchCardData(); // Fetch data when component mounts
}, []);
  
const [counts, setCounts] = useState(cardData.map(() => 0)); // Initialize counts
  const cardRefs = useRef([]); // Store refs for each card
  const hasAnimated = useRef(cardData.map(() => false)); // Track if animation has run

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            const targetCount = cardData[index].value; // Use `value` from cardData

            if (!hasAnimated.current[index]) {
              hasAnimated.current[index] = true; // Mark as animated
              animateCount(index, targetCount);
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, [cardData]);

  const animateCount = (index, targetCount) => {
    let current = 0;
    const duration = 2000; // Animation duration in ms
    const stepTime = 20; // Step time in ms
    const increment = Math.ceil(targetCount / (duration / stepTime));

    const interval = setInterval(() => {
      current += increment;

      if (current >= targetCount) {
        current = targetCount; // Ensure the final value is exact
        clearInterval(interval); // Stop animation
      }

      setCounts((prevCounts) => {
        const newCounts = [...prevCounts];
        newCounts[index] = current;
        return newCounts;
      });
    }, stepTime);
  };
  return (
    <>

<Helmet>
        <meta property="og:image" content={metaUrl + consultationImage} />
        <meta property="og:title" content="Best Homeopathy Consultation Form - HCura Homeopathy" />
        <meta property="og:description" content="Online and Offline Consultation at HCura Homeopathy - Best Homeopathy Clinic and Hospital." />
        <meta property="og:url" content={metaUrl} />
      </Helmet>
      <div className="slider">
        <button className="slider-button prev" onClick={prevSlide} aria-label="Previous Slide">
          &#10094;
        </button>
        <div className="slider-wrapper">
          {slides.map((slide, index) => (
            <div
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              key={index}
              style={{
                backgroundImage: `url(${slide.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {index === currentIndex && (
                <div className="slide-text" style={{
                  ...slide.textPosition,
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)', // Optional: to center the text better
                }}>
                  <h2 class="text1">{slide.text1}</h2>
                  <h2 class="text2">{slide.text2}</h2>
                  <h2 class="text3">{slide.text3}</h2>
                  <h2 class="text4">{slide.text4}</h2>
                  <h2 class="text5">{slide.text5}</h2>
                  <h2 class="text6">{slide.text6}</h2>
                  <h2 class="text7">{slide.text7}</h2>
                  <h2 class="text8">{slide.text8}</h2>
                  <h2 class="text9">{slide.text9}</h2>
                </div>
              )}
            </div>
          ))}1
        </div>
        <button className="slider-button next" onClick={nextSlide} aria-label="Next Slide">
          &#10095;
        </button>
        <div className="dots">
          {slides.map((_, idx) => (
            <span
              key={idx}
              // className={`dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Icons Section */}

      
      <div className="icons-section">
      <div className="icon-item">
                  <Link to="/" className="iconss"><FaStethoscope /></Link>
                  <h2>Expert Doctors</h2>
                  <p>Our expert doctors offer exceptional, personalized treatment.</p>
                </div>

                <div className="icon-item">
                  <Link to="/" className="iconss"><FaClock /></Link>
                  <h2>365 Days Offline Services</h2>
                  
                  <p>Providing round-the-clock medical care and treatment to ensure continuous support and assistance for your health needs.</p>
                </div>

                <div className="icon-item">
                  <Link to="/" className="iconss"><FaCalendarAlt /></Link>
                  <h2> 24/7 Online Services</h2>
                  <p>Schedule your medical appointments easily and securely through our platform, all from the comfort of your home or office.</p>
                </div>
      </div>
                   {/*welcome to h-cura matter*/}
                   <div className="countup-container">
                  {cardData.map((card, index) => (
                    <div
                      className="countup-card"
                      key={index}
                      data-index={index}
                      ref={(el) => (cardRefs.current[index] = el)}
                    >
                       <h2 className="countup-number">{counts[index]}+</h2>
                      {/* <h2 className="countup-number">{card.value}+</h2> */}
                      <p className="countup-heading">{card.heading}</p>
                    </div>
                  ))}
                </div>
<div>
              <section className="welcome-section">
                {/* Main Heading */}
                <h1 className="main-heading">India's First Offline & Online MultiSpeciality Clinic</h1>
                
                {/* Side Heading */}
                {/* <h2 className="side-heading">Experience Wellness</h2> */}
                <Helmet>
                    {/* Adding the Montserrat font link to the head of the HTML */}
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet" />
                  </Helmet>
                {/* Bold Welcome Text */}
                <h3 className="welcome-text">Welcome to H-Cura</h3>
                
                {/* Paragraph Text */}
                <p className="description">
                Welcome to H-Cura Multispeciality Clinic, your trusted destination for advanced healthcare solutions. We offer a comprehensive range of treatments, including Homeopathy, Advanced Aesthetic Care for Skin & Hair, and Expert Dental Services—all under one roof. Our team of experienced specialists combines cutting-edge technology with holistic healing to provide personalized care tailored to your needs. Whether you're seeking natural homeopathic remedies, skin rejuvenation, hair restoration, or top-tier dental treatments, H-Cura ensures the best medical expertise for your well-being. Book your appointment today and experience the future of integrated healthcare at H-Cura Multispeciality Clinic.
                </p>
              </section>
          </div>
      {/* Consultation Form and Image Section */}
<div className="consultation-section">
  <div className="consultation-image">
    <img
          src={consultationImage}
          alt="Online and Offline Consultation at HCura Homeopathy - Best Homeopathy Clinic and Hospital"
          title="Best Homeopathy Consultation Form - HCura Homeopathy"
        />
     
  </div>
  <div className="home-consultation-form">
  {loading && <LoadingBar />}
  <h2 className="home-form-heading">Consultation Form</h2>
  <form onSubmit={handleSubmit}>
    {/* Name and Age */}
    <div className="home-form-row">
      <div className="home-form-group">
        <label>Name:<span>*</span></label>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span className="home-error">{errors.name}</span>}
      </div>
      <div className="home-form-group">
        <label>Age:</label>
        <input
          type="number"
          name="age"
          placeholder="Your Age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <span className="home-error">{errors.age}</span>}
      </div>
    </div>

    {/* Phone Number and State */}
    <div className="home-form-row">
      <div className="home-form-group">
        <label>Phone Number:<span>*</span></label>
        <input
          type="text"
          name="phoneNo"
          placeholder="Phone Number"
          value={formData.phoneNo}
          onChange={handleChange}
          required
        />
        {errors.phoneNo && <span className="home-error">{errors.phoneNo}</span>}
      </div>
      <div className="home-form-group">
        <label>State:</label>
        <input
          type="text"
          name="state"
          placeholder="Your State"
          value={formData.state}
          onChange={handleChange}
        />
        {errors.state && <span className="home-error">{errors.state}</span>}
      </div>
    </div>
    {/* Dropdown for Selecting Concern */}
    <div className="home-form-group" >
      <label>Select Your Concern:<span>*</span></label>
      <select
        name="concern"
        value={formData.specialization}
        onChange={handleChange}
        required
      >
        <option value="">Select a concern</option>
        <option value="homeopathy">Homeopathy</option>
        <option value="advanced_skin">Asthetic hair</option>
        <option value="advanced_hair">Asthetic skin</option>
        <option value="dental">Dental</option>
      </select>
      {errors.specialization && <span className="home-error">{errors.specialization}</span>}
    </div>

    {/* Consultation Type */}
    <div className="home-form-group">
      <label>Consultation Type:<span>*</span></label>
      <div className="home-radio-group">
        <label>
          <input
            type="radio"
            name="consultationType"
            value="online"
            checked={formData.consultationType === "online"}
            onChange={handleConsultationTypeChange}
          />
          Online
        </label>
        <label>
          <input
            type="radio"
            name="consultationType"
            value="offline"
            checked={formData.consultationType === "offline"}
            onChange={handleConsultationTypeChange}
          />
          Offline
        </label>
      </div>
      {errors.consultationType && <span className="home-error">{errors.consultationType}</span>}
    </div>

    {/* Branch Dropdown */}
    {showBranches && (
      <div className="home-form-group">
        <label>Select Branch:<span>*</span></label>
        <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          required
        >
          <option value="">Select a branch</option>
          {BRANCH_OPTIONS.map((branch) => (
            <option key={branch.value} value={branch.value}>{branch.label}</option>
          ))}
        </select>
        {errors.branch && <span className="home-error">{errors.branch}</span>}
      </div>
    )}

    

    {/* Problem Description */}
    <div className="home-form-group">
      <label>Description:</label>
      <textarea
        name="message"
        placeholder="Describe your health issue"
        value={formData.message}
        onChange={handleChange}
      />
      {errors.message && <span className="home-error">{errors.message}</span>}
    </div>

    <button type="submit" className="home-submit-button">Submit</button>
  </form>
  {/* Toast Notification Container */}
  <ToastContainer />
</div>

    </div>

{/* code for cards */}
<div><h2 class="consultation-heading"> OFFLINE & ONLINE HOMEOPATHY FEATURES</h2></div>
<div className="features-section">
            <div className="features-container">
                {featureData.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        {feature.icon}
                        <h3 className='featurecontent'>{feature.title}</h3>
                        <p className="description-text">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* treatmemts icons related information */}
                              <div>
                              <div className="treatmentheading">
                      <h2>MAJOR DISEASES TREATED BY HOMEOPATHY​</h2>
                      <h4>Welcome to H-Cura, all major diseases are treated by H-Cura expert homeopathic care. our holistic, personalized treatments for chronic and acute conditions.</h4>
                      </div>
                      <div className="ourtreatments">
                        <div className="treatment">
                                  
                                  <img src={Eczematreatment} alt="" />
                                  <h2>Eczema</h2>
                                <Link to="/homeopathy-best-treatments/eczema-treatment"> <button>Read more</button></Link> 

                        </div>
                        <div className="treatment">
                        
                        <img src={alopecia} alt="" />
                                  <h2>alopecia-areata</h2>
                                  <Link to="/homeopathy-best-treatments/alopecia-areata-treatment"> <button>Read more</button></Link>
                          </div>
                          <div className="treatment">
                        
                        <img src={Asthmatreatment} alt="" />
                                  <h2>Asthma</h2>
                                  <Link to="/homeopathy-best-treatments/asthma-treatment"> <button>Read more</button></Link>
                          </div>
                          <div className="treatment">
                        
                        <img src={Irritable} alt="" />
                                  <h2>Irritable-Bowel</h2>
                                  <Link to="/homeopathy-best-treatments/irritable-bowel-syndrome-treatment"> <button>Read more</button></Link>
                          </div>
                          <div className="treatment">
                        
                        <img src={Migraine} alt="" />
                                  <h2>Migraine</h2>
                                  <Link to="/homeopathy-best-treatments/migraine-treatment"> <button>Read more</button></Link>
                          </div>
                          <div className="treatment">
                        
                        <img src={PCODtreatment} alt="" />
                                  <h2>PCOD/PCOS</h2>
                                  <Link to="/homeopathy-best-treatments/pcod-pcos-treatment"> <button>Read more</button></Link>
                          </div>
                          <div className="treatment">
                        
                        <img src={HairFall} alt="" />
                                  <h2>HairFall</h2>
                                  <Link to="/homeopathy-best-treatments/hair-fall-treatment"> <button>Read more</button></Link>
                          </div>
                          <div className="treatment">
                        
                        <img src={AnxietyNeurosis} alt="" />
                                  <h2>Anxiety Neurosis</h2>
                                  <Link to="/homeopathy-best-treatments/anxiety-neurosis-treatment"> <button>Read more</button></Link>
                          </div><div className="treatment">
                        
                        <img src={Prostatitis} alt="" />
                                  <h2>Prostatitis</h2>
                                  <Link to="/homeopathy-best-treatments/prostatitis-treatment"> <button>Read more</button></Link>
                          </div>
                          <div className="treatment">
                        
                        <img src={Psoriasis} alt="" />
                                  <h2>Psoriasis</h2>
                                  <Link to="/homeopathy-best-treatments/psoriasis-treatment"> <button>Read more</button></Link>
                          </div>
                          <div className="treatment">
                        
                        <img src={Sleeplessness} alt="" />
                                  <h2>Sleeplessness</h2>
                                  <Link to="/homeopathy-best-treatments/sleeplessness-treatment"> <button>Read more</button></Link>
                          </div>

                        <div className="treatment">
                        <img src={UlcerativeColitis} alt="" />
                                  <h2>Ulcerative-Colitis</h2>
                                  <Link to="/homeopathy-best-treatments/ulcerative-colitis-treatment"> <button>Read more</button></Link>
                          </div>
                          <div className="treatment">
                        <img src={piles} alt="" />
                                  <h2>Piles</h2>
                                  <Link to="/homeopathy-best-treatments/piles-treatment"> <button>Read more</button></Link>
                          </div>

                          <div className="treatment">
                        <img src={infertility} alt="" />
                                  <h2>Infertility</h2>
                                  <Link to="/homeopathy-best-treatments/infertility-treatment"> <button>Read more</button></Link>
                          </div>

                          <div className="treatment">
                        <img src={varicose} alt="" />
                                  <h2>Varicose</h2>
                                  <Link to="/homeopathy-best-treatments/varicose-treatment"> <button>Read more</button></Link>
                          </div>
                          <div className="treatment">
                        <img src={diabetes} alt="" />
                                  <h2>Diabetes</h2>
                                  <Link to="/homeopathy-best-treatments/diabetes-treatment"> <button>Read more</button></Link>
                          </div>
                          <div className="treatment">
                        <img src={thyroid} alt="" />
                                  <h2>Thyroid</h2>
                                  <Link to="/homeopathy-best-treatments/thyroid-treatment"> <button>Read more</button></Link>
                          </div>
                          <div className="treatment">
                        <img src={gerd} alt="" />
                                  <h2>Gerd</h2>
                                  <Link to="/homeopathy-best-treatments/gerd-treatment"> <button>Read more</button></Link>
                          </div>
                      </div>
                  </div>


                  {/* DOCTORS RELATED CONTENT INFORMATION */}

             <div className="image-container12">
            <img src={doctors1} alt="Background" className="background-image1" />
            <div className="content-overlay1">
            <h3 class="heading-style">
                <span class="line">Choose your</span>
                <span class="line">Perfect Doctors</span>
              </h3>
               <p> Expert Homeopathic Doctors for Enhanced Healthcare</p>
             <Link to="/doctors-list/" > <button>More Doctor's</button></Link>
            </div>
            <div className="small-screen-layout">
                <h3 className="heading-style">
                  <span className="line">Choose your</span>
                  <span className="line">Perfect Doctors</span>
                </h3>
                <p>Expert Homeopathic Doctors for Enhanced Healthcare</p>
                <img src={doctors2} alt="Doctor's" className="small-screen-image" />
                <Link to="/doctors-list/">
                   <button className="small-screen-button">More Doctors</button>
                </Link>

              </div>
        </div>

        {/* {advanced skin and hair treatmeny} */}
        <div>
               <section
                        className={`treatment-section ${inView ? "animate-section" : ""}`}
                        ref={ref}
                      >
                        <h3>Advanced</h3>
                        <h2>Hair & Skin Treatment</h2>
                        <div className="treatment-cards">
                          {treatments.map((treatment) => (
                            <article className="card" key={treatment.id}>
                              <div className="card-content">
                                <img
                                  src={treatment.image}
                                  alt={treatment.alt}
                                  className="card-image"
                                />
                                <h3>{treatment.title}</h3>
                                <p>{treatment.description}</p>
                                   <Link
                                     to = {treatment.url}
                                      className="card-button"
                                      
                                    >
                                     Know More
                                    </Link>
                              </div>
                            </article>
                          ))}
                        </div>
                      </section>
       </div>


       <section class="clinic-section">
  <div class="clinic-container">
    <div class="clinic-content">
      <h2>Advanced Dental Care at <span>H-Cura Multispeciality</span></h2>
      <p>Experience cutting-edge <strong>dental treatments</strong> with state-of-the-art technology and expert care. We ensure <em>pain-free, precise, and result-driven solutions</em> for all your dental needs.</p>
      <ul class="clinic-services">
        <li><FontAwesomeIcon icon={faTooth} className="icon" /> Painless Root Canal Treatments</li>
        <li><FontAwesomeIcon icon={faTooth} className="icon" /> Advanced Cosmetic Dentistry</li>
        <li><FontAwesomeIcon icon={faTeeth} className="icon" /> Orthodontic Braces & Aligners</li>
        <li><FontAwesomeIcon icon={faSmile} className="icon" /> Teeth Whitening & Smile Makeovers</li>
      </ul>
      <a href="/dental-treatment" class="clinic-button">Know More</a>
    </div>
    <div class="clinic-image">
      <img src={dentalcosmetology} alt="H-Cura Dental Services" class="glitter-effect zoom-effect"/>
    </div>
  </div>
</section>



        {/* this part is about healling stories */}
        <div>
                <div className="container2">
                {/* First Row Container */}
                <div className="first-row-container2">
                  {/* Left Column */}
                  <div className="column2 left-column2">
                    <h2>Healing Stories</h2>
                    <p>
                      At H-Cura Homeopathy Multispeciality Clinic, we’re dedicated to
                      providing quality healthcare that’s both accessible and affordable.
                      The trust and support of our patients and visitors, who’ve
                      experienced our care, mean the world to us.
                    </p>
                  </div>

                  {/* Right Column */}
                  <div className="video-section">
                  <div className="video-row">
                    {videos.slice(0, 2).map((video) => (
                      <div
                        key={video.id}
                        className="video-card"
                        onClick={() => handleVideoClick(video)}
                      >
                        <iframe
                          width="300"
                          height="170"
                          src={video.src}
                          title={video.title || "Untitled Video"}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="video-frame"
                        ></iframe>
                        <p className="video-title">{video.title || "Untitled Video"}</p>
                      </div>
                    ))}
                  </div>

                  {/* Display Current Video */}
                  {currentVideo && (
                    <div className="current-video">
                      <iframe
                        width="600"
                        height="340"
                        src={currentVideo.src}
                        title={currentVideo.title || "Current Video"}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className="video-frame-large"
                        allowFullScreen
                      ></iframe>
                      <p className="current-video-title">
                        {currentVideo.title || "Current Video"}
                      </p>
                    </div>
                  )}
                </div>
                </div>
              {/* Second Row Container */}
                <div className="second-row-container2">
                  <button
                    className="scroll-arrow left-arrow"
                    onClick={() => scrollLeft("image-scroll-container2")}
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <div
                    className={`image-scroll-container2 ${
                      imageScrollPaused ? "paused2" : ""
                    }`}
                  >
                    {members.map((member) => (
                      <div
                        key={member.id}
                        className="member-card2"
                        onClick={() => handleImageClick(member.link)}
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="member-image2"
                        />
                        <p>{member.name}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    className="scroll-arrow right-arrow"
                    onClick={() => scrollRight("image-scroll-container2")}
                  >
                  <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>
              </div>

        </div>


        {/* testimonials code */}
        <div>
        <div className="slider-container">
      <h2 className="slider-title">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <div className="testimonial-card">
              <p className="testimonial-text"><span>“</span> {testimonial.text}</p>
              <p className="testimonial-author">- {testimonial.author}</p>
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
    </div>
    <div>
    <div className="faq-container">
      <h2 className="faq-header">Frequently Asked Questions</h2>
      <div className="faq-list">
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
        {/* Render FAQs */}
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              <span
                className={`icon ${activeIndex === index ? "active" : ""}`}
              >
                +
              </span>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
    </>
    
  );
};

export default Home;
