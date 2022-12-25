import { PLUS } from "./type";
import { MINCE } from "./type";
import { PLUS_BY_FIVE } from "./type";
import { PLUS_BY_VALUE } from "./type";

export const initState = { count: 0 };
export function reducer(state, action) {
  switch (action.type) {
    case PLUS:
      return { count: state.count + 1 };
    case MINCE:
      return { count: state.count - 1 };
    case PLUS_BY_FIVE:
      return { count: state.count + action.payload };
    case PLUS_BY_VALUE:
      return { count: state.count + parseInt(action.payload) };
    default:
      return state;
  }
}
