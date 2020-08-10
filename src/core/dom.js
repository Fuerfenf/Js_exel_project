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
    getId(parse) {
        if (parse) {
            const parsedId = this.getId().split(':');
            return {
                row: +parsedId[0],
                col: +parsedId[1],
            };
        }
        return this.dataIndex.id;
    }
    get dataIndex() {
        return this.$domEl.dataset;
    }
    selectOne(selector) {
        return $(this.$domEl.querySelector(selector));
    }
    selectAll(selector) {
        return this.$domEl.querySelectorAll(selector);
    }
    addClass(className) {
        return this.$domEl.classList.add(className);
    }
    removeClass(className) {
        return this.$domEl.classList.remove(className);
    }
    focusOn() {
        this.$domEl.focus();
        return this;
    }
    css(styles={}) { // method for changing params width/height and others take obj
        // best practice for iteration in object Object.keys(obj), because in cycle FOR IN also takes prototype params its wrong way (for example methods)
        Object
            .keys(styles)
            .forEach((key) => {
                this.$domEl.style[key] = styles[key];
            });
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
