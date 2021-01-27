import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

export const todolistAdd = createAction("todolist/itemAdd");
export const todolistRemove = createAction("todolist/itemRemove");
export const todolistDone = createAction("todolist/itemDone");

const initialState = [];
let lastId = 0;

createSlice({
    name: "toDolist",
    initialState,
})

// actionMap
//key: value
// actions: functions (event => event.handler)
// *produce function (initialState, draftState)
export default createReducer(initialState, {
    [todolistAdd.type]: (state, action)  => {
        state.push({
            id: ++lastId,
            name: action.payload.name,
            isComplete: false,
        })
    },

    [todolistDone.type]: (state, action) => {
        const index = state.findIndex(item => item.id === action.payload.id)
        state[index].isComplete = true;
    },

    [todolistRemove.type]: (state, action) => {
        const index = state.findIndex(item => item.id === action.payload.id);
        state.splice(index, 1);
    }

})

