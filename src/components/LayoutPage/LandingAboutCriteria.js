import React from "react";
import intreractive from "../../image/intreractive.png";
import image3 from "../../image/image3.png";
import image5 from "../../image/image5.png";
import image6 from "../../image/image6.png";

const LandingAboutCriteria = () => {
  return (
    <div className="LandingAboutCriteria_div">
    <div className="LandingAboutCriteria_content_divHead">
    <h2>
      
      </h2>
    </div>
      
      <div className="LandingAboutCriteria_content_div">
        <div className="LandingAboutCriteria_content_left_div">
          <div className="LandingAboutCriteria_content_box">
            <div className="LandingAboutCriteria_content_box_img">
              <img src={intreractive} alt={intreractive} />
            </div>
            <div className="LandingAboutCriteria_content_box_content">
              <h4>Interactive Learning</h4>
              <h6>Learn the Meanings of Words</h6>
              <p>
                Dive into vocabulary learning with our interactive drag-and-drop
                feature. Match words to their corresponding images and
                descriptions to understand meanings in a fun, engaging way. This
                hands-on approach ensures you not only see the word but connect
                it with a visual and contextual clue.
              </p>
            </div>
          </div>

          <div className="LandingAboutCriteria_content_box mt-3">
          <div className="LandingAboutCriteria_content_box_img">
            <img src={image5} alt={image5} />
          </div>
          <div className="LandingAboutCriteria_content_box_content">
            <h4>Comprehensive Assessment</h4>
            <h6>Test Your Knowledge</h6>
            <p>
              Evaluate your understanding through assessments that challenge
              you on meanings, synonyms, and antonyms of the words learned.
              This step ensures you've grasped the vocabulary deeply,
              providing feedback and areas for improvement.
            </p>
          </div>
        </div>

        </div>
        <div className="LandingAboutCriteria_content_right_div">

<div className="LandingAboutCriteria_content_box mt-3">
            <div className="LandingAboutCriteria_content_box_img">
              <img src={image3} alt={image3} />
            </div>
            <div className="LandingAboutCriteria_content_box_content">
              <h4>Engaging Stories</h4>
              <h6>Read and Discover</h6>
              <p>
                After mastering the meanings, immerse yourself in captivating
                stories crafted using the words you've just learned. Each story
                spans various genres, from Fantasy to Science Fiction, making
                reading an adventure and reinforcing your new vocabulary in
                exciting contexts.
              </p>
            </div>
          </div>


          <div className="LandingAboutCriteria_content_box mt-3">
            <div className="LandingAboutCriteria_content_box_img">
              <img src={image6} alt={image6} />
            </div>
            <div className="LandingAboutCriteria_content_box_content">
              <h4>Effective Revision</h4>
              <h6>Spaced Repetition for Mastery</h6>
              <p>
                Our app employs spaced repetition algorithms to review words at
                optimal intervals, helping you solidify your vocabulary
                knowledge. This technique revisits words you've learned,
                focusing on those you found challenging, to ensure long-term
                retention and mastery.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LandingAboutCriteria;
