import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom';
import {changeTitle} from '@/redux/actions';
import {defaultTitle} from '@core/constants';
import {debounce} from '@core/utils';
import {ActiveRoute} from '@core/routes/ActiveRoute';

export class Header extends ExcelComponent {
    static get getClsName() {
        return 'excel__header';
    }
    constructor($root, options) {
        super($root, {
            name: 'Header',
            listeners: ['input', 'click'],
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
                <div class="button_exit" data-button="remove">
                    <span class="material-icons" data-button="remove">remove_circle</span>
                </div>
                <div class="button_delete" data-button="exit">
                    <span class="material-icons" data-button="exit">cancel</span>
                </div>
            </div>
        `;
    }
    onClick(event) {
        const $target = $(event.target);
        if ($target.dataIndex.button === 'remove') {
            const confurmeToDelet = confirm('You want delete this table ?');
            if (confurmeToDelet) {
                localStorage.removeItem('excel:'+ ActiveRoute.param[1]);
                ActiveRoute.navigate('');
            }
        } else if ($target.dataIndex.button === 'exit') {
            ActiveRoute.navigate('');
        }
    }
    onInput(event) {
        const $target = $(event.target);
        this.$dispatch(changeTitle($target.text()));
    }
}
