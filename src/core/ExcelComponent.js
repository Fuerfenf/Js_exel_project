import {DOMListener} from '@core/DOMListener';

export {ExcelComponent};

class ExcelComponent extends DOMListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || '';
        this.observer = options.observer;
        this.prepare();
    }
    prepare() {} // prepare called early then init
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
