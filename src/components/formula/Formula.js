import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
    static get getClsName() {
        return 'excel__formula';
    }
    constructor($root) {
        super($root, {
            name: 'Formula', // flag for marking problems where is mistake
            listeners: ['input', 'click'], // list of listeners for addit
        });
    }
    toHTML() {
        return `
         <div class="fx_info">fx</div>
            <div class="input_field" contenteditable="" spellcheck="false"></div>
        `;
    }
    onInput(event) { // method for input
        console.log('Formula: onInput', event.target.textContent.trim());
    }
    onClick() {
        console.log('test');
    }
}