import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Signin_user } from "../../store/Actions/authActions";
import LandingNav from "../LayoutPage/LandingNav";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Email, setEmail] = useState(""); // Changed from Username to Email
  const [Password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("dispatch  -----------------");
    dispatch(
      Signin_user({
        Email, // Changed from Username to Email
        Password,
      })
    );
  };

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userType = useSelector((state) => state.auth.userType);

  useEffect(() => {
    if (isAuthenticated > 0) {
      switch (userType) {
        case "student":
          navigate("/Home");
          break;
        case "admin":
          navigate("/Admin/Admin-Home");
          break;
        default:
          navigate("/");
      }
    } else {
      navigate("/SignIn");
    }
  }, [isAuthenticated, userType, navigate]);

  return (
    <>
      <LandingNav />
      <div className="SignUp_div col-md-12">
        <h3>SignIn</h3>
        <form className="Signup_form" onSubmit={handleSubmit}>
          <h6 className="text-start">Email</h6> {/* Changed from Username to Email */}
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-envelope"></i> {/* Changed icon to envelope */}
            </span>
            <input
              type="email" // Changed input type to email
              className="form-control inputSignup"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)} // Changed from setUsername to setEmail
              required
            />
          </div>
          <h6 className="text-start mt-3">Password</h6>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-lock"></i>
            </span>
            <input
              type="Password"
              className="form-control inputSignup"
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">
            SignIn Account
          </button>
        </form>
        <div className="linediv ">
          <div className="linediv_padding"></div>
          <span>or continue with</span>
          <div className="linediv_padding"></div>
        </div>
        <div className="linediv ">
          <span>
            Forgot Password? <Link to="/FindUsername">Recover now</Link>
          </span>
        </div>
        <div className="linediv ">
          <span>
            Don't have an account? <Link to="/SignUp">SignUp</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default SignIn;
