class Dom {
    constructor(selector) {
        this.$el = (typeof selector === 'string') ? document.querySelector(selector) : selector;
    }
    html(html) { // setter if html string
        if (typeof html ==='string') {
            this.$el.innerHTML = html; // return inner tag
            return this;
        }
        return this.$el.outerHTML.trim(); // return outer tag (.trim delete spaces in string in start/end)
    }
    clear() {
        this.html('');
        return this;
    }
    set(eventType, callback) { // method for event analog addEventList
        this.$el.addEventListener(eventType, callback);
    }
    del(eventType, callback) {
        this.$el.removeEventListener(eventType,callback);
    }
    append(nodel) {
        if (nodel instanceof Dom) { // for native node
            nodel = nodel.$el;
        }
        if (Element.prototype.append) {
            this.$el.append(nodel);
        } else {
            this.$el.appendChild(nodel);
        }
        return this;
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
