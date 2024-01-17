import { createSlice } from "@reduxjs/toolkit";

const counterSlice =createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
    setCounterG: (state, action) => action.payload,
    addCounter: (state, action) => state + action.payload ,
    substractCounter: (state, action) => state - action.payload,
    resetCounter: () => 0
    }
})

export const { setCounterG, addCounter, substractCounter, resetCounter } = counterSlice.actions 

export default counterSlice.reducer
