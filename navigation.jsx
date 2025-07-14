import React from "react";
// import { OpenSans } from '@fontsource/open-sans'; // Import the Open Sans font
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer"; // Import Footer
import Home from "./components/screens/Home/home";
import ContactUs from "./components/screens/ContactUs/contactus";
import "./navigation.css";
// import WhatsAppChatbot from './components/screens/whatsapp/whatsapp';
import BookConsultation from "./components/screens/BookConsultation/bookconsultation";
import Loginhcura from "./components/screens/Loginhcura/Loginhcura";
import Aboutus from "./components/screens/Aboutus/aboutus";
import Online from "./components/screens/Online/online";
import Corporates from "./components/screens/Corporates/corporates";
import Doctors from "./components/screens/Doctors/doctors";
// import SkinTreatment from './components/screens/Skintreatments/skintreatments';
import Bangalore from "./components/screens/OurClinics/Bangalore";
import Chennai from "./components/screens/OurClinics/Chennai";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PrivacyPolicy from "./components/screens/privacyPolicy/Privacypolicy";
import Disclaimer from "./components/screens/Disclaimer/disclaimer";
import TermsConditions from "./components/screens/TermsAndConditions/terms";
import Treatments from "./components/screens/Treatments/treatments";
// import Skin1 from './components/screens/Treatments/Skintreatment/Skin1';
import Bangalorejay from "./components/screens/OurClinics/bangalorejay";
import ChennaiMadh from "./components/screens/OurClinics/chennaiMadh";
import ChennaiVal from "./components/screens/OurClinics/chennaiVal";
// import Diabetes from './components/screens/Treatments/Hormonaltreatments/diabetes';
// import Asthma from './components/screens/Treatments/Respiratorytreatments/asthama';
// import Eczema from './components/screens/Treatments/Skintreatment/eczema';
//  import Psoriasis from './components/screens/Treatments/Skintreatment/psoriasis';
import Advancedhair from "././components/screens/AdvancedTreatmentsforHome/advancedhair";
// import Migraine from './components/screens/Treatments/Neurologicaltreatments/migraine';
import DiseaseDetails from "./components/screens/Treatments/disease";
import Hairprp from "./components/screens/AdvancedTreatmentsforHome/hairprp";
import Hair from "./components/screens/AdvancedTreatmentsforHome/stmhair";
import GfcHair from "./components/screens/AdvancedTreatmentsforHome/gfchair";
import Laserhair from "./components/screens/AdvancedTreatmentsforHome/laserhair";
import AdvancedSkin from "./components/screens/AdvancedSkin/hydrafacial";
import Acne from "./components/screens/AdvancedSkin/acne";
import Skinbrightening from "./components/screens/AdvancedSkin/skinbrightening";
import Antiageing from "./components/screens/AdvancedSkin/antiageing";
import Youth from "./components/screens/AdvancedSkin/youth";
import Prpface from "./components/screens/AdvancedSkin/prpface";
import CO2Facial from "./components/screens/AdvancedSkin/co2";

import Acnescar from "./components/screens/AdvancedSkin/acnescar";
import Molebirth from "./components/screens/AdvancedSkin/mole&birth";
import Tattoremoval from "./components/screens/AdvancedSkin/tattoremoval";
import Wartsremoval from "./components/screens/AdvancedSkin/wartsremoval";
import Antiageinglaser from "./components/screens/AdvancedSkin/antiageinglaser";
import Laserhairremoval from "./components/screens/AdvancedSkin/laserhairremoval";
import Dental from "./components/screens/Dental/Dental";
// ScrollToTop Component (Integrated directly here)
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]);

  return null; // This component doesn't render anything
};

