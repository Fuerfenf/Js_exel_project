import {storage} from '@core/utils';
import {defaultStyles, defaultTitle} from '@core/constants';
export {initialState, defaultState};

const defaultState = {
    rowState: {},
    colState: {},
    dataState: {}, // for save data format: {'0:1': 'fewfew'}
    stylesState: {},
    title: defaultTitle,
    currentText: '',
    currentToolbarStyles: defaultStyles,
};

const normalize = (state) => ({
    ...state,
    currentToolbarStyles: defaultStyles,
    currentText: '',
});
const initialState = storage('excel-state') ? normalize(storage('excel-state')) : defaultState;