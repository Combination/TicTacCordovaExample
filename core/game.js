const TicTacToe = {};

TicTacToe.Choose = function () {};

TicTacToe.Choose.CROSS = new TicTacToe.Choose('x');
TicTacToe.Choose.ZERO = new TicTacToe.Choose('o');

TicTacToe.Game = function (player, partner) {
    this.player = player;
    this.partner = partner;
    this.behavior = new TicTacToe.Behavior();
    this.matrix = [];

    if (partner.instance === TicTacToe.Choose.CROSS) {
        this.matrix[this.behavior.getFirstPoint()] = partner;
    }
};

TicTacToe.Behavior = function () {};

TicTacToe.Behavior.prototype.priority = [
    8, 7, 6, 5, 4, 3, 2, 1, 0
];

TicTacToe.Behavior.prototype.getFirstPoint = function () {
    return this.priority[0];
};

TicTacToe.getAnswer = function (player, partner, behavior) {

};

TicTacToe.Game.prototype.getMatrix = function () {
    return this.matrix;
};

TicTacToe.Game.prototype.setPoint = function (index) {
    this.matrix[index] = this.player;
};

// TODO: need better
var module = module || {};

module.exports = TicTacToe;