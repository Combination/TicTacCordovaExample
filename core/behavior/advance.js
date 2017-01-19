import Behavior from 'tic-tac-toe/behavior';

export default class extends Behavior {
    constructor(game) {
        super(game, [4, 6, 2, 0, 1, 3, 5, 7, 8])
    }
}