import * as types from "./type";
import axios from "axios";

// url
const url = "http://localhost:5000/posts";

const requestData = async (dispatch) => {
  return dispatch({ type: types.REQUEST_DATA });
};

const failData = async (dispatch, message) => {
  return dispatch({ type: types.FAIL_DATA, payload: message });
};

export const getData = async (dispatch) => {
  requestData(dispatch);
  axios
    .get(url)
    .then((res) => dispatch({ type: types.GET_DATA, payload: res.data }))
    .catch((e) => failData(dispatch, e.message));
};

export const addData = async (dispatch, title, author, message, id) => {
  requestData(dispatch);
  axios
    .post(url, { title, author, message, id })
    .then((res) => dispatch({ type: types.ADD_DATA, payload: res.data }))
    .catch((e) => failData(dispatch, e.message));
};
