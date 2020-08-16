import {Page} from '@core/Page';
import {createStore} from '@core/createStore';
import {rootReducer} from '@/redux/rootReducer';
import {initialState} from '@/redux/initialState';
import {debounce, storage} from '@core/utils';
import {Excel} from '@/components/excel/Excel';
import {Header} from '@/components/header/Header';
import {ToolBar} from '@/components/toolbar/ToolBar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';

export class ExcelPage extends Page {
    getRoot() {
        const key = 'excel-state';
        const store = createStore(rootReducer, initialState);
        const stateListener = debounce((state) => { // used for save state local
            storage(key, state);
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