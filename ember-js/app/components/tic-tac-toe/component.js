import Ember from 'ember';
import GameTypes from 'app/mixins/game-types';

export default Ember.Component.extend(GameTypes, {

  selectedGameType: null,

  actions: {

    startGame(gameType) {
      this.set('selectedGameType', gameType);
    }
  }


});
