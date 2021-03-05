import React from "react";
// import { ProductList } from "../products/ProductList";
import Banner from './Banner'
import NavBar from './NavBar'

import "./Home.css";

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Banner/>
      {/* <div className="titulos">
        <h1>NEW PRODUCTS</h1>
      </div>
      <div className="cards">
        <ProductList type={"rate"} />
      </div> */}
    </div>
  );
};

export default Home;
