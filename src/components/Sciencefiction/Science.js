import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllscience,
  fetchCompletedScience,
  fetchInProgressscience,
  fetchNewscience,
} from "../../store/Actions/storyActions";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

const Science = () => {
  const dispatch = useDispatch();
  const fantasys = useSelector((state) => state.Story.Allscience);
  // console.log(fantasys);
  useEffect(() => {
    dispatch(fetchAllscience());
  }, [dispatch]);

  const navigate = useNavigate();

  const Sciencetab = (id) => {
    navigate(`/Sciencetab/${id}`);
  };

  const getStatusButtonColor = (status) => {
    switch (status) {
      case "New":
        return "#87CEEB";
      case "Completed":
        return "#28a745";
      case "In Progress":
        return "#ffc107";
      case "Not Completed":
        return "#87CEEB";
      case "Not completed":
        return "#87CEEB";
      default:
        return "#007bff"; // Default button color
    }
  };

  const All_Story_Handler = () => {
    dispatch(fetchAllscience());
  };

  const Completed_Story_Handler = () => {
    dispatch(fetchCompletedScience());
  };

  const InProgress_Story_Handler = () => {
    dispatch(fetchInProgressscience());
  };

  const NotStarted_Story_Handler = () => {
    dispatch(fetchNewscience());
  };
  return (
    <div className="mainbox">
      <div className="headerdiv">
        <Header />
      </div>
      <div className="Stories-body">
        <div className="storiesnadbutton">
          <div>
            <h4 style={{ fontWeight: 800 }}>Science Fiction Stories</h4>
          </div>

          <div className="status_button_div">
            <button onClick={All_Story_Handler} className="All_btn">
              Clear All
            </button>
            <button onClick={Completed_Story_Handler} className="Complete_btn">
              Completed
            </button>
            <button onClick={InProgress_Story_Handler} className="Pending_btn">
              In Progress
            </button>
            <button
              onClick={NotStarted_Story_Handler}
              className="Incomplete_btn"
            >
              New
            </button>
          </div>
        </div>
        <div className="container">
          {fantasys?.length > 0 ? (
            fantasys?.map((data) => (
              <div className="card-style" key={data._id}>
                <div>
                  <div className="card-upper">
                    <img
                      src={` https://ik.imagekit.io/dev24/${data?.Image}`}
                      className="card-image"
                      alt={`${data.Title}`}
                    />
                  </div>
                  <h6
                    onClick={() => Sciencetab(data?._id)}
                    className="tab-h6-style"
                  >
                    {data?.Title}
                  </h6>
                </div>
                <button
                  className="card-btn-lower"
                  style={{
                    backgroundColor: getStatusButtonColor(data?.Status),
                  }}
                >
                  {data?.Status}
                </button>
              </div>
            ))
          ) : (
            <p>No Fantasy are available right now!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Science;