function Navigation() {
  return (
    <Router>
      <div className="main1">
        {/* Scroll to top after navigation */}
        <ScrollToTop />
        {/* Header Section - included at the top of every page */}
        <Header />
        {/* Small line between header and main content */}
        <div className="header-line"></div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookconsultation" element={<BookConsultation />} />
            <Route path="/contact-us/" element={<ContactUs />} />
            <Route path="/login" element={<Loginhcura />} />
            <Route path="/about/" element={<Aboutus />} />
            <Route
              path="/homeopathy-online-consultation/"
              element={<Online />}
            />
            <Route
              path="/homeopathy-corporate-camps/"
              element={<Corporates />}
            />
            <Route path="/doctors-list/" element={<Doctors />} />
            <Route
              path="/homeopathy-best-treatments/"
              element={<Treatments />}
            />
            {/* <Route path="/skintreatments" element={<SkinTreatment />} /> */}
            <Route
              path="/homeopathy-clinic-in-bangalore/"
              element={<Bangalore />}
            />
            <Route
              path="/homeopathy-clinic-in-jayanagar-bangalore/"
              element={<Bangalorejay />}
            />
            <Route
              path="/homeopathy-clinic-in-chennai/"
              element={<Chennai />}
            />
            <Route
              path="/homeopathy-clinic-in-madanandapuram-chennai/"
              element={<ChennaiMadh />}
            />
            <Route
              path="/homeopathy-clinic-in-valasaravakkam-chennai/"
              element={<ChennaiVal />}
            />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms" element={<TermsConditions />} />
            {/* <Route path="/treatment/:diseaseName" element={<Skin1/>}/> */}
            {/* <Route path="/treatments/diabetes" element={<Diabetes/>}/> */}
            {/* <Route path="/treatments/asthma" element={<Asthma/>}/> */}
            {/* <Route path="/treatments/eczema" element={<Eczema/>} /> */}
            {/* <Route path="/treatments/psoriasis" element={<Psoriasis/>}/>  */}
            <Route path="/homeopathy-best-treatments/:name" element={<DiseaseDetails />} />
            <Route
              path="/advanced-grow-hair-treatment"
              element={<Advancedhair />}
            />
            <Route path="/advanced-prp-treatment" element={<Hairprp />} />
            <Route path="/advanced-stm-treatment" element={<Hair />} />{" "}
            <Route path="/advanced-gfc-treatment" element={<GfcHair />} />{" "}
            <Route path="/home/laser" element={<Laserhair />} />
            <Route path="/advanced-laser-treatment" element={<Laserhair />} />
            <Route
              path="/advanced-hydrafacial-treatment"
              element={<AdvancedSkin />}
            />
            <Route path="/advanced-acne-treatment" element={<Acne />} />
            <Route
              path="/advanced-skin-brightening-treatment"
              element={<Skinbrightening />}
            />
            <Route
              path="/advanced-anti-ageing-treatment"
              element={<Antiageing />}
            />
            <Route path="/advanced-youth-treatment" element={<Youth />} />
            <Route path="/advanced-prp-face-treatment" element={<Prpface />} />
            <Route
              path="/advanced-co2-facial-treatment"
              element={<CO2Facial />}
            />
            <Route
              path="/advanced-acne-scar-treatment"
              element={<Acnescar />}
            />{" "}
            <Route
              path="/advanced-mole-birth-mark-removal-treatment"
              element={<Molebirth />}
            />
            <Route
              path="/advanced-tatto-removal-treatment"
              element={<Tattoremoval />}
            />
            <Route
              path="/advanced-warts-removal-treatment"
              element={<Wartsremoval />}
            />{" "}
            <Route
              path="/advanced-anti-ageing-laser-treatment"
              element={<Antiageinglaser />}
            />
            <Route
              path="/advanced-laser-hair-removal-treatment"
              element={<Laserhairremoval />}
            />



            <Route
              path="/dental-treatment"
              element={<Dental />}
            />

            
            {/* <Route path="/treatments/migraine" element={<Migraine/>}/>  */}
          </Routes>
          {/* <WhatsAppChatbot /> */}
        </div>
        {/* Footer Section - included at the bottom of the navigation */}
        <Footer />
      </div>
    </Router>
  );
}

export default Navigation;
