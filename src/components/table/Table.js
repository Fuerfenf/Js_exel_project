import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {$} from '@core/dom';

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
        if (event.target.dataset.resize) {
            const $target = $(event.target);
            const $parent = $target.closest('[data-type="resizable"]');
            const coordinates = $parent.getCordinates();
            document.onmousemove = (ev) => {
                const delta = ev.pageX - coordinates.right;
                const pxvalue = coordinates.width + delta;
                $parent.$domEl.style.width = pxvalue + 'px';
                document.querySelectorAll(`[data-col="${$parent.dataIndex.col}"]`)
                    .forEach((el) => el.style.width = pxvalue + 'px');
            };
            document.onmouseup = () => {
                document.onmousemove = null;
            };
        }
    }
}