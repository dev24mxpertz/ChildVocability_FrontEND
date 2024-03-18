import { Link, useNavigate } from "react-router-dom";
import LandingNav from "../LayoutPage/LandingNav";
import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SignUp_user } from "../../store/Actions/authActions";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMatch, setPasswordMatch] = useState(true);
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Password === ConfirmPassword && isCheckboxChecked) {
      console.log("dispatch  -----------------");
      dispatch(
        SignUp_user({
          Username,
          Email,
          Password,
        })
      );
    } else {
      setPasswordMatch(false);
    }
  };

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // console.log(isAuthenticated);
  const userType = useSelector((state) => state.auth.userType);
  // console.log(userType);

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
      navigate("/SignUp");
    }
  }, [isAuthenticated, userType, navigate]);
  return (
    <>
      <LandingNav />
      <div className="SignUp_div col-md-12">
        <h3>Create an account</h3>
        <form className="Signup_form" onSubmit={handleSubmit}>
          <h6 className="text-start">Name</h6>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control inputSignup"
              placeholder="Name"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <h6 className="text-start mt-3">Email</h6>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-envelope"></i>
            </span>
            <input
              type="Email"
              className="form-control inputSignup"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="Create a Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p className="text-start">
            Password must be minimum of 8 characters and must include at least
            one uppercase letter, one number and one special character.
          </p>
          <h6 className="text-start mt-3">Confirm Password</h6>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="Password"
              className="form-control inputSignup"
              placeholder="Confirm Password"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {!isPasswordMatch && (
            <p className="text-danger">
              Password and Confirm Password do not match.
            </p>
          )}
          <div className="form-check mt-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={(e) => setCheckboxChecked(e.target.checked)}
            />
            <p className="mx-3">
              You agree to ChildVocability <Link>Terms of Service</Link> and{" "}
              <Link>Private Policy</Link>
            </p>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={!isPasswordMatch || !isCheckboxChecked}
          >
            Create Account
          </button>
        </form>
        <div className="linediv ">
          <div className="linediv_padding"></div>
          <span>or continue with</span>
          <div className="linediv_padding"></div>
        </div>
        <div className="linediv ">
          <span>
            Already have an account? <Link to="/SignIn">Login</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default SignUp;
