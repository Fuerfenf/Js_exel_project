import {$} from '@core/dom';
import {Observer} from '@core/Observer';
import {StoreSubscriber} from '@core/StoreSubscriber';
export {Excel};

class Excel {
    constructor(options) {
        this.components = options.components || [];// in base free array
        this.store = options.store;
        this.observer = new Observer(); // objext obsorver for exel (central object)
        this.subscriber = new StoreSubscriber(this.store);
    }
    getRoot() { // return base DOM node for excel
        const $root = $.create('div', 'excel'); // tag and bs tag class
        const compOptions = {
            observer: this.observer,
            store: this.store,
        };
        this.components = this.components.map((Component) => { // get access to everyone of component
            const $el = $.create('div', Component.getClsName);
            const component = new Component($el, compOptions); // component -> class child from excel component
            $el.html(component.toHTML());
            $root.append($el);
            return component; // return instans from build class
        });
        return $root; // return html configet tag to Dom
    }
    init() {
        this.subscriber.subscribeComponents(this.components);
        this.components.forEach((component) => component.init());
    }
    destroy() {
        this.subscriber.unsubscribeComponents();
        this.components.forEach((component) => component.destroy());
    }
}
