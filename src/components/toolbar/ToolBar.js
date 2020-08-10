import {ExcelComponent} from '@core/ExcelComponent';
export {ToolBar};

class ToolBar extends ExcelComponent {
    static get getClsName() {
        return 'excel__toolbar';
    }
    constructor($root, options) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click'],
        });
    }

    toHTML() {
        return `
         <div> <!-- Align -->
                <div class="button_align">
                    <span class="material-icons">format_align_left</span>
                </div>
                <div class="button_align">
                    <span class="material-icons">format_align_right</span>
                </div>
                <div class="button_align">
                    <span class="material-icons">format_align_justify</span>
                </div>
                <div class="button_align">
                    <span class="material-icons">format_align_center</span>
                </div>
            </div>
            <div>
                <div class="button_format">
                    <span class="material-icons">format_bold</span>
                </div>

                <div class="button_format">
                    <span class="material-icons">format_italic</span>
                </div>

                <div class="button_format">
                    <span class="material-icons">format_underlined</span>
                </div>
            </div>
        `;
    }
    onClick(event) {
        console.log(event.target);
    }
}