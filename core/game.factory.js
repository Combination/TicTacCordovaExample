import Game from 'tic-tac-toe/game'

export default class {
    constructor(behavior) {
        this.behavior = behavior;
    }

    create(player, partner) {
        return new Game(player, partner, this.behavior);
    }
}