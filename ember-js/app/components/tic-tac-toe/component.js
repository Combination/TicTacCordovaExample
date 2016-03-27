import Ember from 'ember';
import GameTypes from 'ember-js/mixins/game-types';
import EventList from 'ember-js/mixins/event-list';
import EventManaging from 'ember-js/mixins/event-managing';

export default Ember.Component.extend(GameTypes, EventList, EventManaging,{

  selectedGameType: '',

  registerEventListeners() {
    let eventListeners = [
      {
        listenerName: 'ticTacToeUserHasSelectedItem',
        listenerEvent: this.eventList.USER_HAS_SELECTED_ITEM,
        listenerMethod: this.eventHandlers.userHasSelectedItemEventDispatched.bind(this)
      }
    ];

    this.set('eventListeners', eventListeners);
  },

  eventHandlers: {

    userHasSelectedItemEventDispatched(event) {
      console.log(event);
    }
  },

  actions: {

    startGame(gameType) {
      this.set('selectedGameType', gameType);
    }
  }


});
