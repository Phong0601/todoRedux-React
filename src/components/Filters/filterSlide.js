// const initialState = {
//   filter: {
//     search: "",
//     status: "All",
//     priority: [],
//   },
// };
// const filterReducer = (currentState = initialState, action) => {
//   switch (action.type) {
//     case "FILTER_SEARCH":
//       const cloneSearchText = { ...currentState.filter };
//       cloneSearchText.search = action.payload;
//       return {
//         ...currentState,
//         filter: cloneSearchText,
//       };
//     case "FILTER_STATUS":
//       const cloneStatus = { ...currentState.filter };
//       cloneStatus.status = action.payload;
//       return {
//         ...currentState,
//         filter: cloneStatus,
//       };
//     case "FILTER_PRIORITY":
//       const clonePriority = { ...currentState.filter };
//       clonePriority.priority = action.payload;
//       return {
//         ...currentState,
//         filter: clonePriority,
//       };
//     default:
//       return currentState;
//   }
// };
// export default filterReducer;



//REDUX TOOKIT
import {createSlice} from '@reduxjs/toolkit'
const filterReducer = createSlice({
  name:'filter',
  initialState:{
    filtter:{
      search:'',
      status:'All',
      priority:[],
    }
  },
  reducers:{
    filterSeach:(state,action)=>{
      state.filtter.search=action.payload;
    },
    filterStatus: (state,action)=>{
      state.filtter.status = action.payload;
    },
    filterPriority:(state,action)=>{
      state.filtter.priority = action.payload;
    }
  }
})
export default filterReducer;