import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllscience } from "../../../store/Actions/storyActions";
import { DeleteScienceFiction } from "../../../store/Actions/adminActions";

const AdminScienceFiction = () => {
  const fantasies = useSelector((state) => state.Story.Allscience);
  // console.log(fantasies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllscience());
  }, [dispatch]);

  const DeleteHandler = (id) => {
    dispatch(DeleteScienceFiction(id));
  };

  return (
    <div className="w-100 rounded-start-5 overflowdiv">
      <div className="d-flex justify-content-between align-items-center p-3">
        <h6 className="text-dark">ScienceFiction Table</h6>
        <Link
          to="/Admin/Admin-ScienceFiction/Admin-ADDScienceFiction"
          className="btn btn-outline-success"
        >
          Add ScienceFiction
        </Link>
      </div>
      <div className="Meeting_list_style d-flex flex-wrap flex-row p-2">
        <table className="table table-hover table-responsive table-borderless">
          <thead>
            <tr>
              <th>Title</th>
              <th>Wordexplore Storytitle</th>
              <th>Wordexplore Storyitext</th>
              <th>Wordexplore Storyttext</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fantasies.map((fantasy, index) => (
              <tr key={index}>
                <td>{fantasy.Title}</td>
                <td>
                  {fantasy.Wordexplore.map((word, wordindex) => (
                    <span>
                      {`${word.Storytitle},`}
                      <br />
                    </span>
                  ))}
                </td>
                <td>
                  {fantasy.Wordexplore.map((word, wordindex) => (
                    <span>
                      {`${word.Storyitext},`}
                      <br />
                    </span>
                  ))}
                </td>
                <td>
                  {fantasy.Wordexplore.map((word, wordindex) => (
                    <span>
                      {`${word.Storyttext},`}
                      <br />
                    </span>
                  ))}
                </td>
                <td>{fantasy.Status}</td>
                <td>
                  <Link
                    to={`/Admin/Admin-ScienceFiction/Admin-EDITScienceFiction/${fantasy._id}`}
                    className="btn btn-primary"
                  >
                    Edit
                  </Link>
                  <Link
                    onClick={() => DeleteHandler(fantasy._id)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </Link>
                  {/* You can add other action buttons as needed */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminScienceFiction;
