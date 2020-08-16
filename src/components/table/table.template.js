import {toInlineStyles} from '@core/utils';
import {defaultStyles} from '@core/constants';
import {parse} from '@core/parse';

export {createTable};
// base const
const CODES = {
    A: 65,
    Z: 90,
};
const BASE_WIDTH = '120';
const BASE_HEIGHT = '24';


function buildCell(state, row) {
    return function(__, colIndex) {
        const idCell = `${row}:${colIndex}`;
        const width = getResWidth(state.colState, colIndex);
        const data = state.dataState[idCell];
        const styles = toInlineStyles({
            ...defaultStyles,
            ...state.stylesState[idCell],
        });
        return `
            <div    
             class="cell" 
             contenteditable
             data-type="cell"
             data-col="${colIndex}"
             data-row="${row}"
             data-id="${idCell}"
             data-value="${data || ''}"
             style="${styles}; width: ${width}"
             >${parse(data) || ''}</div>`;
    };
}
function buildColumn({col, index, width}) {
    return `<div 
             class="column" 
             data-type="col" 
             data-flag="resizable"
             data-col="${index}" 
             style="width: ${width}"
             >${col}
                <div 
                 class="col-resize" 
                 data-resize="col">
                </div>
            </div>`;
}
function buildRow(content, num, state) {
    const resize = num ? '<div class="row-resize" data-resize="row"></div>' : '';
    const height = getResHeight(state, num);
    return `
     <div class="row" 
     data-type="row"
     data-flag="resizable"
     data-row="${num}"
     style="height: ${height}">
        <div class="row-info">
            ${num ? num : ''}
            ${resize}
        </div>
        <div class="row-data">${content}
        </div>
     </div>
    `;
}

function buildChr(el, index) {
    return String.fromCharCode(CODES.A + index);
}
function getResWidth(state, index) {
     return (state[index] || BASE_WIDTH) + 'px';
}
function getResHeight(state, index) {
    return (state[index] || BASE_HEIGHT) + 'px';
}
function withWidthFrom(state) {
    return function(col, index) {
        return {
            col, index, width: getResWidth(state.colState, index),
        };
    };
}

// exporting functions

function createTable(rCounter = 25, state={}) {
    const clmCounter = CODES.Z - CODES.A + 1;
    const rows = [];
    const cols = new Array(clmCounter)
        .fill('')
        .map(buildChr)
        .map(withWidthFrom(state))
        .map(buildColumn)
        .join('');
    rows.push(buildRow(cols, null, state.rowState));
    for (let row = 0; row <=rCounter; row++) {
        const cell = new Array(clmCounter)
            .fill('')
            .map(buildCell(state, row))
            .join('');
        rows.push(buildRow(cell, row+1, state.rowState));
    }
    return rows.join('');
}