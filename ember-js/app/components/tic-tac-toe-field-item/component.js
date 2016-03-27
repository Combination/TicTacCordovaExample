import Ember from 'ember';
import GameTypes from 'ember-js/mixins/game-types';

export default Ember.Component.extend(GameTypes, {

  selectedType: '',

  selectedGameTypeObserver: function() {
    this.set('selectedType', '');
  }.observes('selectedGameType'),

  actions: {

    select() {
      this.set('selectedType', this.get('selectedGameType'));
    }
  }

})
