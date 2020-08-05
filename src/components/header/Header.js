import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
    static get getClsName() {
        return 'excel__header';
    }
    // static className = 'excel__header'; // this way in webpak dont work (in this moment dont know about it)

    toHTML() {
        return `
        <input type="text" class="input" value="New Table"/>
            <div>
                <div class="button_exit">
                    <span class="material-icons">remove_circle</span>
                </div>
                <div class="button_delete">
                    <span class="material-icons">cancel</span>
                </div>
            </div>
        `;
    }
}
