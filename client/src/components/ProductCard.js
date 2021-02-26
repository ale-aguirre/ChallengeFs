import React from "react";
import "./Product.css";
import scp from '../images/scp.jpg'

const ProductCard = (data) => {
  return (
    <div className="container">
      {/* contenedor medidas */}
      <div class="col mb-4">
    <div class="card h-100">
       {/* imagen */}
      <img src={scp} class="card-img-top" alt="scp"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
     

      {/* titulo */}
      <div>
        <h5>titulo</h5>
      </div>

      {/* descripcion */}
      <div>
        <h6>descripcion</h6>
      </div>

      {/* caracteristicas */}
      <div>caracteriticas</div>
    </div>
  );
};

export default ProductCard;
