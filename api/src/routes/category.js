const server = require('express').Router();
const { Category } = require('../db.js');


server.get('/', (req, res) => {
	Category.findAll()
		.then(products => {
			res.status(200).json(products);
		})
		.catch((err)=> {
            res.status(400).json(err)
        });
});


server.post('/create', (req, res)=>{
    const {name, description, image} = req.body
    Category.findOrCreate({where:{name, description, image}})
    .then(()=>{
        res.status(201).send('Success')
    })
    .catch(err=>{
        res.status(400).json(err)
    })
})

server.put('/update/:id', (req, res)=>{
    const  id = req.params.id
    const {name, description, image} = req.body
    Category.update({name, description, image}, {where: {id}})
    .then(()=>{
        res.status(201).send('Success')
    })
    .catch(()=>{
        res.status(404).send('Error')
    })
});

//CREAR RUTA PARA PARA ELIMINAR CATEGORIA
server.delete ("/:id", (req,res) => {// EL delete es a /category/:id
     const id = req.params.id;
	Category.destroy({
		where: {id:id}
	}).then((id) => {
		res.status(200).send("Category" + id + "deleted")
	}).catch(function (err) {
		console.log("delete failed with error: " + err);
		// handle error;
	});
})





module.exports = server