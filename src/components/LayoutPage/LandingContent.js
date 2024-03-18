import React from "react";
import image11 from "../../image/image11.png";

const LandingContent = () => {
  return (
    <div id="About_us" className="LandingContent_div">
      <div className="LandingContent_upper_div">
        <h2>About Us</h2>
        <p>
          Start your journey to vocabulary excellence today and watch your
          language skills soar
        </p>
      </div>
      <div className="LandingContent_lower_div">
        <div className="LandingContent_lower_left_div">
          <img src={image11} alt={image11} />
        </div>
        <div className="LandingContent_lower_right_div">
          <p>
            <span style={{ fontWeight: "700", fontSize: "20px" }}>
              Brainy Lingo
            </span>{" "}
            is the brainchild of a group of dedicated parents and educators who
            navigated the challenges of the 11 Plus exam preparation with their
            children. Recognizing the need for a more engaging, effective
            approach to vocabulary learning, we created an app that
            revolutionizes the traditional study process. Our mission is to make
            vocabulary building accessible, fun, and highly effective for
            students everywhere. By combining interactive technology with
            scientifically-backed learning techniques, Brainy Lingo offers an
            innovative solution that caters to the diverse needs of young
            learners. Join us in empowering the next generation of students with
            the confidence and knowledge to succeed.
          </p>
          <button className="btn btn-outline-primary mt-3 btn-width">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingContent;
