import React, { useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Stories from "./components/Fantasy/Fantasy";
import Adventure from "./components/Adventure/Adventure";
import Science from "./components/Sciencefiction/Science";
import Mystery from "./components/Mystery/Mystery";
import Sport from "./components/Sportfiction/Sport";
import History from "./components/History/History";
import Fantasytab from "./components/Fantasy/Fantasytab";
import Adventuretab from "./components/Adventure/Adventuretab";
import Historytab from "./components/History/Historytab";
import Mysterytab from "./components/Mystery/Mysterytab";
import Sportstab from "./components/Sportfiction/Sportstab";
import Sciencetab from "./components/Sciencefiction/Sciencetab";
import Wordexploreinnertab from "./components/Adventure/wordexploreinnertab";
import Questinnertab from "./components/Adventure/Questinnertab";
import Wordstoryinnertab from "./components/Adventure/Wordstoryinnertab";
import Fantasywordexploreinnertab from "./components/Fantasy/Fantasywordexploreinnertab";
import Fantasyquestinnertab from "./components/Fantasy/Fantasyquestinnertab";
import Fantasywordstoryinnertab from "./components/Fantasy/Fantasywordstoryinnertab";
import Mysterywordexploreinnertab from "./components/Mystery/Mysterywordexploreinnertab";
import Mysteryquestinnertab from "./components/Mystery/Mysteryquestinnertab";
import Mysterywordstoryinnertab from "./components/Mystery/Mysterywordstoryinnertab";
import Sportswordexploreinnertab from "./components/Sportfiction/Sportswordexploreinnertab";
import Sportsquestinnertab from "./components/Sportfiction/Sportsquestinnertab";
import Sportswordstoryinnertab from "./components/Sportfiction/Sportswordstoryinnertab";
import Sciencewordexploreinnertab from "./components/Sciencefiction/Sciencewordexploreinnertab";
import Sciencequestinnertab from "./components/Sciencefiction/Sciencequestinnertab";
import Sciencewordstoryinnertab from "./components/Sciencefiction/Sciencewordstoryinnertab";
import Historywordexploreinnertab from "./components/History/Historywordexploreinnertab";
import Historyquestinnertab from "./components/History/Historyquestinnertab";
import Historywordstoryinnertab from "./components/History/Historywordstoryinnertab";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";
import AdminHome from "./components/Admin-compoents/AdminHome";
import AdminFantasy from "./components/Admin-compoents/AdminFantasy/AdminFantasy";
import AdminAdventure from "./components/Admin-compoents/AdminAdventure/AdminAdventure";
import AdminMystery from "./components/Admin-compoents/AdminMystery/AdminMystery";
import AdminScienceFiction from "./components/Admin-compoents/AdminScience/AdminScienceFiction";
import AdminHistoryFiction from "./components/Admin-compoents/AdminHistory/AdminHistoryFiction";
import AdminSportification from "./components/Admin-compoents/AdminSport/AdminSportification";
import AdminADDFantasy from "./components/Admin-compoents/AdminFantasy/AdminADDFantasy";
import AdminADDAdventure from "./components/Admin-compoents/AdminAdventure/AdminADDAdventure";
import AdminADDMystery from "./components/Admin-compoents/AdminMystery/AdminADDMystery";
import AdminADDScienceFiction from "./components/Admin-compoents/AdminScience/AdminADDScienceFiction";
import AdminADDHistoryFiction from "./components/Admin-compoents/AdminHistory/AdminADDHistoryFiction";
import AdminADDSportification from "./components/Admin-compoents/AdminSport/AdminADDSportification";
import AdminEDITFantasy from "./components/Admin-compoents/AdminFantasy/AdminEDITFantasy";
import AdminEDITAdventure from "./components/Admin-compoents/AdminAdventure/AdminEDITAdventure";
import AdminEDITMystery from "./components/Admin-compoents/AdminMystery/AdminEDITMystery";
import AdminEDITScienceFiction from "./components/Admin-compoents/AdminScience/AdminEDITScienceFiction";
import AdminEDITHistoryFiction from "./components/Admin-compoents/AdminHistory/AdminEDITHistoryFiction";
import AdminEDITSportification from "./components/Admin-compoents/AdminSport/AdminEDITSportification";
import Landing from "./components/LayoutPage/Landing";
import SignUp from "./components/Signup/SignUp";
import ProtectedRoute from "./helpers/ProtectedRoute";
import { useDispatch } from "react-redux";
import { async_loaduser } from "./store/Actions/authActions";
import SignIn from "./components/Signup/SignIn";
import ForgetPassword from "./components/Signup/ForgetPassword";
import FindUsername from "./components/Signup/FindUsername";
import ResetPassword from "./components/Signup/ResetPassword";
import DailyQuiz from "./components/DailyQuiz/DailyQuiz";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import AdminDailyQuiz from "./components/Admin-compoents/AdminDailyQuiz/AdminDailyQuiz";
import AdminAddDailyQuiz from "./components/Admin-compoents/AdminDailyQuiz/AdminAddDailyQuiz";
import AdminEditDailyQuiz from "./components/Admin-compoents/AdminDailyQuiz/AdminEditDailyQuiz";

const App = () => {
  const dispatch = useDispatch();

  // load user
  useEffect(() => {
    dispatch(async_loaduser());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/FindUsername" element={<FindUsername />} />
        <Route path="/Forgot-Password" element={<ForgetPassword />} />
        <Route path="/Reset-Password" element={<ResetPassword />} />
        <Route
          path="/Home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Daily_Quiz"
          element={
            <ProtectedRoute>
              <DailyQuiz />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Leader_Board"
          element={
            <ProtectedRoute>
              <LeaderBoard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Fantasy"
          element={
            <ProtectedRoute>
              <Stories />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Fantasytab"
          element={
            <ProtectedRoute>
              <Fantasytab />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Fantasytab/:id"
          element={
            <ProtectedRoute>
              <Fantasytab />
            </ProtectedRoute>
          }
        >
          <Route
            path="Fantasywordexplore"
            element={
              <ProtectedRoute>
                <Fantasywordexploreinnertab />
              </ProtectedRoute>
            }
          />
          <Route
            path="FantasyQuestinnertab"
            element={
              <ProtectedRoute>
                <Fantasyquestinnertab />
              </ProtectedRoute>
            }
          />
          <Route
            path="Fantasywordstoryinnertab"
            element={
              <ProtectedRoute>
                <Fantasywordstoryinnertab />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="/Adventure"
          element={
            <ProtectedRoute>
              <Adventure />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Adventuretab/:id"
          element={
            <ProtectedRoute>
              <Adventuretab />
            </ProtectedRoute>
          }
        >
          <Route
            path="wordexplore"
            element={
              <ProtectedRoute>
                <Wordexploreinnertab />
              </ProtectedRoute>
            }
          />
          <Route
            path="Questinnertab"
            element={
              <ProtectedRoute>
                <Questinnertab />
              </ProtectedRoute>
            }
          />
          <Route
            path="wordstoryinnertab"
            element={
              <ProtectedRoute>
                <Wordstoryinnertab />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="/Mystery"
          element={
            <ProtectedRoute>
              <Mystery />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Mysterytab/:id"
          element={
            <ProtectedRoute>
              <Mysterytab />
            </ProtectedRoute>
          }
        >
          <Route
            path="Mysterywordexplore"
            element={<Mysterywordexploreinnertab />}
          />
          <Route
            path="MysteryQuestinnertab"
            element={<Mysteryquestinnertab />}
          />
          <Route
            path="Mysterywordstoryinnertab"
            element={<Mysterywordstoryinnertab />}
          />
        </Route>
        <Route
          path="/Sport"
          element={
            <ProtectedRoute>
              <Sport />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Sportstab/:id"
          element={
            <ProtectedRoute>
              <Sportstab />
            </ProtectedRoute>
          }
        >
          <Route
            path="Sportswordexplore"
            element={<Sportswordexploreinnertab />}
          />
          <Route path="SportsQuestinnertab" element={<Sportsquestinnertab />} />
          <Route
            path="Sportswordstoryinnertab"
            element={<Sportswordstoryinnertab />}
          />
        </Route>
        <Route
          path="/Science"
          element={
            <ProtectedRoute>
              <Science />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Sciencetab/:id"
          element={
            <ProtectedRoute>
              <Sciencetab />
            </ProtectedRoute>
          }
        >
          <Route
            path="Sciencewordexplore"
            element={<Sciencewordexploreinnertab />}
          />
          <Route
            path="ScienceQuestinnertab"
            element={<Sciencequestinnertab />}
          />
          <Route
            path="Sciencewordstoryinnertab"
            element={<Sciencewordstoryinnertab />}
          />
        </Route>
        <Route
          path="/History"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Historytab/:id"
          element={
            <ProtectedRoute>
              <Historytab />
            </ProtectedRoute>
          }
        >
          <Route
            path="Historywordexplore"
            element={<Historywordexploreinnertab />}
          />
          <Route
            path="HistoryQuestinnertab"
            element={<Historyquestinnertab />}
          />
          <Route
            path="Historywordstoryinnertab"
            element={<Historywordstoryinnertab />}
          />
        </Route>
        <Route
          path="/Admin"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/Admin/Admin-Home" element={<AdminHome />} />
          <Route path="/Admin/Admin-Fantasy" element={<AdminFantasy />} />
          <Route
            path="/Admin/Admin-Fantasy/Admin-ADDFantasy"
            element={<AdminADDFantasy />}
          />
          <Route
            path="/Admin/Admin-Fantasy/Admin-EDITFantasy/:id"
            element={<AdminEDITFantasy />}
          />
          <Route path="/Admin/Admin-Adventure" element={<AdminAdventure />} />
          <Route
            path="/Admin/Admin-Adventure/Admin-ADDAdventure"
            element={<AdminADDAdventure />}
          />
          <Route
            path="/Admin/Admin-Adventure/Admin-EDITAdventure/:id"
            element={<AdminEDITAdventure />}
          />
          <Route path="/Admin/Admin-Mystery" element={<AdminMystery />} />
          <Route
            path="/Admin/Admin-Mystery/Admin-ADDMystery"
            element={<AdminADDMystery />}
          />
          <Route
            path="/Admin/Admin-Mystery/Admin-EDITMystery/:id"
            element={<AdminEDITMystery />}
          />
          <Route
            path="/Admin/Admin-ScienceFiction"
            element={<AdminScienceFiction />}
          />
          <Route
            path="/Admin/Admin-ScienceFiction/Admin-ADDScienceFiction"
            element={<AdminADDScienceFiction />}
          />
          <Route
            path="/Admin/Admin-ScienceFiction/Admin-EDITScienceFiction/:id"
            element={<AdminEDITScienceFiction />}
          />
          <Route
            path="/Admin/Admin-HistoryFiction"
            element={<AdminHistoryFiction />}
          />
          <Route
            path="/Admin/Admin-HistoryFiction/Admin-ADDHistoryFiction"
            element={<AdminADDHistoryFiction />}
          />
          <Route
            path="/Admin/Admin-HistoryFiction/Admin-EDITHistoryFiction/:id"
            element={<AdminEDITHistoryFiction />}
          />
          <Route
            path="/Admin/Admin-Sportification"
            element={<AdminSportification />}
          />
          <Route
            path="/Admin/Admin-Sportification/Admin-ADDSportification"
            element={<AdminADDSportification />}
          />
          <Route
            path="/Admin/Admin-Sportification/Admin-EDITSportification/:id"
            element={<AdminEDITSportification />}
          />

          <Route path="/Admin/Admin-DailyQuiz" element={<AdminDailyQuiz />} />
          <Route
            path="/Admin/Admin-DailyQuiz/Add-DailyQuiz"
            element={<AdminAddDailyQuiz />}
          />
          <Route
            path="/Admin/Admin-DailyQuiz/Admin-EDITDailyQuiz/:id"
            element={<AdminEditDailyQuiz />}
          />
        </Route>
      </Routes>
      <ToastContainer
        style={{
          zIndex: 9999,
          position: "fixed", // Use 'fixed' instead of 'absolute'
          top: 0,
          right: 0,
        }}
      />
    </div>
  );
};

export default App;
