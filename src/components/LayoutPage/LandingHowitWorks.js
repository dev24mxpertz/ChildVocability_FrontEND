import React from "react";
import Howitworks from "../../image/Howitworks.png";

const LandingAbout = () => {
  return (
    <div id="How_it_works" className="LandingAbout_div">
      <div className="LandingAbout_left_div">
        <h1>How It Works?</h1>
        <p>
        Our vocabulary learning is a four-step journey: Match words with images via drag-and-drop, read stories incorporating new vocabulary, take assessments on word meanings, and reinforce learning through spaced repetition. This streamlined process ensures effective, enjoyable vocabulary enhancement.
        </p>
        <button className="btn btn-primary btn-width mt-3">Get Started</button>
        {/* <h6 style={{ color: "royalblue" }}>Our Mission - Your Success</h6>
        <p>
          Our mission is to make English learning accessible, effective, and
          enjoyable for every student. We believe that with the right tools and
          support, you can achieve your goals and unlock new opportunities.
        </p> */}
      </div>
      <div className="LandingAbout_right_div">
        <img src={Howitworks} alt={Howitworks} />
      </div>
    </div>
  );
};

export default LandingAbout;
