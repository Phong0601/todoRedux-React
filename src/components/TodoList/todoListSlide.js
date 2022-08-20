// const initialState = {
//   todoList: [
//     {
//       id: 1,
//       name: "Lear Yoga",
//       completed: true,
//       priority: "Medium",
//     },
//     {
//       id: 2,
//       name: "Lear Redux",
//       completed: false,
//       priority: "High",
//     },
//     {
//       id: 3,
//       name: "Lear Javascript",
//       completed: false,
//       priority: "Low",
//     },
//   ],
// };
// const todoListReducer = (currentState = initialState, action) => {
//   switch (action.type) {
//     case "ADD_DATA":
//       const cloneTodoList = [...currentState.todoList, action.payload];
//       // currentState.todoList.push(action.payload);
//       // console.log( currentState.todoList);
//       return { ...currentState, todoList: cloneTodoList };
//     case "CHECKED_BOX":
//       const cloneChecked = [...currentState.todoList];
//       cloneChecked.map((item) => {
//         if (item.id === action.payload) item.completed = !item.completed;
//       });
//       return {...currentState,todoList:cloneChecked}
//     default:
//       return { ...currentState };
//   }
// };
// export default todoListReducer;

import { createSlice } from "@reduxjs/toolkit";

//REDUX TOOKIT
const todoListReducer = createSlice({
  name: "todo",
  initialState: {
    todoList: [
      {
        id: 1,
        name: "Lear Yoga",
        completed: false,
        priority: "Medium",
      },
      {
        id: 2,
        name: "Lear Redux",
        completed: false,
        priority: "High",
      },
      {
        id: 3,
        name: "Lear Javascript",
        completed: false,
        priority: "Low",
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    checkedBox: (state, action) => {
      const found = state.todoList.find((item) => item.id === action.payload);
      if (found) {
        found.completed = !found.completed;
      }
    },
    delete: (state, action) => {
      const index = state.todoList.findIndex((item) => item.id === action.payload);
      if(index !== -1) state.todoList.splice(index,1);
    },
  },
});
export default todoListReducer;
