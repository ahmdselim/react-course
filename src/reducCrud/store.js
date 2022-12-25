import { createStore } from "redux";
import { crudReducer } from "./reducer/crudReducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(crudReducer, enhancer());

export default store;
