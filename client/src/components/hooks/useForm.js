import React, { useState } from "react";
import Axios from "axios";

const useForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  const [newPrice, setnewPrice] = useState(0);

  const [itemList, setItemsList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  

  const addItem = () => {
    Axios.post("http://localhost:3001/create", {
      title: title,
      description: description,
      price: price,
      type: type,
      image: image,
    }).then(() => {
      setItemsList([
        ...itemList,
        {
          title: title,
          description: description,
          price: price,
          type: type,
          image: image,
        },
      ]);
    });
  };

  const getItems = () => {
    Axios.get("http://localhost:3001/product").then((response) => {
      setItemsList(response.data);
    });
  };

  const updateProductPrice = (id) => {
    Axios.put("http://localhost:3001/update", { price: newPrice, id: id }).then(
      (response) => {
        setItemsList(
          itemList.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  title: val.title,
                  description: val.description,
                  price: newPrice,
                  type: val.type,
                  image: val.image,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteItems = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setItemsList(
        itemList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };
  return (
    <div>
      <div>
        <form className="form-horizontal" onSubmit={(e) => handleSubmit(e)}>
          <fieldset>
            <legend>Add your Item</legend>
            <div className="form-group">
              <label className="col-md-4 control-label">Title</label>
              <div className="col-md-4">
                <input
                  id="textinput"
                  name="textinput"
                  type="text"
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                  placeholder="Name .. "
                  className="form-control input-md"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-4 control-label">Description</label>
              <div className="col-md-4">
                <textarea
                  className="form-control"
                  id="textarea"
                  name="textarea"
                  type="text"
                  placeholder="Describe your product.."
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                ></textarea>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Price</label>
              <div className="col-md-4">
                <input
                  id="textinput"
                  name="textinput"
                  type="number"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                  placeholder="$$"
                  className="form-control input-md"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Type</label>
              <div className="col-md-4">
                <input
                  id="textinput"
                  name="textinput"
                  type="text"
                  onChange={(event) => {
                    setType(event.target.value);
                  }}
                  placeholder=" type rate"
                  className="form-control input-md"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Image</label>
              <div className="col-md-4">
                <input
                  id="filebutton"
                  name="filebutton"
                  className="input-file"
                  type="file"
                  onChange={(event) => {
                    setImage(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label"></label>
              <div className="col-md-4">
                <button
                  id="singlebutton"
                  name="singlebutton"
                  className="btn btn-primary"
                  onClick={addItem}
                >
                  Submit
                </button>
                <div>
                  <button className="btn btn-warning" onClick={getItems}>
                    Show Items
                  </button>
                  {itemList.map((val, key) => {
                    return (
                      <div>
                        <div className="form-horizontal" >
                          <h3>Title: {val.title}</h3>
                          <h3>Description: {val.description}</h3>
                          <h3>Type: {val.type}</h3>
                          <h3>Image: {val.image}</h3>
                          <h3>Price: {val.price}</h3>
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Change the price"
                            onChange={(event) => {
                              setnewPrice(event.target.value);
                            }}
                          />
                          <button
                            onClick={() => {
                              updateProductPrice(val.id);
                            }}
                          >
                            {" "}
                            Update
                          </button>

                          <button
                            onClick={() => {
                              deleteItems(val.id);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* <div>
                  <button className="btn btn-dark" href="/exchange">
                    Convert
                  </button>
                </div> */}
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default useForm;
