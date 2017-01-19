export default class {
    constructor(game, priority) {
        this.game = game
        this.priority = priority
    }

    getFirstPoint() {
        return this.priority[0]
    }
}