var expect = require('chai').expect;
var TicTacToe = require('../core/game');

describe('Test multi structure', function () {
    it('game', function (done) {
        var game = new TicTacToe.Game();

        expect(game).to.be.a('object');

        done();
    });
});