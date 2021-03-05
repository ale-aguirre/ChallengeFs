import axios from "axios";

//Inicial State

const InicialState = {
  users: [],
  user: {
    id: "",
    email: "",
    password: "",
    token: "",
    isAdmin: false
  },
};

//Constantes
const SET_USER_LOGIN = 'SET_USER_LOGIN'
const MESSAGE_RESET_PASSWORD = 'MESSAGE_RESET_PASSWORD'
const POST_USER = "POST_USER"
const SET_USER = 'SET_USER'
const ERROR_LOGIN = 'ERROR_LOGIN'
const CLEAN_MESSAGE_USER_CREATE = 'CLEAN_MESSAGE_USER_CREATE'
const ERROR_POST = "ERROR_POST"
const LOGOUT_USER = 'LOGOUT_USER'
const GET_USERS = "GET_USERS"

const DELETE_USER = "DELETE_USER"






//Reducer
export default function usersReducer(state = InicialState, action) {
  switch (action.type) {
    case POST_USER:
      return {
        ...state,
        message: 'USER CREATED'}
    case SET_USER:
      return {
        ...state,
        user: action.payload
      } 
    case ERROR_POST:
        return {
            ...state,
        error: 'USER INCORRECT'
        }  
    case ERROR_LOGIN:
      return {
          ...state,
       error: 'USER INCORRECT'
      } 
    case SET_USER_LOGIN:
        return {
          ...state,
          user: action.payload
        }      
    case LOGOUT_USER:
        return {
          ...state,
          user: {
            username: '',
            email: "",
            password: "",
          }
        }  
    case CLEAN_MESSAGE_USER_CREATE:
        state.message = '';
        return {
          ...state,
          error: ""
        }   
        case GET_USERS:
      return {
        ...state,
        users: action.payload
      } 

      case DELETE_USER:
      return {
        ...state,
        user: action.payload
      } 

    default:                                      
      return state;
  }
}

//Action


export const postUser = (datos) => async (dispatch) => {
  try {
    const { data } = await axios.post('http://localhost:4000/users', datos)
    dispatch({
      type: POST_USER,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ERROR_POST
    })
  }
}
export const deleteUser = (datos) => async (dispatch) => {
  try {
    const { data } = await axios.delete('http://localhost:4000/users/{id}', datos)
    dispatch({
      type: DELETE_USER,
      payload: data
    })
  } catch (error) {
    console.log(error)
  }
  }

export const getUsers = (datos) => async (dispatch) => {
  try {
    const { data } = await axios.get('http://localhost:4000/users/usuarios', datos)
    dispatch({
      type: GET_USERS,
      payload: data
    })
  } catch (error) {
    console.log(error)
  }
  }

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT_USER })
}

export const loginUser = (user) => (dispatch, getState) => {
  try {

    axios.post('http://localhost:4000/auth/login', user)
      .then(user => {
        localStorage.setItem("token", user.data.token); // aca se envia el token como user.token
        dispatch({
          type: SET_USER,
          payload: user.data
        })
      })
      .catch(() => {
        dispatch({
          type: ERROR_LOGIN,
        })
      })

  }
  catch (error) {
    console.log(error)
  }
}

export const validation = () => async (dispatch) => { 
  try {
    const token = localStorage.getItem("token");
    if (token) {

      const config = {
        headers: { 
          'Authorization': 'Bearer ' + token
        }
      };

      const { data } = await axios.get('http://localhost:4000/auth/me', config);

      dispatch({
        type: SET_USER,
        payload: data.user
      });
    }

  } catch (error) {
    console.log(error);
  };
};

export const cleanMessage = () => (dispatch) => {
  dispatch({ type: CLEAN_MESSAGE_USER_CREATE })
}