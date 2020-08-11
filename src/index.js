import {createStore} from '@core/createStore';
import {Excel} from '@/components/excel/Excel';
import {Header} from '@/components/header/Header';
import {ToolBar} from '@/components/toolbar/ToolBar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';
import {rootReducer} from '@/redux/rootReducer';
import './scss/index.scss';

const store = createStore(rootReducer);
const excel = new Excel('#app', {
    components: [Header, ToolBar, Formula, Table],
});

excel.render();
// place for inisial components/ write in ExcelComponent