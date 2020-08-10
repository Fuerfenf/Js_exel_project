export {TableSelection};

class TableSelection {
    static get className() {
        return 'selected';
    }
    constructor() {
        this.cellgroup = []; // array for store sells
        this.currentCell = null;
    }
    select($domtree) { // $domtree instanceof DOM === true
        this.clear();
        this.cellgroup.push($domtree);
        this.currentCell = $domtree;
        $domtree.addClass(TableSelection.className);
    }
    clear() {
        this.cellgroup.forEach(($cell) => $cell.removeClass(TableSelection.className));
        this.cellgroup = [];
    }
    selectgroup() {
    }
}