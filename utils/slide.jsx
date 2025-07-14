// Import local images from your project
import banner from './../assets/images/Banner1.png';
import slide2 from './../assets/images/Banner2.png';
import slide3 from './../assets/images/Banner4.png';
import slide4 from './../assets/images/Banner3.png';
const slides = [
    {
      url: banner,
      alt: 'fetching for image',
       text1: 'Receive expert care Anytime - Anywhere.',
       text2: 'Whether in-person or online.',
       textPosition: { top: '60%' ,left: '35%' }, // Adjust position as needed
    },
    
    {
      url: slide2,
      alt: 'fetching for image',
      text3: 'Consult our doctors anytime with our round-the-clock online service, from the comfort of your home.',
      textPosition: { top: '50%', left: '70%' },
    },
    {
      url: slide3,
      alt: 'fetching for image',
     text7:'Consult Our Doctors Anytime',
     text8:'With our round the clock online',
     text9:'​Service from the comfort of your home.',
     textPosition: { top: '40%', left:'25%' },
    },
    {
      url: slide4,
      alt: 'Fetching for image',
     text4: 'India’s First Online and Offline.',
     text5:'H0ME0PATHY CLINIC',
     text6:'​ Homeopathic Treatment with no side effects',
     textPosition: { top: '50%', left:'50%' },
    },

  ];
  export default slides;