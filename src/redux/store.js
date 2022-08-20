// import {createStore} from 'redux'
// import rootReducer from './rootReducer';

// const store =createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../components/Filters/filterSlide";
import todoListReducer from "../components/TodoList/todoListSlide";
const store = configureStore({
  reducer: {
    filterSearch: filterReducer.reducer,
    todoListShow: todoListReducer.reducer,
  },
});
export default store;
