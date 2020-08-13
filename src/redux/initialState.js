import {storage} from '@core/utils';
export {initialState};

const defaultState = {
    rowState: {},
    colState: {},
    fieldData: {}, // for save data format: {'0:1': 'fewfew'}
    currentText: '',
};

const initialState = storage('excel-state') ? storage('excel-state') : defaultState;