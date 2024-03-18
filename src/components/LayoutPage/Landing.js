import React, { useEffect } from "react";
import "./Landing.css";
import LandingHome from "./LandingHome";
import LandingNav from "./LandingNav";
import LandingContent from "./LandingContent";
import LandingCommunity from "./LandingCommunity";
import LandingAbout from "./LandingHowitWorks";
import LandingAboutCriteria from "./LandingAboutCriteria";
import LandingPricing from "./LandingPricing";
import LandingBanner from "./LandingBanner";
import LandingQuestionPage from "./LandingQuestionPage";
import LandingFooter from "./LandingFooter";
import LandingWhyBrain from "./LandingWhyBrain";
import LandingWhyBrainCriteria from "./LandingWhyBrainCriteria";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // console.log(isAuthenticated);
  const navigate = useNavigate();
  const userType = useSelector((state) => state.auth.userType);
  // console.log(userType);

  useEffect(() => {
    if (isAuthenticated > 0) {
      switch (userType) {
        case "student":
          navigate("/Home");
          break;
        case "admin":
          navigate("/Admin");
          break;
        default:
          navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [isAuthenticated, userType, navigate]);
  return (
    <div>
      <LandingNav />
      <LandingHome id="Home" />
      <LandingWhyBrain id="Why_Brainy_Lingo" />
      <LandingWhyBrainCriteria id="Features" />
      <LandingAbout id="How_it_works" />
      <LandingAboutCriteria />
      <LandingContent id="About_us" />
      <LandingCommunity id="Testimonials" />
      <LandingPricing ID="Pricing" />
      <LandingQuestionPage ID="FAQ" />
      <LandingFooter />
    </div>
  );
};

export default Landing;
