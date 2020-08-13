import {TABLE_RESIZE, CHANGE_TEXT} from '@/redux/types';
export {tableResize, changeText};

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