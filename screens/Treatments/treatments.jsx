import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  
import './treatments.css';
// Import Treatment images
import Eczematreatment from './../../../assets/images/eczema.jpg';
import alopecia from './../../../assets/images/AlopeciaAreata.jpg';
import Asthmatreatment from './../../../assets/images/Asthma.jpg';
import Irritable from './../../../assets/images/IrritableBowelSyndrome.jpg';
import Migraine from './../../../assets/images/Migraine.jpg';
import PCODtreatment from './../../../assets/images/PCOS.jpg'; 
import HairFall from './../../../assets/images/Hair_Fall.jpg';
import AnxietyNeurosis from './../../../assets/images/AnxietyNeurosis.jpg'; 
import Prostatitis from './../../../assets/images/Prostatitis.jpg';
import Psoriasis from './../../../assets/images/Psoriasis.jpg';
import Sleeplessness from './../../../assets/images/Sleeplessness.jpg';
import UlcerativeColitis from './../../../assets/images/Ulcerative_Colitis.jpg';
import piles from './../../../assets/images/piles.jpg';
import infertility from './../../../assets/images/infertility.jpg';
import gerd from './../../../assets/images/gerd.jpg';
import thyroid from './../../../assets/images/thyroid.jpg';
import diabetes from './../../../assets/images/diabetes.jpg';
import varicose from './../../../assets/images/varicose.jpg';
import melanoma from './../../../assets/images/Melonama.jpg';
import acne from './../../../assets/images/acne.png';
import dermatities from './../../../assets/images/dermatitis.png';
import vitiligo from './../../../assets/images/vitiligo.png';
import scabies from './../../../assets/images/Scabies.png';
import { Link } from 'react-router-dom';

