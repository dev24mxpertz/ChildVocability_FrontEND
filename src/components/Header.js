import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import fantasylogo from "../image/fantasy.png";
import Adventurelogo from "../image/Adventure.png";
import Mysterylogo from "../image/Mystery.png";
import Sciencelogo from "../image/ScienceFiction.png";
import Historicallogo from "../image/historicalfiction.png";
import Sportslogo from "../image/Sports.png";
import { useDispatch } from "react-redux";
import { async_removeuser } from "../store/Actions/authActions";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [BigResponsiveHeader, setBigResponsiveHeader] = useState(false);
  const [ResponsiveHeader, setResponsiveHeader] = useState(false);
  const dispatch = useDispatch();
  const SignoutHandler = () => {
    dispatch(async_removeuser());
  };

  let isActive = (pathname) => location.pathname.includes(pathname);

  const homeHandler = () => {
    navigate("/");
  };

  const FantsyHandler = () => {
    navigate("/Fantasy");
  };
  const AdventureHandler = () => {
    navigate("/Adventure");
  };
  const MysteryHandler = () => {
    navigate("/Mystery");
  };
  const ScienceHandler = () => {
    navigate("/Science");
  };
  const HistoricalHandler = () => {
    navigate("/History");
  };
  const SportsHandler = () => {
    navigate("/Sport");
  };

  const DailyQuiznavigator = () => {
    navigate('/Daily_Quiz')
  }

  const Leader_Boardnavigator = () => {
    navigate("/Leader_Board")
  }
  const menuHandler = () => {
    setResponsiveHeader(!ResponsiveHeader);
  };

  const BigMenuHandler = () => {
    setBigResponsiveHeader(!BigResponsiveHeader);
  };

  return (
    <div className="Stories-header">
      <div className="stories-header-left">
        <button
          onClick={homeHandler}
          className={`button-header-1 ${isActive("/") ? "active" : ""}`}
        >
          Home
        </button>
        <div className="headline-arraow">
          <div className="arrow_div">
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
        <button className="button-header-1">Genre</button>
        <div className="headline-arraow">
          <div className="arrow_div">
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
        <button onClick={() => Leader_Boardnavigator()}  className="button-header-1">
          Leader Board
        </button>
        <div className="headline-arraow">
          <div className="arrow_div">
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
        <button onClick={() => DailyQuiznavigator()} className="button-header-1">Daily Quiz</button>
        <div className="headline-arraow">
          <div className="arrow_div">
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
        <button onClick={() => BigMenuHandler()} className="button-header-1">
          <span style={{ color: "white", fontSize: "30px" }}>
            <i class="bi bi-list"></i>
          </span>
        </button>
        <button onClick={SignoutHandler} className="button-header-1">
          Logout
        </button>
      </div>
      <div className={`stories-header-left_2 visible }`}>
        <button
          onClick={FantsyHandler}
          className={`button-header-2 ${isActive("/Fantasy") ? "active" : ""}`}
        >
          <img
            style={{ marginRight: "20px" }}
            width={30}
            src={fantasylogo}
            alt={fantasylogo}
          />
          Fantasy
        </button>
        {/* <div className='headline-arraow-2'>
                    <div className='arrow_div-2'>
                        <i className="bi bi-chevron-right"></i>
                    </div>
                </div> */}
        <button
          onClick={AdventureHandler}
          className={`button-header-2 ${
            isActive("/Adventure") ? "active" : ""
          }`}
        >
          <img
            style={{ marginRight: "20px" }}
            width={30}
            src={Adventurelogo}
            alt={Adventurelogo}
          />
          Adventure
        </button>
        {/* <div className='headline-arraow-2'>
                    <div className='arrow_div-2'>
                        <i className="bi bi-chevron-right"></i>
                    </div>
                </div> */}
        <button
          onClick={MysteryHandler}
          className={`button-header-2 ${isActive("/Mystery") ? "active" : ""}`}
        >
          <img
            style={{ marginRight: "20px" }}
            width={30}
            src={Mysterylogo}
            alt={Mysterylogo}
          />
          Mystery
        </button>
        {/* <div className='headline-arraow-2'>
                    <div className='arrow_div-2'>
                        <i className="bi bi-chevron-right"></i>
                    </div>
                </div> */}
        <button
          onClick={ScienceHandler}
          className={`button-header-2 ${
            isActive("/Science") || isActive("/Science") ? "active" : ""
          }`}
        >
          <img
            style={{ marginRight: "20px" }}
            width={30}
            src={Sciencelogo}
            alt={Sciencelogo}
          />
          Science
        </button>
        {/* <div className='headline-arraow-2'>
                    <div className='arrow_div-2'>
                        <i className="bi bi-chevron-right"></i>
                    </div>
                </div> */}
        <button
          onClick={HistoricalHandler}
          className={`button-header-2 ${isActive("/History") ? "active" : ""}`}
        >
          <img
            style={{ marginRight: "20px" }}
            width={30}
            src={Historicallogo}
            alt={Historicallogo}
          />
          History
        </button>
        {/* <div className='headline-arraow-2'>
                    <div className='arrow_div-2'>
                        <i className="bi bi-chevron-right"></i>
                    </div>
                </div> */}
        <button
          onClick={SportsHandler}
          className={`button-header-2 ${isActive("/Sport") ? "active" : ""}`}
        >
          <img
            style={{ marginRight: "20px" }}
            width={30}
            src={Sportslogo}
            alt={Sportslogo}
          />
          Sports
        </button>
      </div>
      {BigResponsiveHeader ? (
        <div className="stories-header-left_4 visible">
          <button
            onClick={homeHandler}
            className={`button-header-4 ${isActive("/") ? "active" : ""}`}
          >
            Home
          </button>
          <button onClick={() => menuHandler()} className="button-header-4">
            Genre
          </button>
          {ResponsiveHeader ? (
            <div className={`stories-header-left_3 visible }`}>
              <button
                onClick={FantsyHandler}
                className={`button-header-3 ${
                  isActive("/Fantasy") ? "active" : ""
                }`}
              >
                <img
                  style={{ marginRight: "20px" }}
                  width={30}
                  src={fantasylogo}
                  alt={fantasylogo}
                />
                Fantasy
              </button>
              <button
                onClick={AdventureHandler}
                className={`button-header-3 ${
                  isActive("/Adventure") ? "active" : ""
                }`}
              >
                <img
                  style={{ marginRight: "20px" }}
                  width={30}
                  src={Adventurelogo}
                  alt={Adventurelogo}
                />
                Adventure
              </button>
              <button
                onClick={MysteryHandler}
                className={`button-header-3 ${
                  isActive("/Mystery") ? "active" : ""
                }`}
              >
                <img
                  style={{ marginRight: "20px" }}
                  width={30}
                  src={Mysterylogo}
                  alt={Mysterylogo}
                />
                Mystery
              </button>
              <button
                onClick={ScienceHandler}
                className={`button-header-3 ${
                  isActive("/Science") || isActive("/Science") ? "active" : ""
                }`}
              >
                <img
                  style={{ marginRight: "20px" }}
                  width={30}
                  src={Sciencelogo}
                  alt={Sciencelogo}
                />
                Science
              </button>
              <button
                onClick={HistoricalHandler}
                className={`button-header-3 ${
                  isActive("/History") ? "active" : ""
                }`}
              >
                <img
                  style={{ marginRight: "20px" }}
                  width={30}
                  src={Historicallogo}
                  alt={Historicallogo}
                />
                History
              </button>
              <button
                onClick={SportsHandler}
                className={`button-header-3 ${
                  isActive("/Sport") ? "active" : ""
                }`}
              >
                <img
                  style={{ marginRight: "20px" }}
                  width={30}
                  src={Sportslogo}
                  alt={Sportslogo}
                />
                Sports
              </button>
            </div>
          ) : (
            <></>
          )}
          <button onClick={() => Leader_Boardnavigator()} className="button-header-4">Leader Board</button>
          <button onClick={() => DailyQuiznavigator()} className="button-header-4">Daily Quiz</button>
          <button onClick={SignoutHandler} className="button-header-4">
            Logout
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
