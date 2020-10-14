import * as actions from "./actionTypes";

const initialState = [];
let lastId = 0;

export default function reducer(state = initialState, action){
    switch(action.type){
        case actions.TODOLIST_ADD:
        return [
            ...state,
            {
                id: ++lastId,
                name: action.payload.name,
                isComplete: false,
            }
        ]
        case actions.TODOLIST_REMOVE:
            return state.filter(item => item.id !== action.payload.id);
        case actions.TODOLIST_DONE:
            return state.map(item => item.id !== action.payload.id ? item : {...item, isComplete: true})

        default:
            return state;
    }

}