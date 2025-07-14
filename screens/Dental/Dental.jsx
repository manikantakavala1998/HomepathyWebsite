import React, { useState, useEffect } from 'react';
import './dental.css';

const Dental = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState({});
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeGalleryItem, setActiveGalleryItem] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Check if elements are in viewport for animations
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        const rect = element.getBoundingClientRect();
        const isInViewport = (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
          rect.bottom >= 0
        );
        
        if (isInViewport) {
          setIsAnimating(prev => ({...prev, [element.id]: true}));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



    // Handler for category clicks
    const handleCategoryClick = (categoryId) => {
      setExpandedCategory(categoryId);
    };
  
    // Handler for tab clicks
    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
      setExpandedCategory(null); // Reset expanded category when changing tabs
    };
  // Advanced treatments with categories
  const treatments = [
    {
      id: 1,
      title: 'General Dentistry',
      description: 'Preview your smile transformation with our 3D imaging technology before treatment begins.',
      image: 'https://images.unsplash.com/photo-1597765221336-1f65bb4c4fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZGVudGFsJTIwbGFifGVufDB8fHx8MTc0MjUwMDI2N3ww&auto=format&fit=crop&w=600&q=60',
      category: 'cosmetic',
      icon: 'https://img.icons8.com/fluency/96/teeth.png'
    },
    {
      id: 2,
      title: 'Endodontics',
      description: 'Custom clear aligners that straighten teeth discreetly without the need for metal braces.',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZGVudGlzdHxlbnwwfHx8fDE3NDI0NDc1MjR8MA&auto=format&fit=crop&w=600&q=60',
      category: 'orthodontic',
      icon: 'https://img.icons8.com/fluency/96/retainer.png'
    },
    {
      id: 3,
      title: 'Prosthodontics',
      description: 'Precision treatments with minimal discomfort using state-of-the-art dental lasers.',
      image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZGVudGlzdCUyMGNsaW5pY3xlbnwwfHx8fDE3NDI1NDM3NDN8MA&auto=format&fit=crop&w=600&q=60',
      category: 'advanced',
      icon: 'https://img.icons8.com/fluency/96/laser-beam.png'
    },
    {
      id: 4,
      title: 'Periodontics',
      description: 'Ultra-thin porcelain shells that transform teeth with imperfections into a flawless smile.',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZGVudGFsJTIwc21pbGV8ZW58MHx8fHwxNzQyNTAwMTE4fDA&auto=format&fit=crop&w=600&q=60',
      category: 'cosmetic',
      icon: 'https://img.icons8.com/fluency/96/tooth-cleaning.png'
    },
    {
      id: 5,
      title: 'OMFS',
      description: 'Custom-designed titanium implants created with precision 3D printing technology.',
      image: 'https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZGVudGFsJTIwaW1wbGFudHxlbnwwfHx8fDE3NDI1NDk0NjB8MA&auto=format&fit=crop&w=600&q=60',
      category: 'restorative',
      icon: 'https://img.icons8.com/fluency/96/tooth-drill.png'
    },
    {
      id: 6,
      title: 'Pediatric Dentistry',
      description: 'Early detection of dental issues using artificial intelligence and machine learning.',
      image: 'https://images.unsplash.com/photo-1588776814601-a454a8e3a940?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZGVudGFsJTIwdHJlYXRtZW50fGVufDB8fHx8MTc0MjQ4MTAwNHww&auto=format&fit=crop&w=600&q=60',
      category: 'advanced',
      icon: 'https://img.icons8.com/fluency/96/artificial-intelligence.png'
    },
    {
      id: 7,
      title: 'Orthodontics',
      description: 'Laser-assisted gum contouring to create a more balanced and aesthetic smile line.',
      image: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZGVudGFsJTIwc3VyZ2VyeXxlbnwwfHx8fDE3NDI1Mjk5OTd8MA&auto=format&fit=crop&w=600&q=60',
      category: 'cosmetic',
      icon: 'https://img.icons8.com/fluency/96/gums.png'
    },
    {
      id: 8,
      title: 'Implantology',
      description: 'Conservative treatments that preserve natural tooth structure while restoring function.',
      image: 'https://images.unsplash.com/photo-1606811856475-5e6fcdc6e509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZGVudGFsJTIwY2xpbmljfGVufDB8fHx8MTc0MjU0MDAwMHww&auto=format&fit=crop&w=600&q=60',
      category: 'restorative',
      icon: 'https://img.icons8.com/fluency/96/tooth.png'
    },
    {
      id: 9,
      title: 'Sleep Apnea Therapy',
      description: 'Custom oral appliances to treat sleep apnea and improve quality of sleep and health.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZGVudGFsJTIwb2ZmaWNlfGVufDB8fHx8MTc0MjQ4MTc5OXww&auto=format&fit=crop&w=600&q=60',
      category: 'specialized',
      icon: 'https://img.icons8.com/fluency/96/sleeping.png'
    },
  ];

  const filteredTreatments = activeTab === 'all' 
    ? treatments 
    : treatments.filter(treatment => treatment.category === activeTab);
  // Main treatment categories
  const categories = [
    {
      id: 'general',
      name: 'General Dentistry',
      icon: 'https://img.icons8.com/fluency/96/tooth.png',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
      description: 'Comprehensive dental care for patients of all ages',
      treatments: [
        {
          id: 'scaling',
          title: 'Scaling',
          description: 'Professional cleaning to remove plaque and tartar buildup',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
          icon: 'https://img.icons8.com/fluency/96/tooth-cleaning.png'
        },
        {
          id: 'gic-filling',
          title: 'GIC Filling',
          description: 'Glass Ionomer Cement fillings for restoring damaged teeth',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
          icon: 'https://img.icons8.com/fluency/96/dental-filling.png'
        },
        {
          id: 'composite-filling',
          title: 'Composite Filling',
          description: 'Tooth-colored fillings that blend seamlessly with your natural teeth',
          image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
          icon: 'https://img.icons8.com/fluency/96/dental-filling.png'
        }
      ]
    },
    {
      id: 'endodontics',
      name: 'Endodontics',
      icon: 'https://img.icons8.com/fluency/96/dental-root.png',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
      description: 'Specialized treatments for the dental pulp and root canal system',
      treatments: [
        {
          id: 'rct',
          title: 'Root Canal Treatment (RCT)',
          description: 'Procedure to remove infected pulp and save the natural tooth',
          image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
          icon: 'https://img.icons8.com/fluency/96/dental-root.png'
        },
        {
          id: 'laser-rct',
          title: 'Laser RCT',
          description: 'Advanced root canal treatment using laser technology for precision',
          image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
          icon: 'https://img.icons8.com/fluency/96/laser-beam.png'
        },
        {
          id: 're-rct',
          title: 'Re-RCT',
          description: 'Retreatment of previously treated root canals that have failed',
          image: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
          icon: 'https://img.icons8.com/fluency/96/dental-root.png'
        }
      ]
    },
    {
      id: 'prostho',
      name: 'Prosthodontics',
      icon: 'https://img.icons8.com/fluency/96/dentures.png',
      image: 'https://images.unsplash.com/photo-1606811856475-5e6fcdc6e509?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
      description: 'Dental prostheses to replace missing teeth and restore function',
      treatments: [
        {
          id: 'crowns',
          title: 'Crowns',
          description: 'Custom-made caps that cover damaged teeth to restore shape and function',
          image: 'https://images.unsplash.com/photo-1606811856475-5e6fcdc6e509?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
          icon: 'https://img.icons8.com/fluency/96/tooth-crown.png'
        },
        {
          id: 'bridges',
          title: 'Bridges',
          description: 'Fixed dental prostheses to replace one or more missing teeth',
          image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
          icon: 'https://img.icons8.com/fluency/96/dental-bridge.png'
        },
        {
          id: 'veneers',
          title: 'Veneers',
          description: 'Thin porcelain shells bonded to front teeth to improve appearance',
          image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
          icon: 'https://img.icons8.com/fluency/96/dentist.png'
        }
      ]
    },
    {
      id: 'perio',
      name: 'Periodontics',
      icon: 'https://img.icons8.com/fluency/96/gums.png',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
      description: 'Treatment of gum diseases and conditions affecting the supporting structures',
      treatments: [
        {
          id: 'root-planing',
          title: 'Root Planing',
          description: 'Deep cleaning below the gumline to treat periodontal disease',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
          icon: 'https://img.icons8.com/fluency/96/gums.png'
        },
        {
          id: 'flap-surgery',
          title: 'Flap Surgery',
          description: 'Surgical procedure to reduce pocket depths and restore gum health',
          image: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
          icon: 'https://img.icons8.com/fluency/96/surgery.png'
        }
      ]
    },
    {
      id: 'omfs',
      name: 'Oral & Maxillofacial Surgery',
      icon: 'https://img.icons8.com/fluency/96/tooth-extraction.png',
      image: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
      description: 'Surgical procedures involving the mouth, jaw, and facial structures',
      treatments: [
        {
          id: 'extraction',
          title: 'Extraction',
          description: 'Removal of teeth that cannot be saved or are causing problems',
          image: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
          icon: 'https://img.icons8.com/fluency/96/tooth-extraction.png'
        },
        {
          id: 'impaction',
          title: 'Impaction',
          description: 'Surgical removal of impacted teeth that cannot erupt normally',
          image: 'https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
          icon: 'https://img.icons8.com/fluency/96/wisdom-tooth.png'
        }
      ]
    },
    {
      id: 'pedo',
      name: 'Pediatric Dentistry',
      icon: 'https://img.icons8.com/fluency/96/baby-smile.png',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
      description: 'Specialized dental care for children from infancy through adolescence',
      treatments: [
        {
          id: 'pulpectomy',
          title: 'Pulpectomy',
          description: 'Root canal treatment for primary teeth to save them from extraction',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
          icon: 'https://img.icons8.com/fluency/96/baby-tooth.png'
        },
        {
          id: 'pedo-extraction',
          title: 'Extraction',
          description: 'Gentle removal of primary teeth when necessary',
          image: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
          icon: 'https://img.icons8.com/fluency/96/tooth-extraction.png'
        }
      ]
    },
    {
      id: 'ortho',
      name: 'Orthodontics',
      icon: 'https://img.icons8.com/fluency/96/braces.png',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
      description: 'Correction of teeth and jaw alignment for improved function and aesthetics',
      treatments: [
        {
          id: 'braces',
          title: 'Braces',
          description: 'Traditional metal braces to straighten teeth and correct bite issues',
          image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
          icon: 'https://img.icons8.com/fluency/96/braces.png'
        },
        {
          id: 'aligners',
          title: 'Clear Aligners',
          description: 'Invisible aligners for discreet teeth straightening',
          image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
          icon: 'https://img.icons8.com/fluency/96/retainer.png'
        }
      ]
    },
    {
      id: 'implants',
      name: 'Dental Implants',
      icon: 'https://img.icons8.com/fluency/96/tooth-implant.png',
      image: 'https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
      description: 'Permanent tooth replacement solutions that look and function like natural teeth',
      treatments: [
        {
          id: 'single-implant',
          title: 'Single Tooth Implant',
          description: 'Titanium post surgically placed to replace a single missing tooth',
          image: 'https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
          icon: 'https://img.icons8.com/fluency/96/tooth-implant.png'
        },
        {
          id: 'full-arch',
          title: 'Full Arch Implants',
          description: 'Complete replacement of all teeth in an arch with implant-supported prosthesis',
          image: 'https://images.unsplash.com/photo-1606811856475-5e6fcdc6e509?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
          icon: 'https://img.icons8.com/fluency/96/dentures.png'
        }
      ]
    }
  ];

  // Technology features
  const technologies = [
    {
      id: 'tech1',
      title: '3D Imaging & Printing',
      description: 'Create precise dental restorations and surgical guides with cutting-edge 3D technology',
      icon: 'https://img.icons8.com/fluency/96/3d-printer.png'
    },
    {
      id: 'tech2',
      title: 'AI-Assisted Diagnosis',
      description: 'Early detection of dental conditions with artificial intelligence algorithms',
      icon: 'https://img.icons8.com/fluency/96/artificial-intelligence.png'
    },
    {
      id: 'tech3',
      title: 'VR Pain Management',
      description: 'Virtual reality distraction therapy to reduce anxiety and discomfort during procedures',
      icon: 'https://img.icons8.com/fluency/96/virtual-reality.png'
    },
    {
      id: 'tech4',
      title: 'Digital Smile Design',
      description: 'Visualize your smile transformation before treatment begins',
      icon: 'https://img.icons8.com/fluency/96/design.png'
    }
  ];
    // Team members
    const teamMembers = [
      {
        id: 1,
        name: 'Dr. Helena Cura',
        role: 'Founder & Cosmetic Dentist',
        bio: 'Internationally recognized for her expertise in aesthetic dentistry and smile design.',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 2,
        name: 'Dr. Michael Chen',
        role: 'Implantologist',
        bio: 'Specialist in advanced implant procedures and 3D-guided implant surgery.',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 3,
        name: 'Dr. Sofia Rodriguez',
        role: 'Orthodontist',
        bio: 'Expert in invisible aligners and minimally invasive orthodontic treatments.',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ];
  
    // Testimonials
    const testimonials = [
      {
        id: 1,
        name: 'Sarah Johnson',
        treatment: 'Smile Makeover',
        quote: 'H-CURA completely transformed my smile and my confidence. The digital preview showed me exactly what to expect, and the results exceeded my expectations. The team made me feel comfortable throughout the entire process.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5
      },
      {
        id: 2,
        name: 'Michael Chen',
        treatment: 'Dental Implants',
        quote: 'After losing multiple teeth in an accident, I thought  Dr. Cura and her team gave me back not just my smile, but my confidence. The 3D implant technology they use is incredible.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5
      },
      {
        id: 3,
        name: 'Emily Rodriguez',
        treatment: 'Invisible Aligners',
        quote: 'I was hesitant about getting my teeth straightened as an adult, but the invisible aligners were perfect. No one could tell I was wearing them, and the results came faster than expected!',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
        rating: 5
      }
    ];
  
    // Before & After gallery
    const galleryItems = [
      {
        id: 1,
        treatment: 'Smile Makeover',
        description: 'Veneers & Whitening',
        before: 'https://images.unsplash.com/photo-1616653063211-3b6f5db5a600?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        after: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 2,
        treatment: 'Invisible Aligners',
        description: '6-Month Treatment',
        before: 'https://images.unsplash.com/photo-1616653063211-3b6f5db5a600?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        after: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 3,
        treatment: 'Full Mouth Restoration',
        description: 'Implants & Crowns',
        before: 'https://images.unsplash.com/photo-1616653063211-3b6f5db5a600?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        after: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
      }
    ];
  
    return (
      <div className="dental-page">
        {/* Floating Navigation */}
        <div className={`dental-floating-nav ${isScrolled ? 'visible' : ''}`}>
          <div className="dental-floating-logo">H-CURA</div>
          <div className="dental-floating-links">
            <a href="#treatments">Treatments</a>
            <a href="#technology">Technology</a>
            <a href="#about">About Us</a>
            <a href="#testimonials">Testimonials</a>
          </div>
          <a href="#book" className="dental-floating-button">Book Now</a>
        </div>
        {/* Hero Section with Video Background */}
        <section className="dental-hero" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')` }}>
        <div className="dental-hero-overlay"></div>
        <div className="dental-hero-content">
          <div className="dental-hero-logo">
            <div className="dental-logo-icon">
              <img src="https://img.icons8.com/fluency/96/tooth.png" alt="Tooth icon" />
            </div>
            <h1 className="dental-hero-title">H-CURA</h1>
          </div>
          <h2 className="dental-hero-subtitle">Advanced Aesthetic Dentistry</h2>
          <p className="dental-hero-description">Where innovation meets artistry to create your perfect smile</p>
          <div className="dental-hero-buttons">
            <a href="#book" className="dental-primary-button">Book Consultation</a>
            <a href="#treatments" className="dental-secondary-button">Explore Treatments</a>
          </div>
          <div className="dental-hero-features">
            <div className="dental-hero-feature">
              <img src="https://img.icons8.com/fluency/48/certificate.png" alt="Certificate" />
              <span>Award-Winning Care</span>
            </div>
            <div className="dental-hero-feature">
              <img src="https://img.icons8.com/fluency/48/technical-support.png" alt="Support" />
              <span>24/7 Support</span>
            </div>
            <div className="dental-hero-feature">
              <img src="https://img.icons8.com/fluency/48/innovation.png" alt="Innovation" />
              <span>Latest Technology</span>
            </div>
          </div>
        </div>
        <div className="dental-scroll-indicator">
          <div className="dental-mouse">
            <div className="dental-wheel"></div>
          </div>
          <div className="dental-scroll-text">Scroll to explore</div>
        </div>
      </section>
            {/* About Section with Parallax */}
            <section id="about" className="dental-about">
        <div className="dental-parallax-bg"></div>
        <div className="dental-container">
          <div className="dental-about-content">
            <div className={`dental-section-header animate-on-scroll ${isAnimating['about-header'] ? 'animate' : ''}`} id="about-header">
              <span className="dental-section-subtitle">About H-CURA</span>
              <h2 className="dental-section-title">Redefining Dental Excellence</h2>
              <div className="dental-title-line"></div>
            </div>
            <div className="dental-about-grid">
              <div className="dental-about-image">
                <img src="https://images.unsplash.com/photo-1588776814601-a454a8e3a940?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Modern dental clinic" />
                <div className="dental-about-experience">
                  <span className="dental-experience-number">15+</span>
                  <span className="dental-experience-text">Years of Excellence</span>
                </div>
              </div>
              <div className={`dental-about-text animate-on-scroll ${isAnimating['about-text'] ? 'animate' : ''}`} id="about-text">
                <p>At H-CURA Aesthetic Dental, we blend artistry with cutting-edge technology to create smiles that transform lives. Our philosophy centers on personalized care, where each treatment plan is as unique as the individual it serves.</p>
                <p>Founded by Dr. Helena Cura, our clinic has pioneered innovative approaches to aesthetic dentistry, earning recognition as a leader in the field of digital smile design and minimally invasive techniques.</p>
                <div className="dental-about-stats">
                  <div className="dental-stat">
                    <span className="dental-stat-number">5,000+</span>
                    <span className="dental-stat-text">Smiles Transformed</span>
                  </div>
                  <div className="dental-stat">
                    <span className="dental-stat-number">98%</span>
                    <span className="dental-stat-text">Patient Satisfaction</span>
                  </div>
                  <div className="dental-stat">
                    <span className="dental-stat-number">12</span>
                    <span className="dental-stat-text">Specialist Doctors</span>
                  </div>
                </div>
                <a href="#team" className="dental-text-button">Meet Our Team <span className="dental-arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Treatments Section with Filter Tabs */}
           {/* Treatments Section with Filter Tabs */}
{/* Treatments Section with Filter Tabs */}
{/* Treatments Section with Filter Tabs */}
<section id="treatments" className="dental-treatments">
  <div className="dental-container">
    <div className={`dental-section-header animate-on-scroll ${isAnimating['treatments-header'] ? 'animate' : ''}`} id="treatments-header">
      <span className="dental-section-subtitle">Our Services</span>
      <h2 className="dental-section-title">Advanced Dental Treatments</h2>
      <div className="dental-title-line"></div>
    </div>
    
    {/* Main Category Tabs */}
    <div className="dental-tabs">
      <button 
        className={`dental-tab ${activeTab === 'all' && !expandedCategory ? 'active' : ''}`} 
        onClick={() => handleTabClick('all')}
      >
        All Treatments
      </button>
      <button 
        className={`dental-tab ${(activeTab === 'general' || expandedCategory === 'general') ? 'active' : ''}`} 
        onClick={() => handleTabClick('general')}
      >
        General Dentistry
      </button>
      <button 
        className={`dental-tab ${(activeTab === 'endodontics' || expandedCategory === 'endodontics') ? 'active' : ''}`} 
        onClick={() => handleTabClick('endodontics')}
      >
        Endodontics
      </button>
      <button 
        className={`dental-tab ${(activeTab === 'prostho' || expandedCategory === 'prostho') ? 'active' : ''}`} 
        onClick={() => handleTabClick('prostho')}
      >
        Prosthodontics
      </button>
      <button 
        className={`dental-tab ${(activeTab === 'perio' || expandedCategory === 'perio') ? 'active' : ''}`} 
        onClick={() => handleTabClick('perio')}
      >
        Periodontics
      </button>
      <button 
        className={`dental-tab ${(activeTab === 'omfs' || expandedCategory === 'omfs') ? 'active' : ''}`} 
        onClick={() => handleTabClick('omfs')}
      >
        OMFS
      </button>
      <button 
        className={`dental-tab ${(activeTab === 'pedo' || expandedCategory === 'pedo') ? 'active' : ''}`} 
        onClick={() => handleTabClick('pedo')}
      >
        Pediatric
      </button>
      <button 
        className={`dental-tab ${(activeTab === 'ortho' || expandedCategory === 'ortho') ? 'active' : ''}`} 
        onClick={() => handleTabClick('ortho')}
      >
        Orthodontics
      </button>
      <button 
        className={`dental-tab ${(activeTab === 'implants' || expandedCategory === 'implants') ? 'active' : ''}`} 
        onClick={() => handleTabClick('implants')}
      >
        Implants
      </button>
    </div>
    
    {/* Main Categories Grid - Shows when "All Treatments" is selected and no category is expanded */}
    {activeTab === 'all' && !expandedCategory && (
      <div className={`dental-categories-grid animate-on-scroll ${isAnimating['categories-grid'] ? 'animate' : ''}`} id="categories-grid">
        {categories.map(category => (
          <div key={category.id} className="dental-category-card" onClick={() => handleCategoryClick(category.id)}>
            <div className="dental-category-image-container">
              <div className="dental-category-image" style={{ backgroundImage: `url(${category.image})` }}>
                <div className="dental-category-overlay">
                  <img src={category.icon} alt={category.name} className="dental-category-icon" />
                </div>
              </div>
            </div>
            <div className="dental-category-content">
              <h3 className="dental-category-title">{category.name}</h3>
              <p className="dental-category-description">{category.description}</p>
              <div className="dental-category-link">
                <span>View Treatments</span>
                <span className="dental-arrow">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
    
    {/* Sub-treatments Grid - Shows when a specific tab is selected or when a category is expanded */}
    {(activeTab !== 'all' || expandedCategory) && (
      <>
        {/* Category Title and Back Button */}
        <div className="dental-category-header">
          <h3 className="dental-category-main-title">
            {expandedCategory 
              ? categories.find(cat => cat.id === expandedCategory)?.name 
              : categories.find(cat => cat.id === activeTab)?.name} Treatments
          </h3>
          <button className="dental-back-button" onClick={() => activeTab === 'all' ? setExpandedCategory(null) : handleTabClick('all')}>
            <span className="dental-back-arrow">←</span> Back to {activeTab === 'all' ? 'All Treatments' : 'Main Categories'}
          </button>
        </div>
        
        {/* Sub-treatments Grid */}
        <div className={`dental-treatments-grid animate-on-scroll ${isAnimating['treatments-grid'] ? 'animate' : ''}`} id="treatments-grid">
          {/* Filter treatments based on the active tab or expanded category */}
          {(activeTab !== 'all' 
            ? categories.find(cat => cat.id === activeTab)?.treatments 
            : categories.find(cat => cat.id === expandedCategory)?.treatments
          )?.map(treatment => (
            <div key={treatment.id} className="dental-treatment-card" onClick={() => window.location.href = `/treatment/${activeTab !== 'all' ? activeTab : expandedCategory}/${treatment.id}`}>
              <div className="dental-treatment-image-container">
                <div className="dental-treatment-image" style={{ backgroundImage: `url(${treatment.image})` }}>
                  <div className="dental-treatment-overlay">
                    <img src={treatment.icon} alt={treatment.title} className="dental-treatment-icon" />
                  </div>
                </div>
              </div>
              <div className="dental-treatment-content">
                <h3 className="dental-treatment-title">{treatment.title}</h3>
                <p className="dental-treatment-description">{treatment.description}</p>
                <div className="dental-treatment-link">
                  <span>Learn More</span>
                  <span className="dental-arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    )}
  </div>
</section>



            {/* Technology Showcase */}
            <section id="technology" className="dental-technology">
        <div className="dental-container">
          <div className={`dental-section-header animate-on-scroll ${isAnimating['tech-header'] ? 'animate' : ''}`} id="tech-header">
            <span className="dental-section-subtitle">Cutting-Edge Innovation</span>
            <h2 className="dental-section-title">Our Advanced Technology</h2>
            <div className="dental-title-line"></div>
          </div>
          
          <div className={`dental-tech-showcase animate-on-scroll ${isAnimating['tech-showcase'] ? 'animate' : ''}`} id="tech-showcase">
            <div className="dental-tech-image">
              <img src="https://images.unsplash.com/photo-1597765221336-1f65bb4c4fee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dental technology" />
            </div>
            <div className="dental-tech-content">
              <p className="dental-tech-intro">At H-CURA, we invest in the latest dental technologies to provide precise, comfortable, and efficient treatments that deliver exceptional results.</p>
              
              <div className="dental-tech-grid">
                {technologies.map(tech => (
                  <div key={tech.id} className="dental-tech-card">
                    <div className="dental-tech-icon">
                      <img src={tech.icon} alt={tech.title} />
                    </div>
                    <div className="dental-tech-info">
                      <h3 className="dental-tech-title">{tech.title}</h3>
                      <p className="dental-tech-description">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a href="#book" className="dental-primary-button">Experience Our Technology</a>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section id="gallery" className="dental-gallery">
        <div className="dental-container">
          <div className={`dental-section-header animate-on-scroll ${isAnimating['gallery-header'] ? 'animate' : ''}`} id="gallery-header">
            <span className="dental-section-subtitle">Real Results</span>
            <h2 className="dental-section-title">Before & After Transformations</h2>
            <div className="dental-title-line"></div>
          </div>
          
          <div className={`dental-gallery-slider animate-on-scroll ${isAnimating['gallery-slider'] ? 'animate' : ''}`} id="gallery-slider">
            {galleryItems.map((item, index) => (
              <div key={item.id} className={`dental-gallery-item ${index === activeGalleryItem ? 'active' : ''}`}>
                <div className="dental-comparison">
                  <div className="dental-before">
                    <img src={item.before} alt={`Before ${item.treatment}`} />
                    <span className="dental-label">Before</span>
                  </div>
                  <div className="dental-after">
                    <img src={item.after} alt={`After ${item.treatment}`} />
                    <span className="dental-label">After</span>
                  </div>
                </div>
                <div className="dental-gallery-caption">
                  <h3>{item.treatment}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="dental-gallery-nav">
            {galleryItems.map((_, index) => (
              <button 
                key={index} 
                className={`dental-gallery-dot ${index === activeGalleryItem ? 'active' : ''}`}
                onClick={() => setActiveGalleryItem(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>
            {/* Testimonials with Video */}
            <section id="testimonials" className="dental-testimonials">
        <div className="dental-container">
          <div className={`dental-section-header animate-on-scroll ${isAnimating['testimonials-header'] ? 'animate' : ''}`} id="testimonials-header">
            <span className="dental-section-subtitle">Patient Stories</span>
            <h2 className="dental-section-title">What Our Patients Say</h2>
            <div className="dental-title-line"></div>
          </div>
          
          <div className={`dental-testimonials-container animate-on-scroll ${isAnimating['testimonials-container'] ? 'animate' : ''}`} id="testimonials-container">
            <div className="dental-testimonial-video">
              <div className="dental-video-wrapper">
                <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Patient video testimonial" />
                <div className="dental-play-button">
                  <img src="https://img.icons8.com/fluency/96/play.png" alt="Play button" />
                </div>
              </div>
            </div>
            
            <div className="dental-testimonials-slider">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className={`dental-testimonial ${index === activeTestimonial ? 'active' : ''}`}>
                  <div className="dental-testimonial-content">
                    <div className="dental-quote-icon">
                      <img src="https://img.icons8.com/fluency/48/quote-left.png" alt="Quote" />
                    </div>
                    <p className="dental-quote">{testimonial.quote}</p>
                    <div className="dental-patient-info">
                      <div className="dental-patient-image" style={{ backgroundImage: `url('${testimonial.image}')` }}></div>
                      <div className="dental-patient-details">
                        <div className="dental-patient-name">{testimonial.name}</div>
                        <div className="dental-patient-treatment">{testimonial.treatment}</div>
                        <div className="dental-rating">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="dental-star">★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="dental-testimonial-dots">
                {testimonials.map((_, index) => (
                  <button 
                    key={index} 
                    className={`dental-testimonial-dot ${index === activeTestimonial ? 'active' : ''}`}
                    onClick={() => setActiveTestimonial(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="dental-team">
        <div className="dental-container">
          <div className={`dental-section-header animate-on-scroll ${isAnimating['team-header'] ? 'animate' : ''}`} id="team-header">
            <span className="dental-section-subtitle">Expert Specialists</span>
            <h2 className="dental-section-title">Meet Our Doctors</h2>
            <div className="dental-title-line"></div>
          </div>
          
          <div className={`dental-team-grid animate-on-scroll ${isAnimating['team-grid'] ? 'animate' : ''}`} id="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="dental-team-member">
                <div className="dental-member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="dental-member-info">
                  <h3 className="dental-member-name">{member.name}</h3>
                  <p className="dental-member-role">{member.role}</p>
                  <p className="dental-member-bio">{member.bio}</p>
                  <div className="dental-member-social">
                    <a href="#" className="dental-social-icon">
                      <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href="#" className="dental-social-icon">
                      <img src="https://img.icons8.com/fluency/48/instagram-new.png" alt="Instagram" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* Booking Section */}
                 {/* Booking Section */}
      <section id="book" className="dental-booking">
        <div className="dental-booking-bg"></div>
        <div className="dental-container">
          <div className={`dental-section-header animate-on-scroll ${isAnimating['booking-header'] ? 'animate' : ''}`} id="booking-header">
            <span className="dental-section-subtitle">Schedule Your Visit</span>
            <h2 className="dental-section-title">Book Your Consultation</h2>
            <div className="dental-title-line"></div>
          </div>
          
          <div className={`dental-booking-container animate-on-scroll ${isAnimating['booking-container'] ? 'animate' : ''}`} id="booking-container">
            <div className="dental-booking-info">
              <div className="dental-booking-text">
                <p>Take the first step towards your perfect smile. Our team of specialists is ready to create a personalized treatment plan that meets your unique needs and goals.</p>
                <div className="dental-booking-features">
                  <div className="dental-booking-feature">
                    <img src="https://img.icons8.com/fluency/48/calendar-week.png" alt="Calendar" />
                    <span>Flexible Scheduling</span>
                  </div>
                  <div className="dental-booking-feature">
                    <img src="https://img.icons8.com/fluency/48/commercial.png" alt="Insurance" />
                    <span>Insurance Accepted</span>
                  </div>
                  <div className="dental-booking-feature">
                    <img src="https://img.icons8.com/fluency/48/credit-card-front.png" alt="Payment" />
                    <span>Financing Options</span>
                  </div>
                </div>
                <div className="dental-contact-info">
                  <div className="dental-contact-item">
                    <img src="https://img.icons8.com/fluency/48/phone.png" alt="Phone" />
                    <div className="dental-contact-details">
                      <h4>Call Us</h4>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="dental-contact-item">
                    <img src="https://img.icons8.com/fluency/48/new-post.png" alt="Email" />
                    <div className="dental-contact-details">
                      <h4>Email Us</h4>
                      <p>appointments@hcuradental.com</p>
                    </div>
                  </div>
                  <div className="dental-contact-item">
                    <img src="https://img.icons8.com/fluency/48/marker.png" alt="Location" />
                    <div className="dental-contact-details">
                      <h4>Visit Us</h4>
                      <p>123 Smile Avenue, Dental District, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="dental-booking-form">
              <form>
                <div className="dental-form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter your full name" required />
                </div>
                
                <div className="dental-form-row">
                  <div className="dental-form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                  </div>
                  <div className="dental-form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
                  </div>
                </div>
                
                <div className="dental-form-row">
                  <div className="dental-form-group">
                    <label htmlFor="date">Preferred Date</label>
                    <input type="date" id="date" name="date" required />
                  </div>
                  <div className="dental-form-group">
                    <label htmlFor="time">Preferred Time</label>
                    <select id="time" name="time" required>
                      <option value="">Select Time</option>
                      <option value="morning">Morning (9am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 3pm)</option>
                      <option value="evening">Evening (3pm - 6pm)</option>
                    </select>
                  </div>
                </div>
                
                <div className="dental-form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service" name="service" required>
                    <option value="">Select Service</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="dental-form-group">
                  <label htmlFor="message">Additional Information</label>
                  <textarea id="message" name="message" placeholder="Tell us more about your dental needs" rows="3"></textarea>
                </div>
                
                <button type="submit" className="dental-submit-button">Book Appointment</button>
              </form>
            </div>
          </div>
        </div>
      </section>
            {/* Footer */}
           
    </div>
  );
};

export default Dental;

