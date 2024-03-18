import React from "react";
import comma from "../../image/comma.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Arrow components for Slider
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const LandingCommunity = () => {
  // Settings for the carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div id="Testimonials" className="LandingCommunity_div">
      <h2>
        Hear It From
        <span style={{ color: "royalblue" }}> Our</span> Learners!
      </h2>
      <div className="LandingCommunity_Slider_div">
        <Slider {...carouselSettings}>
          <div className="LandingCommunity_message_box">
            <img src={comma} alt="Comma" />{" "}
            {/* Provide alt text for the image */}
            <p>
              Before Brainy Lingo, I thought studying vocabulary was boring.
              But now, I can't wait to learn new words every day! The stories
              are so cool, and I love seeing my name go up on the leaderboard.
            </p>
            <p style={{ fontWeight: "600" }}>
              Jamie,
              <span style={{ color: "royalblue", fontWeight: "600" }}>
                {" "}
                10{" "}
              </span>
              Years Old
            </p>
          </div>
          <div className="LandingCommunity_message_box">
            <img src={comma} alt="Comma" />{" "}
            {/* Provide alt text for the image */}
            <p>
              I used to get confused with harder words, but the games on Brainy
              Lingo made it easy to remember their meanings and how to use them.
              My scores have improved a lot, and I feel ready for my exam!
            </p>
            <p style={{ fontWeight: "600" }}>
              Ava,
              <span style={{ color: "royalblue", fontWeight: "600" }}> 9 </span>
              Years Old
            </p>
          </div>
          <div className="LandingCommunity_message_box">
            <img src={comma} alt="Comma" />{" "}
            {/* Provide alt text for the image */}
            <p>
              The drag-and-drop exercises are my favorite! They're like playing
              a puzzle game, but I'm learning at the same time. Thanks to Brainy
              Lingo, my vocabulary has grown massively, and so has my
              confidence.
            </p>
            <p style={{ fontWeight: "600" }}>
              Ethan,
              <span style={{ color: "royalblue", fontWeight: "600" }}>
                {" "}
                11{" "}
              </span>
              Years Old
            </p>
          </div>
          <div className="LandingCommunity_message_box">
            <img src={comma} alt="Comma" />{" "}
            {/* Provide alt text for the image */}
            <p>
              I always struggled with revision, especially remembering which
              words I got wrong before. The spaced repetition on Brainy Lingo is
              amazing—it reminds me just when I need to review, and now I hardly
              ever forget a word!
            </p>
            <p style={{ fontWeight: "600" }}>
              Sophia,
              <span style={{ color: "royalblue", fontWeight: "600" }}>
                {" "}
                10{" "}
              </span>
              Years Old
            </p>
          </div>
          <div className="LandingCommunity_message_box">
            <img src={comma} alt="Comma" />{" "}
            {/* Provide alt text for the image */}
            <p>
              Reading stories on Brainy Lingo has introduced me to so many new
              genres and words. It's fun to learn how different words fit into
              different contexts, and it's helped me with my creative writing
              too!
            </p>
            <p style={{ fontWeight: "600" }}>
              Mason,
              <span style={{ color: "royalblue", fontWeight: "600" }}>
                {" "}
                11{" "}
              </span>
              Years Old
            </p>
          </div>
        </Slider>
        <p className="mt-5">
          Join the thousands of students who have transformed their vocabulary
          learning with Brainy Lingo. Sign up today and start your journey to
          vocabulary mastery!
        </p>
      </div>
    </div>
  );
};

export default LandingCommunity;
