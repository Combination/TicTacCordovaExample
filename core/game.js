import Choose from 'tic-tac-toe/choose'
import Over from 'tic-tac-toe/over'
import Answer from 'tic-tac-toe/over'
import Matrix from 'tic-tac-toe/matrix'

import TicTacToe from 'tic-tac-toe/manager'

function isFinish(matrix) {
    return matrix.length === TicTacToe.length;
}

TicTacToe.Behavior = function (game) {
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

export default class {
    constructor(player, partner) {
        this.player = player;
        this.partner = partner;
        this.matrix = new Matrix();
        this.behavior = new TicTacToe.AdvanceBehavior(this);
        this.over = null;

        if (partner.instance === Choose.CROSS) {
            this.matrix.set(this.behavior.getFirstPoint(), partner);
        }
    }

    getMatrix() {
        return this.matrix.values;
    }

    setPoint(index) {
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
    }

    getOver() {
        return this.over;
    }
};