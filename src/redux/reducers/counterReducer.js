import * as types from "../actions/types";

const data = {
  count: 0,
  users: [{ name: "reef", id: 1 }],
  posts: [{ id: 1, post: "new post" }],
  loading: true,
};

const counterReducer = (state = data, action) => {
  switch (action.type) {
    case types.ADD:
      return { ...state, count: state.count + 1 };
    case types.MINCE:
      return { ...state, count: state.count - 1 };
    case types.ADD_DATA:
      return { ...state, count: state.count + parseInt(action.payload) };
    case types.REQUEST_DATA:
      return { ...state, loading: false };
    case types.GET_DATA:
      return { ...state, data: action.payload, loading: true };
    case types.FAIL_DATA:
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
};

export default counterReducer;
