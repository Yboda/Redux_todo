import { createStore } from "redux";
import { combineReducers } from "redux";

//Module
import todos from "../modules/todos";

const rootReducer = combineReducers({
  todos: todos,
});
const store = createStore(rootReducer);
export default store;
