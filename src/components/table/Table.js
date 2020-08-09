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
        const movetype = event.target.dataset.resize;
        let delta = null;
        if (movetype) {
            const $target = $(event.target);
            const $parent = $target.closest('[data-type="resizable"]');
            const coordinates = $parent.getCordinates();
            let pxvalue = null;
            const sidePos = movetype === 'col' ? 'bottom' : 'right';
            $target.css({
                opacity: 1,
                zIndex: 1000,
                [sidePos]: '-5000px',
            });
            const dumpcells = this.$root.selectAll(`[data-col="${$parent.dataIndex.col}"]`);
            document.onmousemove = (ev) => {
                if (movetype === 'col') {
                    delta = ev.pageX - coordinates.right;
                    pxvalue = coordinates.width + delta;
                    $target.css({right: -delta + 'px'});
                } else {
                    delta = ev.pageY - coordinates.bottom;
                    pxvalue = coordinates.height + delta;
                    $target.css({bottom: -delta + 'px'});
                }
            };
            document.onmouseup = () => {
                document.onmousemove = null;
                document.onmouseup = null;
                if (movetype === 'col') {
                    $parent.css({width: pxvalue + 'px'});
                    dumpcells.forEach((el) => el.style.width = pxvalue + 'px');
                } else {
                    $parent.css({height: pxvalue + 'px'});
                    dumpcells.forEach((el) => el.style.height = pxvalue + 'px');
                }
                $target.css({
                    opacity: 0,
                    bottom: 0,
                    right: 0,
                });
            };
        }
    }
}