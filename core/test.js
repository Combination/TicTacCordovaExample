import test from 'tape';
import Matrix from 'tic-tac-toe/matrix'
import SequenceBehavior from 'tic-tac-toe/behavior/sequence'
import Choose from 'tic-tac-toe/choose'

test('SequenceBehavior', function (t) {
    t.plan(5);

    let matrix = new Matrix();
    const player = Choose.ZERO;
    const partner = Choose.CROSS;

    const behavior = new SequenceBehavior(matrix, player, partner);

    t.ok(behavior.getFirstPoint() === 8);
    t.deepEqual(matrix.values, []);

    let answer = behavior.getAnswer();
    t.ok(answer.getWinner() === null);
    t.deepEqual(matrix.values, {
        8: partner
    });
    t.ok(matrix.length === 1)
});