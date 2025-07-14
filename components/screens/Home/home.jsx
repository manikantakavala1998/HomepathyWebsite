// src/components/Slider.jsx
import React, { useState, useEffect, useCallback } from 'react';
import './home.css';
import { FaStethoscope, FaCalendarAlt, FaClock } from 'react-icons/fa'; // Import icons from react-icons/fa
import { FaUserMd, FaTruck, FaFileMedical, FaLock, FaUsers } from 'react-icons/fa'; // Importing icons
import { Helmet } from 'react-helmet';
// Import local images from your project
import banner from './../../../assets/images/Banner1.png';
import slide2 from './../../../assets/images/Banner2.png';
import slide3 from './../../../assets/images/Banner3.png';
import slide4 from './../../../assets/images/Banner4.png';
//import Treatment images
import Eczematreatment from './../../../assets/images/eczema.jpg'
import alopecia from './../../../assets/images/Alopecia Areata.jpg'
import Asthmatreatment from './../../../assets/images/Asthma.jpg'
import Irritable from './../../../assets/images/Irritable Bowel Syndrome.jpg'
import Migraine from './../../../assets/images/Migraine.jpg'
import PCODtreatment from './../../../assets/images/PCOS.jpg'
import HairFall from './../../../assets/images/Hair Fall.jpg'
import AnxietyNeurosis from './../../../assets/images/Anxiety Neurosis.jpg'
import Prostatitis from './../../../assets/images/Prostatitis.jpg'
import Psoriasis from './../../../assets/images/Psoriasis.jpg'
import Sleeplessness from './../../../assets/images/Sleeplessness.jpg'
import UlcerativeColitis from './../../../assets/images/Ulcerative Colitis.jpg'
import consultationImage from './../../../assets/images/homeConsultation.jpg'; 
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
      title: "Group Consultations",
      description: "Our unique feature enables you and an attendee of your choice to consult online with your Doctor."
  }
];
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: banner, alt: 'Slide 1' },
    { url: slide2, alt: 'Slide 2' },
    { url: slide3, alt: 'Slide 3' },
    { url: slide4, alt: 'Slide 4' },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  // Form handling
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    phoneNumber: '',
    description: '',
  });

  const [errors, setErrors] = useState({}); // State to hold validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error when user types
  };

  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/; // Regex for 10-digit phone number

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.age || formData.age <= 0) {
      newErrors.age = 'Please enter a valid age';
    }
    if (!formData.phoneNumber || !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.description) {
      newErrors.description = 'Description is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
    } else {
      // Handle form submission (e.g., send data to a server)
      alert('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        age: '',
        phoneNumber: '',
        description: '',
      });
    }
  };

  return (
    <>
      {/* Slider Section */}
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
                <div className="slide-text">
                  <h5>{slide.text}</h5>
                  <h2>{slide.text1}</h2>
                  <h4>{slide.text2}</h4>
                </div>
              )}
            </div>
          ))}
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
          <a href=''><div className="iconss"><FaStethoscope /></div>{/* Icon with size */}</a>
          <h2>Expert Doctors</h2>
          <p>Our expert doctors offers exceptional,personalized treatment.</p>
        </div>
        <div className="icon-item">
          <a href=''><div className="iconss"><FaClock/></div> {/* Icon with size */}</a>
          <h2>24/7hr Online Services</h2>
          <p>providing  round-the-clock medical care and treatment to ensure continuous support and assistance for your health needs.</p>
        </div>
        <div className="icon-item">
          <a href=''><div className="iconss"><FaCalendarAlt/></div> {/* Icon with size */}</a>
          <h2>Online Appointments</h2>
          <p>schedule your medical appointments eassily
             and securely through our paltform, 
             all from the comfort of your home or office.</p>
        </div>
      </div>
    {/*welcome to h-cura matter*/}
    <div>
              <section className="welcome-section">
                {/* Main Heading */}
                <h1 className="main-heading">India's First Online & Offline Homeopathy Clinic</h1>
                
                {/* Side Heading */}
                <h2 className="side-heading">Experience Wellness</h2>
                <Helmet>
                    {/* Adding the Montserrat font link to the head of the HTML */}
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet" />
                  </Helmet>
                {/* Bold Welcome Text */}
                <h3 className="welcome-text">Welcome to H-Cura</h3>
                
                {/* Paragraph Text */}
                <p className="description">
                  Welcome to H-Cura Homeopathy, where your health is our priority. From routine check-ups to specialized treatments, we offer comprehensive care tailored to your needs. With cutting-edge technology and a dedicated team, we’re here to guide you on your path to wellness. Schedule your appointment today and experience the difference at H-Cura Clinic.
                </p>
              </section>
          </div>
      {/* Consultation Form and Image Section */}
