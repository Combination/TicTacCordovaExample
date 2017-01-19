export default class {
    constructor(game, priority) {
        this.game = game
        this.priotity = priority
    }

    getFirstPoint() {
        return this.priority[0]
    }
}