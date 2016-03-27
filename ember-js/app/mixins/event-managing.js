import Ember from 'ember';

export default Ember.Mixin.create({

    /**
     * registered event listeners via registerEventListeners method
     * that will be scheduled for attaching to event-dispatcher
     *
     * @property eventListeners
     * @type []
     */
    eventListeners: [],

    /**
     * event listeners that are listening to an events
     *
     * @property eventListeners
     * @type []
     */
    attachedListeners: [],

    /**
     * @property preventEventAutoRegistration
     * @type {boolean}
     */
    preventEventAutoRegistration: false,

    /**
     * eventDispatcher
     *
     * @property eventDispatcher
     * @type {service}
     * @private
     */
    eventDispatcher: Ember.inject.service('event-dispatcher'),

    /**
     * perform registering and attaching event listeners to event dispatcher
     */
    didInsertElement() {
        this._super.apply(this, arguments);
        if (false === this.get('preventEventAutoRegistration')) {
            this.registerEventListeners();
            this.attachEventListeners();
        }
    },

    /**
     *  should be implemented in parent Object like following:
     *
     *  registerEventListeners() {
     *      this.set('eventListeners', [
     *          {
     *              listenerName: %YOUR_LISTENER_NAME%,
     *              listenerEvent: %EVENT_TO_LISTEN%,
     *              listenerMethod: %METHOD_THAT_SHOULD_BE_TRIGGERED_ON_EVENT_DISPATCH%
     *          }
     *      ]);
     *  }
     *
     *  %YOUR_LISTENER_NAME%,  // example: 'myAweosomeComponentLoginSuccess'
     *  %EVENT_TO_LISTEN%,    // example: 'this.get('eventDispatcher').events.LOGIN_SUCCESS'
     *  %METHOD_THAT_SHOULD_BE_TRIGGERED_ON_EVENT_DISPATCH%, // example: this.loginSuccessDispatched.bind(this)
     */
    registerEventListeners() { },


    /**
     *  Gets all event listeners from property eventListeners and
     *  calls eventDispatcher.addEventListener for each registered event listener
     */
    attachEventListeners() {
        let eventDispatcher = this.get('eventDispatcher');
        let eventListeners = this.get('eventListeners');
        let attachedListeners = this.get('attachedListeners');

        eventListeners.forEach((eventListener) => {
            attachedListeners.pushObject(eventListener);
            eventDispatcher.addEventListener(eventListener);
        });

        this.set('attachedListeners', attachedListeners);
    },

    /**
     * perform un registering event listeners from eventDispatcher.
     * Required action cause otherwise eventListeners will link to destroyed object
     * that will cause an ember error
     */
    willDestroyElement() {
        this._super.apply();

        this.detachEventListeners();
    },

    /**
     * Gets all currently attached event listeners and
     * calls eventDispatcher.removeEventListener for each attached event listener
     */
    detachEventListeners() {
        let eventDispatcher = this.get('eventDispatcher');
        let attachedListeners = this.get('attachedListeners');

        attachedListeners.forEach((attachedListener) => {
            eventDispatcher.removeEventListener(attachedListener);
        });

        this.set('attachedListeners', []);
    },

    /**
     * wrapper for eventDispatcher.dispatchEvent
     */
    dispatchEvent(event) {
        this.get('eventDispatcher').dispatchEvent(event);
    }

});