import React, { useEffect, useState } from "react";
import LandingNav from "../LayoutPage/LandingNav";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MatchOTP } from "../../store/Actions/authActions";

const ForgetPassword = () => {
  const FoundedUser = useSelector((state) => state.auth.FoundedUser);
  const Message = useSelector((state) => state.auth.Message);
  const [Otp, setOtp] = useState("");

  // console.log(Message);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(MatchOTP({ FoundedUser, Otp }));
  };


useEffect(() => {
  if (Message !== null && Message.length !== 0) {
    navigate("/Reset-Password");
  }
}, [Message,navigate])





  return (
    <>
      <LandingNav />
      <div className="SignUp_div col-md-12">
        <h3>Please fill the OTP </h3>
        <h6 className="text-start">
          The OTP will be delievered to {FoundedUser.Email}
        </h6>
        <form className="Signup_form" onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="number"
              className="form-control inputSignup"
              placeholder="Otp"
              value={Otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-outline-primary mt-3">Submit </button>
        </form>
        <div className="linediv ">
          <span>
            Don't have an account? <Link to="/SignUp">SignUp</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
