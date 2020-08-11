import {$} from '@core/dom';
import {Observer} from '@core/Observer';
export {Excel};

class Excel {
    constructor(selector, options) {
        this.$el = $(selector); // marks $ DOM node
        this.components = options.components || [];// in base free array
        this.observer = new Observer(); // objext obsorver for exel (central object)
    }
    getRoot() { // return base DOM node for excel
        const $root = $.create('div', 'excel'); // tag and bs tag class
        const compOptions = {observer: this.observer};
        this.components = this.components.map((Component) => { // get access to everyone of component
            const $el = $.create('div', Component.getClsName);
            const component = new Component($el, compOptions); // component -> class child from excel component
            $el.html(component.toHTML());
            $root.append($el);
            return component; // return instans from build class
        });
        return $root; // return html configet tag to Dom
    }
    render() {
        this.$el.append(this.getRoot());
        this.components.forEach((component) => component.init());
    }
    destroy() {
        this.components.forEach((component) => component.destroy());
    }
}
