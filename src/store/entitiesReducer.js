import {combineReducers} from "redux";
import toDoListReducer from "./toDoList";
import usersReducer from "./users";


export default combineReducers({
    todolist: toDoListReducer,
    users: usersReducer,
});