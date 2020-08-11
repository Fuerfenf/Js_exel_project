import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom';
import {createTable} from '@/components/table/table.template';
import {resizingHendler} from '@/components/table/resizing';
import {TableSelection} from '@/components/table/TableSelection';
import {isCell, shouldResize, buildCellMatrix, nextSelector} from '@/components/table/table.functions';
export {Table};

class Table extends ExcelComponent {
    static get getClsName() {
        return 'excel__table';
    }
    constructor($root, options) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown', 'keydown'],
            ...options,
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
        this.observer.subscribe('its working', (text) => { // its working flag and its will be same in formul
            this.selectionType.currentCell.text(text);
        });
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
    onKeydown(event) {
        const keys = [
            'Enter',
            'Tab',
            'ShiftLeft',
            'AltLeft',
            'ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft',
        ];
        const {key} =event;
        if (keys.includes(key) && !event.shiftKey) { // without shift next down sell if shift in cell next line
            event.preventDefault(); // override default behavior
            const idCell = this.selectionType.currentCell.getId(true);
            const $next = this.$root.selectOne(nextSelector(key, idCell));
            this.selectionType.select($next);
        }
    }
}
