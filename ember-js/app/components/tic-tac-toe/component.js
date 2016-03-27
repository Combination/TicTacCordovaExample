import Ember from 'ember';
import GameTypes from 'ember-js/mixins/game-types';
import EventList from 'ember-js/mixins/event-list';
import EventManaging from 'ember-js/mixins/event-managing';

export default Ember.Component.extend(GameTypes, EventList, EventManaging,{

  allowedToSelect: [ 0, 1, 2, 3, 4, 5, 6, 7, 8],

  selectedUserGameType: '',

  selectedPartnerGameType: '',

  selectedPartnerField: null,

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
      this.set('selectedPartnerField', (event.selectedIndex + 1)% 9);
    }
  },

  actions: {

    startGame(gameType) {
      this.set('selectedUserGameType', gameType);
      this.set('selectedPartnerGameType', this.getOppositeType(gameType));
    }
  }

});
