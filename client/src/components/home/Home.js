import React from "react";
import { ProductList } from "../products/ProductList";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <div className="titulos">
        <h1>NEW PRODUCTS</h1>
      </div>
      <div className="cards">
        <ProductList type={"rate"} />
      </div>
      
    
    </div>
  );
};
