import React from "react";
import whybrainylingo from "../../image/whybrainylingo.png";
const LandingWhyBrain = () => {
  return (
    <div id="Why_Brainy_Lingo" className="LandingWhyBrain_div">
      <div className="LandingWhyBrain_left_div">
        <img src={whybrainylingo} alt={whybrainylingo} />
      </div>
      <div className="LandingWhyBrain_right_div">
        <h1>Why Brainy Lingo??</h1>
        <p>
          Discover how Brainy Lingo is transforming vocabulary learning for 11
          Plus exam preparation with its innovative approach. Designed by
          parents who mastered the exam prep journey, our app addresses common
          challenges with engaging, scientifically-backed solutions.
        </p>
        <button className="btn btn-primary btn-width mt-3">Get Started</button>
      </div>
    </div>
  );
};

export default LandingWhyBrain;
