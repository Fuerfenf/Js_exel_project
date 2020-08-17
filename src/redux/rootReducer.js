import {CHANGE_TEXT, CHANGE_STYLES, TABLE_RESIZE, APPLY_STILE, CHANGE_TITLE, UPDATE_DATE} from '@/redux/types';
export {rootReducer};

function rootReducer(state, action) {
    let field;
    let val;
    // console.log('Action: ', action);
    switch (action.type) {
        case TABLE_RESIZE:
            field = action.data.type === 'col' ? 'colState' : 'rowState';
            return {...state, [field]: value(state, field, action)};
        case CHANGE_TEXT:
            field = 'dataState';
            return {
                ...state,
                currentText: action.data.value,
                [field]: value(state, field, action)};
        case CHANGE_STYLES:
            return {...state, currentToolbarStyles: action.data};
        case APPLY_STILE:
            field = 'stylesState';
            val = state[field] || {};
            action.data.ids.forEach((id) => {
                val[id] = {...val[id], ...action.data.value};
            });
            return {
                ...state,
                [field]: val,
                currentToolbarStyles: {
                    ...state.currentToolbarStyles,
                    ...action.data.value,
                },
            };
        case CHANGE_TITLE:
            return {
                ...state, title: action.data,
            };
        case UPDATE_DATE:
            return {
                ...state, openDate: new Date().toJSON(),
            }
        default: return state;
    }
}

function value(state, field, action) {
    const val = state[field] || {};
    val[action.data.id] = action.data.value;
    return val;
}