<div className="consultation-section">
  <div className="consultation-image">
    <img src={consultationImage} alt="Consultation" />
  </div>
  <div className="consultation-form">
    <h2 className="form-heading">Consultation Form</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <div className="name-fields">
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            value={formData.lastName} 
            onChange={handleChange} 
            required 
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
      </div>
      <div className="form-group-horizontal">
  <div className="input-group">
    <label>Age:</label>
    <input 
      type="number" 
      name="age" 
      placeholder="Your Age" 
      value={formData.age} 
      onChange={handleChange} 
      required 
    />
    {errors.age && <span className="error">{errors.age}</span>}
  </div>

  <div className="input-group">
    <label>Phone Number:</label>
    <input 
      type="text" 
      name="phoneNumber" 
      placeholder="Phone Number" 
      value={formData.phoneNumber} 
      onChange={handleChange} 
      required 
    />
    {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
  </div>
</div>
      <div className="form-group">
        <label>Describe Your Problem:</label>
        <textarea 
          name="description" 
          placeholder="Describe Your Health Issue" 
          value={formData.description} 
          onChange={handleChange} 
          required 
        />
        {errors.description && <span className="error">{errors.description}</span>}
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  </div>
</div>
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
                      <h1>MAJOR DISEASES TREATED BY HOMEOPATHY​</h1>
                      <h4>Welcome to H-Cura International, all major diseases are treated by H-Cura International expert homeopathic care. our holistic, personalized treatments for chronic and acute conditions.</h4>
                      </div>
                      <div className="ourtreatments">
                        <div className="treatment">
                                  
                                  <img src={Eczematreatment} alt="" />
                                  <h1>Eczematreatment</h1>
                                  <button>Read more</button>
                        </div>
                        <div className="treatment">
                        
                        <img src={alopecia} alt="" />
                                  <h1>alopecia-areata</h1>
                                  <button>Read more</button>
                          </div>
                          <div className="treatment">
                        
                        <img src={Asthmatreatment} alt="" />
                                  <h1>Asthma</h1>
                                  <button>Read more</button>
                          </div>
                          <div className="treatment">
                        
                        <img src={Irritable} alt="" />
                                  <h1>Irritable-Bowel</h1>
                                  <button>Read more</button>
                          </div>
                          <div className="treatment">
                        
                        <img src={Migraine} alt="" />
                                  <h1>Migraine</h1>
                                  <button>Read more</button>
                          </div>
                          <div className="treatment">
                        
                        <img src={PCODtreatment} alt="" />
                                  <h1>PCOD/PCOS</h1>
                                  <button>Read more</button>
                          </div>
                          <div className="treatment">
                        
                        <img src={HairFall} alt="" />
                                  <h1>HairFall</h1>
                                  <button>Read more</button>
                          </div>
                          <div className="treatment">
                        
                        <img src={AnxietyNeurosis} alt="" />
                                  <h1>Anxiety Neurosis</h1>
                                  <button>Read more</button>
                          </div><div className="treatment">
                        
                        <img src={Prostatitis} alt="" />
                                  <h1>Prostatitis</h1>
                                  <button>Read more</button>
                          </div>
                          <div className="treatment">
                        
                        <img src={Psoriasis} alt="" />
                                  <h1>Psoriasis</h1>
                                  <button>Read more</button>
                          </div>
                          <div className="treatment">
                        
                        <img src={Sleeplessness} alt="" />
                                  <h1>Sleeplessness</h1>
                                  <button>Read more</button>
                          </div><div className="treatment">
                        
                        <img src={UlcerativeColitis} alt="" />
                                  <h1>Ulcerative Colitis</h1>
                                  <button>Read more</button>
                          </div>
                      
                      </div></div>

 </>
  );
};

export default Home;
