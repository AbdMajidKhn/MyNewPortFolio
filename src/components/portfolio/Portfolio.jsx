import "./portfolio.css";

import IMG1 from "../../assets/Flexcavo.png";
import IMG2 from "../../assets/Meetnative.png";
import IMG3 from "../../assets/Mobinspire1.png";
import IMG4 from "../../assets/Raise1.png";
import IMG5 from "../../assets/Potsave.png";
import IMG6 from "../../assets/Health.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Flexcavo",
      img: IMG1,
      description:
        "It is the website for construction machine renting company (Flexcavo) from Berlin",
      technologies: "React.js ",
      link: "https://www.flexcavo.de/",
    },
    {
      id: 2,
      title: "Meet Native",
      img: IMG2,
      description:
        "MeetNative is an upselling platform that helps consumers and local businesses get more for their money.",
      technologies: "React | React Native | Android | iOS",
      link: "https://meetnative.com/",
    },
    {
      id: 3,
      title: "Scientific Coorporation",
      img: IMG3,
      description:
        "Scientific Corporation enhances pharmaceutical retail operations with a specialized Point of Sale (POS) software solution. Optimizes sales efficiency and accuracy while ensuring compliance and customer satisfaction in the pharmaceutical sector.",
      technologies: "React Js | Laravel ",
      link: "http://thesfb.live/ScientificCoorporation-2/",
    },
    {
      id: 4,
      title: "Paragon POS",
      img: IMG4,
      description:
        "Paragon revolutionizes retail management in the hardware and PVC industries with a robust Point of Sale (POS) software solution. Powered by React for dynamic front-end experiences and Laravel for scalable back-end operations, ensuring seamless integration and enhanced operational efficiency.",
      technologies: " React.js | Laravel ",
      link: "http://thesfb.live/Paragon/",
    },
    {
      id: 5,
      title: "Potsave",
      img: IMG5,
      description:
        "Through the PotSave.com platform, PotSave offers in-person product assessment and ordering services, accessible via the website, mobile applications, and software.",
      technologies: "React | Next.js  | Tailwind CSS",
      link: "https://dev-pwa.potsave.com/",
    },
    {
      id: 6,
      title: "Health",
      img: IMG6,
      description:
        "U of U Health is the Mountain West's only academic health care system. We provide patient care, medical research, and physician training.",
      technologies: "React   | TypeScript | Node Js",
      link: "https://healthcare.utah.edu/",
    },
  ];

  return (
    <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
  
    <div className="container portfolio__container">
      {soloProjects.map((pro) => (
        <article className="portfolio__item" key={pro.id}>
          <div className="portfolio__item-image">
            <img src={pro.img} alt={pro.title} />
          </div>
          <div className="portfolio__item-content">
            <h3>{pro.title}</h3>
            <p>{pro.description}</p>
            <p>{pro.technologies}</p>
          </div>
          <div className="portfolio__item-cta">
            <a
              href={pro.link}
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
              style={{
                marginTop: '1rem', // Default margin top
                // Media query for smaller screens
                '@media screen and (max-width: 768px)': {
                  marginTop: '0.5rem', // Adjusted margin top for smaller screens
                }
              }}
            >
              Live Demo
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
  
  );
};

export default Portfolio;
