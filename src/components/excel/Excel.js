import {$} from '@core/dom';

export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector); // marks $ DOM node
        this.components = options.components || [];// in base free array
    }
    getRoot() { // return base DOM node for excel
        const $root = $.create('div', 'excel'); // tag and bs tag class
        this.components.forEach((Component) => { // get access to everyone of component
            const $el =$.create('div', Component.getClsName);
            const component = new Component($el); // component -> class child from excel component
            $el.innerHTML = component.toHTML();
            $root.append($el);
        });
        return $root; // return html configet tag to Dom
    }


    render() {
        this.$el.append(this.getRoot());
    }
}
