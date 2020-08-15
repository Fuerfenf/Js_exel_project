import {createToolbar} from '@/components/toolbar/toolbar.templates';
import {$} from '@core/dom';
import {ExcelStateComponent} from '@core/ExcelStateComponent';
import {defaultStyles} from '@core/constants';
export {ToolBar};

class ToolBar extends ExcelStateComponent {
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
    prepare() {
        this.initState(defaultStyles);
    }

    get template() {
        return createToolbar(this.state);
    }

    toHTML() {
        return this.template;
    }
    onClick(event) {
        const $target = $(event.target);
        $target.addClass('active');
        if ($target.dataIndex.type === 'button') {
            const value = JSON.parse($target.dataIndex.value);
            this.$observe('toolbar:applyStyle', value);

            const elemTypeKey = Object.keys(value)[0];
            this.setState({[elemTypeKey]: value[elemTypeKey]});
        }
    }
}