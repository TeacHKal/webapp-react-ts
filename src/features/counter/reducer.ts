import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
  readonly value: number;
};

const initialState = {
    value: 0
};

const slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        saveValue: (state, action) => {
            console.log('reducer action.payload', action.payload);
            state.value = action.payload;
        },
        // decrement: (state, action) => {
        //     state.value = state.value--;
        // },
        // increaseBy: (state, action) => {
        //     state.value = state.value + action.payload;
        // },
        // multiple: (state, action) => {
        //     state.value = state.value * action.payload;
        // },
        // double: (state, action) => {
        //     state.value = state.value * 2;
        // },
        // triple: (state, action) => {
        //     state.value = state.value * 3;
        // }
    }
})

export const {
    saveValue,
} = slice.actions;

export default slice.reducer;

