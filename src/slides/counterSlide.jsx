import {createSlice} from '@reduxjs/toolkit';

export const counterSlide = createSlice({
    name:'counter',
    initialState: {
        count:0
    },
    reducers: {
        increment: (state,actions)=>{
            state.count ++;
        },
        decrement: (state)=>{
            state.count--;
        },
    }
})
export const {increment,decrement} = counterSlide.actions;
export default counterSlide.reducer;