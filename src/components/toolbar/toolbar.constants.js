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
            value: {textAlign: 'right'},
        },
        {
            type: 'format_align_justify',
            active: state['textAlign'] === 'justify',
            value: {textAlign: 'justify'},
        },
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
            active: state['textStyle'] === 'italic',
            value: {textStyle: state['textStyle'] === 'italic' ? 'normal': 'italic'},
        },
        {
            type: 'format_underlined',
            active: state['textDecoration'] === 'underline',
            value: {textDecoration: state['textDecoration'] === 'underline'?
                    'normal' : 'underline'},
        },
    ];
    return buttonName.map(createButton).join('');
}