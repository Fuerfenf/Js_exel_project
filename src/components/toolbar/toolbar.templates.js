import {packButton} from '@/components/toolbar/toolbar.constants';

export {createToolbar, createButton};


function createToolbar(state) {
    return packButton(state);
}

function createButton(buttonName) {
    const metaData = `
        data-type="button"
        data-value='${JSON.stringify(buttonName.value)}'
    `;
    return `
    <div class="button ${buttonName.active ? 'active' : ''}"
    ${metaData}>
        <i class="material-icons" ${metaData}>
            ${buttonName.type}</i>
     </div>
    `;
}