import React from 'react';
import './footer.css'; // Import Footer specific CSS
import logo from './../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
   let navi = useNavigate();
   
   let handleHome = () => {
        navi('/');
   };
   let handleaboutus = () => {
       navi('/about-us');
   };
   let handleclinic = () => {
       navi('/our-clinics');
   };
   let handlecontactus = () => {
       navi('/contact-us');
   };
   let handledoctors = () => {
       navi('/');
   };

   return (
       <>
           <footer className="footer">
               <div className="table">
                   <table>
                       <tbody>
                           <tr>
                               <td className='tablehead' rowSpan={2}><img src={logo} alt="" className="footer-logo" /></td>
                               <td className='tablehead'>Enqiry Us</td>
                               <td className='tablehead'>Usefull Links</td>
                               <td className='tablehead'>Treatments</td>
                               <td className='tablehead'>Terms and conditions</td>
                           </tr>
                           <tr>
                               <td className='number'><a href="tel:8179389091">+918179389091</a></td>
                               <td className='navnames' onClick={handleHome}>Home</td>
                               <td>Skin Diseases</td>
                               <td>Privacy Policy</td>
                           </tr>
                           <tr>
                               <td rowSpan={4}>Content</td>
                               <td className='number'><a href="tel:8179389091">+918179389091</a></td>
                               <td onClick={handleaboutus}>About Us</td>
                               <td>Hairfall</td>
                               <td>Terms and Conditions</td>
                           </tr>
                           <tr>
                               <td className='number'><a href="tel:8179389091">+918179389091</a></td>
                               <td onClick={handleclinic}>OurClinic</td>
                               <td>Diabetes</td>
                               <td>Shipping Policy</td>
                           </tr>
                           <tr>
                               <td></td>
                               <td onClick={handlecontactus}>Contact Us</td>
                               <td>Piles</td>
                           </tr>
                           <tr>
                               <td></td>
                               <td onClick={handledoctors}>Doctors</td>
                               <td>Male Infertility</td>
                           </tr>
                       </tbody>
                   </table>
               </div>
           </footer>
       </>
   );
};

export default Footer;
