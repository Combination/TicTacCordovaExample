const TicTacToe = {};

TicTacToe.Choose = function () {

};

TicTacToe.Choose.CROSS = new TicTacToe.Choose('x');
TicTacToe.Choose.ZERO = new TicTacToe.Choose('o');

TicTacToe.Game = function () {

};

TicTacToe.Answer = function () {

};

TicTacToe.Game.prototype.getAnswer = function () {
    return new TicTacToe.Answer();
};

// TODO: need better
var module = module || {};

module.exports = TicTacToe;