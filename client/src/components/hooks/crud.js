// import "./Crud.css";
// import { useState } from "react";
// import Axios from "axios";

// function Crud() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState(0);
//   const [type, setType] = useState("");
//   const [image, setImage] = useState("");

//   const [newPrice, setnewPrice] = useState(0);

//   const [itemList, setItemsList] = useState([]);

//   const addItem = () => {
//     Axios.post("http://localhost:3001/create", {
//       title: title,
//       description: description,
//       type: type,
//       image: image,
//       price: price,
//     }).then(() => {
//       setItemsList([
//         ...itemList,
//         {
//           title: title,
//           description: description,
//           type: type,
//           image: image,
//           price: price,
//         },
//       ]);
//     });
//   };

//   const getItems = () => {
//     Axios.get("http://localhost:3001/product").then((response) => {
//       setItemsList(response.data);
//     });
//   };

//   const updateProductPrice = (id) => {
//     Axios.put("http://localhost:3001/update", { price: newPrice, id: id }).then(
//       (response) => {
//         setItemsList(
//           itemList.map((val) => {
//             return val.id === id
//               ? {
//                   id: val.id,
//                   title: val.title,
//                   type: val.type,
//                   description: val.description,
//                   image: val.image,
//                   price: newPrice,
//                 }
//               : val;
//           })
//         );
//       }
//     );
//   };

//   const deleteItems = (id) => {
//     Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
//       setItemsList(
//         itemList.filter((val) => {
//           return val.id !== id;
//         })
//       );
//     });
//   };

//   return (
//     <div>
//       <form className="App">
//         <fieldset>
//           <div className="information">
//             <legend>Add your Item</legend>
//             <div >

//             <label >Title:</label>
//             <input
//               type="text"
//               onChange={(event) => {
//                 setTitle(event.target.value);
//               }}
//             />
//             </div>
//             <label>Description:</label>
//             <input
//               type="text"
//               onChange={(event) => {
//                 setDescription(event.target.value);
//               }}
//             />
//             <label>Type:</label>
//             <input
//               type="text"
//               onChange={(event) => {
//                 setType(event.target.value);
//               }}
//             />
//             <label>Image:</label>
//             <input
//               type="text"
//               onChange={(event) => {
//                 setImage(event.target.value);
//               }}
//             />
//             <label>Price:</label>
//             <input
//               type="number"
//               onChange={(event) => {
//                 setPrice(event.target.value);
//               }}
//             />
//             <button onClick={addItem}>Add Item</button>
//           </div>
//           <div className="employees">
//             <button onClick={getItems}>Show Items</button>

//             {itemList.map((val, key) => {
//               return (
//                 <div className="employee">
//                   <div>
//                     <h3>Title: {val.title}</h3>
//                     <h3>Description: {val.description}</h3>
//                     <h3>Type: {val.type}</h3>
//                     <h3>Image: {val.image}</h3>
//                     <h3>Price: {val.price}</h3>
//                   </div>
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="2000..."
//                       onChange={(event) => {
//                         setnewPrice(event.target.value);
//                       }}
//                     />
//                     <button
//                       onClick={() => {
//                         updateProductPrice(val.id);
//                       }}
//                     >
//                       {" "}
//                       Update
//                     </button>

//                     <button
//                       onClick={() => {
//                         deleteItems(val.id);
//                       }}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </fieldset>
//       </form>
//     </div>
//   );
// }

// export default Crud;
