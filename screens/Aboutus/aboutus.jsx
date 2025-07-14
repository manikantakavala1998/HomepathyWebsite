import React from 'react'
import './aboutus.css'
import { useEffect } from 'react'

// import chiristmas from './../../../assets/images/Christmas offer banner.png'
import about from './../../../assets/images/web_banner.jpg'
import inabout from './../../../assets/images/Asset11.png'
import asset8 from './../../../assets/images/Asset812.png'
import doctor from './../../../assets/images/Aboutusdoctor.png'
import STEPS from './../../../assets/images/5_STEPS.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import start from './../../../assets/images/startup.png'
import hcurastartup from './../../../assets/images/hcurastartup.png'
import hcuratemplate1 from './../../../assets/images/hcuratemplate1.png'
import hcuratemplate2 from './../../../assets/images/hcuratemplate2.png'
import hcuratemplate3 from './../../../assets/images/hcuratemplate3.png'
import favicon from "./../../../assets/images/favicon.ico"



const Aboutus = () => {
  useEffect(() => {
     document.title = "About H-Cura Homeopathy - Pioneers in Holistic Healthcare";
     const metaDescription = document.querySelector("meta[name='description']");
     if (metaDescription) {
       metaDescription.setAttribute(
         "content",
         "Learn about H-Cura Homeopathy, India's leading multispeciality clinic offering holistic treatments online and offline. Meet our expert doctors dedicated to personalized care and natural healing."
       );
     }
     const metaKeywords = document.querySelector("meta[name='keywords']");
     if (metaKeywords) {
       metaKeywords.setAttribute(
         "content",
         "H-Cura Homeopathy,Homeopathy clinic in Chennai,Multispecialty clinic in Chennai,Natural healing solutions,Holistic health treatments,Personalized homeopathy care,Homeopathy for wellness,Online homeopathy consultation,Trusted homeopathy clinic,Leading homeopathy treatment center,Expert homeopaths in Chennai,Affordable homeopathic care,Homeopathy for health and wellness,Multidisciplinary healthcare approach."
       );
     }
      // Set canonical link
      const existingCanonical = document.querySelector("link[rel='canonical']");
      if (existingCanonical) {
        existingCanonical.setAttribute("href", "https://www.h-cura.com/about/");
      } else {
        const canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        canonicalLink.setAttribute("href", "https://www.h-cura.com/about/");
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
   <div className='totalonline'>
  <div className="image-container">
  <img src={about} alt="Background" className="background-image" />
  
  <div className="second-image-overlay">
    <img src={inabout} alt="Overlay Image1" className="overlay-image" />
  </div>

        


  <div className="content-overlay">
  
    <h3>About Us</h3>
    <p className="hidden-mobile">Our Story Starts With a Mission to Connect Care for Cure</p>
    
   
  </div>
</div>

            <div className="abouthead">
            <h2>Our Story Starts With a Mission to Connect Care for Cure</h2>
            </div>

      <div className="addingcontentinabout">
      {/* <h1>MISSION AND VISSION</h1> */}
        <div className="addingcontent">
        <h1>About H-Cura</h1>
          
          

          <p>Backed by a team of experts and medical professionals from the Indian healthcare industry, H-Cura was founded in 2021 with the    purpose of giving millions of Indians access to effective and reliable medical treatments. <br />

              Headquartered in Bengaluru India, H-CURA PRIVATE LIMITED provides a unique digital platform (Mobile and Web Applications), enabling patients to connect with some of India’s leading homeopathic doctors. <br />

              With the many restrictions brought on by the pandemic, the H-Cura app is designed to enable a secure and pleasant experience for both – patients and doctors. Our platform digitally connects the world to reliable AYUSH medicine, and follows safety protocols by limiting social contact.</p>
              <div className="formobile">
              <h2>About H-Cura</h2>
              </div>

              <div className="contentimage1">
          <img src={asset8} alt="" />
         
        </div>

        </div>
        <div className="contentimage">
          <img src={asset8} alt="" />
         
        </div>

      </div>

      <div className="addingcontentinabout1">
  <div className="box">
    <h2>Our Vision</h2>
    <p>Make affordable and reliable health care accessible to everyone on one platform that instantly connects the best Doctors at your fingertips.</p>
    <h2>Our Mission</h2>
    <p>To revolutionize the e-health industry by building the world’s most trusted platform for traditional medicine using modern science and technology.</p>
  </div>
  <div className="box1">
  <h2>Corporate Governance</h2>
     <div className="box1content">
      <p className='box1p'>At H-Cura, our goal to every stakeholder, business partner and statutory body including Doctors, Patients, Vendors, Associates, Society and Governments, is to ensure fairness, accountability, integrity, transparency and participation.</p>
     </div>
    
  </div>
  <div className="box3">
   <img src={doctor} alt="" />
  </div>
</div>
      <div className="formobile">
        <h2>OUR VISION</h2>
        <p>Make affordable and reliable health care accessible to everyone on one platform that instantly connects the best Doctors at your fingertips.</p>
        <h2>OUR MISSION</h2>
        <p>To revolutionize the e-health industry by building the world’s most trusted platform for traditional medicine using modern science and technology.</p>
        <h2>Corporate Governance​</h2>
        <p>At H-Cura, our goal to every stakeholder, business partner and statutory body including Doctors, Patients, Vendors, Associates, Society and Governments, is to ensure fairness, accountability, integrity, transparency and participation..</p>
      </div>

        <div className="whyhcura">
          <div className="hcurawhy">
          
            <h2>WHY H-CURA?</h2>
            {/* <div className="whyhcuraimg1">
            <img src={doctor} alt="" />
          </div> */}
            <p>H-Cura Homeopathy is a leading multispeciality clinic offering safe, natural, and effective treatments for a wide range of health conditions. With a team of expert homeopathic doctors, we provide personalized care tailored to each patient’s unique needs. Our holistic approach addresses not just symptoms but also the root cause of ailments, ensuring long-term wellness. Whether you need treatment for chronic diseases, skin issues, respiratory conditions, or lifestyle disorders, H-Cura is your go-to destination. With convenient online and offline consultations, we make quality healthcare accessible to everyone. Trust H-Cura Homeopathy for proven results and compassionate care that enhances your overall well-being. <br />
            <ul className="custom-list">
                        <li className="custom-item">
                            <span className="highlight-text">Expert Homeopathic Doctors:</span> 
                           <p> Our team of highly qualified and experienced specialists ensures accurate diagnosis and treatment.</p>
                        </li>

                        <li className="custom-item">
                            <span className="highlight-text">Holistic Multispeciality Care:</span> 
                           <p> From chronic diseases to acute conditions, we offer tailored treatments for every health need.</p>
                        </li>

                        <li className="custom-item">
                            <span className="highlight-text">Safe & Natural Remedies:</span> 
                            <p>No side effects, 100% natural, and gentle on your body.</p>
                        </li>

                        <li className="custom-item">
                            <span className="highlight-text">Convenient Online & Offline Consultations:</span> 
                           <p> Accessible care through virtual and in-person appointments, catering to patients worldwide.</p>
                        </li>

                        <li className="custom-item">
                            <span className="highlight-text">Proven Results:</span> 
                            <p>Trusted by patients for our consistent success in improving health and well-being.</p>
                        </li>
                    </ul>
                    </p>
          </div>
          {/* <div className="whyhcuraimg">
            <img src={doctor} alt="" />
          </div> */}
        </div>

        <div className="finalabout">
        <h4 className='laptop'>Our Commitment:</h4>
        <h2 className='laptop'>At H-Cura Homeopathy, we are devoted to:</h2>
      {/* <div className="finalaboutimg">
        <img src={doctor} alt="Doctor" />
      </div> */}
      <div className="finalaboutcontent">
        <h4>Our Commitment:</h4>
        <h2>At H-Cura Homeopathy, we are devoted to:</h2>
        <ul className="commitment-list">
          <li className="commitment-item">
            <div className="circle"><FontAwesomeIcon icon={faCheck} /></div> 
            Delivering natural, safe, and effective homeopathic treatments tailored to individual needs.
          </li>
          <li className="commitment-item">
            <div className="circle"><FontAwesomeIcon icon={faCheck} /></div> 
            Promoting a holistic approach to health by addressing the root cause of ailments.
          </li>
          <li className="commitment-item">
            <div className="circle"><FontAwesomeIcon icon={faCheck} /></div> 
            Upholding the core principles of homeopathy with integrity and compassion.
          </li>
          <li className="commitment-item">
            <div className="circle"><FontAwesomeIcon icon={faCheck} /></div> 
            Creating a healing space that fosters trust, comfort, and long-term wellness for our patients and community.
          </li>
            </ul>
          </div>
        </div>


        <div className="adding5s">
          <div className="simage">
          <img src={STEPS} alt="" />
          </div>
          <div className="scontent">
            <div className="slist">
              <table width={1000}>
                <tr>
                  <td><div className="listsss"><li>Simple</li></div></td>
                  <td> <h2><div className="nolist"><li>Designed for Everyone to Use</li></div></h2></td>
                </tr>
                <tr>
                  <td><div className="listsss"><li>Smart</li></div></td>
                  <td><h2><div className="nolist"><li>Latest Technology Enables a Smooth Experience</li></div></h2></td>
                </tr>
                <tr>
                  <td><div className="listsss"><li>Safe</li></div></td>
                  <td> <h2><div className="nolist"><li>End to End Encrypted to Protect your Privacy</li></div></h2></td>
                </tr>
                <tr>
                  <td><div className="listsss"><li>Secure</li></div></td>
                  <td><h2><div className="nolist"><li>No One Can Access Your Data</li></div></h2></td>
                </tr>
                <tr>
                  <td><div className="listsss"><li>Sustainable</li></div></td>
                  <td><h2><div className="nolist"><li>Maintaining and Updating the Platformy</li></div></h2></td>
                </tr>
              </table>
              
            </div>

          </div>
        </div>
       

       


    <div className="Magazinetitle">
                  <h2>Magazine Features</h2>
                  </div>
    <div className="Magazine">
          <div className="Siliconindia">
          
          <div className="start">
            <h3>
            Siliconindia STARTUP City -April2023
            </h3>
            <div className="startupimg">
              <img src={start} alt="" />
              <img src={hcurastartup} alt="" />
            </div>
          </div>
          </div>



          <div className="IndustryInsights">
            <h3>
            The Industry Insights- June 2023
            </h3>
            <div className="industryimg">
              <div className="industryimg1">
              <img src={hcuratemplate1} alt="" />
              <img src={hcuratemplate2} alt="" />
              </div>
              <div className="industryimg2">
              <img src={hcuratemplate3} alt="" />
              </div>

             
            </div>
          </div>
          
        </div>
        </div>


  </>
  )
}

export default Aboutus