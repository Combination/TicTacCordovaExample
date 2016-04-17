const TicTacToe = {};

TicTacToe.Choose = function () {};

TicTacToe.Choose.CROSS = new TicTacToe.Choose('x');
TicTacToe.Choose.ZERO = new TicTacToe.Choose('o');

TicTacToe.Game = function () {};

TicTacToe.Game.prototype.getMatrix = function () {
    return {};
};

// TODO: need better
var module = module || {};

module.exports = TicTacToe;