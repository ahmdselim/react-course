import * as types from "./types";
import axios from "axios";

const url = "http://localhost:5000/posts";
export const addAction = async (dispatch) => {
  return dispatch({ type: types.ADD });
};

export const minceAction = async (dispatch) => {
  return dispatch({ type: types.MINCE });
};

export const addDataAction = async (dispatch, data) => {
  return dispatch({ type: types.ADD_DATA, payload: data });
};

const requestData = async (dispatch) => {
  return dispatch({ type: types.REQUEST_DATA });
};

const failData = async (dispatch, message) => {
  return dispatch({ type: types.FAIL_DATA, payload: message });
};

export const getData = async (dispatch) => {
  requestData(dispatch);
  return axios
    .get(url)
    .then((res) => dispatch({ type: types.GET_DATA, payload: res.data }))
    .catch((e) => failData(dispatch, e.message));
};
