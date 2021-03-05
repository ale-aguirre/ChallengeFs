const server = require("express").Router();
const { Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const { User } = require("../db.js");

//Register (creación de usuario) ---> funcionando
server.post("/", (req, res) => {

  const { email, password, name } = req.body;
  User.create({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
  }).catch((error) => {
      res.status(400).json(error);
    });
});

//Delete user ---->funcionando
server.delete("/:id", (req, res) => {

  const id = req.params.id;
  User.destroy({
    where: { id: id },
  })
    .then((id) => {
      res.status(200).send("Usuario " + id + " eliminado"); //  Agregué status//REVISAR CONSOLOGUEO, NO ACTUALIZA ID
    })
    .catch(function (err) {
      console.log("delete failed with error: " + err);
      // handle error;
    });
});

//para traer todos los usuarios  ---->funcionando
server.get("/usuarios", (req, res, next) => {
  // GET a /users/usuarios
  User.findAll()
    .then((users) => {
      res.status(201).send(users);
    })
    .catch(next);
});

server.get("/usuario/:id", (req, res) => {
  // GET a /users/usuario/:id (TRAE 1 SOLO USUARIO)
  // TRAEMOS 1 USUARIO, PARA LUEGO UPDATEARLO
  const { id } = req.params;

  User.findOne({
    where: {
      id,
    },
  })
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//Update user
//PUT /users/:id//update ---->funcionando
server.put("/:id", async (req, res) => {
  const userId = req.params.id;
  const user = await User.findByPk(userId);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    const updatedUser = await user.save();
    res.send({
      name: updatedUser.name,
      username: updatedUser.username,
      email: updatedUser.email,
      password: updatedUser.password,
      isAdmin: updatedUser.isAdmin,
    });
    alert("UPDATED");
  } else {
    res.status(404).send({ message: "CANT DO IT" });
  }
});

//logeo sign up
server.post("/signin", async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (signinUser) {
    res.send({
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
    });
  } else {
    res.status(401).send({ message: "Invalid Email or Password." });
  }
});

// crear admin

server.post('/createadmin', async (req, res) => {
    try {
      const user = new User({
        name: 'admin',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('admin', 10),
        isAdmin: true,
      }); 
      const newUser = await user.save();
      res.send(newUser);   
    } catch (error) {
      res.send({ message: error.message });
    }
  });
  
  


module.exports = server;

