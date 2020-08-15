import {createButton} from '@/components/toolbar/toolbar.templates';
export {packButton};

function packButton(state) {
    const buttonName = [
        {
            type: 'format_align_left',
            active: false,
            value: {textAlign: 'left'},
        },
        {
            type: 'format_align_right',
            active: false,
            value: {textAlign: 'right'},
        },
        {
            type: 'format_align_justify',
            active: false,
            value: {textAlign: 'justify'},
        },
        {
            type: 'format_align_center',
            active: false,
            value: {textAlign: 'center'},
        },
        {
            type: 'format_bold',
            active: state['fontWeight'] === 'bold',
            value: {fontWeight: state['fontWeight'] === 'bold' ? 'normal': 'bold'},
        },
        {
            type: 'format_italic',
            active: false,
            value: {textStyle: 'italic'},
        },
        {
            type: 'format_underlined',
            active: false,
            value: {textDecoration: 'underline'},
        },
    ];
    return buttonName.map(createButton).join('');
}