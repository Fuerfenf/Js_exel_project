import {$} from '@core/dom';
export {Excel};

class Excel {
    constructor(selector, options) {
        this.$el = $(selector); // marks $ DOM node
        this.components = options.components || [];// in base free array
    }
    getRoot() { // return base DOM node for excel
        const $root = $.create('div', 'excel'); // tag and bs tag class
        this.components = this.components.map((Component) => { // get access to everyone of component
            const $el =$.create('div', Component.getClsName);
            const component = new Component($el); // component -> class child from excel component
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
}
