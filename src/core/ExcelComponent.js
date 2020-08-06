import {DOMListener} from '@core/DOMListener';

export class ExcelComponent extends DOMListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || '';
    }
    toHTML() { // return component pattern
        return '';
    }
    init() { // central place method used for init components method DOMlisteners
        this.initDomListeners();
    }
    destroy() {
        this.removeDomListeners();
    }
}
