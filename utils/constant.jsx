// constant.jsx
// import image1 from './../assets/images/home_bf_image1.jpg';
// import image2 from './../assets/images/home_bf_image2.jpg';
import image3 from './../assets/images/home_bf_image3.jpg';
import image4 from './../assets/images/home_bf_image4.jpg';
import image5 from './../assets/images/home_bf_image5.jpg';
// import image6 from './../assets/images/home_bf_image6.jpg';
import image7 from './../assets/images/home_bf_image7.jpg';
import image8 from './../assets/images/home_bf_image8.jpg';
import image9 from './../assets/images/home_bf_image9.jpg';
import image10 from './../assets/images/home_bf_image10.jpg';
import image11 from './../assets/images/home_bf_image11.jpg';
import advancedhair from './../assets/images/advance_hair.jpg';
import advanceskincare from './../assets/images/Advance_skin_care.jpg';
import dentalcosmetology from './../assets/images/Dental_cosmetology.jpg';
import spoorthi from './../assets/images/doctorsDr.SpoorthiPrasad.png';
import renuka from './../assets/images/doctorsDR.Renuka.png';
import jyothi from './../assets/images/doctorsDr.Jyothi.png';
import hari from './../assets/images/doctorsdDr.harikrishna.png';
import nelofar from './../assets/images/doctorsDr.nelofar.png';
import priyanka from './../assets/images/doctorsDr.priyanka.png';
import bargavi from './../assets/images/doctorsDr.Bhargavi.png'

  export const members = [
    // { id: 1,  image:image1 , link: "/treatment1" },
    // { id: 2,  image:image2 , link: "/treatment2" },
    { id: 3,  image: image3, link: "https://www.instagram.com/p/DA7pkTezzPO/?igsh=dW4zcWV3ZTRtNDc3" },
    { id: 4,  image: image4, link: "https://www.instagram.com/p/DCGNawut-XJ/?igsh=MWh4bGI3aWpqbXA3ag==" },
    { id: 5,  image:image5 , link: "https://www.instagram.com/p/DCwKM5PiCRe/" },
    // { id: 6,  image:image6 , link: "/treatment2" },
    { id: 7,  image: image7, link: "https://www.instagram.com/p/DBdAtLbJuYp/?igsh=YTBzMHJ3eDE1OTM2" },
    { id: 8,  image: image8, link: "https://www.instagram.com/p/DDle089Cinz/?igsh=MXBnZGhlY3prZjBuaw%3D%3D" },
    { id: 9,  image: image9, link: "https://www.instagram.com/p/DDJTQrozIWz/?igsh=MWNrNDBlMmhtdWtpNA%3D%3D" },
    { id: 10,  image: image10, link: "https://www.instagram.com/p/DBTYaDIzhnZ/?igsh=NW9vcTZmZWp5MDE2 " },
    { id: 11,  image: image11, link: "https://www.instagram.com/p/DAcvDvnzEHL/?igsh=MXAycDBxN2Q5dXRhNQ==" },
    
  ];
  export const videos = [
    { id: 1, src: "https://www.youtube.com/embed/Pt8ryQPe-6I",title:"Thyroid Wellness with H-Cura!"  },
    { id: 2, src: "https://www.youtube.com/embed/9SFevdXPRLI", title: "Deep skin analysis with H-Cura" }

  ]
  export const faqs = [
    {
      question: "What is the best holistic approach to healthcare?",
      answer:
        "A holistic healthcare approach combines advanced medical technology with natural treatments. At H-Cura Multispeciality Clinic, we offer a blend of Homeopathy, Aesthetic Skin & Hair Treatments, and Dental Care to provide long-term wellness solutions.",
    },
    {
      question: "Which skin rejuvenation treatments give the best results?",
      answer:
        "Our top-rated skin treatments include laser therapy, chemical peels, microneedling, and anti-aging solutions. These advanced procedures help reduce fine lines, acne scars, and pigmentation for youthful, radiant skin.",
    },
    {
      question: "What is the most effective solution for hair loss?",
      answer:
        "The highest-rated hair restoration treatments include PRP therapy, mesotherapy, and laser hair regrowth solutions. We also offer homeopathic remedies to naturally stimulate hair growth and improve scalp health.",
    },
    {
      question: "How can I get a Hollywood smile with the best dental treatments?",
      answer:
        "Our premium dental care services include professional teeth whitening, veneers, invisible braces, and advanced dental implants, ensuring a flawless and confident smile.",
    },
    {
      question: "Is homeopathy an effective alternative to modern medicine?",
      answer:
        "Homeopathy is a highly recommended natural alternative for treating chronic conditions, allergies, skin disorders, and stress-related issues. It stimulates the body’s self-healing process without side effects.",
    },
    {
      question: "What are the safest and most advanced anti-aging treatments?",
      answer:
        "The best anti-aging solutions include Botox, dermal fillers, collagen boosters, and laser skin tightening. Our expert dermatologists customize treatments for lasting, youthful results.",
    }
  ]
  
  
  
 export const treatments = [
    {
      id: 1,
      title: "Advanced Hair Care",
      image: advancedhair,
      alt: "XOGEN Hair Regeneration Treatment",
      url: "/advanced-grow-hair-treatment",
    },
    {
      id: 2,
      title: "Advanced Skin Care",
      image:advanceskincare,
      alt: "groHAIR Advanced Hair Regrowth Treatment",
      url: "/advanced-hydrafacial-treatment",
    },
    // {
    //   id: 3,
    //   title: "Dental Cosmetology",
    //   // description:
    //   //   "STM Treatment uses Korean technology to renew hair follicles.",
    //   image: dentalcosmetology,
    //   alt: "STM Treatment for Hair Growth",
    //   // url: "/stm",
    // },

  ];

 export const doctors = [
  {
    id: 1,
    name: "Dr. Spoorthi Prasad",
    specialization: "General",
    address: "BHMS |  Exp. 7+ years",
    rating: "4.5",
    image: spoorthi,
  },
  {
    id: 2,
    name: "Dr.Syed Nelofar(BHMS)",
    specialization: "skin/hair/homeopathy Specialist",
    address: "CCGO,CCH,FFAC |Exp. 5yr",
    rating: "4.7",
    image: nelofar,
  },
  {
    id: 3,
    name: "Dr.Renuka",
    specialization: "Skin Specialist",
    address: "BHMS  |  Exp. 17 years",
    rating: "4.8",
    image: renuka,
  },
  {
    id: 4,
    name: "Dr.Jyothi(BHMS)",
    specialization: "skin / hair specialist",
    address: "PGDMH, PGDCC |  Exp. 7+ years",
    rating: "4.8",
    image: jyothi,
  },
  {
    id: 5,
    name: "Dr.HariKrishna(BHMS)",
    specialization: "skin / hair specialist",
    address: "HCC,PGDCC ,DMT /EXP 1YR",
    rating: "4.5",
    image: hari,
  },
  {
    id: 6,
    name: "Dr.Priyanka Sridhar(BHMS)",
    specialization: "Skin / hair specialist",
    address: "HCC, PGDCC, DMT",
    rating: "4.5",
    image: priyanka,
  },
  {
    id: 7,
    name: "Dr.Bhargavi Giddaluru(BHMS)",
    specialization: "skin/hair/gynacology specialist",
    address: "Diploma in nutrition & fitness/ Exp 2yr",
    rating: "4.7",
    image: bargavi,
  },
  
];