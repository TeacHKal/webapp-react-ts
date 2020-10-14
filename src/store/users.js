import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
let lastId = 0;

const slice = createSlice({
    name: "users ",
    initialState,
    reducers:  {
        userAdd: (users, action) => {
            users.push({
                id: ++lastId,
                name: action.payload.name,
            })
        },
        userRemove: (users, action) => {
            const index = users.findIndex(user => user.id === action.payload.id);
            users.splice(index, 1);
        },

    }
})

export const { userAdd, userRemove } = slice.actions;
export default slice.reducer;





