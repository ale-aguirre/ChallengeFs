import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

export const ProductCard = ({ id, title, type, description, icons }) => {
  return (
    <div className="ms-3">
      <div className="row cont-grande">
        <div className="col mb-4 product-size">
          <div className="card h-100 product">
            <img
              src={`./images/${id}.jpg`}
              className="card-img-top img-grande"
              alt={title}
            />

            <div className="card-body prod-body">
              <h5 className="card-title h5">{title}</h5>
              <p className="card-text pp">{description}</p>
              <nav>
                <p className="card-text">
                  <small className="text-muted">{icons}</small>
                </p>
                <div class="numberCircle">4.5</div>
                <Link to={`./product/:productId`}>ICON</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
