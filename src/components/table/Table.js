import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom';
import {createTable} from '@/components/table/table.template';
import {resizingHendler} from '@/components/table/resizing';
import {TableSelection} from '@/components/table/TableSelection';
import {isCell, shouldResize, buildCellMatrix} from '@/components/table/table.functions';
export {Table};

class Table extends ExcelComponent {
    static get getClsName() {
        return 'excel__table';
    }
    constructor($root) {
        super($root, {
            listeners: ['mousedown'],
        });
    }
    toHTML() {
        return createTable(15);
    }
    prepare() {
        this.selectionType = new TableSelection();
    }
    init() {
        super.init(); // need for Domlisteners
        const $cell = this.$root.selectOne('[data-id="0:0"]');
        this.selectionType.select($cell);
    }
    onMousedown(event) {
        if (shouldResize(event)) {
            resizingHendler(this.$root, event);
        } else if (isCell(event)) {
            const $target = $(event.target);
            if (event.shiftKey) {
                const $cells = buildCellMatrix($target, this.selectionType.currentCell)
                    .map((id) => this.$root.selectOne(`[data-id="${id}"]`));
                this.selectionType.selectGroup($cells);
            } else {
                this.selectionType.select($target);
            }
        }
    }
}

