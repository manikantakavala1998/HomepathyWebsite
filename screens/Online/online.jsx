import React from "react";
import "./online.css";
import { useState } from "react";
import { useEffect } from "react";
// import about from './../../../assets/images/online.jpg'
//import inabout from './../../../assets/images/Asset11.png'
// import doctor from './../../../assets/images/doctor1.png'
import ychoose from "./../../../assets/images/ychoose1.png";
import onlinebanner from "./../../../assets/images/onlinebanner4.jpg";
import SearchIcon from "./../../../assets/images/search1.png";
import appointment from "./../../../assets/images/appointment.png";
import consultation from "./../../../assets/images/consultation.png";
import { Link } from "react-router-dom";
import favicon from "./../../../assets/images/favicon.ico";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
//import video from './../../../assets/images/offervideo.mp4
import drspoorthi from "./../../../assets/images/dr.spoorthi.png";
import drrenuka from "./../../../assets/images/dr.renuka.png";
import drnelofar from "./../../../assets/images/dr.nelofar1.png";
import drjyothi from "./../../../assets/images/dr.jyothi.png";

const Online = () => {
  // Initialize state with "Global Reach" as the default active benefit
  const [activeBenefit, setActiveBenefit] = useState("Global Reach");

  const benefitsData = {
    "Global Reach":
      "Our services are accessible to patients worldwide, making quality homeopathic care available to everyone.",
    "Cost-Effective":
      "Online consultations eliminate travel costs and reduce healthcare expenses, making holistic healthcare more affordable.",
    "Follow-up Care":
      "Easy follow-ups ensure continuity of treatment, improving overall results.",
    "Comfort and Convenience":
      "Consult from the comfort of your home, eliminating the need for travel.",
    "Personalized Treatment Plan":
      "Every patient receives a tailored treatment plan for their unique needs.",
  };
  useEffect(() => {
    document.title =
      "H-Cura Online Homeopathy | Expert Global Consultations Anytime";
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Connect with H-Cura Homeopathy for personalized online homeopathy consultations. Trusted by patients across the globe for effective, natural treatments. Heal from anywhere, anytime!"
      );
    }
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "Online Homeopathy Treatment,Homeopathy online consultation,Best homeopathy online consultation,Online homeopathy doctor consultation,Homeopathy online consultation india,Online homeopathy consultation,Online homeopathy consultation,Homeopathy Online Treatment,Homeopathy doctor online,Homeopathy doctor online consultation,Homeopathy treatment at home,Best Homeopathy Clinic in Bangalore,Homeopathy medicine,Online homeopathy consultation near me,order homeopathy medicine, international homeopathy"
      );
    }
    // Set canonical link
    const existingCanonical = document.querySelector("link[rel='canonical']");
    if (existingCanonical) {
      existingCanonical.setAttribute(
        "href",
        "https://www.h-cura.com/homeopathy-online-consultation/"
      );
    } else {
      const canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute(
        "href",
        "https://www.h-cura.com/homeopathy-online-consultation/"
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
    <>
      <div className="totalonline">
        <div className="image-container1">
          <img
            src={onlinebanner}
            alt="Background"
            className="background-image1"
          />

          {/* <div className="second-image-overlay1">
    <img src={inabout} alt="Overlay Image1" className="overlay-image1" />
  </div> */}

          <div className="content-overlay1">
            <h3>FEEL BETTER ABOUT FINDING HEALTHCARE</h3>
            <h6>
              India's Trusted Teleconsultation Platform for Homeopathy Treatment{" "}
            </h6>
            {/* <button><a href="/bookconsultation">Book Appointment</a></button> */}
            <button>
              {" "}
              <Link to="/bookconsultation">Book Appointment</Link>
            </button>
          </div>
        </div>

        <div className="onlineheader">
          <h1>
            Get Diagnosed by Phone or Video Today in our Online Homeopathy
            Doctor Consultation Platform
          </h1>
        </div>

        <div className="aboutonline">
          <div className="onlinecontent">
            <h2 className="heading">
              Find the best doctor right at your fingertips
            </h2>
            <div className="ondoc">
              <p className="doc-info mobile-text">
                We always give you the tools and information you need
              </p>
              <p className="doc-info large-text">
                We provide you with reliable tools and accurate medical
                information to help you make informed healthcare decisions.
              </p>
            </div>

            <div className="search">
              <h4 className="search-item">
                <img src={SearchIcon} alt="" className="search-icon" />
                Access Trusted Medical Experts
              </h4>
              <div className="para">
                <div className="vertical-line"></div>
                <p className="para-text">
                  <p className="doc-info mobile-text">
                    Get professional care and advice from experienced doctors.
                  </p>
                  <p className="doc-info large-text">
                    Connect with verified and highly experienced doctors
                    specializing in various medical fields. Get personalized
                    care and expert treatment advice tailored to your health
                    needs.
                  </p>
                </p>
              </div>

              <h4 className="search-item">
                <img src={appointment} alt="" className="search-icon" />
                Book Appointments Easily
              </h4>
              <div className="para">
                <div className="vertical-line"></div>
                <p className="para-text">
                  <p className="doc-info mobile-text">
                    Conveniently schedule appointments online or by phone
                  </p>
                  <p className="doc-info large-text">
                    Schedule hassle-free appointments with top doctors near you
                    through our seamless online platform or by phone. Find
                    doctors based on location, specialty, ratings, and
                    availability.
                  </p>
                </p>
              </div>

              <h4 className="search-item">
                <img src={consultation} alt="" className="search-icon" />
                Get Online Consultations
              </h4>
              <div className="para">
                <p className="para-text">
                  <p className="doc-info mobile-text">
                    Access expert advice and ask the right questions anytime,
                    anywhere
                  </p>
                  <p className="doc-info large-text">
                    Experience virtual consultations with expert doctors from
                    the comfort of your home. Get instant advice, second
                    opinions, and answers to all your health queries anytime,
                    anywhere.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="finalabout1">
          <h4 className="laptop1">Our Commitment:</h4>
          <h2 className="laptop1">At H-Cura Homeopathy, we are devoted to:</h2>
          <div className="finalaboutimg1">
            <img src={ychoose} alt="Doctor" />
          </div>
          <div className="finalaboutcontent1">
            <h2>Why you choose Hcura </h2>
            <ul className="commitment-list1">
              <li className="commitment-item1">
                <div className="circle1">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                Delivering quality care with proven results
              </li>
              <li className="commitment-item1">
                <div className="circle1">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                24/7 access-reach out wherever you need
              </li>
              <li className="commitment-item1">
                <div className="circle1">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                high-quality care with experienced specialists
              </li>
              <li className="commitment-item1">
                <div className="circle1">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                Safe, side-effect-free solutions for all ages.
              </li>
              <li className="commitment-item1">
                <div className="circle1">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                Online and offline consultations available
              </li>
            </ul>
            <div className="freeconsulation">
              {/* <button><a href="/bookconsultation">Get consulation</a></button> */}
              <button>
                {" "}
                <Link to="/bookconsultation">Get consulation</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="onlinecontent">
          <h2>H-Cura Medicine & Homeopathy at Your Fingertips</h2>
          <p>
            With the wisdom of ancient Indian healing; a mix of history and
            nature will help you find your balance. Your safety and well-being
            is our priority and with the H-Cura app, we are making traditional
            Indian medicine digitally accessible to millions across the world
            through our Online Homeopathy consultation app
          </p>
        </div>
        <div className="onlinecontent">
          <h2>
            Homeopathy – A Revolutionary, Rational & Natural Medical Science
          </h2>
          <p>
            A scientific, safe and extremely effective method of healing
            practiced across the world, Homeopathy stimulates your body’s
            natural healing capabilities with remedies crafted from natural
            elements. To cure the root of your ailment, a homeopath takes into
            consideration your physical, mental and emotional well-being.
          </p>
        </div>
        <div className="onlinecontent">
          <h2>Online Homeopathy Consultation with H-Cura</h2>
          <p>
            The H-Cura app is bridging the gap caused by the busy running world
            and enables a safe online consultation with highly experienced
            Homeopathic Doctors from across the country. You can save time and
            money by eliminating travelling expenses and waiting time. At
            H-Cura, In our Online Homeopathy Consultation we offer Immediate
            Care, On-Going Care and Specialty Care.
          </p>
        </div>

        <div className="meetconsulation">
          <h2>Meet our specialist</h2>
          <div className="meeth1">
            <h3>
              Consult the Best Homeopathy Specialists for Personalized
              Multispeciality Care
            </h3>
          </div>
          <div className="grid">
            <div className="meet">
              <div className="meetimg">
                <img src={drspoorthi} alt="" />
                <h3>Dr.Spoorthi Prasad</h3>
                <h6> BHMS | Exp. 7+ years </h6>
              </div>
            </div>
            <div className="meet">
              <div className="meetimg">
                <img src={drrenuka} alt="" />
                <h3>Dr.Renuka</h3>
                <h6> BHMS | Exp. 17 years </h6>
              </div>
            </div>
            <div className="meet">
              <div className="meetimg">
                <img src={drnelofar} alt="" />
                <h3>Dr. Syed Nelofar </h3>
                <h6>BHMS, CGO,CCH, FFAC | Exp. 5+ year </h6>
              </div>
                    
            </div>

            <div className="meet">
              <div className="meetimg">
                <img src={drjyothi} alt="" />
                <h3>Dr. Jyoti Rani Muduli</h3>
                <h6> BHMS, PGDMH,PGDCC | Exp. 7+ years </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="onlinecareacross">
          <h2>Homeopathy Online Care Across India & Internationally</h2>
          <h3>Online Consultations Available Everywhere</h3>
          <p>
            At H-Cura Homeopathy, we believe everyone deserves quality
            healthcare. Our online homeopathy services make it easy for you to
            consult experienced homeopaths from anywhere in India and beyond.
          </p>
          <p>
            We focus on treating the root causes of health issues, providing
            safe, effective solutions without side effects. Whether you're
            dealing with chronic conditions or skin concerns, our personalized
            care is tailored to your needs.
          </p>
        </div>

        {/* <div className="benefits">
      <h2>Benefits of International Online Homeopathy Consultation</h2>
      <div className="benefitpoints">
        <h3>Global Reach</h3>
        <h3>Cost-Effective</h3>
        <h3>Follow-up Care</h3>
        <h3>Comfort and Convenience</h3>
        <h3>Personalized Treatment Plan</h3>
      </div>
    </div> */}

        <div className="benefits ">
          <h2>Benefits of International Online Homeopathy Consultation</h2>

          <p>
            Experience natural healing with H-Cura Homeopathy—your trusted
            partner in health, available online 24/7
          </p>

          <div className="benefitpoints">
            {Object.keys(benefitsData).map((benefit) => (
              <h3
                key={benefit}
                onClick={() => setActiveBenefit(benefit)}
                className={activeBenefit === benefit ? "active" : ""}
              >
                {benefit}
              </h3>
            ))}
          </div>
          {/* Display the description for the active benefit */}
          {activeBenefit && (
            <p className="benefit-description">{benefitsData[activeBenefit]}</p>
          )}
        </div>

        <div className="international onlinecareacross">
          <h2>International Patient's</h2>
          <p>
            Welcome to H-Cura’s International Online Homeopathy Consultation
            platform ! We understand that healthcare has no boundaries, and we
            are committed to bring the healing power of homeopathy to patients
            worldwide. Whether you’re seeking holistic remedies for chronic
            conditions or looking for personalized healthcare solutions, our
            team of experienced homeopathic practitioners is here to serve you.
          </p>
          <div className="mainbox">
            <div className="boxx">
              <h2>
                80000 <span>+</span>
              </h2>
              <h2>Patient treated</h2>
            </div>
            <div className="boxx">
              <h2>
                180<span>+</span>{" "}
              </h2>
              <h2>Speacialities</h2>
            </div>
            <div className="boxx">
              <h2>
                250<span>+</span>
              </h2>
              <h2>Doctors</h2>
            </div>
          </div>
        </div>

        <div className="onlinevideo">
          <div className="videocontent">
            <h2>
              Online Homeopathy Consultation platform which saves your Time and
              money
            </h2>
          </div>
          <div className="youtubevideo">
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/s70jreL2aDY?autoplay=1&mute=1&loop=1&playlist=s70jreL2aDY"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="H-Cura Homeopathy Online Consultation Video"
            />
          </div>
        </div>

        <div className="connectcare">
          <h2>Connect. Care. Cure.</h2>
          <div class="vertical-line1"></div>
          <div className="connect">
            <h2>Are you ready to Consult Online?</h2>
          </div>
          <p>
            H-Cura is India’s Leading Online Homeopathy Consultation Platform
            which neglects the travel time , Money and care from Expert
            homeopathy Doctors at your fingertips
          </p>
          <div className="bookonline">
            {/* <a href="/bookconsultation"><button>Book online consultation</button> </a> */}
            <Link to="/bookconsultation">
              <button>Book online consultation</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Online;
