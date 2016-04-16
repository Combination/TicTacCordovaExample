var expect = require('chai').expect;
var assert = require('chai').assert;
var TicTacToe = require('../core/game');

describe('Test multi structure', function () {
    it('MULTI', function (done) {
        var foo = 'bar',
            beverages = {tea: ['chai', 'matcha', 'oolong']};

        expect(foo).to.be.a('string');
        expect(foo).to.equal('bar');
        expect(foo).to.have.length(3);
        expect(beverages).to.have.property('tea').with.length(3);
        done();
    });

    it('game', function (done) {
        var game = new TicTacToe.Game();

        expect(game).to.be.a('object');

        expect(game.getAnswer()).to.be.a('object');

        done();
    });
});