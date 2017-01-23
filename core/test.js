import test from 'tape';
import Matrix from 'tic-tac-toe/matrix'
import SequenceBehavior from 'tic-tac-toe/behavior/sequence'
import Choose from 'tic-tac-toe/choose'

test('SequenceBehavior', function (t) {
    t.plan(1);

    let matrix = new Matrix();
    const player = Choose.CROSS;
    const partner = Choose.ZERO;

    const behavior = new SequenceBehavior(matrix, player, partner);

    t.ok(behavior.getFirstPoint() === 8);
});