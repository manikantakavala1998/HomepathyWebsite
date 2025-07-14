import React, { useState, useEffect } from "react";
import "./bookconsultation.css";
import axios from "axios";
 import LoadingBar from "../LoadingBar/LoadingBar";
import { API_CONFIG } from "../../../utils/config"; // Import your API configuration
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {Helmet} from 'react-helmet';
import favicon from "./../../../assets/images/favicon.ico";
function BookConsultation() {
  const INITIAL_FORM_DATA = {
    name: "",
    gender: "",
    age: "",
    emailId: "",
    phoneNo: "",
    whatsAppNo: "",
    message: "",
    state: "",
    countryCode: "+91",
    whatsappCountryCode: "+91",
    consultationType: "",
    branch: "",
  };
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [loading, setLoading] = useState(false); // Loading state
  // const [showBranches, setShowBranches] = useState(false); // To toggle branch dropdown
  // Combine country code with phone number and WhatsApp number
  // Define custom animation for toast
  const bounce = cssTransition({
    enter: "bounceIn",
    exit: "bounceOut",
    duration: [600, 300], // Enter and exit duration
  });
  const BRANCH_OPTIONS = [
    { value: "JAYANAGAR, BANGALORE", label: "JAYANAGAR, BANGALORE" },
    { value: "VALSARAVAKAM, CHENNAI", label: "VALSARAVAKAM, CHENNAI" },
    { value: "MADHANATHAPURAM, CHENNAI", label: "MADHANATHAPURAM, CHENNAI" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // Convert input to uppercase for all fields except email
    if (name === "emailId") {
      setFormData({ ...formData, [name]: value.toLowerCase() });
    } else {
      setFormData({ ...formData, [name]: value.toUpperCase() });
    }
  };
  const handleConsultationTypeChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      consultationType: value,
      branch: value === "online" ? "" : prev.branch, // Clear branch for online
    }));
    // setShowBranches(value === 'offline');
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.consultationType)
      newErrors.consultationType = "Please select a consultation type";

    if (formData.consultationType === "offline" && !formData.branch)
      newErrors.branch = "Please select a branch";
    return newErrors;
  };

  const handleSelectCountryCode = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update country code or whatsapp country code
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, gender, age, emailId, phoneNo, whatsAppNo, message } =
      formData;
    const validationErrors = validateForm();

    if (
      !name ||
      !gender ||
      !age ||
      !emailId ||
      !phoneNo ||
      !whatsAppNo ||
      !message
    ) {
      toast.error("Please fill in all mandatory fields.", {
        position: "top-center",
        className: "custom-toast",
        autoClose: 5000, // Increase the autoClose time for better testing
        hideProgressBar: true,
      });
      return;
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Combine country code with phone number and WhatsApp number
    const phoneWithCountryCode = `${
      formData.countryCode
    }${formData.phoneNo.trim()}`;
    const whatsAppWithCountryCode = `${
      formData.whatsappCountryCode
    }${formData.whatsAppNo.trim()}`;

    // Prepare the final form data
    const finalFormData = {
      ...formData,
      phoneNo: phoneWithCountryCode,
      whatsAppNo: whatsAppWithCountryCode,
    };

    setLoading(true); // Start loading
    try {
      const response = await axios.post(
        `${API_CONFIG.baseURL7001}${API_CONFIG.apiPath}${API_CONFIG.apiName.apptFormFilling}`,
        finalFormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setFormData(INITIAL_FORM_DATA);
        // Show success toast with animation
        toast.success("🎉 Form submitted successfully!", {
          position: "top-center",
          transition: bounce,
          autoClose: 3000,
          className: "custom-toast",
        });
      } else {
        toast.error("Failed to submit the form.", {
          position: "top-center",
          transition: bounce,
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Submission error:", error);

      // Show error toast
      toast.error(
        "something went wrong sorry for inconvience please contact us on email:admin@h-cura.com .",
        {
          position: "top-center",
          transition: bounce,
          autoClose: 3000,
        }
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const getPhonePlaceholder = () => {
    if (formData.countryCode === "custom") {
      return "Enter your number with country code";
    }
    return "Phone Number";
  };

  const getWhatsappPlaceholder = () => {
    if (formData.whatsappCountryCode === "custom") {
      return "Enter your number with country code";
    }
    return "WhatsApp Number";
  };
  useEffect(() => {
    document.title =
      "Corporate Health Camps for Employee Wellness - H-Cura Homeopathy";
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Improve employee wellbeing and productivity with H-Cura’s customized health camps. Our corporate wellness programs identify health risks early and show your commitment to employee care, fostering a healthier, more engaged workforce."
      );
    }
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "Corporate Health Camps, Employee Wellness Programs, Workplace Health Initiatives, H-Cura Corporate Wellness Solutions, Corporate Health Services in Chennai, Customized Health Camps for Companies, Employee Health Assessments, H-Cura Corporate Health Consultation, Corporate Health Screening Services, Health and Wellness for Employees, Corporate Wellness Programs Chennai, H-Cura Employee Wellness Initiatives, Workplace Health Risk Identification, Corporate Health Workshops, H-Cura Health Camps for Companies, Preventive Healthcare for Employees, Corporate Health Management, H-Cura Corporate Health Partnership, Health Camps Tailored for Businesses, Wellness Programs for Corporate Clients."
      );
    }
    // Set canonical link
    const existingCanonical = document.querySelector("link[rel='canonical']");
    if (existingCanonical) {
      existingCanonical.setAttribute(
        "href",
        "https://www.h-cura.com/bookconsultation"
      );
    } else {
      const canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute(
        "href",
        "https://www.h-cura.com/bookconsultation"
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

  return (
    <div className="BookAppointment-page-container">
      <div className="BookAppointment-form-container">
        <h1>Book Appointment</h1>
        {loading && (
          <LoadingBar message="Submitting your details, please wait..." />
        )}
        <form onSubmit={handleSubmit}>
          {/* Name Row */}
          <div className="BookAppointment-form-group">
            <label>
              Name <span className="BookAppointment-required">*</span>
            </label>
            <div className="BookAppointment-name-fields">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Gender Row */}
          <div className="BookAppointment-form-group">
            <label>
              Gender <span className="BookAppointment-required"></span>
            </label>
            <div className="BookAppointment-gender-options">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  onChange={handleChange}
                />
                Others
              </label>
            </div>
          </div>

          {/* Age Row */}
          <div className="BookAppointment-form-group">
            <label>
              Age <span className="BookAppointment-required"></span>
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Row */}
          <div className="BookAppointment-form-group">
            <label>
              Email <span className="BookAppointment-required">*</span>
            </label>
            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number Row */}
          <div className="BookAppointment-form-group BookAppointment-phone-row">
            <label>
              Phone Number <span className="BookAppointment-required">*</span>
            </label>
            <div className="BookAppointment-phone-inputs">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleSelectCountryCode}
                required
                className="BookAppointment-country-code"
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="custom">Custom</option>
              </select>
              {formData.countryCode === "custom" ? (
                <input
                  type="tel"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                  placeholder="Enter your number with country code"
                />
              ) : (
                <input
                  type="tel"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                  placeholder={getPhonePlaceholder()}
                />
              )}
            </div>
          </div>

          {/* WhatsApp Number Row */}
          <div className="BookAppointment-form-group BookAppointment-whatsapp-row">
            <label>
              WhatsApp Number{" "}
              <span className="BookAppointment-required">*</span>
            </label>
            <div className="BookAppointment-whatsapp-inputs">
              <select
                name="whatsappCountryCode"
                value={formData.whatsappCountryCode}
                onChange={handleSelectCountryCode}
                required
                className="BookAppointment-country-code"
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="custom">Custom</option>
              </select>
              {formData.whatsappCountryCode === "custom" ? (
                <input
                  type="tel"
                  name="whatsAppNo"
                  value={formData.whatsAppNo}
                  onChange={handleChange}
                  required
                  placeholder="Enter your number with country code"
                />
              ) : (
                <input
                  type="tel"
                  name="whatsAppNo"
                  value={formData.whatsAppNo}
                  onChange={handleChange}
                  required
                  placeholder={getWhatsappPlaceholder()}
                />
              )}
            </div>
          </div>

          {/* State Row */}
          <div className="BookAppointment-form-group">
            <label>
              State <span className="BookAppointment-required">*</span>
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>

          {/* Consultation Type Row */}
          <div className="BookAppointment-form-group BookAppointment-consultation-type">
            <label>
              Consultation Type{" "}
              <span className="BookAppointment-required">*</span>
            </label>
            <div className="BookAppointment-consultation-type-options">
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
            {errors.consultationType && (
              <span className="BookAppointment-error">
                {errors.consultationType}
              </span>
            )}
          </div>

          {/* Branch Dropdown (Enabled only when Offline is selected) */}
          {formData.consultationType === "offline" && (
            <div className="BookAppointment-form-group">
              <label>Select Branch</label>
              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                required
              >
                <option value="">Select a branch</option>
                {BRANCH_OPTIONS.map((branch) => (
                  <option key={branch.value} value={branch.value}>
                    {branch.label}
                  </option>
                ))}
              </select>
              {errors.branch && (
                <span className="BookAppointment-error">{errors.branch}</span>
              )}
            </div>
          )}

          {/* Help Text Row */}
          <div className="BookAppointment-form-group">
            <label>
              How can we help you?{" "}
              <span className="BookAppointment-required">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="BookAppointment-submit-buttonbtn">
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default BookConsultation;
