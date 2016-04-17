const TicTacToe = {};

TicTacToe.Choose = function () {};

TicTacToe.Choose.CROSS = new TicTacToe.Choose('x');
TicTacToe.Choose.ZERO = new TicTacToe.Choose('o');

TicTacToe.Game = function (player, partner) {
    this.player = player;
    this.partner = partner;
    this.matrix = {};
};

TicTacToe.Game.prototype.getMatrix = function () {
    return this.matrix;
};

TicTacToe.Game.prototype.setPoint = function (index) {
    this.matrix[index] = this.player;
    return {};
};

// TODO: need better
var module = module || {};

module.exports = TicTacToe;