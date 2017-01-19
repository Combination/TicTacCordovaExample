import Choose from 'tic-tac-toe/choose'
import Winner from 'tic-tac-toe/winner'
import Over from 'tic-tac-toe/over'
import Answer from 'tic-tac-toe/over'
import Matrix from 'tic-tac-toe/matrix'

const TicTacToe = {
    length: 9,
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
        get: function (matrix, choose) {
            const map = TicTacToe.winner.map;
            for (let i = 0, length = map.length; i < length; ++i) {
                const line = map[i];

                if (matrix[line[0]] === choose && matrix[line[1]] === choose && matrix[line[2]] === choose) {
                    return new Winner(choose, line);
                }
            }

            return null;
        },
        search: function (matrix) {
            const map = TicTacToe.winner.map;
            for (let i = 0, length = map.length; i < length; ++i) {
                const line = map[i];

                const choose = matrix[line[0]];

                if (choose && matrix[line[1]] === choose && matrix[line[2]] === choose) {
                    return new Winner(choose, line);
                }
            }

            return null;
        }
    }
};

function isFinish(matrix) {
    return matrix.length === TicTacToe.length;
}

TicTacToe.Game = function (player, partner) {
    this.player = player;
    this.partner = partner;
    this.matrix = new Matrix();
    this.behavior = new TicTacToe.AdvanceBehavior(this);
    this.over = null;

    if (partner.instance === Choose.CROSS) {
        this.matrix.set(this.behavior.getFirstPoint(), partner);
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

TicTacToe.Behavior.prototype.getAnswer = function() {
    for (let i = 0; i < TicTacToe.length; ++i) {
        let point = this.priority[i];

        if (this.game.matrix.values[point]) continue;

        this.game.matrix.set(point, this.game.partner);

        return new Answer(TicTacToe.winner.get(this.game.matrix.values, this.game.partner));
    }
};

TicTacToe.AdvanceBehavior = TicTacToe.Behavior;
TicTacToe.AdvanceBehavior.prototype = new TicTacToe.Behavior();
TicTacToe.AdvanceBehavior.prototype.priority = [
    4, 6, 2, 0, 1, 3, 5, 7, 8
];

TicTacToe.AdvanceBehavior.prototype.getAnswer = function() {
    let values = this.game.matrix.values;
    let queue = [];

    for (let i = 0; i < TicTacToe.length; ++i) {
        let point = this.priority[i];

        if (values[point]) continue;

        queue.push(point);
    }

    for (let i = 0; i < queue.length; ++i) {
        let point = queue[i];

        let copy = values.slice();

        copy[point] = this.game.partner;

        let winner = TicTacToe.winner.get(copy, this.game.partner);

        if (winner) {
            this.game.matrix.set(point, this.game.partner);
            return new Answer(winner);
        }
    }

    for (let i = 0; i < queue.length; ++i) {
        let point = queue[i];

        let copy = values.slice();

        copy[point] = this.game.player;

        let winner = TicTacToe.winner.get(copy, this.game.player);

        if (winner) {
            this.game.matrix.set(point, this.game.partner);
            return new Answer(null);
        }
    }

    this.game.matrix.set(queue[0], this.game.partner);
    return new Answer(null);
};

TicTacToe.Game.prototype.getMatrix = function () {
    return this.matrix.values;
};

TicTacToe.Game.prototype.setPoint = function (index) {
    this.matrix.set(index, this.player);

    let winner = TicTacToe.winner.search(this.matrix.values);

    if (winner || isFinish(this.matrix)) {
        this.over = new Over(winner);
    } else {
        let answer = this.behavior.getAnswer();

        if (answer.getWinner()) {
            this.over = new Over(answer.getWinner());
        } else if (isFinish(this.matrix)) {
            this.over = new Over();
        }
    }
};

/**
 * @returns {Over|null}
 */
TicTacToe.Game.prototype.getOver = function() {
    return this.over;
};

export default TicTacToe.Game;