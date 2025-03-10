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
    image: "/images/diversity.jpg",
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
    image: "/images/equity.jpg",
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
    image: "/images/inclusion.jpg",
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
    image: "/images/belonging.jpg",
  },
];

const Service = () => {

  return (
    <div>
    <div className="dei-container">
      <div className="dei-content">
        <h1 className="dei-heading">
          Your DEI <br /> journey starts <br />
          <span className="dei-highlight">here</span>
        </h1>
        <h2>From Awareness to Action, From Goals to Growth</h2>
        <p className="dei-description">
        Creating an inclusive, high-performing
         workplace isn’t just about intention it’s about strategic action.
        </p>
      </div>
    </div>

  

   <div className="service-image"> <img className="image1" src="/images/service.avif" alt="" /> </div> 
     

    <div className="deib-page-ur">
      {/* Header Section */}
      <header className="header-ur">
        <h1 className="header-title-ur">Where Do You Stand?</h1>
        <p className="header-description-ur">
          DEIB Assessment & Roadmap – Identify gaps, Unlock opportunities, Build a culture of belonging.
        </p>
      </header>

      {/* Features Section */}
      <section className="features-ur">
        <div className="features-container-ur">
          <h2 className="features-title-ur">
            We go beyond checklists, Our expert-driven assessment provides
          </h2>
          <div className="features-cards-ur">
            {/* Feature 1 */}
            <div className="feature-card-ur">
              <h3 className="feature-title-ur">Data-Backed Insights</h3>
              <p>Measure your DEIB progress in hiring, leadership, & culture.</p>
            </div>
            {/* Feature 2 */}
            <div className="feature-card-ur">
              <h3 className="feature-title-ur">Employee-Centered Engagement</h3>
              <p>Involve your people to drive real ownership & inclusivity.</p>
            </div>
            {/* Feature 3 */}
            <div className="feature-card-ur">
              <h3 className="feature-title-ur">Customized Roadmap</h3>
              <p>No one-size-fits-all approach. Your strategy, tailored for real impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="action-ur">
        <div className="action-container-ur">
          <h2 className="action-title-ur">From Assessment to Action</h2>
          <p className="action-description-ur">
            At DEIB Innovations, we take your DEI efforts from fragmented ideas to a structured, results-driven journey. 
            With clear milestones and measurable impact, we make your DEI vision a reality.
          </p>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="next-steps-ur">
        <div className="next-steps-container-ur">
          <h2 className="next-steps-title-ur">What Comes Next?</h2>
          <div className="next-steps-options-ur">
            {/* Option 1 */}
            <div className="next-step-option-ur">
              <h3 className="option-title-ur">Implement the Roadmap Internally</h3>
              <p>Take charge and implement the tailored roadmap for sustainable change within your organization.</p>
            </div>
            {/* Option 2 */}
            <div className="next-step-option-ur">
              <h3 className="option-title-ur">Partner with Us</h3>
              <p>Accelerate execution by partnering with us to ensure the success of your DEI initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEIB Model Section */}
      <section className="deib-model-ur">
        <div className="deib-model-container-ur">
          <h2 className="deib-model-title-ur">Explore Our DEIB Model</h2>
          <p className="deib-model-description-ur">
            Check out our clear, visually engaging model showcasing our DEIB methodology.
          </p>
          <div className="deib-model-image-container-ur">
            <img
              src="path/to/your-deib-model-image.png" // Replace with your DEIB model image
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
          Let’s build a future of Inclusion, Innovation, and Impact—Together.
        </p>
      </header>

      {/* Call to Action Section */}
      <section className="cta-section-ur">
        <div className="cta-container-ur">
          <a href="/consultation-form" className="cta-button-ur partner-btn-ur">
            Partner With Us
          </a>
          <a href="/resources" className="cta-button-ur explore-btn-ur">
            Explore More Resources
          </a>
        </div>
      </section>
    </div>
    </div>

  );
};

export default Service;
