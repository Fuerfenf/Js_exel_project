// helper functions for table
export {shouldResize, isCell, buildCellMatrix};

function shouldResize(event) {
    return event.target.dataset.resize;
}

function isCell(event) {
    return event.target.dataset.type === 'cell';
}

function rangeCells(startCell, endCell) {
    if (startCell > endCell) {
        [endCell, startCell] = [startCell, endCell];
    }
    return new Array(endCell-startCell+1)
        .fill('')
        .map((__, index) => {
            return startCell + index;
        });
}

function buildCellMatrix($saveTargetCell, $saveCurrentCell) {
    const targetCell = $saveTargetCell.getId(true);
    const currentCell = $saveCurrentCell.getId(true);
    const groupCols = rangeCells(currentCell.col, targetCell.col);
    const groupRows = rangeCells(currentCell.row, targetCell.row);
    return groupCols.reduce((pack, col) => {
        groupRows.forEach((row) => pack.push(`${row}:${col}`));
        return pack;
    }, []);
}