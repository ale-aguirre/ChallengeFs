const db = require("../db/DB");

class Productos {
  static getProductos() {
    const query = "SELECT * from producto";
    //cuando se ejecute la query envia la data
    return db.any(query).then((data) => {
      return data;
    }).catch((e)=>{
        return e;
    });
  }
  
}

module.exports = Productos;
