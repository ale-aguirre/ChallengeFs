import React, { Fragment } from "react";
import "./ProductList.css";
import scp from "../images/scp.jpg";

const ProductList = () => {
  return (
    <Fragment>
      <div style={{ background: "white", marginTop: "0px" }}>
        <div className="card">
          <div className="card-img">
          </div>
          <img className="img-product" src={scp} alt="scp"></img>

          <div className="card-description">
            <div className="wrapper">
              <span className="stars">★★★★★</span>
              <span className="price">$ 200.00</span>
            </div>
            <h1 data-shadow="EXECUTIVE" className="title-product">
              Nike Air Max for Men
            </h1>
            <p>Men's Running Shoes.</p>
            <h3>Color:</h3>
            <div className="colors-wrap">
              <span className="colors"></span>
              <span className="colors selected"></span>
              <span className="colors"></span>
              <span className="colors"></span>
            </div>
            <h3>Size:</h3>
            <div className="size-wrap">
              <span className="size">40</span>
              <span className="size">41</span>
              <span className="size selected">42</span>
              <span className="size">43</span>
            </div>
            <div className="purchase">Add to chart</div>
            <div className="wishlist">Add to Wishlist</div>
          </div>
        </div>
      </div>
      
      <div style={{ background: "white", marginTop: "0px" }}>
        <div className="card">
          <div className="card-img">
          </div>
          <img className="img-product" src={scp} alt="scp"></img>

          <div className="card-description">
            <div className="wrapper">
              <span className="stars">★★★★★</span>
              <span className="price">$ 200.00</span>
            </div>
            <h1 data-shadow="EXECUTIVE" className="title-product">
              Nike Air Max for Men
            </h1>
            <p>Men's Running Shoes.</p>
            <h3>Color:</h3>
            <div className="colors-wrap">
              <span className="colors"></span>
              <span className="colors selected"></span>
              <span className="colors"></span>
              <span className="colors"></span>
            </div>
            <h3>Size:</h3>
            <div className="size-wrap">
              <span className="size">40</span>
              <span className="size">41</span>
              <span className="size selected">42</span>
              <span className="size">43</span>
            </div>
            <div className="purchase">Add to chart</div>
            <div className="wishlist">Add to Wishlist</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
