function toHtml() {
    return `
        <li class="db__record">
            <a href="#">Table N1</a>
            <strong>12.10.2012</strong>
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
    console.log('keys', keys);
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