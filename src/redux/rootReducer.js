import { combineReducers } from "redux";
import filterReducer from "../components/Filters/filterSlide";
import todoListReducer from "../components/TodoList/todoListSlide";

const rootReducer = combineReducers({
  filterSearch: filterReducer,
  todoListShow: todoListReducer,
});
export default rootReducer;
