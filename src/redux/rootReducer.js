export {rootReducer};

function rootReducer(state, action) {
    let prevState;
    switch (action.type) {
        case 'TABLE_RESIZE':
            prevState = state.colState || {};
            prevState[action.data.id] = action.data.pxvalue;
            return {...state, colState: prevState};
        default: return state;
    }
}