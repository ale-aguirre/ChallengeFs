import axios from "axios";

//Inicial State

const InicialState = {
  items: [],
  item: [],
  search: {
    busqueda: [],
    search: "",
  },
};

//Constantes

const GET_ITEMS = "GET_ITEMS";
const GET_ITEM = "GET_ITEM";
const SEARCH = "SEARCH";

//Reducer
export default function itemReducer(state = InicialState, action) {
  switch (action.type) {
    case GET_ITEM:
      return { ...state, item: action.payload };
    case GET_ITEMS:
      return { ...state, items: action.payload };
    case SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
}

//Action

export const getItems = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`http://localhost:4000/products`);
    dispatch({
      type: GET_ITEMS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getItem = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:4000/products/${id}`);
    dispatch({
      type: GET_ITEM,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const busqueda = (search) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:4000/products/find/search?name=${search}`
    );
    dispatch({
      type: SEARCH,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
