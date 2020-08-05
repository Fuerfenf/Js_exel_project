export class DOMLisener {
    constructor($root) {
        if (!$root) {
            throw new Error(`No $root provided for DOMlistener`)
        }
        this.$root = $root;
    }
}