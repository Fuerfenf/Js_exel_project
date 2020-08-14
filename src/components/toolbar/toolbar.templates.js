import {buttonName} from '@/components/toolbar/toolbar.constants';

export {createToolbar};


function createToolbar() {
    return buttonName.map(createButton).join('');
}

function createButton(buttonName) {
    const metaData = `
        data-type="button"
        data-value='${JSON.stringify(buttonName.value)}'
    `;
    return `
    <div class="button ${buttonName.active ? 'active' : ''}"
    ${metaData}>
        <i class="material-icons" 
        ${metaData}>${buttonName.type}</i>
     </div>
    `;
}