import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { async_removeuser } from "../store/Actions/authActions";

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SignoutHandler = () => {
    dispatch(async_removeuser());
  };

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/Admin") {
      navigate("/Admin/Admin-Home");
    }
  }, [navigate]);

  const AdminNavigatorHandler = () => {
    navigate("/Admin/Admin-Home");
  };

  return (
    <div className="col-md-12  bgofadminmain vh-100 d-flex">
      <div className="col-md-2 color-layout p-2 borderradiusleftadmin ">
        <div
          onClick={AdminNavigatorHandler}
          style={{ cursor: "pointer" }}
          className="w-100  p-2"
        >
          <h6 className="text-light">Welcome to Admin Panel</h6>
          <h6 className="text-light">of</h6>
          <h4 className="text-light">Child Vocability</h4>
        </div>
        <div className="w-100  mt-2 d-flex admin_links_box_padding">
          <span className="fs-6 text-light">
            <i class="bi bi-house-fill"></i>
          </span>
          <Link
            to="/Admin/Admin-Home"
            className="text-decoration-none fs-6 mx-3 text-light"
          >
            Dashboard
          </Link>
        </div>
        <div className="w-100  mt-2 d-flex admin_links_box_padding">
          <span className="fs-6 text-light">
            <i class="bi bi-house-fill"></i>
          </span>
          <Link
            to="/Admin/Admin-Fantasy"
            className="text-decoration-none fs-6 mx-3 text-light"
          >
            Fantasy
          </Link>
        </div>
        <div className="w-100  mt-2 d-flex admin_links_box_padding">
          <span className="fs-6 text-light">
            <i class="bi bi-house-fill"></i>
          </span>
          <Link
            to="/Admin/Admin-Adventure"
            className="text-decoration-none fs-6 mx-3 text-light"
          >
            Adventure
          </Link>
        </div>
        <div className="w-100  mt-2 d-flex admin_links_box_padding">
          <span className="fs-6 text-light">
            <i class="bi bi-house-fill"></i>
          </span>
          <Link
            to="/Admin/Admin-Mystery"
            className="text-decoration-none fs-6 mx-3 text-light"
          >
            Mystery
          </Link>
        </div>
        <div className="w-100  mt-2 d-flex admin_links_box_padding">
          <span className="fs-6 text-light">
            <i class="bi bi-house-fill"></i>
          </span>
          <Link
            to="/Admin/Admin-ScienceFiction"
            className="text-decoration-none fs-6 mx-3 text-light"
          >
            Science Fiction
          </Link>
        </div>
        <div className="w-100  mt-2 d-flex admin_links_box_padding">
          <span className="fs-6 text-light">
            <i class="bi bi-house-fill"></i>
          </span>
          <Link
            to="/Admin/Admin-HistoryFiction"
            className="text-decoration-none fs-6 mx-3 text-light"
          >
            History Fiction
          </Link>
        </div>
        <div className="w-100  mt-2 d-flex admin_links_box_padding">
          <span className="fs-6 text-light">
            <i class="bi bi-house-fill"></i>
          </span>
          <Link
            to="/Admin/Admin-Sportification"
            className="text-decoration-none fs-6 mx-3 text-light"
          >
            Sportification
          </Link>
         
        </div>
        <div className="w-100  mt-2 d-flex admin_links_box_padding">
          <span className="fs-6 text-light">
            <i class="bi bi-house-fill"></i>
          </span>
         <Link
            to="/Admin/Admin-DailyQuiz"
            className="text-decoration-none fs-6 mx-3 text-light"
          >
            Daily Quiz
          </Link>
        </div>
        <button
          onClick={SignoutHandler}
          className="btn btn-outline-light w-75 mx-3 mt-2 d-flex justify-content-start admin_links_box_padding"
        >
          <i class="bi bi-box-arrow-right mx-3"></i>
          Logout
        </button>
      </div>
      <div className="col-md-10  bg-light p-2  borderradiusrightadmin flexoutlet ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
