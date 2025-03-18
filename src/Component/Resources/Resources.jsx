import "./Resources.css";
import { Link } from 'react-router-dom';

const Resources = () => {

  return (
    <div> <div className="rc"> 
<h1>Insights, Strategies, Real-World Impact.</h1> </div>
<div className="r-container">
      {/* Header Section */}
      <div className="rc-deib-container">
      {/* Left Section - Text Content */}
      <div className="rc-deib-text">
        <h1>Empower. Transform. Lead.</h1>
        <p>
          At DEIB Innovations, we believe knowledge fuels transformation. This hub isn’t just about reading — it’s about action.
        </p>
      </div>
      
      {/* Right Section - Content Box */}
      <div className="rc-deib-content">
        <p>
          Whether you’re taking your first step in the DEIB journey or refining your strategy, explore research, best practices, and expert perspectives designed to create lasting change.
        </p>
      </div>
    </div>

      {/* Featured Insights Section */}
      <div className="r-card">
        <h2>Featured Insights</h2>
        <h3>The ROI of DEIB: Why Inclusion is a Business Imperative</h3>
        <ul>
          <li>Discover how inclusive workplaces increase performance by <strong>56%</strong> and improve retention by <strong>35%</strong>.</li>
          <li>Learn why belonging directly boosts employee engagement by <strong>42%</strong>.</li>
        </ul>
        <Link to="/case">
     <button className="r-btn">Read More</button>  
     </Link>
      </div>

      {/* Research & Reports Section */}
      <div className="r-card">
        <h2>Data-Driven Insights That Shape the Future</h2>
        <p>True change begins with understanding the numbers. Our research section provides:</p>
        <ul>
          <li>In-depth reports on DEIB impact & industry trends</li>
          <li>The latest market data & benchmarks</li>
          <li> Practical recommendations for business leaders & HR teams</li>
        </ul>

        {/* Upcoming Report */}
        <h3> Upcoming Report: The Future of Inclusion & Workplace Transformation</h3>
        <ul>
          <li> How AI-powered bias detection is transforming hiring</li>
          <li> Why Gen Z’s expectations are reshaping workplace culture</li>
          <li> The rise of DEIB in the metaverse & hybrid work models</li>
        </ul>
        <Link to="/getintouch">
        <button className="r-btn"> Request Report</button>
        </Link>
      </div>
    </div>

    <div className="contact-container">
      {/* Header Section */}
      <div className="contact-header">
        <h1>Ready to Take Action?</h1>
        <p>Let's build a more inclusive future—together!</p>
      </div>
      
      {/* Content Grid */}
      <div className="contact-grid">
        {/* Collaboration Section */}
        <div className="contact-card contact-blue">
          <h2>Need tailored DEIB solutions?</h2>
          <p>Let’s collaborate to build a more inclusive future!</p>
      <Link to="/contact"> 
        <p className="contact-button contact-blue"> Let’s Talk</p>    </Link> 
        </div>

        {/* Newsletter Section */}
        <div className="contact-card contact-green">
          <h2>Stay Updated with DEIB Trends</h2>
          <p>Get curated articles, expert opinions, and the latest trends.</p>
          <a href="#" className="contact-button contact-green">Join the Community</a>
        </div>

        {/* Expert Guidance Section */}
        <div className="contact-card contact-purple">
          <h2> Need Expert Guidance?</h2>
          <p>Get help implementing effective DEIB strategies.</p>
          <a href="/getintouch" className="contact-button-p contact-purple"> Get in Touch</a>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Resources;
