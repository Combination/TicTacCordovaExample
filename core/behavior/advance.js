import Behavior from 'tic-tac-toe/behavior/behavior';
import Manager from 'tic-tac-toe/manager'
import Answer from 'tic-tac-toe/over'

export default class extends Behavior {
    constructor(game) {
        super(game, [4, 6, 2, 0, 1, 3, 5, 7, 8])
    }

    getAnswer() {
        let values = this.game.matrix.values;
        let queue = [];

        for (let i = 0; i < Manager.length; ++i) {
            let point = this.priority[i];

            if (values[point]) continue;

            queue.push(point);
        }

        for (let i = 0; i < queue.length; ++i) {
            let point = queue[i];

            let copy = values.slice();

            copy[point] = this.game.partner;

            let winner = Manager.winner.get(copy, this.game.partner);

            if (winner) {
                this.game.matrix.set(point, this.game.partner);
                return new Answer(winner);
            }
        }

        for (let i = 0; i < queue.length; ++i) {
            let point = queue[i];

            let copy = values.slice();

            copy[point] = this.game.player;

            let winner = Manager.winner.get(copy, this.game.player);

            if (winner) {
                this.game.matrix.set(point, this.game.partner);
                return new Answer(null);
            }
        }

        this.game.matrix.set(queue[0], this.game.partner);
        return new Answer(null);
    }
}