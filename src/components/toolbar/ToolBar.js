import {ExcelComponent} from '@core/ExcelComponent';
import {createToolbar} from '@/components/toolbar/toolbar.templates';
import {$} from "@core/dom";
export {ToolBar};

class ToolBar extends ExcelComponent {
    static get getClsName() {
        return 'excel__toolbar';
    }
    constructor($root, options) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click'],
            ...options,
        });
    }

    toHTML() {
        return createToolbar();
    }
    onClick(event) {
        const $target = $(event.target);
        if ($target.dataIndex.type === 'button') {
            console.log($target.dataIndex.value);
        }
    }
}