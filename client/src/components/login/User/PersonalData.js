import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function PersonalData() {
  const classes = useStyles();
  const usuario = useSelector((store) => store.user.user);

  return (
    <div>
      <h1>Mis datos</h1>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">ID USUARIO</th>
            <th scope="col">CONTRASEÑA</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{usuario.name}</td>
            <td>{usuario.email}</td>
            <td>{usuario.id}</td>
            <td>{usuario.password ? "**" : null}</td>
            <td scope="col"></td>
          </tr>
        </tbody>

      </table>
    </div>
  );
}

export default PersonalData;
