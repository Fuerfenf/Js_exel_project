import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom';
import {changeTitle} from '@/redux/actions';
import {defaultTitle} from '@core/constants';
import {debounce} from '@core/utils';

export class Header extends ExcelComponent {
    static get getClsName() {
        return 'excel__header';
    }
    constructor($root, options) {
        super($root, {
            name: 'Header',
            listeners: ['input'],
            ...options,
        });
    }
    prepare() {
        this.onInput = debounce(this.onInput, 300); // set time betwin clik's
    }

    // static className = 'excel__header'; // this way in webpak dont work (in this moment dont know about it)

    toHTML() {
        const title = this.store.getState().title || defaultTitle;
        return `
        <input type="text" class="input" value="${title}"/>
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
    onInput(event) {
        const $target = $(event.target);
        this.$dispatch(changeTitle($target.text()));
    }
}
