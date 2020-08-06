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
                throw new Error(`Method ${method} is not implemented in ${this.name} Component`);
            }
            // $root.on same as $root.addEventListener()
            this.$root.on(listener, this[method].bind(this) );
        });
    }
    removeDomListeners() { // next step
    }
}

// local pure functions
function formatMethodName(eventName) { // input -> onInput
    return 'on' + capitalize(eventName);
}