import React from "react";
import backgroundVideo from "../markers/backgroundVideo.mp4";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="full-screen-video-container">
      <video autoPlay="autoplay" loop="loop" muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="full-screen-video-content">
        <h2>Parker</h2>
        <p>Find Best Suitable Safe-Parking On Your Budget.</p>
        <Link className="btn btn-lg btn-info" to="/maps">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
