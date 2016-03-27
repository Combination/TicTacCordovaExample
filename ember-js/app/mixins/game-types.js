import Ember from 'ember';

export default Ember.Mixin.create({

  gameTypes: {
    CROSS: 'x',
    ZERO: 'o'
  },

  getOppositeType(gameType) {
    return (gameType === this.gameTypes.CROSS) ? this.gameTypes.ZERO : this.gameTypes.CROSS;
  }

})
