// Pure functions
export {capitalize, storage};

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