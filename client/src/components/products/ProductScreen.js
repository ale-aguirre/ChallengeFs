import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getItemsById } from "../../selectors/getItemsById";

export const ProductScreen = ({ history }) => {
  const { productId } = useParams();

  const product = useMemo(() => getItemsById(productId), [productId]);

  //const heroe = getHeroesById(heroeId);

  if (!product) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  const { title, description, price } = product;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../../images/${productId}.jpg`}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={title}
        />
      </div>
      <div className="col-8">
        <h3>{title}</h3>
        <ul className="list-group list-group-flush">
          {/* <li className="list-group-item">
            <b>Where:</b>
            {type}
          </li> */}
          <li className="list-group-item">
            <b>Description:</b>
            {description}
          </li>
          <li className="list-group-item">
            <b>Price:</b>
            {price}
          </li>
        </ul>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Back
        </button>
      </div>
    </div>
  );
};
