import Choose from 'tic-tac-toe/choose'
import Over from 'tic-tac-toe/over'
import Matrix from 'tic-tac-toe/matrix'

import TicTacToe from 'tic-tac-toe/manager'

function isFinish(matrix) {
    return matrix.length === TicTacToe.length;
}

export default class {
    constructor(player, partner, Behavior) {
        let matrix = new Matrix();
        this.player = player;
        this.partner = partner;
        this.matrix = matrix;
        this.behavior = new Behavior(matrix, player, partner);

        if (partner.instance === Choose.CROSS) {
            this.matrix.set(this.behavior.getFirstPoint(), partner);
        }
    }

    getMatrix() {
        return this.matrix.values;
    }

    play(index) {
        this.matrix.set(index, this.player);

        const winner = TicTacToe.winner.search(this.matrix.values);

        if (winner || isFinish(this.matrix)) {
            return new Over(winner);
        }

        const answer = this.behavior.getAnswer();

        if (answer.getWinner()) {
            return new Over(answer.getWinner());
        }

        if (isFinish(this.matrix)) {
            return new Over();
        }
    }
};