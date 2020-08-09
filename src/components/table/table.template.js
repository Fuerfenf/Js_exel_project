// base const
const CODES = {
    A: 65,
    Z: 90,
};


function buildCell(__, colIndex) {
    return `<div class="cell" contenteditable="" data-col="${colIndex}"></div>`;
}
function buildColumn(col, index) {
    return `<div class="column" data-type="resizable" data-col="${index}">
            ${col}
                <div class="col-resize" data-resize="col"></div>
            </div>`;
}
function buildRow(content, num ) {
    const resize = num ? '<div class="row-resize" data-resize="row"></div>' : '';
    return `
     <div class="row" data-type="resizable">
        <div class="row-info">
            ${num ? num : ''}
            ${resize}
        </div>
        <div class="row-data">${content}</div>
     </div>
    `;
}

function buildChr(el, index) {
    return String.fromCharCode(CODES.A + index);
}

// exporting functions

export function createTable(rCounter = 25) {
    const clmCounter = CODES.Z - CODES.A + 1;
    const rows = [];
    const cols = new Array(clmCounter)
        .fill('')
        .map(buildChr)
        .map(buildColumn)
        .join('');
    rows.push(buildRow(cols, null));
    for (let i = 0; i <=rCounter; i++) {
        const cell = new Array(clmCounter)
            .fill('')
            .map(buildCell)
            .join('');
        rows.push(buildRow(cell, i+1));
    }
    return rows.join('');
}

// helper functions for table
export function shouldResize(event) {
    return event.target.dataset.resize;
}