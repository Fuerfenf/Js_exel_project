export {shouldResize, createTable, isCell};
// base const
const CODES = {
    A: 65,
    Z: 90,
};


function buildCell(row) {
    return function(__, colIndex) {
        return `
            <div
             class="cell" 
             contenteditable
             data-type="cell"
             data-col="${colIndex}"
             data-row="${row}"
             data-id="${row}:${colIndex}"
             ></div>`;
    };
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

function createTable(rCounter = 25) {
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
            .map(buildCell(i))
            .join('');
        rows.push(buildRow(cell, i+1));
    }
    return rows.join('');
}

// helper functions for table
function shouldResize(event) {
    return event.target.dataset.resize;
}
function isCell(event) {
    return event.target.dataset.type === 'cell';
}