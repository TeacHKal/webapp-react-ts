import axios from 'axios';
import * as actions from "../store/api";

const api = ({ dispatch }) => next => async action => {
    if (action.type !== actions.apiCallBegin.type)
        return next(action);


    const {url, method, data, onSuccess, onError, onStart} = action.payload;

    if(onStart) dispatch({ type: onStart });

    next(action);

    try {
        const response = await axios.request({
            baseURL: "",
            url,
            method,
            data,
        });

        // General
        dispatch(actions.apiCallSuccess());
        // Specific
        if(onSuccess)
        dispatch({ type: onSuccess, payload: response.data });


    } catch(error)
        {
            // General
            dispatch(actions.apiCallFail());

            // Specific
            if(onError)
            dispatch({ type: onError, payload: error.message });

        }

}

export default api;