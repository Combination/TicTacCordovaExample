import Behavior from 'tic-tac-toe/behavior';

export default class extends Behavior {
    constructor(game) {
        super(game, [8, 7, 6, 5, 4, 3, 2, 1, 0])
    }
}