import {Page} from '@core/Page';
import {createStore} from '@core/createStore';
import {rootReducer} from '@/redux/rootReducer';
import {normalizeInitialState} from '@/redux/initialState';
import {debounce, storage} from '@core/utils';
import {Excel} from '@/components/excel/Excel';
import {Header} from '@/components/header/Header';
import {ToolBar} from '@/components/toolbar/ToolBar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';

function storageName(param) {
    return 'excel:' + param;
}

export class ExcelPage extends Page {
    getRoot() {
        let params = null;
        if (this.params.length > 1) {
            params = (this.params[1] && !('' === this.params[1])) ? this.params[1] : Date.now().toString();
        } else {
            params = Date.now().toString();
        }
        const state = storage(storageName(params));
        const store = createStore(rootReducer, normalizeInitialState(state));
        const stateListener = debounce((state) => { // used for save state local
            storage(storageName(params), state);
        }, 300); // function, timeout time
        store.subscribe(stateListener);
        
        this.excel = new Excel( {
            components: [Header, ToolBar, Formula, Table],
            store,
        });
        return this.excel.getRoot();
    }
    afterRender() {
        this.excel.init();
    }
    destroy() {
        this.excel.destroy();
    }
}