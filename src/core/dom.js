class Dom {
    constructor(selector) {
        this.$domEl = (typeof selector === 'string') ? document.querySelector(selector) : selector;
    }
    html(html) { // setter if html string
        if (typeof html ==='string') {
            this.$domEl.innerHTML = html; // return inner tag
            return this;
        }
        return this.$domEl.outerHTML.trim(); // return outer tag (.trim delete spaces in string in start/end)
    }
    clear() {
        this.html('');
        return this;
    }
    set(eventType, callback) { // method for event analog addEventList
        this.$domEl.addEventListener(eventType, callback);
    }
    del(eventType, callback) {
        this.$domEl.removeEventListener(eventType, callback);
    }
    append(nodel) {
        if (nodel instanceof Dom) { // for native node
            nodel = nodel.$domEl;
        }
        if (Element.prototype.append) {
            this.$domEl.append(nodel);
        } else {
            this.$domEl.appendChild(nodel);
        }
        return this;
    }
    get getEldata() {
        return this.$domEl.dataset;
    }
    closest(selector) {
        // return in base native element that use costructure with functionality as on
        return $(this.$domEl.closest(selector));
    }
    getCordinates() {
        return this.$domEl.getBoundingClientRect();
    }
    get dataIndex() {
        return this.$domEl.dataset;
    }
}

export function $(selector) { // take selector or node
    return new Dom(selector);
}
// statics methods for $
$.create = (tagName, clss = '') => {
    const el = document.createElement(tagName);
    if (clss) {
        el.classList.add(clss);
    }
    return $(el);
};
