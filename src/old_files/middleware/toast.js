const toast = store => next => action => {
    if (action.type === "error") {
        console.log("Toast -> Error", action.payload.message);
    }
    else{
        next(action);
    }
}