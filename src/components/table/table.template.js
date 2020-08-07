// base const
const CODES = {
    A: 65,
    Z: 90,
};


function buildCell() {
    return `<div class="cell" contenteditable=""></div>`;
}
function buildColumn(col) {
    return `<div class="column">
            ${col}
                <div class="col-resize"></div>
            </div>`;
}
function buildRow(content, num ) {
    return `
     <div class="row">
        <div class="row-info">
            ${num ? num : ''}
            <div class="row-resize"></div>
        </div>
        <div class="row-data">${content}</div>
     </div>
    `;
}

function buildChr(el, index) {
    return String.fromCharCode(CODES.A + index);
}

export function createTable(rCounter = 25) {
    const clmCounter = CODES.Z - CODES.A + 1;
    const rows = [];
    const cols = new Array(clmCounter)
        .fill('')
        .map(buildChr)
        .map(buildColumn)
        .join('');
    rows.push(buildRow(cols));
    for (let i = 0; i <=rCounter; i++) {
        const cell = new Array(clmCounter)
            .fill('')
            .map(buildCell)
            .join('');
        rows.push(buildRow(cell, i+1));
    }
    return rows.join('');
}