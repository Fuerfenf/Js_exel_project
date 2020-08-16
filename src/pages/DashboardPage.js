import {Page} from '@core/Page';
import {$} from '@core/dom';

export class DashboardPage extends Page {
    getRoot() {
        return $.create('div', 'db').html(`
        <div class="db__header">
            <h1>Excel Dashboard</h1>
        </div>

        <div class="db__add-new">
            <div class="db__view-center">
                <a href="#" class="db__create">
                    New <br/> Table
                </a>
            </div>
        </div>

        <div class="db__table db__view-center">
            <div class="db__list-header">
                <span>Name</span>
                <span>Open date</span>
            </div>
            <div class="db__list">
                <li class="db__record">
                    <a href="#">Table N1</a>
                    <strong>12.10.2012</strong>
                </li>
                <li class="db__record">
                    <a href="#">Table N1</a>
                    <strong>12.10.2012</strong>
                </li>
                <li class="db__record">
                    <a href="#">Table N1</a>
                    <strong>12.10.2012</strong>
                </li>
            </div>
        </div>
        `);
    }
}