import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegin  } from "./api";
import moment from "moment";

const initialState = {
    list: [],
    loading: false,
    lastFetch: null,
};

const slice = createSlice({
    name: "toDoList",
    initialState,
    reducers:  {
        todolistRequest: (state, action) => {
            state.loading = true;
        },
        todolistReceive: (state, action) => {
            state.list = action.payload;
            state.loading = false;
            state.lastFetch = Date.now();
        },
        todolistAdd: (state, action) => {
            state.list.push(action.payload);
        },
        todoComplete: (state, action) => {
            const index = state.list.findIndex(todo => todo.id === action.payload.id);
            state.list[index].isComplete = true;
        },
        todolistRemove: (state, action) => {
            const index = state.list.findIndex(item => item.id === action.payload.id);
            state.list.splice(index, 1);
        },
        todolistRequestFail: (state, action) => {
            state.loading = false;
        }

    }
})




export const {
    todolistAdd,
    todoComplete,
    todolistRemove,
    todolistReceive,
    todolistRequest,
    todolistRequestFail,
} = slice.actions;
export default slice.reducer;

// ACTION CREATORS
//const url = "https://run.mocky.io/v3/0d7b50c7-0c47-4f6f-8e4c-2b450bdf830e";
const url = "/todolist";


// With caching
export const loadTodolist = () => (dispatch, getState) => {
    const {lastFetch} = getState().entities.todolist;
    const diffInSeconds = moment().diff(moment(lastFetch), 'seconds');
    if (diffInSeconds < 20) return;

    return dispatch(apiCallBegin({
        url,
        onStart: todolistRequest.type,
        onSuccess: todolistReceive.type,
        onError: todolistRequestFail.type,
    }));
}

// Without caching
// export const loadTodolist = () => apiCallBegin({
//     onStart: todolistRequest.type,
//     url,
//     onSuccess: todolistReceive.type,
//     onError: todolistRequestFail.type,
// });

export const todolistItemAdd = (todo) => apiCallBegin({
    url: "/todolist",
    method: "post",
    data: todo,
    onSuccess: todolistAdd.type,
});

export const todolistItemDone = id => apiCallBegin({
    url: "/todolist" + "/" + id,
    method: "patch",
    data: { isComplete: true },
    onSuccess: todoComplete.type,
});




// Selector
// export const getUnDoneTodolistItems = state =>
//     state.entities.todolist.filter(item => !item.isComplete);
// -----------------
// (memoization/memoized) /  cache
export const getUnDoneTodolistItems = createSelector(
    state => state.entities.todolist,
    todolist => todolist.list.filter(item => !item.isComplete)
)





