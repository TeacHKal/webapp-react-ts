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
    }
})

export const {
    saveValue,
} = slice.actions;

export default slice.reducer;

