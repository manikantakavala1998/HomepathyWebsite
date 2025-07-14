import React, { useState, useEffect } from "react";
import {
  FaCampground,
  FaBuilding,
  FaBriefcase,
  FaSchool,
  FaUniversity,
  FaClipboardCheck,
} from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_CONFIG } from "./../../../utils/config";
import corporateimg1 from "./../../../assets/images/ushasapartmentcamp1.jpg";
import corporateimg2 from "../../../../src/assets/images/prideapartment.jpg";
import corporateimg3 from "./../../../assets/images/mahaveerjonquil.jpg";
import corporateimg4 from "../../../assets/images/rankaapartment.jpg";
import corporateimg5 from "../../../assets/images/mahaveerjonquil1.jpg";
import corporateimg6 from "../../../assets/images/mahaveerjonquil2.jpg";
import favicon from "./../../../assets/images/favicon.ico";
import "./corporates.css";

const CorporateGallery = ({ campImages }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  // Use a dynamic cardWidth based on screen size
  const [cardWidth, setCardWidth] = useState(300);
  const gap = 10; // gap (in px) on the right side for each card

  // Update cardWidth on mount and on window resize
  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth <= 480) {
        setCardWidth(220);
      } else if (window.innerWidth <= 768) {
        setCardWidth(250);
      } else {
        setCardWidth(300);
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Calculate the scroll distance for one copy of the images.
  const scrollDistance = campImages.length * (cardWidth + gap) + "px";
  // Duplicate images for a seamless scroll effect.
  const scrollingImages = [...campImages, ...campImages];

  return (
    <div className="corp-gallery-section">
      <h2 className="corp-gallery-title">Our Corporate Camp Gallery</h2>
      <div className="scrolling-container">
        <div
          className="scrolling-wrapper"
          style={{ "--scroll-distance": scrollDistance }}
        >
          {scrollingImages.map((img, index) => (
            <div
              key={`${img.id}-${index}`}
              className="corp-gallery-card"
              onClick={() => setSelectedImage(img)}
            >
              <div className="corp-gallery-image-wrapper">
                <img
                  src={img.image}
                  alt={img.title}
                  className="corp-gallery-image"
                />
              </div>
              <div className="corp-gallery-info">
                <h3>{img.title}</h3>
                <p>{img.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="corp-gallery-modal">
          <div className="corp-gallery-modal-content">
            <button
              className="corp-gallery-close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="corp-gallery-modal-image"
            />
            <h3>{selectedImage.title}</h3>
            <p>{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Main CorporateHealthCamps Component
const CorporateHealthCamps = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // FAQ toggle handler
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How long does a health camp usually take?",
      answer:
        "A typical health camp runs for one full working day, but we can customize the duration based on your company's size and requirements.",
    },
    {
      question: "How many employees can be accommodated in one camp?",
      answer:
        "We can accommodate up to 200 employees per day, with flexible scheduling to ensure minimal disruption to work.",
    },
    {
      question: "What kind of facilities are required from the corporate side?",
      answer:
        "We need a well-ventilated space of approximately 1000 sq ft with basic electrical connections. We'll handle all medical equipment and setup.",
    },
  ];

  // Camp Images Data – note the "image" property holds the source
  const campImages = [
    {
      id: 1,
      image: corporateimg1,
      title: "Corporate Wellness Camp - TechPark",
      description: "Annual health checkup camp at leading tech company",
    },
    {
      id: 2,
      image: corporateimg2,
      title: "Community Health Drive",
      description: "Comprehensive health screening for employees",
    },
    {
      id: 3,
      image: corporateimg3,
      title: "Preventive Healthcare Camp",
      description: "Focus on early detection and prevention",
    },
    {
      id: 4,
      image: corporateimg4,
      title: "Preventive Healthcare Camp",
      description: "Focus on early detection and prevention",
    },
    {
      id: 5,
      image: corporateimg5,
      title: "Preventive Healthcare Camp",
      description: "Focus on early detection and prevention",
    },
    {
      id: 6,
      image: corporateimg6,
      title: "Preventive Healthcare Camp",
      description: "Focus on early detection and prevention",
    },
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    workEmail: "",
    phoneNo: "",
    companyName: "",
    companySize: "",
    prefferedDate: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const scrollToForm = () => {
    const formSection = document.getElementById("corp-form-section");
    if (formSection) {
      const offset = 120; // Adjust the offset to match any fixed header height
      const top =
        formSection.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage("");

    try {
      const payload = {
        name: formData.name?.trim(),
        workEmail: formData.workEmail?.trim(),
        phoneNo: formData.phoneNo?.trim(),
        companyName: formData.companyName?.trim(),
        companySize: formData.companySize,
        prefferedDate: formData.prefferedDate
          ? new Date(formData.prefferedDate).toISOString()
          : null,
        street: formData.street?.trim(),
        city: formData.city?.trim(),
        state: formData.state?.trim(),
        zipcode: formData.zipcode ? parseInt(formData.zipcode, 10) : null,
      };

      if (
        !payload.name ||
        !payload.workEmail ||
        !payload.phoneNo ||
        !payload.companyName
      ) {
        throw new Error("Please fill all the required fields.");
      }

      const response = await axios.post(
        `${API_CONFIG.baseURL7001}${API_CONFIG.apiPath}${API_CONFIG.apiName.corporateFormFilling}`,
        payload
      );

      if (response.status === 200) {
        setSuccessMessage(
          "Your health camp request has been successfully submitted!"
        );
        setFormData({
          name: "",
          workEmail: "",
          phoneNo: "",
          companyName: "",
          companySize: "",
          prefferedDate: "",
          street: "",
          city: "",
          state: "",
          zipcode: "",
        });
      } else {
        throw new Error(
          response.data?.message || "Unexpected server response."
        );
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setError(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    document.title =
      "Book a Consultation at H-Cura Homeopathy | Expert Online and Offline Healthcare";
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Book a personalized consultation with H-Cura Homeopathy today. Our experts offer effective online and offline treatments for various health conditions. Start your journey to better health now"
      );
    }
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "Book homeopathy consultation online, online consultation for homeopathic treatment, expert homeopathy consultation India, homeopathy consultation booking, best homeopathy doctors online, book online health consultation, homeopathy consultation near me, schedule homeopathy appointment, online health consultation booking, book appointment with homeopathy specialist, homeopathic treatment consultation, affordable homeopathy consultation, consult homeopath for chronic conditions, book video consultation homeopathy, homeopathy consultation for anxiety, book your homeopathy treatment today, personalized homeopathy treatment consultation, homeopathy health consultation for families, book online homeopathy for wellness, homeopathy consultation for pain relief."
      );
    }

    const canonicalURL = "https://www.h-cura.com/homeopathy-corporate-camps/";
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalURL);

    let faviconLink = document.querySelector("link[rel='icon']");
    if (!faviconLink) {
      faviconLink = document.createElement("link");
      faviconLink.setAttribute("rel", "icon");
      faviconLink.setAttribute("type", "image/x-icon");
      document.head.appendChild(faviconLink);
    }
    faviconLink.setAttribute("href", favicon);
  }, []);

  return (
    <div className="corp-main-container">
      <div className="corp-header-banner">
        <h1 className="corp-main-title">
          Corporate Health Camps at Your Workplace
        </h1>
      </div>

      <div className="corp-content-wrapper">
        {/* Left Content Section */}
        <div className="corp-left-section">
          <div className="corp-intro-block">
            <h2 className="corp-section-title">
              Prioritize Employee Wellness – Health Camps at Your Doorstep
            </h2>
            <p className="corp-intro-text">
              In today's fast-paced corporate world, employee health is critical
              to productivity and job satisfaction. At H-Cura, we specialize in
              organizing health camps tailored to corporate needs.
            </p>
          </div>
          <div className="corp-stats-section" ref={ref}>
            <div className="corp-stats-grid">
              <div className="corp-stat-card">
                <FaCampground className="corp-stat-icon" />
                <div className="corp-stat-number">
                  {inView && <CountUp end={300} duration={2.5} />}+
                </div>
                <div className="corp-stat-label">TOTAL CAMPS</div>
              </div>
              <div className="corp-stat-card">
                <FaBuilding className="corp-stat-icon" />
                <div className="corp-stat-number">
                  {inView && <CountUp end={200} duration={2.5} />}+
                </div>
                <div className="corp-stat-label">APARTMENTS</div>
              </div>
              <div className="corp-stat-card">
                <FaBriefcase className="corp-stat-icon" />
                <div className="corp-stat-number">
                  {inView && <CountUp end={50} duration={2.5} />}+
                </div>
                <div className="corp-stat-label">CORPORATES</div>
              </div>
              <div className="corp-stat-card">
                <FaSchool className="corp-stat-icon" />
                <div className="corp-stat-number">
                  {inView && <CountUp end={25} duration={2.5} />}+
                </div>
                <div className="corp-stat-label">SCHOOLS</div>
              </div>
              <div className="corp-stat-card">
                <FaUniversity className="corp-stat-icon" />
                <div className="corp-stat-number">
                  {inView && <CountUp end={25} duration={2.5} />}+
                </div>
                <div className="corp-stat-label">COLLEGES</div>
              </div>
              <div className="corp-stat-card">
                <FaClipboardCheck className="corp-stat-icon" />
                <div className="corp-stat-number">
                  {inView && <CountUp end={500} duration={2.5} />}+
                </div>
                <div className="corp-stat-label">TOTAL SCREENING</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div id="corp-form-section" className="corp-form-section">
          <div className="corporate-health-form-container">
            <form
              className="corporate-health-form-element"
              onSubmit={handleSubmit}
            >
              <h2 className="corporate-health-form-heading">
                Book Your Health Camp
              </h2>
              {error && <div className="form-error-message">{error}</div>}
              {successMessage && (
                <div className="form-success-message">{successMessage}</div>
              )}
              <div className="corporate-health-form-input-wrapper">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name *"
                  required
                  className="corporate-health-form-field"
                />
              </div>
              <div className="corporate-health-form-input-wrapper">
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  placeholder="WORK EMAIL *"
                  required
                  className="corporate-health-form-field"
                />
              </div>
              <div className="corporate-health-form-input-wrapper">
                <input
                  type="tel"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleInputChange}
                  placeholder="Phone Number *"
                  required
                  className="corporate-health-form-field"
                  pattern="^\\+91[0-9]{10}$"
                  title="Phone number must start with +91 and followed by 10 digits"
                />
              </div>
              <div className="corporate-health-form-input-wrapper">
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Company / Apartment Name *"
                  required
                  className="corporate-health-form-field"
                />
              </div>
              <div className="corporate-health-form-input-wrapper">
                <input
                  type="text"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  placeholder="Company / Apartment Size *"
                  required
                  className="corporate-health-form-field"
                />
              </div>
              <div className="corporate-health-form-date-group">
                <label className="corporate-health-form-date-label">
                  Preferred Camp Date{" "}
                  <span className="corporate-health-form-required">*</span>
                </label>
                <input
                  type="date"
                  name="prefferedDate"
                  value={formData.prefferedDate}
                  onChange={handleInputChange}
                  required
                  className="corporate-health-form-date-input"
                  min={
                    new Date(new Date().getTime() + 5.5 * 60 * 60 * 1000)
                      .toISOString()
                      .split("T")[0]
                  }
                />
              </div>
              <div className="corporate-health-form-address-section">
                <label className="corporate-health-form-address-label">
                  Address{" "}
                  <span className="corporate-health-form-required">*</span>
                </label>
                <div className="corporate-health-form-row">
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    placeholder="Street *"
                    required
                    className="corporate-health-form-field"
                  />
                </div>
                <div className="corporate-health-form-row corporate-health-form-two-col">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City *"
                    required
                    className="corporate-health-form-field"
                  />
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="State *"
                    required
                    className="corporate-health-form-field"
                  />
                </div>
                <div className="corporate-health-form-row">
                  <input
                    type="text"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleInputChange}
                    placeholder="Zip Code *"
                    required
                    className="corporate-health-form-field"
                    pattern="[0-9]*"
                    maxLength="6"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="corporate-health-form-submit"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <CorporateGallery campImages={campImages} />

      {/* Additional Sections */}
      <div className="corp-why-section">
        <h2 className="corp-why-title">
          Why Health Camps for Your Corporate Team?
        </h2>
        <p className="corp-why-content">
          In today's fast-paced corporate world, employee health is critical to
          productivity and job satisfaction. At H-Cura, we specialize in
          organizing health camps tailored to corporate needs. These camps
          promote wellness, identify potential health risks early, and
          demonstrate your commitment to employee care.
        </p>
      </div>
      <div className="corp-services-section">
        <h2 className="corp-services-title">
          What We Provide in Our Corporate Health Camps
        </h2>
        <ul className="corp-services-list">
          <li>
            Comprehensive health checkups (blood pressure, sugar levels, BMI,
            etc.)
          </li>
          <li>Expert consultations with homeopathic doctors</li>
          <li>Wellness workshops and stress management sessions</li>
          <li>Lifestyle counseling for better work-life balance</li>
          <li>Distribution of personalized health reports</li>
          <li>On-the-spot homeopathic remedies for common ailments</li>
        </ul>
      </div>

      <div className="corp-benefits-section">
        <h2 className="corp-benefits-title">
          Why Partner with Us for Corporate Health Camps?
        </h2>
        <div className="corp-benefits-grid">
          <div className="corp-benefit-card">
            <h3>Expert Team</h3>
            <p>
              Highly qualified homeopathic doctors and health professionals.
            </p>
          </div>
          <div className="corp-benefit-card">
            <h3>Customized Solutions</h3>
            <p>Tailored health services based on your organization's needs.</p>
          </div>
          <div className="corp-benefit-card">
            <h3>Convenience</h3>
            <p>
              All services are delivered at your corporate location with minimal
              disruption.
            </p>
          </div>
        </div>
      </div>

      <div className="corp-steps-section">
        <h2 className="corp-steps-title">
          Easy Steps to Organize a Health Camp
        </h2>
        <div className="corp-steps-container">
          {[
            {
              number: 1,
              title: "Get in Touch",
              content: "Contact us via our website or phone.",
            },
            {
              number: 2,
              title: "Plan the Camp",
              content:
                "Discuss your organization's requirements with our team.",
            },
            {
              number: 3,
              title: "Finalize Schedule",
              content: "We'll help you pick a convenient date and time.",
            },
            {
              number: 4,
              title: "Camp Setup",
              content: "Our team arrives with all the necessary equipment.",
            },
            {
              number: 5,
              title: "Enjoy the Benefits",
              content:
                "Employees participate and receive personalized health insights.",
            },
          ].map((step) => (
            <div key={step.number} className="corp-step-card">
              <div className="corp-step-number">{step.number}</div>
              <h3 className="corp-step-title">{step.title}</h3>
              <p className="corp-step-content">{step.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="corp-testimonials-section">
        <h2 className="corp-testimonials-title">
          What Our Corporate Partners Say
        </h2>
        <div className="corp-testimonials-grid">
          <div className="corp-testimonial-card">
            <p>
              "H-Cura Homeopathy’s corporate health camp at our institute was a
              huge success. The team was professional, knowledgeable, and
              compassionate. Our staff greatly appreciated the personalized
              health assessments and natural remedies. The camp highlighted the
              importance of preventive care, and we’ve received overwhelming
              positive feedback from our employees. We look forward to more such
              collaborations."
            </p>
            <h4>- HR Manager, LLR Institute</h4>
          </div>
          <div className="corp-testimonial-card">
            <p>
              "Partnering with H-Cura Homeopathy for our corporate wellness
              initiative was one of the best decisions we made. The team’s
              dedication to understanding individual health concerns and
              offering natural, effective solutions impressed everyone. Their
              approach to holistic wellness resonated with our employees,
              boosting morale and promoting a healthier work environment. We
              highly recommend their services for any corporate health program."
            </p>
            <h4>-</h4>
          </div>
        </div>
      </div>

      <div className="corp-contact-section">
        <h2 className="corp-contact-title">
          Ready to Elevate Employee Wellness?
        </h2>
        <p className="corp-contact-content">
          Contact us today to schedule a health camp at your corporate location.
        </p>
        <Link to="#corp-form-section">
          <button className="corp-contact-button" onClick={scrollToForm}>
            Contact Us to Schedule a Health Camp
          </button>
        </Link>
      </div>
      <div className="corp-faq-section">
        <h2 className="corp-faq-title">Frequently Asked Questions</h2>
        <div className="corp-faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`corp-faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="corp-faq-question">
                <h3>{faq.question}</h3>
                <span className="corp-faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <div className="corp-faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateHealthCamps;