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
        $domtree.focusOn().addClass(TableSelection.className);
    }
    clear() {
        this.cellgroup.forEach(($cell) => $cell.removeClass(TableSelection.className));
        this.cellgroup = [];
    }
    get selectedIds() {
        return this.cellgroup.map(($cell) => $cell.getId());
    }
    selectGroup($group =[]) {
        this.clear();
        this.cellgroup = $group;
        this.cellgroup.forEach(($el)=>$el.addClass(TableSelection.className));
    }
    appCellDataStyle(style) {
        this.cellgroup.forEach(($element) =>
            $element.css(style));
    }
}