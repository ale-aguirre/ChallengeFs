import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import "./CrudItem.css";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../../../Redux/category";
import { getItems } from "../../../Redux/item";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
  root: {
    borderRadius: " 10px",
    color: "white",
    backgroundColor: "rgb(70 70 70)",
  },
});

const CrudItem = () => {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.category.categories);
  const item = useSelector((store) => store.item.items);
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getItems());
  }, [item]);

  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
  });

  const [categoria, setCategory] = useState([]);

  const { name, description, price, stock, image } = product;

  const handlePost = async () => {
    const info = {
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      image: product.image,
    };
    const { data } = await axios.post(
      "http://localhost:4000/products/create",
      info
    );
    {
      categoria.map(async (e) => {
        await axios.post(
          `http://localhost:4000/products/${data[0].id}/category/${e.value}`
        );
      });
    }
    alert("DONE");
    setProduct({
      id: "",
      name: "",
      description: "",
      price: "",
      stock: "",
      image: "",
    });
  };

  const handleSearch = async (product) => {
    setProduct(product);
  };
  const handleUpdate = async () => {
    if (
      !product.name ||
      !product.description ||
      !product.price ||
      !product.stock ||
      !product.image
    ) {
      return alert("complete all the fields");
    }

    const dataPost = {
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      image: product.image,
    };
    const { data } = axios.put(
      `http://localhost:4000/products/${product.id}`,
      dataPost
    );
    categoria.map(
      async (e) =>
        await axios.post(
          `http://localhost:4000/products/${product.id}/category/${e.value}`
        )
    );
    alert("SUCCESS");
    setProduct({
      id: "",
      name: "",
      description: "",
      price: "",
      stock: "",
      image: "",
    });
  };

  const handleDelete = async () => {
    alert("DONE");
    const { data } = await axios.delete(
      `http://localhost:4000/products/${product.id}`
    );
    setProduct({
      id: "",
      name: "",
      description: "",
      price: "",
      stock: "",
      image: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: "rgb(108 117 125)",
        height: "2000px",
        marginTop: "-100px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          marginLeft: "15px",
          marginTop: "100px",
          paddingTop: "100px",
        }}
      >
        <div className="formCrudProduct">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h6>Name</h6>
            <input
              type="text"
              value={name}
              onChange={handleChange}
              name="name"
            />
            <h6>Description</h6>
            <input
              type="text"
              value={description}
              onChange={handleChange}
              name="description"
            />
            <h6>Price</h6>
            <input
              type="number"
              value={price}
              onChange={handleChange}
              name="price"
            />
            <h6>Stock</h6>
            <input
              type="number"
              value={stock}
              onChange={handleChange}
              name="stock"
            />
            <h6>Image</h6>
            <input
              type="text"
              value={image}
              onChange={handleChange}
              name="image"
            />{" "}
            <br />
            <br />
            <Select
              isMulti
              options={categories.map((e) => ({
                label: e.name,
                value: e.id,
              }))}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={setCategory}
              name="category"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <button
                type="submit"
                className="create"
                style={{ width: "60px", height: "20px" }}
                onClick={() => handlePost()}
              >
                Create
              </button>
              <button
                type="submit"
                className="update"
                style={{ width: "60px", height: "20px" }}
                onClick={() => handleUpdate()}
              >
                Update
              </button>
              <button
                type="submit"
                className="delete"
                style={{ width: "60px", height: "20px" }}
                onClick={() => handleDelete()}
              >
                Delete
              </button>
            </div>
          </form>
        </div>

        <div>
          <div
            className={classes.root}
            style={{ width: "200px", marginTop: "-80px" }}
          >
            <h3
              className="h111"
              style={{ display: "flex", marginLeft: "20px" }}
            >
              Items
            </h3>
            <List
              component="nav"
              aria-label="secondary mailbox folders"
              style={{ height: "300px", overflow: "scroll" }}
            >
              {item &&
                item.map((p) => (
                  <ListItem button onClick={() => handleSearch(p)} value={p.id}>
                    <ListItemText primary={p.name} secondary={p.price} />
                  </ListItem>
                ))}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrudItem;
