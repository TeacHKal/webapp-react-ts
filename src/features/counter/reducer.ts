import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    value: 0
};

const slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
          state.value = state.value + 1
        },
        decrement: (state, action) => {
          state.value = state.value - 1
        },
        increaseBy: (state, action) => {
          state.value = state.value + action.payload
        }
    }
})

export const {
  increment,
  decrement,
  increaseBy,
} = slice.actions;

export default slice.reducer;

