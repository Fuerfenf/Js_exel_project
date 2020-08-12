import {storage} from '@core/utils';
export {initialState};

const defaultState = {
    rowState: {},
    colState: {},
};

const initialState = storage('excel-state') ? storage('excel-state') : defaultState;