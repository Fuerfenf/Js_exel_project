import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends ExcelComponent {
    static get getClsName() {
        return 'excel__table';
    }
    constructor($root) {
        super($root, {
            listeners: ['click', 'mousedown', 'mousemove', 'mouseup'],
        });
    }
    toHTML() {
        return createTable(15);
    }
    onClick(event) {
        console.log('click', event.target);
    }
    onMousedown() {
        console.log('mousedown');
    }
    onMousemove() {
        console.log('mousemove');
    }
    onMouseup() {
        console.log('mouseup');
    }
}