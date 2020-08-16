import {DOMListener} from '@core/DOMListener';

export {ExcelComponent};

class ExcelComponent extends DOMListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || '';
        this.observer = options.observer;
        this.subscribe = options.subscribe || [];
        this.store = options.store;
        this.unsubscribers = [];
        this.prepare();
    }
    $observe(event, ...args) { // notificate listeners about event
        this.observer.emit(event, ...args);
    }
    $onSubscribe(event, func) { // subscribe on event
        const unsub = this.observer.subscribe(event, func);
        this.unsubscribers.push(unsub);
    }
    $dispatch(action) {
        this.store.dispatch(action);
    }
    storeChanged() { // this came changes, on thous fields on witch we subscribe

    }
    isWatching(key) {
        return this.subscribe.includes(key);
    }
    prepare() {} // prepare called early then init
    toHTML() { // return component pattern
        return '';
    }
    init() { // central place method used for init components add DOMlisteners
        this.initDomListeners();
    }
    destroy() { // delete component clear DOMListeners
        this.removeDomListeners();
        this.unsubscribers.forEach((unsub) => unsub());
    }
}
