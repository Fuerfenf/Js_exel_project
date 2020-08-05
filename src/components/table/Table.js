import {ExcelComponent} from '@core/ExcelComponent';

export class Table extends ExcelComponent {
    static get getClsName() {
        return 'excel__table';
    }

    toHTML() {
        return `
              <div class="row">
                <div class="row-info">
                </div>
                <div class="row-data">
                    <div class="column">a</div>
                    <div class="column">b</div>
                    <div class="column">c</div>
                    <div class="column">a</div>
                    <div class="column">b</div>
                    <div class="column">c</div>
                    <div class="column">a</div>
                    <div class="column">b</div>
                    <div class="column">c</div>
                </div>
            </div>
            <div class="row">
                <div class="row-info">
                    1
                </div>
                <div class="row-data">
                    <div class="cell" contenteditable="">a1</div>
                    <div class="cell" contenteditable="">b1</div>
                    <div class="cell" contenteditable="">c1</div>
                </div>
            </div>
            <div class="row">
                <div class="row-info">
                    2
                </div>
                <div class="row-data">
                    <div class="cell" contenteditable="">a1</div>
                    <div class="cell" contenteditable="">b1</div>
                    <div class="cell" contenteditable="">c1</div>
                </div>
            </div>
        `;
    }
}