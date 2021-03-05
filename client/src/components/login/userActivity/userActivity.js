import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../Redux/user";
import PersonalData from "../User/PersonalData";

const UserActivity = ({ history }) => {
  const usuario = useSelector((store) => store.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!usuario.id) {
      history.push("/");
    }
  }, [usuario]);

  return (
    <BrowserRouter>
      <h1
        style={{
          textAlign: "center",
          marginTop: "35px",
          fontFamily: "fantasy",
        }}
      >
        User Panel
      </h1>

      <div
        style={{
          height: "130px",
          backgroundColor: "black",
          color: "white",
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div style={{ padding: "15px 15px 15px 15px", color: "white" }}>
          <div>
            <Link to="/PersonalData">
              {" "}
              <h4 style={{ color: "white", textAlign: "center", fontSize:'40px' }}>
                Profile
              </h4>{" "}
            </Link>
          </div>
          <div>
            <Link to="/" onClick={() => dispatch(logoutUser())}>
              <h4 style={{ color: "white", textAlign: "center", fontSize:'40px' }}>Logout</h4>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Route exact path="/PersonalData" component={PersonalData} />
      </div>
    </BrowserRouter>
  );
};

export default UserActivity;
