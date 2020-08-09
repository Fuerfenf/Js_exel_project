import {ExcelComponent} from '@core/ExcelComponent';
import {createTable, shouldResize} from '@/components/table/table.template';
import {resizingHendler} from "@/components/table/resizing";

export class Table extends ExcelComponent {
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
    onMousedown(event) {
        if (shouldResize(event)) {
            resizingHendler(this.$root, event);
        }
    }
}