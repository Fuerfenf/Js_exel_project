import {createButton} from '@/components/toolbar/toolbar.templates';
export {packButton};

function packButton(state) {
    const buttonName = [
        {
            type: 'format_align_left',
            active: state['textAlign'] === 'left',
            value: {textAlign: 'left'},
        },
        {
            type: 'format_align_right',
            active: state['textAlign'] === 'right',
            value: {textAlign: state['textAlign'] === 'right' ? 'left': 'right'},
        },
        // {
        //     type: 'format_align_justify',
        //     active: state['textAlign'] === 'justify',
        //     value: {textAlign: state['textAlign'] === 'justify' ? 'left': 'justify'},
        // },
        {
            type: 'format_align_center',
            active: state['textAlign'] === 'center',
            value: {textAlign: state['textAlign'] === 'center' ? 'left': 'center'},
        },
        {
            type: 'format_bold',
            active: state['fontWeight'] === 'bold',
            value: {fontWeight: state['fontWeight'] === 'bold' ? 'normal': 'bold'},
        },
        {
            type: 'format_italic',
            active: state['fontStyle'] === 'italic',
            value: {fontStyle: state['fontStyle'] === 'italic' ? 'normal': 'italic'},
        },
        {
            type: 'format_underlined',
            active: state['textDecoration'] === 'underline',
            value: {textDecoration: state['textDecoration'] === 'underline' ? 'none' : 'underline'},
        },
    ];
    return buttonName.map(createButton).join('');
}