import * as actions from "./actionTypes";


export const todolistAdd = name => {
    return {
        type: actions.TODOLIST_ADD,
        payload: {
            name: name
        }
    }
}

export const todolistRemove = id => {
    return {
        type: actions.TODOLIST_REMOVE,
        payload: {
            id
        }
    }
}

export const todolistDone = id => {
    return {
        type: actions.TODOLIST_DONE,
        payload: {
            id
        }
    }
}