import React, { useEffect, useState } from "react";
import ProductList from "../ProductCard/ProductList";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getItem } from "../../Redux/item";
import Button from "@material-ui/core/Button";

function Catalogo({ category, search, products }) {
  const [productscatalogo, setProductscatalogo] = useState();
  const dispatch = useDispatch();
  const item = useSelector((store) => store.item.items);

  useEffect(() => {
    dispatch(getItem());
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (products) {
        setProductscatalogo(products);
      }

      if (category) {
        const { data } = await axios.get(
          `http://localhost:4000/products/categoria/${category}`
        );
        setProductscatalogo(data);
      }

      if (!products && !category) {
        const { data } = await axios.get(`http://localhost:4000/products`);
        setProductscatalogo(data);
      }
    };
    fetchData();
  }, [products]);

  return (
    <div style={{ marginTop: "90px" }}>
      <div></div>

      <div className="catalogo2">
        <div className="catalogo">
          {productscatalogo &&
            productscatalogo.map((p) => (
              <ProductList
                type={"rate"}
                key={p.id}
                id={p.id}
                name={p.name}
                price={p.price}
                image={p.image}
                stock={p.stock}
                category={p.category}
              />
            ))}
        </div>
      </div>
      <a
        href="/"
        className="btn1"
        style={{
          marginTop: "40px",
          marginRight: "auto",
          marginLeft: "auto",
          width: "100px",
          marginBottom: "40px",
        }}
      >
        <div>
          <Button variant="contained" color="secondary">
            volver
          </Button>
        </div>
      </a>
    </div>
  );
}

export default Catalogo;
