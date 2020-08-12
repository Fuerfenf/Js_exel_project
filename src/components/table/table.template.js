export {createTable};
// base const
const CODES = {
    A: 65,
    Z: 90,
};
const BASE_WIDTH = '120';


function buildCell(state, row) {
    return function(__, colIndex) {
        const width = getResWidth(state.colState, colIndex);
        return `
            <div
             class="cell" 
             contenteditable
             data-type="cell"
             data-col="${colIndex}"
             data-row="${row}"
             data-id="${row}:${colIndex}"
             style="width: ${width}"
             ></div>`;
    };
}
function buildColumn({col, index, width}) {
    return `<div 
             class="column" 
             data-type="resizable" 
             data-col="${index}" 
             style="width: ${width}"
             >${col}
                <div 
                 class="col-resize" 
                 data-resize="col">
                </div>
            </div>`;
}
function buildRow(content, num ) {
    const resize = num ? '<div class="row-resize" data-resize="row"></div>' : '';
    return `
     <div class="row" 
     data-type="resizable">
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
    let out = null;
    try {
        out = state[index];
    } catch (e) {
        out = BASE_WIDTH;
    }
    return out + 'px';
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
    // console.log(state.colState);
    const clmCounter = CODES.Z - CODES.A + 1;
    const rows = [];
    const cols = new Array(clmCounter)
        .fill('')
        .map(buildChr)
        .map(withWidthFrom(state))
        .map(buildColumn)
        .join('');
    rows.push(buildRow(cols, null));
    for (let row = 0; row <=rCounter; row++) {
        const cell = new Array(clmCounter)
            .fill('')
            .map(buildCell(state, row))
            .join('');
        rows.push(buildRow(cell, row+1));
    }
    return rows.join('');
}