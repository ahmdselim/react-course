import * as types from "../action/type";
const data = { loading: true, posts: [] };

export const crudReducer = (state = data, action) => {
  switch (action.type) {
    case types.REQUEST_DATA:
      return { ...state, loading: true };
    case types.FAIL_DATA:
      return { ...state, loading: true };
    case types.GET_DATA:
      return { ...state, loading: false, posts: action.payload };
    case types.ADD_DATA:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};
