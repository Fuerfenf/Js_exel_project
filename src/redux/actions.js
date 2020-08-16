import {TABLE_RESIZE, CHANGE_TEXT, CHANGE_STYLES, APPLY_STILE} from '@/redux/types';
export {tableResize, changeText, changeStyles, applyStyle};

// action creators
function tableResize(data) {
    return {
        type: TABLE_RESIZE,
        data,
    };
}

function changeText(data) {
    return {
        type: CHANGE_TEXT,
        data,
    };
}

function changeStyles(data) {
    return {
        type: CHANGE_STYLES,
        data,
    };
}

function applyStyle(data) { // data - value, id array
    return {
        type: APPLY_STILE,
        data,
    };
}