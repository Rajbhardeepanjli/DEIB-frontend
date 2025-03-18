import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import Home from "../Homes/Home";
import Assessment from "./Assessment";
import DiversitySection from "./DiversitySection";
import Services from "./Services";
import Equity from "./Equity";
import Services2 from "./Services2";
import Inclusion from "./Inclusion";
import Services3 from "./Services3";
import Belonging from "./Belonging";
import Services4 from "./Services4";

const pillars = [
  {
    title: "Diversity",
    description: "Expanding Perspectives. Unlocking Potential.",
    points: [
      "Inclusive Hiring & Outreach – Attract, recruit & retain diverse talent.",
      "Diverse Leadership Development – Cultivate future-ready leaders.",
      "Supplier Diversity & Partnerships – Strengthen brand impact through inclusive sourcing.",
    ],
    image: "/images/IMG_5726.JPG",
  },
  {
    title: "Equity",
    icon: "⚖️",
    description: "Breaking Barriers, Building Fairness.",
    points: [
      "Pay Equity & Compensation Audits – Ensure fairness & build trust.",
      "Bias-Free Performance Reviews – Replace subjectivity with structured evaluations.",
      "Career Growth & Mobility – Create transparent pathways for advancement.",
    ],
    image: "/images/IMG_5728.JPG",
  },
  {
    title: "Inclusion",
    icon: "🤝",
    description: "Build Culture. Inspire Engagement.",
    points: [
      "Inclusive Leadership Training – Equip managers to lead diverse teams.",
      "Allyship & Unconscious Bias Training – Drive real behavioral change.",
      "Neurodiversity & Disability Inclusion – Build an accessible, accommodating workplace.",
    ],
    image: "/images/IMG_5725.JPG",
  },
  {
    title: "Belonging",
    icon: "💙",
    description: "Strengthen Connection. Cultivate Loyalty.",
    points: [
      "Employee Resource Groups (ERGs) – Strengthen workplace communities.",
      "Psychological Safety & Well-being – Foster trust, openness, and support.",
      "Recognition & Inclusive Policies – Ensure employees feel valued and empowered.",
    ],
    image: "/images/IMG_5729.JPG",
  },
];

const Service = () => {

  return (
    <div>

<div className="dei-container-s"> 
<div className="dei-content">
        <h1 className="dei-heading-s">
          Our DEIB {" "}
          <span className="dei-highlight">Services</span>
        </h1>
      </div>
    </div>
   
    <div className="deib-page-ur">


      {/* Action Section */}
      {/* <section className="action-ur">
        <div className="action-container-ur">
          <h2 className="action-title-ur">From Assessment to Action</h2>
          <p className="action-description-ur">
            At DEIB Innovations, we take your DEI efforts from fragmented ideas to a structured, results-driven journey. 
            With clear milestones and measurable impact, we make your DEI vision a reality.
          </p>
        </div>
      </section> */}

      {/* Next Steps Section */}
      {/* <section className="next-steps-ur">
        <div className="next-steps-container-ur">
          <h2 className="next-steps-title-ur">What Comes Next?</h2>
          <div className="next-steps-options-ur">
         
            <div className="next-step-option-ur">
              <h3 className="option-title-ur">Implement the Roadmap Internally</h3>
              <p>Take charge and implement the tailored roadmap for sustainable change within your organization.</p>
            </div>
          
            <div className="next-step-option-ur">
              <h3 className="option-title-ur">Partner with Us</h3>
              <p>Accelerate execution by partnering with us to ensure the success of your DEI initiatives.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* DEIB Model Section */}
      <section className="deib-model-ur">
        <div className="deib-model-container-ur">
          <h2 className="deib-model-title-ur">Explore Our DEIB Model</h2>
          <p className="deib-model-description-ur">
            Check out our clear, visually engaging model showcasing our DEIB methodology.
          </p>
          <div className="deib-model-image-container-ur">
            <img
              src="/images/IMG_5727.JPG" // Replace with your DEIB model image
              alt="DEIB Model"
              className="deib-model-image-ur"
            />
          </div>
        </div>
      </section>
    </div>


    <div className="deib-ur-container">
      <h2 className="deib-ur-title">
        The Four Pillars of <span className="deib-ur-highlight">DEIB Success</span>
      </h2>
      <div className="deib-ur-grid">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className={`deib-ur-card ${index % 2 === 0 ? "deib-ur-reverse" : ""}`}
          >
            <img src={pillar.image} alt={pillar.title} className="deib-ur-image" />
            <div className="deib-ur-content">
              {/* <span className="deib-ur-icon">{pillar.icon}</span> */}
              <h3 className="deib-ur-heading">{pillar.title}</h3>
              <p className="deib-ur-description">{pillar.description}</p>
              <ul className="deib-ur-list">
                {pillar.points.map((point, i) => (
                  <li key={i} className="deib-ur-list-item"> {point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>


<div className="transform-workplace-ur">
      <header className="header-urb">
        <h1 className="header-title-ur">Ready to Transform Your Workplace?</h1>
        <p className="header-description-ur">
          Let’s build a future of Inclusion, Innovation, and Impact Together.
        </p>
        <section className="cta-section-ur">
        <div className="cta-container-ur">
          <a href="/contact" className="cta-button-ur partner-btn-ur">
            Partner With Us
          </a>
        </div>
      </section>
      </header>
      
    </div>
    </div>

  );
};

export default Service;
