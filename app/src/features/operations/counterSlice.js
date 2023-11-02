import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    
    assign: (state, action) => {
      state.value = action.payload;
    },
    moveUp:(state,action)=>{
      let move=action.payload
      let moveTo=action.payload-1
      if(moveTo<0){
        moveTo=state.value.length-1
      }
      let temp=state.value[move]
      state.value[move]=state.value[moveTo]
      state.value[move]=temp
    },
    moveDown:(state,action)=>{
      console.log(state)

   
    },
  },

});

export const { assign,moveDown,moveUp} = counterSlice.actions;


export default counterSlice.reducer;
