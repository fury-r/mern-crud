import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/operations/counterSlice';

export const store = configureStore({
  reducer: {
    data: counterReducer,
  },
});


// import { createStore } from "redux";
// const reducer=(state=[],action)=>{
//   switch (action.type) {
//     case "set":

//       return state=action.payload

//     default:
//       return state;
//   }
// }
// export const store = createStore(reducer);
