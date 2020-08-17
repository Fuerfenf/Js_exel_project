// Pure functions

export {capitalize, storage, camelToDashCase, toInlineStyles, debounce};

function capitalize(innerString) {
    if (typeof innerString !== 'string') {
        return '';
    }
    return innerString.charAt(0).toUpperCase() + innerString.slice(1);
}

function storage(key, data= null) { // function for save
    if (!data) {
        return JSON.parse(localStorage.getItem(key));
    }
    localStorage.setItem(key, JSON.stringify(data));

}
export function isEqual(a, b) {
    if (typeof a === 'object' && typeof b === 'object') {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    return a === b;
}

function camelToDashCase(line) {
    return line.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
}

function toInlineStyles(styles={}) {
    return Object.keys(styles)
        .map((key) => `${camelToDashCase(key)}: ${styles[key]}`)
        .join(';');
}

function debounce(func, wait) { // accept function and time returned function
    let timeout;
    return function(...args) {
        const later = () => {
            clearTimeout(timeout);
            // eslint-disable-next-line
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export function clone(object) {
    return JSON.parse(JSON.stringify(object));
}