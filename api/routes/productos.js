const express = require("express");
const Productos = require("../models/productos");

const app = express();

app.get("/productos", async (req, res) => {
  //funcion asincrona
  const resultado = await Productos.getProductos()
    .then((data) => {
      return {
        data,
      };
    })
    .catch((e) => {
      return e;
    });

  if (!resultado) {
    res.status(400).json({
      ok: false,
      err: "no existe informacion",
    });
  }
  res.status(200).json({
    ok: true,
    resultado,
  });
});

module.exports = app;
