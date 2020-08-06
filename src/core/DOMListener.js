import {capitalize} from '@core/utils';

export class DOMListener {
    constructor($root, listeners=[]) { // array listeners
        if (!$root) {
            throw new Error(`No $root provided for DOMlistener`);
        }
        this.$root = $root;
        this.listeners = listeners;
    }
    initDomListeners() {
        this.listeners.forEach( (listener) => {
            const method = formatMethodName(listener);
            if (!this[method]) {
                throw new Error(`Method ${method} is not implemented in ${this.name || ''} Component`);
            }
            this[method] = this[method].bind(this); // bind method on his context
            this.$root.set(listener, this[method]);
        });
    }
    removeDomListeners() { // next step
        this.listeners.forEach( (listener) => {
            const method = formatMethodName(listener);
            this.$root.del(listener, this[method]);
        });
    }
}

// local pure functions
function formatMethodName(eventName) { // input -> onInput
    return 'on' + capitalize(eventName);
}