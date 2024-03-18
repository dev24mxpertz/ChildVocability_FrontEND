import React from "react";
import brain1 from "../../image/EnhancingRecallthroughImagery.png";
import brain2 from "../../image/brain2.png";
import brain3 from "../../image/brain3.png";
import image6 from "../../image/MotivationandEngagement.png";

const LandingWhyBrainCriteria = () => {
  return (
    <div id="Features" className="LandingAboutCriteria_div">

      <div className="LandingAboutCriteria_content_div">
        <div className="LandingAboutCriteria_content_left_div">
          <div className="LandingAboutCriteria_content_box">
            <div className="LandingAboutCriteria_content_box_img">
              <img src={brain1} alt={brain1} />
            </div>
            <div className="LandingAboutCriteria_content_box_content">
              <h4>Enhancing Recall through Imagery</h4>
              <p>
                Visualize to Memorize: Brainy Lingo boosts vocabulary retention with vivid imagery and stories, inspired by 'Image Creation—Picture' research. This approach strengthens word-meaning connections, enhancing recall through engaging visual exercises.
              </p>
            </div>
          </div>
          <div className="LandingAboutCriteria_content_box mt-3">
            <div className="LandingAboutCriteria_content_box_img">
              <img src={brain3} alt={brain3} />
            </div>
            <div className="LandingAboutCriteria_content_box_content">
              <h4>Efficiency and Accessibility</h4>
              <p>
                Saving Time and Money! Brainy Lingo delivers daily tailored
                vocabulary exercises, eliminating the need for expensive tuition
                and fitting learning into busy schedules.
              </p>
            </div>
          </div>

        </div>
        <div className="LandingAboutCriteria_content_right_div">
          



          <div className="LandingAboutCriteria_content_box ">
          <div className="LandingAboutCriteria_content_box_img">
            <img src={brain2} alt={brain2} />
          </div>
          <div className="LandingAboutCriteria_content_box_content">
            <h4>Effective Reinforcement</h4>
            <p>
              Mistakes Mastered! With spaced repetition algorithms, Brainy
              Lingo ensures that learning sticks by revisiting challenging
              words at just the right times, making revision targeted and
              effective.
            </p>
          </div>
        </div>
          <div className="LandingAboutCriteria_content_box mt-3">
            <div className="LandingAboutCriteria_content_box_img">
              <img src={image6} alt={image6} />
            </div>
            <div className="LandingAboutCriteria_content_box_content">
              <h4>Motivation and Engagement</h4>

              <p>
              Climb the Ranks! Brainy Lingo’s leaderboard fuels a friendly competitive spirit, motivating children to outdo themselves and others in vocabulary practice, turning learning into an exciting challenge.
              </p>
              
            </div>
          </div>
        </div>
      </div>
      <div className="landingWhyBrainCriteria_paragraph">
      <p>Join the Brainy Lingo Family Today! Empower your child's vocabulary journey with an app that understands the value of fun, focused, and flexible learning.</p>
      
      </div>
    </div>
  );
};

export default LandingWhyBrainCriteria;
