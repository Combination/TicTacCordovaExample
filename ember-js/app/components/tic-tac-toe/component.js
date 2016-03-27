import Ember from 'ember';
import GameTypes from 'ember-js/mixins/game-types';

export default Ember.Component.extend(GameTypes, {

  selectedGameType: '',

  actions: {

    startGame(gameType) {
      console.log(gameType);
      this.set('selectedGameType', gameType);
    }
  }


});
