import {storage} from '@core/utils';

function toHtml(key) {
    const model = storage(key);
    // const utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    return `
        <li class="db__record">
            <a href="#excel/${key.split(':')[1]}">${model.title}</a>
            <strong>
                ${new Date(model.openDate).toLocaleDateString()}
                ${new Date(model.openDate).toLocaleTimeString()}
            </strong>
        </li>
    `;
}
function getAllTableKeys() {
    const keys = [];
    for (let i=0; i<localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key.includes('excel')) {
            continue;
        }
        keys.push(key);
    }
    return keys;
}

export function createRecordsTable() {
    const keys = getAllTableKeys();
    if (!keys.length) {
        return `<p>No tables</p>`;
    }
    return `
        <div class="db__list-header">
                <span>Name</span>
                <span>Open date</span>
        </div>
        <ul class="db__list">
            ${keys.map(toHtml).join('')};
        </ul>
    `;

}