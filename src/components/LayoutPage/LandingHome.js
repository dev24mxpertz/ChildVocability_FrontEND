import React from "react";
import image1 from "../../image/image1.png";

const LandingHome = () => {
  return (
    <div id="Home" className="LandingHome_div">
      <div className="LandingHome_left_div">
        <h1>
        Revolutionize Your Child's 11 Plus Vocabulary Preparation!
        </h1>
        <p className="mt-3">
        Designed by experienced parents, our app modernizes 11 Plus vocab prep with fun, science-driven techniques. Enjoy interactive exercises, diverse stories, smart assessments, and spaced repetition for better learning and retention. Join Brainy Lingo for a superior study experience and see your child's vocabulary soar.
        </p>
        <button className="btn btn-primary btn-width mt-3">Get Started</button>
      </div>
      <div className="LandingHome_right_div">
        <img src={image1} alt={image1} />
      </div>
    </div>
  );
};

export default LandingHome;
