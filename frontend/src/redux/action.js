import * as actionTypes from "./type";
import axios from "../axios";

export const IS_LOGIN = "IS_LOGIN";
export const AUTH_MODAL = "AUTH_MODAL";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: authData,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload: error,
  };
};

export const authLogin = (email, password, setIsUSerLogged, onClose) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      headers: {
        email: email,
        password: password,
      },
    };

    axios
      .post("/api/v1/auth/login", {}, authData)
      .then((response) => {
        console.log(response);
        localStorage.setItem("accesstoken", response.data.token);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("email", response.data.email);
        dispatch(authSuccess(response.data));

        setIsUSerLogged((prev) => !prev);
        onClose((prev) => !prev);
      })
      .catch((error) => {
        console.log("Error", error.message);
        dispatch(authFail("Invalid Credentials"));
      });
  };
};

export const authSignUp = (name, email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    console.log(name);

    let config = {
      headers: {
        name: name,
        email: email,
        password: password,
      },
    };

    axios
      .post("/api/v1/auth/register", {}, config)
      .then((response) => {
        localStorage.setItem("accesstoken", response.data.token);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("email", response.data.email);
        dispatch(authSuccess(response.data));
      })
      .catch((error) => {
        console.log("Error", error);
        dispatch(authFail());
      });
  };
};
