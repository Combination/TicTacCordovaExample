var TicTacToe = {};

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