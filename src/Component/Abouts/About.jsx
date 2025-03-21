import React from "react";
import "./About.css";
import Img from "./Img";
import Team from "./Team";

const About = () => {
  return (
    <div>

<div className="founder-container">
  <h1 className="founder-heading-h1">Our Founder’s Journey, <br/> <span>From Resilience to Revolutionizing Inclusion </span> </h1>
      {/* First Founder */}
      <div className="founder-card">
        <div className="founder-image-container">
          <img
            src="/images/Team/1.jpg"
            alt="Neetu Mehta"
            className="founder-image"
          />
        </div>
        <div className="founder-text-container">
          <h1 className="founder-title">
           Neetu Metha
          </h1>
          <p className="founder-paragraph">
            <strong>Neetu Mehta</strong>, a proud polio survivor, has lived the challenges
            of accessibility and inclusion firsthand. Her journey from overcoming
            personal barriers to driving systemic change in workplaces fuels the mission of DEIB Innovation.
          </p>
          <p className="founder-paragraph">
            With a deep-rooted belief in <strong>Equity, Representation, and Workplace Transformation</strong>,
            she founded DEIB Innovation to turn Intent into Action—helping businesses build truly
            inclusive and high-performing organizations.
          </p>
          <p className="founder-quote">“Inclusion isn’t just a principle, it’s my purpose.” – Neetu Mehta</p>
        </div>
      </div>

      {/* Second Founder */}
      <div className="founder-card">
        <div className="founder-image-container">
          <img
            src="/images/Team/6.enc"
            alt="Shyam Bahadur"
            className="founder-image"
          />
        </div>
        <div className="founder-text-container">
        <h1 className="founder-title">
        Shyambahadur Prajapati 
          </h1>
          <p className="founder-paragraph"> <strong> Shyambahadur Prajapat </strong>
            HR Leader & Innovator 17 years of experience in Human Resources, Shyambahadur Prajapati has played a pivotal role in shaping HR strategies across leading organizations like Myntra, GM Infotech, Interactive Group, iTech Media, and Thomas International. Currently serving as Head HR at GM Infotech, he leads comprehensive HR functions, driving talent acquisition, performance management, employee engagement, and organizational development.
          </p>
          <p className="founder-paragraph">  Shyambahadur is known for his

 <strong> innovative approach  </strong>
 to HR, including integrating numerology in hiring decisions, fostering inclusive workplace cultures, and implementing strategies that enhance operational efficiency. His expertise and forward-thinking mindset continue to make a lasting impact in the HR community.

          </p>
          <p className="founder-quote">“Inclusion is not a favor, diversity is not a checkbox, and equity is not an option. Together, they build stronger workplaces and a better world.” <br /> – Shyambahadur Prajapat </p>
        </div>
      </div>
    </div>

    <div className="wh-container">
      <div className="wh-section wh-who-we-are">
        {/* Left Section - Content */}
        <div className="wh-content">
          <h1 className="wh-title">Who We Are</h1>
          <p className="wh-text">
            We are a boutique consulting and training firm dedicated to embedding
            <span className="wh-highlight"> Diversity, Equity, Inclusion, and Belonging (DEIB)</span>
            into workplace culture for lasting impact.
          </p>
          <p className="wh-text">
            We don’t just talk about DEIB—we engineer it through
            <span className="wh-highlight"> Strategic Solutions, Data-Driven Insights,</span> and
            <span className="wh-highlight"> Action-Oriented Interventions.</span>
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="wh-image-container">
          <img
            src="/images/IMG_5723.JPG"
            alt="Diversity Team"
            className="wh-image"
          />
        </div>
      </div>

      {/* Why We Exist Section */}
      <div className="wh-section wh-why-we-exist">
        {/* Left Section - Image */}
        <div className="wh-image-container">
          <img
            src="/images/IMG_5724.JPG"
            alt="Growth Representation"
            className="wh-image"
          />
        </div>
        
        {/* Right Section - Content */}
        <div className="wh-content">
          <h2 className="wh-subtitle">Why We Exist</h2>
          <h3 className="wh-subheading">From Gaps to Growth</h3>
          <p className="wh-text2">
            Workplaces talk about diversity. We make it work.
          </p>
          <p className="wh-text2">
            At <span className="wh-bold">DEIB Innovation</span>, we saw a gap, Organizations strive for inclusion but often struggle to turn intention into impact. That’s where we come in.
          </p>
        </div>
      </div>
    </div>
    <Img/>
    <div className="ab-container">
      <div className="ab-card">
        <h2 className="ab-title">What Sets Us Apart?</h2>
        <div className="ab-grid">
          <div className="ab-feature">
            <span className="ab-icon">◆</span>
            <p className="ab-feature-title">Data + Strategy = Real Change</p>
            <p className="ab-feature-description">
              We combine deep analytics with tailored solutions to deliver impact.
            </p>
          </div>
          <div className="ab-feature">
            <span className="ab-icon">◆</span>
            <p className="ab-feature-title">Beyond One-Size-Fits-All</p>
            <p className="ab-feature-description">
              Every organization is unique, so we customize every DEIB initiative.
            </p>
          </div>
          <div className="ab-feature">
            <span className="ab-icon">◆</span>
            <p className="ab-feature-title">Sustainable, Not Surface-Level</p>
            <p className="ab-feature-description">
              We focus on long-term transformation, not just quick fixes.
            </p>
          </div>
          <div className="ab-feature">
            <span className="ab-icon">◆</span>
            <p className="ab-feature-title">Human-Centered, Business-Aligned</p>
            <p className="ab-feature-description">
              Balancing people-first approaches with business objectives.
            </p>
          </div>
        </div>
      </div>
    </div>

    
    <Team/>

    <div className="D-container">
      <div className="D-card">
        {/* Header Section */}
        <div className="D-header">
          <h1>Diversity Fuels Innovation</h1>
          <p>
            True growth happens when diverse voices shape the strategy. By embedding DEIB into the core of decision-making, we don’t just expand businesse, we create lasting impact.
          </p>
        </div>

        {/* Impact Section */}
        <div className="D-section">
          <h2 className="D-section-title">Our Impact: Beyond Metrics, Real Change</h2>
          <p className="D-text-center">We don’t just claim results—we prove them.</p>

          <div className="D-impact-cards">
            {[
              { icon: "🚀", text: "A global IT firm saw a 30% rise in employees who felt leadership actively championed inclusion." },
              { icon: "📈", text: "A mid-sized enterprise improved performance management fairness by 22%, reducing bias in evaluations." },
              { icon: "💡", text: "A workforce engagement survey revealed an 88% increase in employees feeling a deeper sense of belonging." },
            ].map((item, index) => (
              <div key={index} className="D-card-item">
                <span>{item.icon}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision Section */}
        <div className="D-section">
          <h2 className="D-section-title">The Future: Building the DEIB Standard</h2>
          <p>We envision a world where workplaces are barrier-free, bias-free, and built for all.</p>
        </div>

        {/* Future Goals */}
        <div className="D-future-cards">
          {[
            { icon: "🤖", text: "Expanding our impact through AI-driven DEIB analytics" },
            { icon: "🤝", text: "Strengthening partnerships to create inclusive hiring pipelines" },
            { icon: "📊", text: "Driving research-backed strategies to shape the future of workplace inclusion" },
          ].map((item, index) => (
            <div key={index} className="D-card-item">
              <span>{item.icon}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="D-cta">
          <p>At DEIB Innovation we’re not just shaping change, we’re setting the standard.</p>
          {/* <button>Ready to transform your workplace? Let’s make inclusion work.</button> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
