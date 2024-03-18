import React from "react";
import contentboximg1 from "../../image/contentboximg1.png";

const LandingPricing = () => {
  return (
    <div id="Pricing" className="LandingPricing_div">
      <h3>Select Your Perfect Plan</h3>
      <p>
        Choose from our flexible subscription plans that fit your budget and
        learning needs
      </p>
      <div className="Pricing_div mt-4">
        <div className="BasicSeller_div">
          <div className="BasicSeller_inner_div">
            <div className="BasicSeller_inner_upper_div">
              <h4>Monthly</h4>
              <p>7 days free trial</p>
              <h6>£0.00 / Month{" "}<span className="mx-2"style={{ fontSize: "13px", color: "grey" }}></span></h6>
              <p>Taken as a single payment of £0.00</p>
            </div>
            <button className="btn btn-outline-primary w-100 mt-2 get_started">
              Get Started{" "}
            </button>
          </div>
        </div>
      
        <div className="BasicSeller_div2 mx-5">
        <div className="BasicSeller_inner_div2">
          <div className="BasicSeller_inner_upper_div2">
            <h4>Yearly</h4>
            <p>7 days free trial</p>
            <h6>£0.00 / Month <span className="badge">Best Value</span></h6>
            <p>Taken as a single payment of £0.00</p>
          </div>
          
          <button className="btn btn-primary w-100 mt-2 get_started">
            Get Started
          </button>
        </div>
      </div>
      
        <div className="BasicSeller_div">
          <div className="BasicSeller_inner_div">
            <div className="BasicSeller_inner_upper_div">
            <h4>Quarterly</h4>
            <p>7 days free trial</p>
            <h6>£0.00 / Month{" "}<span className="mx-2"style={{ fontSize: "13px", color: "grey" }}></span></h6>
            <p>Taken as a single payment of £0.00</p>
            </div>
           
            <button className="btn btn-outline-primary w-100  mt-2 get_started">
              Get Started{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPricing;
