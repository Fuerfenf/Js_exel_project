export {Observer};

class Observer {
    constructor() {
        this.listeners = {};
    }
    // dispatch, trigger
    // notificate listeners  (formul:done)
    emmit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
            return false;
        }
        this.listeners[event].forEach((listner) => {
            listner(...args);
        });
        return true;
    }
    // on, listen
    // subscribe on notification, or add new listener
    subscribe(event, funct) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(funct);
        return () => { // return unsubscribe function  (closure func)
            this.listeners[event] = this.listeners[event].filter((listener) => listener !== funct);
        };
    }

}

const emitter = new Observer();
emitter.subscribe();