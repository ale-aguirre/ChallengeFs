import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { getUsers, deleteUser } from "../../../Redux/user";
import Button from "@material-ui/core/Button";

export default function NewAdmin() {

  const dispatch = useDispatch();
  const usersList = useSelector((store) => store.user.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [usersList]);

  const handleUpdate = async (id) => {
    if (
      window.confirm("¿Esta seguro que quiere asignarlo como ADMINISTRADOR?")
    ) {
      const { data } = await axios.put(
        `http://localhost:4000/auth/promote/${id}`
      );

      alert("asigned new Admin");
    }
  };

  const handleChange = async (id) => {
    if (
      window.confirm(
        "Are you sure do you want remove admin permision?"
      )
    ) {
      const { data } = await axios.put(
        `http://localhost:4000/auth/change/${id}`
      );

      alert("This user is not longer Admin");
    }
  };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure do you want delete this User?")) {
      const { data } = await axios.delete(`http://localhost:4000/users/${id}`);

      alert("User deleted");
    }
  };

  return (
    <div>
      {usersList && usersList[0] && (
        <div>
          <h5>USERS</h5>
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">ROL</th>
              </tr>
            </thead>
            <tbody>
              {usersList &&
                usersList.map((e) => (
                  <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{usersList && e.isAdmin === true ? "ADMIN" : "USER"}</td>
                    <td scope="col">
                      <td>
                        {e.isAdmin ? (
                          <Link to="/admin"></Link>
                        ) : (
                          <Link to="/"></Link>
                        )}
                        {/* {usersList && e.isAdmin === true ? "ADMIN" : null } */}
                      </td>{" "}
                      <td>
                        <span> </span>
                        {!e.isAdmin ? (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleUpdate(e.id)}
                          >
                            DO ADMIN
                          </Button>
                        ) : null}

                        <span> </span>

                        {e.isAdmin ? (
                          <Button
                            variant="contained"
                            color="dark"
                            onClick={() => handleChange(e.id)}
                          >
                            DELETE ADMIN
                          </Button>
                        ) : null}

                        <span> </span>

                        {e.id ? (
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => handleDelete(e.id)}
                          >
                            DELETE USER
                          </Button>
                        ) : null}
                      </td>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
