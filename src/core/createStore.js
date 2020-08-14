export {createStore}; // store builds as observer

function createStore(rootReducer, initialState = {}) { // construction function returned object store
    let state = rootReducer({...initialState}, {type: '__INIT__'});
    let listeners = [];

    return { // base methods (public)
        subscribe(func) {
            listeners.push(func);
            return {
                unsubscribe() {
                    listeners = listeners.filter( (l)=> l !== func);
                },
            };
        },
        dispatch(action) {
            state = rootReducer(state, action);
            listeners.forEach((listener) => listener(state));
        },
        getState() {
            return JSON.parse(JSON.stringify(state)); // recursive duplicate clone
        },
    };
}