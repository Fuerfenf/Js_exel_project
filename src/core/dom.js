class Dom {

}

export function $() {
    return new Dom();
}
// statics methods for $
$.create = (tagName, clss = '') => {
    const el = document.createElement(tagName);
    if (clss) {
        el.classList.add(clss);
    }
    return el;
};
