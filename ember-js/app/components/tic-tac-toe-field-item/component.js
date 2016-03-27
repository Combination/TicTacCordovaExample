import Ember from 'ember';
import GameTypes from 'ember-js/mixins/game-types';

export default Ember.Component.extend(GameTypes, {

  selectedType: '',

  actions: {

    select() {
      console.log(this.get('selectedGameType'));
      this.set('selectedType', this.get('selectedGameType'));
    }
  }

})
