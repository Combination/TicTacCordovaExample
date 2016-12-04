jest.dontMock('./../game');

const TicTacToe = require('./../game');

describe('game suite', function () {
    it('example', function () {
        expect(TicTacToe.size).toBe(3);
    });
});