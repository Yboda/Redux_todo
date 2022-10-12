import { createStore } from "redux";
import { combineReducers } from "redux";

//redux 개발자도구
import { composeWithDevTools } from "redux-devtools-extension";

//Module
import todoReducer from "../modules/todos";

const rootReducer = combineReducers({
  todos: todoReducer,
});
const store = createStore(rootReducer, composeWithDevTools());
export default store;
