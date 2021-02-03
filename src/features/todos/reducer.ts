import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "MyModels";

export type TodosState = {
    isLoading: boolean;
    list: Array<Todo>;
};

const initialState = {
    list: [
        {id: 45, name: 'Go Ski', isComplete: false},
        {id: 22, name: 'Watch a movie', isComplete: true},
    ],
    isLoading: false
};

const slice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        getTodosRequest: (state) => {
            state.isLoading = true;
        },
        getTodosSuccess: (state, action: PayloadAction<Array<Todo>>) => {
            state.list = action.payload;
            state.isLoading = false;

        },
        getTodosFailure: (state) => {
            state.isLoading = false;
        },
    }
})

export const {
    getTodosRequest,
    getTodosSuccess,
    getTodosFailure,
} = slice.actions;

export default slice.reducer;

