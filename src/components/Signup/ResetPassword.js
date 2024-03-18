import React, { useEffect, useState } from "react";
import LandingNav from "../LayoutPage/LandingNav";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Reset_Password } from "../../store/Actions/authActions";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const FoundedUser = useSelector((state) => state.auth.FoundedUser);
  const id = FoundedUser._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [New_Password, setNew_Password] = useState("");
  const [Confirm_New_Password, setConfirm_New_Password] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (New_Password === Confirm_New_Password) {
      dispatch(Reset_Password({ New_Password, Confirm_New_Password, id }));
    } else {
      toast.error("New Password and Confirm New Password Doesn't Matched");
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
      navigate("/Reset-Password");
    }
  }, [isAuthenticated, userType, navigate]);

  return (
    <>
      <LandingNav />
      <div className="SignUp_div col-md-12">
        <h3>Please Reset Your Password</h3>

        <form className="Signup_form" onSubmit={handleSubmit}>
          <h6 className="text-start">New Password</h6>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control inputSignup"
              placeholder="New Password"
              value={New_Password}
              onChange={(e) => setNew_Password(e.target.value)}
              required
            />
          </div>
          <h6 className="text-start">Confirm New Password</h6>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control inputSignup"
              placeholder="Confirm New Password"
              value={Confirm_New_Password}
              onChange={(e) => setConfirm_New_Password(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-outline-primary mt-3">
            Submit{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