const Treatment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [isMobile, setIsMobile] = useState(false); // Track if it's mobile view
  const navigate = useNavigate();  // Hook for navigation

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const treatments = [
    { id: 1, img: Eczematreatment, name: 'eczema', category: 'Skin' },
    { id: 2, img: alopecia, name: 'alopecia-areata', category: 'Hair' },
    { id: 3, img: Asthmatreatment, name: 'asthma', category: 'Respiratory' },
    { id: 4, img: Irritable, name: 'irritable-bowel-syndrome', category: 'Digestive' },
    { id: 5, img: Migraine, name: 'migraine', category: 'Neurological' },
    { id: 6, img: PCODtreatment, name: 'pcod-pcos', category: 'Hormonal' },
    { id: 7, img: HairFall, name: 'hair-fall', category: 'Hair' },
    { id: 8, img: AnxietyNeurosis, name: 'anxiety-neurosis', category: 'Mental Health' },
    { id: 9, img: Prostatitis, name: 'prostatitis', category: 'Urological' },
    { id: 10, img: Psoriasis, name: 'psoriasis', category: 'Skin' },
    { id: 11, img: Sleeplessness, name: 'sleeplessness', category: 'Mental Health' },
    { id: 12, img: UlcerativeColitis, name: 'ulcerative-colitis', category: 'Digestive' },
    { id: 13, img: piles, name: 'piles', category: 'Digestive' },
    { id: 14, img: infertility, name: 'infertility', category: 'Reproductive' },
    { id: 15, img: varicose, name: 'varicose', category: 'Vascular' },
    { id: 16, img: diabetes, name: 'diabetes', category: 'Hormonal' },
    { id: 17, img: thyroid, name: 'thyroid', category: 'Hormonal' },
    { id: 18, img: gerd, name: 'gerd', category: 'Skin' },
    { id: 19, img: melanoma , name: 'melanoma', category: 'Skin' },
    { id: 20, img:acne , name: 'acne', category: 'Skin' },
    { id: 21, img: dermatities, name: 'dermatitis', category: 'Skin' },
    { id: 22, img: vitiligo, name: 'vitiligo', category: 'Skin' },
    { id: 23, img: scabies, name: 'scabies', category: 'Skin' },
    
    // { id: 19, img: Prostatitis, name: 'namesthey', category: 'haha' },
  ];

  const filteredTreatments = treatments.filter(
    (treatment) =>
      (category === 'All' || treatment.category === category) &&
      treatment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle navigation for treatment category
  // const handleReadMore = (name) => {
  //   navigate(/treatment/${name}); // Navigate to the treatment detail page
  // };
const handleReadMore = (name) => {
  // Format: /treatment/homeopathy/disease-name-treatment
  navigate(`/homeopathy-best-treatments/${name}-treatment`);
};
  return (
    <>
    <div className="treatments">
      <div className="treatmentheading">
        <h1>MAJOR DISEASES TREATED BY HOMEOPATHY​</h1>
        <h4>
          Welcome to H-Cura International, all major diseases are treated by
          H-Cura International expert homeopathic care. Our holistic,
          personalized treatments for chronic and acute conditions.
        </h4>
      </div>
      <div className="treatmentslap">
        <h2>
        Discover the Advantages of Homeopathy Treatments at H-Cura Homeopathy      Multispeciality Clinic
        </h2>
        <p>At H-Cura Homeopathy Multispeciality Clinic, we offer both offline and online consultations, providing effective solutions for a wide range of health conditions. Our personalized, natural approach ensures safety, efficacy, and holistic healing for people of all age groups—newborns, children, teens, expectant mothers, adults, and the elderly.</p>
        <h2 className='benefits'>
        Benefits of Homeopathy Treatment
        </h2>
        <ol start={1} type='1'>
          <li><small>Personalized Care:</small>
            <p>Each homeopathy treatment is tailored to your unique symptoms, medical history, lifestyle, and personality. This ensures not only effective results but also a safe, side-effect-free experience</p>
          
          </li>
          <li><small>Natural and Safe:</small>
            <p>Made from natural substances, homeopathy remedies are free from artificial chemicals, making them entirely safe and devoid of side effects.</p>
          
          </li>
          <li><small>Root Cause Treatment:</small>
            <p> Unlike conventional methods, homeopathy focuses on addressing the underlying cause of diseases rather than just alleviating symptoms. This approach helps prevent recurrence and promotes long-term health.
            </p>
          
          </li>
          <li><small>Immune System Boost:</small>
            <p>Strengthen your immunity with homeopathy, making your body more resilient against diseases and better equipped to fight infections.</p>
          
          </li>
          <li><small>Effective for Chronic Conditions: </small>
            <p>Homeopathy has shown remarkable success in managing chronic diseases like allergies, asthma, arthritis, migraines, and more, offering lasting relief without side effects.</p>
          
          </li>
        </ol>
      </div>

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Treatments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Category Buttons */}
      <div className="category-buttons">
        <button onClick={() => setCategory('All')}>All Treatments</button>
        <button onClick={() => setCategory('Skin')}>Skin Treatments</button>
        <button onClick={() => setCategory('Hair')}>Hair Treatments</button>
        <button onClick={() => setCategory('Digestive')}>Digestive Treatments</button>
        <button onClick={() => setCategory('Hormonal')}>Hormonal Treatments</button>
        <button onClick={() => setCategory('Mental Health')}>Mental Health Treatments</button>
        <button onClick={() => setCategory('Respiratory')}>Respiratory Treatments</button>
        <button onClick={() => setCategory('Reproductive')}>Reproductive Treatments</button>
        <button onClick={() => setCategory('Vascular')}>Vascular Treatments</button>
        <button onClick={() => setCategory('Urological')}>Urological Treatments</button>
        <button onClick={() => setCategory('Neurological')}>Neurological Treatments</button>
           
      </div>

      <div className="ourtreatments1">
        {filteredTreatments.map((treatment) => (
          <div key={treatment.id} className="treatment1">
            {/* Conditionally render image based on screen size */}
            {!isMobile && <img src={treatment.img} alt={treatment.name} />}
            {/* {!isMobile } */}
            <h1>{treatment.name.replace('-', ' ').toUpperCase()}</h1>
            <button onClick={() => handleReadMore(treatment.name)}>Read</button>
            {/* <a href="/bookconsultation"><button>Book Appointment</button></a> */}
           {/* <Link to="/bookconsultation"><button>Book Appointment</button></Link> */}
          </div>
        ))}
      </div>
    </div>

    <div className="treatmentslap1">
  <h2>Why Choose H-Cura Homeopathy?</h2>
  <ul className="highlighted-list">
    <li>Expertise in treating chronic, acute, and genetic conditions.</li>
    <li>Both offline and online consultations are available for your convenience.</li>
    <li>Safe and effective remedies for individuals of all age groups.</li>
  </ul>
  <p>Experience the transformative benefits of homeopathy at H-Cura Homeopathy Multispeciality Clinic, where your health and wellness are our priority.</p>

  <h2>Comprehensive Homeopathy Treatments at H-Cura Homeopathy</h2>
  <p>We provide advanced homeopathy treatments for a variety of conditions, including:</p>
  <ul className="highlighted-list">
    <li>Fistula, Sinusitis, Eczema, Psoriasis, Thyroid, PCOS/PCOD</li>
    <li>Hair Loss, Asthma, Diabetes, Allergies, Hypertension</li>
    <li>Spondylosis, Renal Colic (Kidney Stones), Sexual Problems</li>
    <li>Obesity, Arthritis, and Dandruff</li>
  </ul>
  <p>Our constitutional homeopathy method is designed to support both physical and mental health issues, and it is also effective in addressing genetic disorders.</p>
</div>


<div className="connectcare">
              <h2>
              Connect. Care. Cure.
              </h2>
              <div class="vertical-line1"></div>
              <div className="connect">
              <h2>Are you ready to Consult Online?</h2>
              </div>
              <p>H-Cura is India’s Leading Online Homeopathy Consultation Platform which neglects the travel time , Money and care from Expert homeopathy Doctors  at your fingertips</p>
              <div className="bookonline">
              {/* <a href="/bookconsultation"><button>Book consultation</button></a> */}
              <Link to="/bookconsultation"><button>Book Appointment</button></Link>
              
              </div>
              
 
            </div>



    </>
  );
};

export default Treatment;