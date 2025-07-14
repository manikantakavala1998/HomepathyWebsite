import React,{useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { diseaseData } from './../Treatments/constantstreatments';
import "./../Treatments/disease.css"




const Disease = () => {
    const { name } = useParams();
    //  console.log("mam1",diseaseData);
    // Find the disease element in the diseaseData array
    // const diseaseElement = diseaseData.find(d => d.id === name);

    const diseaseId = name.endsWith('-treatment') 
    ? name.substring(0, name.length - 10) // Remove "-treatment" (10 characters)
    : name;
  
  // Find the disease element in the diseaseData array
  const diseaseElement = diseaseData.find(d => d.id === diseaseId);
    // console.log("mam",diseaseElement);
    useEffect(() => {
      if (!diseaseElement || !diseaseElement.metadata || diseaseElement.metadata.length === 0) return;
    
      const { title, description, keywords, canonicalUrl, favicon } = diseaseElement.metadata[0];
      console.log("mam", diseaseElement.metadata[0]);
    
      document.title = title;
    
      const updateMetaTag = (name, content) => {
        let metaTag = document.querySelector(`meta[name='${name}']`);
        if (metaTag) {
          metaTag.setAttribute("content", content);
        } else {
          const newMetaTag = document.createElement("meta");
          newMetaTag.setAttribute("name", name);
          newMetaTag.setAttribute("content", content);
          document.head.appendChild(newMetaTag);
        }
      };
    
      updateMetaTag("description", description);
      updateMetaTag("keywords", keywords);
    
      let canonicalLink = document.querySelector("link[rel='canonical']");
      if (canonicalLink) {
        canonicalLink.setAttribute("href", canonicalUrl);
      } else {
        const newCanonical = document.createElement("link");
        newCanonical.setAttribute("rel", "canonical");
        newCanonical.setAttribute("href", canonicalUrl);
        document.head.appendChild(newCanonical);
      }
    
      let faviconLink = document.querySelector("link[rel='icon']");
      if (faviconLink) {
        faviconLink.setAttribute("href", favicon);
      } else {
        const newFavicon = document.createElement("link");
        newFavicon.setAttribute("rel", "icon");
        newFavicon.setAttribute("type", "image/x-icon");
        newFavicon.setAttribute("href", favicon);
        document.head.appendChild(newFavicon);
      }
    }, [diseaseElement]);
    

    // Handle case where diseaseElement is undefined
    if (!diseaseElement) {
        return <div>Disease not found</div>;
    }


    return (
        <>
            <div>
                {/* Render content */}
                <div>
                    {diseaseElement.content.map((section, index) => {
                        switch (section.type) {
                            case "heading":
                                return (
                                    <div key={index} className="treatmentheading">
                                        <h1>{section.content}</h1>
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}
                </div>

                {/* Render content1 */}
                <div className="treatment-container">
                    {diseaseElement.content1.map((section, index) => {
                        switch (section.type) {
                            case "image":
                                return (
                                    <img
                                        key={index}
                                        src={section.src}
                                        alt={section.alt}
                                        className={section.className}
                                    />
                                );
                            case "text":
                                return (
                                    <div key={index} className={section.className}>
                                        {section.content}
                                    </div>
                                );
                            case "link":
                                return (
                                    <Link key={index} to={section.to} className={section.className}>
                                        <button>{section.buttonText}</button>
                                    </Link>
                                );
                            default:
                                return null;
                        }
                    })}
                </div>

                <div>
                    {diseaseElement.content2.map((section, index) => {
                        switch (section.type) {
                            case "heading":
                                return (
                                    <div key={index} className="treatmentdiseaseheading">
                                        <h2>{section.content}</h2>
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}
                </div>

                {/* Render content2 */}
                <div class="treatmentprecautions">
                    {diseaseElement.content3.map((section, index) => {
                        switch (section.type) {
                            case "heading":
                                return (
                                    <div key={index} className={section.className}>
                                        <h3>{section.content}</h3>
                                    </div>
                                );
                            case "subheading":
                                return (
                                    <div key={index} className={section.className}>
                                        <h4>{section.content}</h4>
                                    </div>
                                );
                            case "paragraph":
                                return (
                                    <div key={index} className={section.className}>
                                        <p>{section.content}</p>
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}
                

                <div className="treatmentinfectionmain">
         {diseaseElement.content4.map((section, index) => {
        switch (section.type) {
       
          case "list":
            return (
              <div key={index} className="treatmentinfection1">
                 <h4>{section.content}</h4>
                <ol  className= "treatmentinfections">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="treatmenthighlight">{item.split(":")[0]}</span>{" "}
                      {item.split(":")[1]}
                    </li>
                  ))}
                </ol>
              </div>
            );
          case "image-overlay":
            return (
              <div key={index} className="treatmentinfectionimage">
                <img src={section.src} alt={section.alt} />
                <div className="treatmentinfectioncontent-overlay">
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                  <Link to={section.link}>
                    <button>{section.buttonText}</button>
                  </Link>
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
     </div>


     <div className="treatmentflex">
      {diseaseElement.content5.map((section, index) => {
        switch (section.type) {
          case "list":
            return (
              <div key={index} className="treatmentComplications">
                 <h4>{section.content}</h4>
                 
                <ol className="treatmentinfections">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="treatmenthighlight">{item.split(":")[0]}</span> {item.split(":")[1]}
                    </li>
                  ))}
                </ol>
              </div>
            );
        
                case "list1":
                  return (
                    <div key={index} className="treatmentSymptoms">
                        <h4 >{section.content}</h4>
                        <p>{section.content1}</p>
                     <div>
                        {section.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                    </div>
                    </div>
                  );
                

          default:
            return null;
        }
      })}
    </div>

    <div className="treatmentDiagnosis">
      {diseaseElement.content6.map((section, index) => {
        switch (section.type) {
       
          case "paragraph":
            return (
            <div key={index} className="treatmentDiagnosis">
                <h4 >{section.content}</h4>
              <p>{section.content1}</p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>

    {/* <div className="treatmentimagecontainer">
      {diseaseElement.content7.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
    </div> */}
    <section className="why-choose-section">
     {diseaseElement.content8.map((section, index) => (
        <div>
          <h2>{section.title1}</h2>
          <p>{section.description1}</p>
        </div>
       ))}  
      
      <div className="features-list">
      <div className="features-grid">
        {/* First Row */}
        <div className="features-row">
          {diseaseElement.content9.map((feature, index) => (
            <div key={index} className="feature-item" style={feature.style || {}}>
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
    
    <div className="corp-benefits-section1">
    {diseaseElement.content10.map((item, index) => (
        <h2 key={index} className="corp-benefits-title1">
          {item.title}
        </h2>
      ))}
      <div className="corp-benefits-grid1">
        {diseaseElement.content11.map((benefit, index) => (
          <div key={index} className="corp-benefit-card1">
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
      {diseaseElement.content12.map((item, index) => (
        <h2 key={index} className="corp-benefits-title1">
          {item.title}
        </h2>
      ))}
    <div className="treatmentflex">
      {diseaseElement.content13.map((section, index) => {
        switch (section.type) {
          case "list":
            return (
              <div key={index} className="treatmentComplications">
                 <h4>{section.content}</h4>
                 
                <ol className="treatmentinfections">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="treatmenthighlight">{item.split(":")[0]}</span> {item.split(":")[1]}
                    </li>
                  ))}
                </ol>
              </div>
            );
        
                case "list1":
                  return (
                    <div key={index} className="treatmentSymptoms">
                        <h4 >{section.content}</h4>
                        <p>{section.content1}</p>
                     <div>
                        {section.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                    </div>
                    </div>
                  );
                

          default:
            return null;
        }
      })}
    </div>
    <div className="Conclusion">
      {diseaseElement.content14.map((conclusion, index) => (
        <div key={index}>
          {conclusion.title && <h4>{conclusion.title}</h4>}
          <p>{conclusion.content}</p>
        </div>
      ))}
    </div>
     <div className="connectcare">
              <h2>Connect. Care. Cure.</h2>
              <div class="vertical-line1"></div>
              <div className="connect">
                <h2>Are you ready to Consult Online?</h2>
              </div>
              <p>
                H-Cura is India’s Leading Homeopathy Consultation Platform which
                neglects the travel time , Money and care from Expert homeopathy
                Doctors at your fingertips
              </p>
              <div className="bookonline">
                {/* <a href="/bookconsultation"><button>Book consultation</button></a> */}
                <Link to="/bookconsultation">
                  <button>Book Appointment</button>
                </Link>
              </div>
            </div>

                
          </div>
          </div>
        </>
    );
};

export default Disease;