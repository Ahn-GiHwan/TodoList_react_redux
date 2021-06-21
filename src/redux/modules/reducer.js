import { combineReducers } from "redux";
import todolist from "./todolist";
import detail from "./detail";

const reduer = combineReducers({
  todolist,
  detail,
});

export default reduer;
