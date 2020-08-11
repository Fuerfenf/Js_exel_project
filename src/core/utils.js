// Pure functions
export {capitalize};

function capitalize(innerString) {
    if (typeof innerString !== 'string') {
        return '';
    }
    return innerString.charAt(0).toUpperCase() + innerString.slice(1);
}

