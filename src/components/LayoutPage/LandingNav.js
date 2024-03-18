import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import LogoImage from "../../image/logob.png"

const LandingNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const SignupNavigator = () => {
    navigate("/SignUp");
  };
  const SigninNavigator = () => {
    navigate("/SignIn");
  };

  const landingNavigator = () => {
    navigate("/");
  };

  const scrollTo = (elementId) => {
    // console.log(elementId);
    const targetElement = document.getElementById(elementId);
    // console.log(targetElement);
    if (targetElement) {
      scroll.scrollTo(targetElement.offsetTop - 70, {
        smooth: true,
        duration: 500,
      });
    }
  };

  const handleLinkClick = (elementId) => {
    // console.log(elementId);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollTo(elementId);
      }, 100);
    } else {
      scrollTo(elementId);
    }
  };

  return (
    <div className="LandingNav">
      <div onClick={landingNavigator} className="LandingNav_left_div">
        <img src={LogoImage} class="LogoImage" alt="..."/>
      </div>
      <div className="LandingNav_right_div">
        <ScrollLink
          to="Home"
          onClick={() => handleLinkClick("Home")}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: "pointer" }}
          className="d_center text-decoration-none LandingNav_right_div_link "
          activeClass="active"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="Why_Brainy_Lingo"
          onClick={() => handleLinkClick("Why_Brainy_Lingo")}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: "pointer" }}
          className="d_center text-decoration-none LandingNav_right_div_link "
          activeClass="active"
        >
          Why Brainy Lingo
        </ScrollLink>

        <ScrollLink
        to="How_it_works"
        onClick={() => handleLinkClick("How_it_works")}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        style={{ cursor: "pointer" }}
        className="d_center text-decoration-none LandingNav_right_div_link "
        activeClass="active"
      >
        How it Works
      </ScrollLink>
       
        <ScrollLink
          to="About_us"
          onClick={() => handleLinkClick("About_us")}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: "pointer" }}
          className="d_center text-decoration-none LandingNav_right_div_link "
          activeClass="active"
        >
          About Us
        </ScrollLink>
        <ScrollLink
          to="Testimonials"
          onClick={() => handleLinkClick("Testimonials")}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: "pointer" }}
          className="d_center text-decoration-none LandingNav_right_div_link "
          activeClass="active"
        >
          Testimonials
        </ScrollLink>

        <ScrollLink
          to="Pricing"
          onClick={() => handleLinkClick("Pricing")}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: "pointer" }}
          className="d_center text-decoration-none LandingNav_right_div_link "
          activeClass="active"
        >
          Pricing
        </ScrollLink>

        <ScrollLink
          to="FAQ"
          onClick={() => handleLinkClick("FAQ")}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: "pointer" }}
          className="d_center text-decoration-none LandingNav_right_div_link "
          activeClass="active"
        >
          FAQ
        </ScrollLink>
        <div>
          <button onClick={SignupNavigator} className="btn btn-dark paddingbtn">
            Join the Revolution
          </button>
          <button
            onClick={SigninNavigator}
            className="btn btn-dark mx-2 paddingbtn"
          >
            SignIn
          </button>
        </div>
      </div>
      <div className="LandingNav_third_div">
        <div>
          <button onClick={SignupNavigator} className="btn btn-dark paddingbtn">
            Join the Revolution
          </button>
          <button
            onClick={SigninNavigator}
            className="btn btn-dark mx-2 paddingbtn"
          >
            SignIn
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default LandingNav;
