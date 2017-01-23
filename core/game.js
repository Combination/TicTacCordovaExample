import Choose from 'tic-tac-toe/choose'
import Over from 'tic-tac-toe/over'
import Matrix from 'tic-tac-toe/matrix'

import TicTacToe from 'tic-tac-toe/manager'
import AdvanceBehavior from 'tic-tac-toe/behavior/advance'

function isFinish(matrix) {
    return matrix.length === TicTacToe.length;
}

export default class {
    constructor(player, partner) {
        let matrix = new Matrix();
        this.player = player;
        this.partner = partner;
        this.matrix = matrix;
        this.behavior = new AdvanceBehavior(matrix, player, partner);
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