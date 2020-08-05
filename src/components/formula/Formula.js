import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
    static get getClsName() {
        return 'excel__formula';
    }

    toHTML() {
        return `
         <div class="fx_info">fx</div>
            <div class="input_field" contenteditable="" spellcheck="false"></div>
        `;
    }
}