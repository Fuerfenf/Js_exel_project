import {createStore} from '@core/createStore';
import {storage} from '@core/utils';
import {Excel} from '@/components/excel/Excel';
import {Header} from '@/components/header/Header';
import {ToolBar} from '@/components/toolbar/ToolBar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';
import {rootReducer} from '@/redux/rootReducer';
import {initialState} from '@/redux/initialState';
import './scss/index.scss';

const key = 'excel-state';
const store = createStore(rootReducer, initialState);
store.subscribe((state) => { // used for save state local
    storage(key, state);
});
const excel = new Excel('#app', {
    components: [Header, ToolBar, Formula, Table],
    store,
});
excel.render();
// place for inisial components/ write in ExcelComponent