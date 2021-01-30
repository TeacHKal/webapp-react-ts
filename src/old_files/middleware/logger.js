// currying // N => 1
export const logger = params => store => next => action => {
console.log("store", store);
// console.log("next", next);
console.log("action", action);
return next(action);
}
