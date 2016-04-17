const TicTacToe = {
    winner: {
        map: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            [0, 4, 8],
            [2, 4, 6]
        ],
        is: function (matrix, choose) {
            let map = TicTacToe.winner.map;
            for (let i = 0, length = map.length; i < length; ++i) {
                let line = map[i];

                if (matrix[line[0]] === choose && matrix[line[1]] === choose && matrix[line[2]] === choose) {
                   return i;
                }
            }

            return -1;
        }
    }
};

TicTacToe.Choose = function () {};

TicTacToe.Choose.CROSS = new TicTacToe.Choose('x');
TicTacToe.Choose.ZERO = new TicTacToe.Choose('o');

TicTacToe.Game = function (player, partner) {
    this.player = player;
    this.partner = partner;
    this.matrix = [];
    this.behavior = new TicTacToe.Behavior(this);

    if (partner.instance === TicTacToe.Choose.CROSS) {
        this.matrix[this.behavior.getFirstPoint()] = partner;
    }
};

TicTacToe.Behavior = function (game) {
    /**
     * @type {TicTacToe.Game}
     */
    this.game = game;
};

TicTacToe.Behavior.prototype.priority = [
    8, 7, 6, 5, 4, 3, 2, 1, 0
];

TicTacToe.Behavior.prototype.getFirstPoint = function () {
    return this.priority[0];
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