import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {busqueda} from '../../Redux/item'


const SearchBar = () => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch()
  const handleChange = (e) => {

    setSearch(e.target.value);
  };

  async function handleSubmit (){

    if (!search) {
     return alert("INVALID SEARCH");
    }
    dispatch(busqueda(search))
  };

  return (

    <div className="searchbar">
      <form className ="searchform" onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" name='search' className="inputsearch" onChange={(e)=>handleChange(e)}/>
        <Link to={`/products/search?name=${search}`} ><i onClick={(e)=>handleSubmit(e)} className="fa fa-search"></i></Link>
      </form>
    </div>
  );
};

export default SearchBar;
