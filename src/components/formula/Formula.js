import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom';
export {Formula};

class Formula extends ExcelComponent {
    static get getClsName() {
        return 'excel__formula';
    }
    constructor($root, options) {
        super($root, {
            name: 'Formula', // flag for marking problems where is mistake
            listeners: ['input', 'keydown'], // list of listeners for addit
            ...options,
        });
    }
    init() {
        super.init();
        this.$formula = this.$root.selectOne('#formula_field');
        this.$onSubscribe('table:select', ($cell) => {
            this.$formula.text($cell.text());
        });
        // this.$onSubscribe('table:input', ($cell) => {
        //     this.$formula.text($cell.text());
        // });
        this.$subscribe((state)=>{
            this.$formula.text(state.currentText);
        });
    }
    toHTML() {
        return `
         <div class="fx_info">fx</div>
            <div id="formula_field" class="input_field" contenteditable="" spellcheck="false"></div>
        `;
    }
    onInput(event) { // method for input
        this.$observe('formula:input', $(event.target).text());
    }
    onKeydown(event) {
        const keys = ['Enter', 'Tab'];
        if (keys.includes(event.key)) {
            event.preventDefault();
            this.$observe('formula:done');
        }
    }
}