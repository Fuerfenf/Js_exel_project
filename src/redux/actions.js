import {TABLE_RESIZE} from '@/redux/types';
export {tableResize};

// action creators
function tableResize(data) {
    return {
        type: TABLE_RESIZE,
        data,
    };
}