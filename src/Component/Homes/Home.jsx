import React from "react";
import "./Home.css";
import Testimonials from "./Testimonials";
import { Link, useNavigate } from "react-router-dom";

const statsData = [
  {
    percentage: "30%",
    description: "More employees say leadership fosters ",
    logo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/statistics/_AUTOx70_fit_center-center_none/image-1.png", // Replace with actual logo URL
  },
  {
    percentage: "22%",
    description: "Improvement in perceived fairness of performance management",
    logo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/statistics/_AUTOx70_fit_center-center_none/image-2.png", // Replace with actual logo URL
  },
  {
    percentage: "88%",
    description: "Stronger sense of belonging in the workplace",
    logo: "https://s3.us-east-1.amazonaws.com/peoplism.s8/statistics/_AUTOx70_fit_center-center_none/image-3.png", // Replace with actual logo URL
  },
];

 

const Home = () => {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };
  return (
    <div>
      
    <div className="home-container">
      {/* Heading Section */}
       {/* Button Section */}
       {/* <div className="button-section-m button-section-home">
        <Link to="/Contact" className="partner-btn">Partner with us</Link>
        <Link to="/Service" className="services-btn">See our services</Link>
      </div> */}
      <div className="heading-section">
        <h1>
        Faces of Change:   <span className="highlight">Carving</span> an {" "}
          <span className="highlight">quicker</span> Inclusive{" "}
          <span className="highlight"> Future</span>.
        </h1>
        
      </div>

     

    </div>
    {/* <StatsSection/> */}
    <div className="work-container16">
      <div className="work-content16">
        {/* Title */}
        <h2 className="title16">Work with us to move the needle</h2>

        {/* Description */}
        <p className="description16">
          At <span className="highlight16">DEIB Innovations</span>, we don’t just support change we build it.
        </p>

        {/* Highlighted Cards */}
        <div className="highlight-container16">
          <div className="highlight-card16">
            <p>Strategically</p>
          </div>
          <div className="highlight-card16 alt16">
            <p>Sustainably</p>
          </div>
          <div className="highlight-card16">
            <p>Measurable results</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-container16">
        <div className="stat-card16">
          <h3 className="h316">30%</h3>
          <p className="p16">More employees say leadership fosters</p>
        </div>
        <div className="stat-card16">
          <h3 className="h316">22%</h3>
          <p className="p16">Improvement in perceived fairness of performance management</p>
        </div>
        <div className="stat-card16">
          <h3 className="h316">88%</h3>
          <p className="p16">Stronger sense of belonging in the workplace</p>
        </div>
      </div>
    </div>
    {/* <Box/> */}

    <div className="container-add6">
      <h1 className="title-add6">A Seamless, Integrated DEIB Approach</h1>
      <p className="description-add6">
      True inclusion isn’t an initiative—it’s the foundation of a 
      thriving, high-performing workplace. We help organizations 
      embed <span className="underline-add6"> DEIB </span> into daily operations  ensuring it’s not just a , <span className="underline-add6"> value </span>  but a tangible advantage.
      </p>

      <div className="grid-container-add6">
        <div className="grid-item-add6 left-add6">
          <h2 className="subtitle-add6">Diversity</h2>
          <p className="text-add6">
          Expand talent pipelines & attract top-tier candidates.
          </p>
          <Link to="/service" className="button-add6 diversity-add6" onClick={() => window.scrollTo(0, 0)}>
            View Services
          </Link>
        </div>

        <div className="grid-item-add6 right-add6">
          <h2 className="subtitle-add6">Inclusion</h2>
          <p className="text-add6">
          Foster a culture where every voice matters.
          </p>
          <button className="button-add6 inclusion-add6" onClick={() => handleNavigation("/service")}>
            View Services
          </button>
        </div>
        <hr className="horizontal-line-add6" />

        <div className="grid-item-add6 left-add6">
          <h2 className="subtitle-add6">Equity</h2>
          <p className="text-add6">
          Build fair, objective career & compensation systems.
          </p>
          <button className="button-add6 equity-add6" onClick={() => handleNavigation("/service")}>
            View Services
          </button>
        </div>

        <div className="grid-item-add6 right-add6">
          <h2 className="subtitle-add6">Belonging</h2>
          <p className="text-add6">
          Create a workplace where employees feel valued & empowered.
          </p>
          <button className="button-add6 belonging-add6" onClick={() => handleNavigation("/service")}>
            View Services
          </button>
        </div>
      </div>
    </div>

    <Testimonials/>
    {/* <div className="sky-img-container">
      <img src="/images/sky.avif" alt="" className="sky-images"/>
    </div> */}
    </div>
  );
};

export default Home;
