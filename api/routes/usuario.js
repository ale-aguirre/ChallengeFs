const express = require("express");

const Usuario = require("../models/user");

const app = express();

app.get("/usuarios", async (req, res) => {
  const data = await Usuario.getUsuarios()
    .then((data) => {
      return {
        data,
      };
    })
    .catch((e) => {
      console.log("el error", e.message);
      return e;
    });

  console.log(`los usuarios del select ${data}`);

  if (!data) {
    res.status(400).json({
      ok: false,
      err: "no existe informacion",
    });
  }

  res.status(200).json({
    ok: true,
    data,
  });
});

module.exports = app;
