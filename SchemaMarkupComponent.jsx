import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const SchemaMarkupComponent = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "H-Cura",
    "url": "https://www.h-cura.com/",
    "description": "Welcome to H-Cura Homeopathy, India's first online and offline homeopathy clinic, with branches in Bangalore (Jayanagar) and Chennai (Madhanandapuram, Valasaravakkam). Experience wellness through professional homeopathic treatment with no side effects. Book your appointment today at +91 88700 01377.",
    "publisher": {
      "@type": "Organization",
      "name": "H-cura Homeopathy multispeciality clinic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.h-cura.com/logo192.png",
        "width": 32,
         "height": 32,

      }
    },
    
    "mainEntity": [
      {
        "@type": "WebPage",
        "name": "Contact Us",
        "url": "https://www.h-cura.com/contact-us",
        "description":"Get in touch with H-Cura Homeopathy Multispecialty Clinic today! Whether you have queries, need guidance, or want to book an appointment, we're here to assist you. Reach out to us for expert care and compassionate support."
      },
      {
        "@type": "WebPage",
        "name": "About Us",
        "url": "https://www.h-cura.com/about/",
        "description":"Discover the story of H-Cura Homeopathy Multispecialty Clinic, where healing meets expertise. Founded on trust and excellence, we offer holistic care tailored to your needs. Learn about our mission to provide safe, effective, and personalized homeopathic treatments."
      },
      {
        "@type": "WebPage",
        "name": "Clinics in Bangalore",
        "url": "https://www.h-cura.com/bangalore",
        "description":"Experience the best homeopathic care in Bangalore at H-Cura Homeopathy Multispecialty Clinic. Conveniently located, our clinic is equipped with expert doctors and state-of-the-art facilities to provide personalized treatments for your health concerns."
      },
      {
        "@type": "WebPage",
        "name": "Clinics in Chennai",
        "url": "https://www.h-cura.com/chennai",
        "description":"Your trusted partner in holistic healing is now in Chennai! At H-Cura Homeopathy Multispecialty Clinic, we offer customized homeopathy solutions for all ages. Let us help you achieve health and wellness in a natural way."
      },
      {
        "@type": "Blog",
        "name": "Blogs",
        "url": "https://www.h-cura.com/blogs",
        "description":"Stay informed and inspired with expert insights from the H-Cura Homeopathy Multispecialty Clinic Blog. Discover valuable tips on homeopathic care, holistic health, and wellness to enhance your life naturally."
      },
      {
        "@type": "WebPage",
        "name": "Doctors",
        "url": "https://www.h-cura.com/for-doctors/",
        "description":"Meet the expert team of doctors at H-Cura Homeopathy Multispecialty Clinic. With years of experience and a passion for holistic healing, our specialists are dedicated to providing you with personalized care and effective treatments."
      },
      {
        "@type": "WebPage",
        "name": "Book Appointments",
        "url": "https://www.h-cura.com/bookconsultation",
        "description":"Take the first step toward better health with H-Cura Homeopathy Multispecialty Clinic. Booking your appointment is quick and easy—get access to expert care for all your health needs."
      }
    ],
    "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "88700 01377",
          "contactType": "customer service",
          "email": "admin@h-cura.com",
          "contactOption": "TollFree",
          "areaServed": [
            "US", "CA", "GB", "AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ",
            "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB",
            "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BR", "IN",
            "AX", "ZW", "ZM", "YE", "EH", "WF", "VI", "VG", "VN", "VE", "VU",
            "UZ", "UY", "UM", "AE", "UA", "UG", "TV", "TC", "TR", "TN", "TT",
            "TO", "TK", "TG", "TL", "TH", "TZ", "TJ", "TW", "SY", "CH", "SE",
            "SJ", "SR", "SD", "LK", "ES", "SS", "GS", "ZA", "SO", "SB", "SI",
            "SK", "SX", "SG", "SL", "SC", "RS", "SN", "SA", "ST", "SM", "WS",
            "VC", "PM", "MF", "LC", "KN", "SH", "BL", "RE", "RW", "RU", "RO",
            "MK", "QA", "PR", "PT", "PL", "PN", "PH", "PE", "PY", "PG", "PA",
            "PS", "MP", "NO", "OM", "PK", "PW", "NF", "NU", "NG", "NE", "NI",
            "NZ", "NC", "NP", "NL", "NR", "NA", "MM", "MZ", "MA", "MS", "ME",
            "MN", "MC", "MD", "FM", "MX", "YT", "MU", "MR", "MQ", "MH", "MT",
            "ML", "MV", "MY", "MW", "MG", "MO", "LU", "LT", "LI", "LY", "LR",
            "LS", "LB", "LV", "LA", "KG", "KW", "KR", "KP", "KI", "KE", "KZ",
            "JO", "JE", "JP", "JM", "IT", "IL", "IM", "IE", "IQ", "IR", "ID",
            "IS", "HU", "HK", "HN", "VA", "HM", "HT", "GY", "GW", "GN", "GG",
            "GT", "GU", "GP", "GD", "GL", "GR", "GI", "GH", "DE", "GE", "GA",
            "GM", "TF", "PF", "GF", "FR", "FI", "FJ", "FO", "FK", "ET", "SZ",
            "EE", "ER", "GQ", "SV", "EG", "EC", "DO", "DM", "DJ", "DK", "CI",
            "CZ", "CY", "CW", "CU", "HR", "CR", "CK", "CG", "CD", "KM", "CO",
            "CC", "CX", "CN", "CL", "TD", "CF", "KY", "CM", "KH", "CV", "BI",
            "BF", "BG", "BN", "IO", "BV", "BW"
          ],
          "availableLanguage": "en"
        }
      ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <div>
        <h1>Welcome to Your Website</h1>
        <ul>
          <li><Link to="https://www.h-cura.com/contact-us">Contact Us</Link></li>
          <li><Link to="https://www.h-cura.com/about/">About Us</Link></li>
          <li><Link to="https://www.h-cura.com/bangalore">Clinics in Bangalore</Link></li>
          <li><Link to="https://www.h-cura.com/chennai">Clinics in Chennai</Link></li>
          <li><Link to="https://www.h-cura.com/blogs">Blogs</Link></li>
          <li><Link to="https://www.h-cura.com/for-doctors/">Doctors</Link></li>
          <li><Link to="https://www.h-cura.com/bookconsultation">Book Appointments</Link></li>
        </ul>
      </div>
    </>
  );
};

export default SchemaMarkupComponent;