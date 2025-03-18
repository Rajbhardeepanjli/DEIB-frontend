import React from 'react'
import './Methodology.css';
function Methodology() {
  return (
<div> 
<div className="dei-container">
   <div className="dei-content">
         <h1 className="dei-heading">
          Your DEIB <br /> journey starts <br />
           <span className="dei-highlight">here</span>
         </h1>
         <h2>From Awareness to Action, From Goals to Growth</h2>
        <p className="dei-description">
         Creating an Inclusive, high-performing
          workplace isn’t just about intention it’s about strategic action.
        </p>
       </div>
     </div>

   <div className="service-image"> <img className="image1" src="/images/service.avif" alt="" /> </div>     

    <div className="deib-page-ur">
 


 <section className="features-ur">
   <div className="features-container-ur">
     <h2 className="features-title-ur">
       We go beyond checklists, Our expert-driven assessment provides
     </h2>
     <div className="features-cards-ur">
    
       <div className="feature-card-ur">
         <h3 className="feature-title-ur">Data-Backed Insights</h3>
         <p>Measure your DEIB progress in hiring, leadership, & culture.</p>
       </div>
     
       <div className="feature-card-ur">
         <h3 className="feature-title-ur">Employee-Centered Engagement</h3>
         <p>Involve your people to drive real ownership & inclusivity.</p>
       </div>
   
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
       At DEIB Innovations, we take your DEIB efforts from fragmented ideas to a structured, results-driven journey. With clear milestones and measurable impact, we make your DEIB vision a reality.
     </p>
   </div>
 </section>

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

</div>
    <section id="discovery" className="methodology-container">
      {/* Image on Top */}
      <div className="image-container">
        <img
          src="./images/IMG_5724.JPG"
          alt="Discovery Process"
          className="discovery-image"
        />
      </div>

      {/* Content Section */}
      <div className="content-wrapper">
        <h2 className="discovery-title">Where Do You Stand? </h2>
        <p className="discovery-text">
          Assessment is the first step in your DEIB journey analyzing where you 
          stand today to build a more inclusive tomorrow. Through data-driven insights, 
          employee sentiment analysis, and industry benchmarking, we uncover the strengths, 
          gaps, and opportunities within your organization’s culture. This foundation sets the 
          stage for a strategic, measurable, and impactful DEIB transformation.
        </p>

        <div className="info-box">
          <h3 className="section-title">Discovery </h3>
          {/* <h4 className="subtitle">(Assessment)</h4> */}

          {/* Steps List */}
          <ul className="discovery-list">
            <li>
              <span>✔</span> Choose Assessment Methodology: Conducting surveys, focus groups, and interviews to measure DEIB maturity.
            </li>
            <li>
              <span>✔</span> Analysis: Evaluating organizational DEIB metrics against industry benchmarks.
            </li>
            <li>
              <span>✔</span> Publish Dashboard: Providing real-time data visualization for transparency.
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="section-container">
      {/* Insights Section */}
      <div className="card">
        <h2 className="heading">Insights: Decoding DEIB Realities</h2>
        {/* <h4 className="subheading">(Gaps & Opportunities)</h4> */}
        <p className="description">
          Uncover the hidden gaps and growth opportunities in your DEIB landscape.
          Our deep-dive analysis translates data into actionable insights, aligning
          your goals with meaningful change.
        </p>

        {/* Steps List */}
        <div className="steps-container">
          <h3 className="steps-title">Steps:</h3>
          <ul className="steps-list">
            <li><span>✔</span> Identifying Gaps & Opportunities: Assessing structural, cultural, and behavioral gaps.</li>
            <li><span>✔</span> Collecting Organizational DEIB Goals: Aligning leadership vision with workforce expectations.</li>
            <li><span>✔</span> Publishing Reports: Generating executive summaries with actionable insights.</li>
          </ul>
        </div>
      </div>

      {/* Opportunities Section */}
      <div className="card opportunities-card">
        <h2 className="heading">Opportunities: Blueprint for Inclusive Growth</h2>
        {/* <h4 className="subheading">(Action Plan)</h4> */}
        <p className="description">
          Turn insights into impact! We craft a strategic roadmap that bridges DEIB gaps,
          unlocking pathways for sustainable inclusion and measurable progress.
        </p>

        {/* Steps List */}
        <div className="steps-container">
          <h3 className="steps-title">Steps:</h3>
          <ul className="steps-list">
            <li><span>✔</span> DEIB Gaps & Opportunities Report: Categorizing short-term & long-term focus areas.</li>
            <li><span>✔</span> Roadmap & Milestone Execution Plan: Defining achievable DEIB milestones.</li>
          </ul>
        </div>
      </div>

      {/* Additional Opportunities Section */}
      <div className="card">
        <h2 className="heading">Opportunities: Blueprint for Inclusive Growth</h2>
        {/* <h4 className="subheading">(Action Plan)</h4> */}
        <p className="description">
          We help organizations develop strategic roadmaps to drive sustainable inclusion and measurable progress.
        </p>

        {/* Steps List */}
        <div className="steps-container">
          <h3 className="steps-title">Steps:</h3>
          <ul className="steps-list">
            <li><span>✔</span> DEIB Gaps & Opportunities Report: Categorizing short-term & long-term focus areas.</li>
            <li><span>✔</span> Roadmap & Milestone Execution Plan: Defining achievable DEIB milestones.</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="container-methodology">
      {/* Strategy Section */}
      <div className="card-methodology">
        <h2 className="heading-methodology">Strategy: Transforming Strategy into Action</h2>
        {/* <h4 className="sub-heading">(Execution Plan)</h4> */}
        <p className="description">
          From plans to progress! We translate your DEIB blueprint into tangible actions—aligning resources,
          partnerships, and policies for lasting impact.
        </p>

        {/* Components List */}
        <div className="list-container">
          <h3 className="list-heading">Components:</h3>
          <ul className="list">
            <li> Resource & Leadership Commitment</li>
            <li> Vendor & Partnership Alignments</li>
            <li> DEIB Events & Campaigns</li>
            <li> Inclusive Infrastructure & Policy Development</li>
          </ul>
        </div>
      </div>

      {/* Impact Section */}
      <div className="card gray-bg">
        <h2 className="heading">Impact: Measuring DEIB Impact</h2>
        {/* <h4 className="sub-heading">(Implementation & Measurement)</h4> */}
        <p className="description">
          Inclusion isn’t a one-time effort—it’s a measurable journey. We track progress, refine strategies, and ensure your
          DEIB initiatives drive real, lasting change.
        </p>

        {/* Components List */}
        <div className="list-container white-bg">
          <h3 className="list-heading">Components:</h3>
          <ul className="list">
            <li> Periodic Assessments & Continuous Monitoring</li>
            <li> Adaptive Strategies for Scalability</li>
            <li> Employee Engagement & Inclusion Metrics</li>
            <li> ROI-Driven DEIB Outcomes</li>
          </ul>
        </div>
      </div>
    </section>
    </div>

//     <div>
//        
//     </div>
  )
}

export default Methodology