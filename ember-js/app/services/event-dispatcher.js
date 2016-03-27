import Ember from 'ember';

export default Ember.Service.extend({

    eventListeners: [],

    addEventListener(eventListener) {
        let eventName = eventListener.listenerEvent;
        if (!this.get('eventListeners').hasOwnProperty(eventName)) {
            this.get('eventListeners')[eventName] = [];
        }
        let filteredEventListeners = this.get('eventListeners')[eventName].filter((registeredListener) => {
            return (registeredListener.listenerName === eventListener.listenerName);
        });

        if (filteredEventListeners.length === 0) {
            this.get('eventListeners')[eventName]
                .pushObject(eventListener);
        }
    },

    removeEventListener(eventListener) {
        let eventListeners = this.get('eventListeners');
        let eventName = eventListener.listenerEvent;
        if (eventListeners.hasOwnProperty(eventName)) {
            let filteredEventListeners = eventListeners[eventName].filter((registeredListener) => {
                return registeredListener.listenerName !== eventListener.listenerName;
            });

            this.set('eventListeners', filteredEventListeners);
        }
    },

    dispatchEvent(event) {
        let eventName = event.eventName;
        let eventListeners = this.get('eventListeners');
        if (eventListeners.hasOwnProperty(eventName)) {
            eventListeners[eventName].forEach((listener) => {
                listener.listenerMethod(event.eventObject);
            });
        }
    }

});
