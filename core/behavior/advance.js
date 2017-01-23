import Behavior from 'tic-tac-toe/behavior/behavior';
import Manager from 'tic-tac-toe/manager'
import Answer from 'tic-tac-toe/over'

export default class extends Behavior {
    constructor(matrix, player, partner) {
        super([4, 6, 2, 0, 1, 3, 5, 7, 8])
        this.matrix = matrix
        this.player = player
        this.partner = partner
    }

    getAnswer() {
        let values = this.matrix.values
        let queue = []

        for (let i = 0; i < Manager.length; ++i) {
            let point = this.priority[i]

            if (values[point]) continue

            queue.push(point)
        }

        for (let i = 0; i < queue.length; ++i) {
            let point = queue[i]

            let copy = values.slice()

            copy[point] = this.partner

            let winner = Manager.winner.get(copy, this.partner)

            if (winner) {
                this.matrix.set(point, this.partner)
                return new Answer(winner)
            }
        }

        for (let i = 0; i < queue.length; ++i) {
            let point = queue[i]

            let copy = values.slice()

            copy[point] = this.player

            let winner = Manager.winner.get(copy, this.player)

            if (winner) {
                this.matrix.set(point, this.partner)
                return new Answer(null)
            }
        }

        this.matrix.set(queue[0], this.partner)
        return new Answer(null)
    }
}