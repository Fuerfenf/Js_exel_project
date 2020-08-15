import {ExcelComponent} from '@core/ExcelComponent';
export {ExcelStateComponent};

class ExcelStateComponent extends ExcelComponent {
    constructor(...args) {
        super(...args);
    }

    get template() {
        return JSON.stringify(this.state, null, 2);
    }

    initState(initState = {}) {
        this.state = {...initState};
    }

    setState(newstate) {
        this.state = {...this.state, ...newstate};
        this.$root.html(this.template);
    }
}
