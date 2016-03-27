import Ember from 'ember';

export default Ember.Component.extend({

  gameInitWith: {
    CROSS: 1,
    ZERO: 2
  },

  gameStartedWith: null,

  actions: {

    startGame(gameType) {
      this.set('gameStartedWith', gameType);
    }
  }


});
