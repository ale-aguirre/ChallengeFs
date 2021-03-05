require("dotenv").config();
const server = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {verifyToken} = require('../middleware/authentication')
const { SIGNATURE, CLIENT_ID, RESET_PASSWORD_KEY } = process.env;


// Modelo user
const { User } = require("../db");

 

server.get('/me', verifyToken, (request, response) => {

  const { userID } = request.user;

  User.findOne({
    where: {
      id: userID
    }
  })
    .then(user => {
      return response.json({
        user
      });
    })
    .catch(error => {
      return response.status(400).json({
        error: error.message
      });
    })

});

server.put('/update/password', verifyToken ,(req,res) =>{
  const {actualPassword , newPassword} = req.body;
  const {id_user} = req.user;

  User.findOne({
    where: {
      id: id_user
    }
  })
    .then(user => {

      if (!bcrypt.compareSync(actualPassword, user.password)) {
        return res.status(400).json({
          error: 'Password dont match.'
        });
      }

      // Contraseña coincide, actualizar user
      User.update({
        password: bcrypt.hashSync(newPassword, 10)
      }, {
        where: { id: user.id}
      })
        .then(userUpdated => {
          return res.status(200).json({
            message: 'Your password was changed.'
          })
        })
        .catch(error => {
          return res.status(500).json({
            error: error.message
          })
        })

    })
    .catch(error => {
      return res.status(500).json({
        error: error.message
      })
    })

})

server.put('/promote/:id', (req, res)=> {
  const id = req.params.id

  User.update({isAdmin:true}, {
  where:{
    id: req.params.id
  }
})
 User.findByPk(id) 
 .then(adminNuevo=>{
 return res.status(201).send({message:"nuevo admin"+id, adminNuevo});
  })
  .catch(error=> {

 res.status(400).send(error);
  })
})

server.put('/change/:id', (req, res)=> {
  const id = req.params.id

  User.update({isAdmin:false}, {
  where:{
    id: req.params.id
  }
})
 User.findByPk(id) 
 .then(noEsAdmin=>{
 return res.status(201).send({message:"se quito el permiso con exito"+id, noEsAdmin});
  })
  .catch(error=> {

 res.status(400).send(error);
  })
})





// Login: Normal
server.post("/login", (request, response) => {
  const { email, password } = request.body;

  // Buscar usuario
  User.findOne({
    where: {
      email,
    },
  })
    .then((user) => {
      // Verifico que el usuario existe y comparo las contraseñas
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return response.status(400).json({
          error: "Usuario o contraseña incorrectos.",
        });
      }

      //Genero el token
      const token = jwt.sign(
        {
          user: {
            userID: user.id,
            mail: user.email,
            username: user.username,
            admin: user.isAdmin,
            password: user.password,
          },
        },
        SIGNATURE,
        { expiresIn: 60 * 60 * 24 }
      );

      // Devolver el token
      return response.status(200).json({
        email: user.email,
        id: user.id,
        isAdmin: user.isAdmin,
        mensaje: "Token generado",
        token,
      });
    })
    .catch((error) => {
      // Se rompio el servidor
      return response.status(500).json({
        error: error.message,
      });
    });
});




module.exports = server;
