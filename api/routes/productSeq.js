const server = require("express").Router();
const { Product, Category } = require("../db.js");

server.get("/", (req, res, next) => {
  Product.findAll({
    include: Category,
  })
    .then((products) => {
      res.send(products);
    })
    .catch(next);
});

server.post("/create", (req, res) => {
  const { name, description, price, stock, image } = req.body;
  Product.findOrCreate({
    where: {
      name,
      description,
      price,
      stock,
      image,
    },
  })
    .then((obj) => {
      res.status(200).json(obj);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

server.put("/:id", (req, res) => {
  // Es un put a /products/update/:id
  const id = req.params.id;
  const { name, description, price, stock, image, category } = req.body;
  Product.update(
    {
      name,
      description,
      price,
      stock,
      image,
      category,
    },
    { where: { id } }
  )
    .then((product) => {
      res.status(200).send("Modificado correctamente");
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


//CREAR RUTA PARA ELIMINAR PRODUCTO
server.delete("/:id", (req, res) => {
  //modifiqué /:id, el products está en el index
  const id = req.params.id;
  Product.destroy({
    where: { id: id },
  })
    .then((id) => {
      res.status(200).send("Producto" + id + "eliminado"); //  Agregué status//REVISAR CONSOLOGUEO, NO ACTUALIZA ID
    })
    .catch(function(err) {
      console.log("delete failed with error: " + err);
      // handle error;
    });
});

module.exports = server;

// {
//     "name": "hola",
//     "description": "holaaa",
//     "price": 999,
//     "stock": 324,
//     "image": "sadas",
//     "category": [1,2,3,5]
// }
