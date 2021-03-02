import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

export const ProductCard = ({
  id,
  title,
  type,
  description,
  icon1,
  text,
  icon2,
  icon3,
}) => {
  return (
    <div className="ms-3 separador">
      <div className="row cont-grande">
        <div className="col mb-4 product-size">
          <div className="card h-100 product">
            <img
              src={`./images/${id}.jpg`}
              className="card-img-top img-grande"
              alt={title}
            />

            <div className="card-body prod-body">
              <Link to={`./product/${id}`}>
                <h5 className="card-title h5">{title}</h5>
              </Link>
              <p className="card-text pp">{description}</p>
              <nav>
                {
                  (icon1,
                  text,
                  icon2,
                  icon3 ? (
                    <div className="product-buttons mt-1">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <div className="content">
                            <img src={`./images/${icon1}.png`} alt={title} />
                            <div>
                              <p className="texto">{text}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-3 icon2">
                          <img src={`./images/${icon2}.png`}  alt={title}/>
                        </div>
                        <div className="col-1">
                          <img src={`./images/${icon3}.png`}  alt={title}/>
                        </div>
                      </div>
                    </div>
                  ) : null)
                }
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
