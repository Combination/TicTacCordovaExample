import test from 'tape';
import Matrix from 'tic-tac-toe/matrix'
import SequenceBehavior from 'tic-tac-toe/behavior/sequence'
import AdvanceBehavior from 'tic-tac-toe/behavior/advance'
import Choose from 'tic-tac-toe/choose'

test('Matrix', function(t) {
    t.plan(3);

    let matrix = new Matrix();

    t.deepEqual(matrix.values, []);

    matrix.set(1, Choose.CROSS);
    matrix.set(2, Choose.ZERO);
    matrix.set(7, Choose.CROSS);
    matrix.set(8, Choose.ZERO);
    matrix.set(3, Choose.CROSS);

    t.ok(matrix.length === 5);

    t.deepEqual(matrix.values, {
        1: Choose.CROSS,
        2: Choose.ZERO,
        7: Choose.CROSS,
        8: Choose.ZERO,
        3: Choose.CROSS
    });
});

test('SequenceBehavior', function (t) {
    t.plan(8);

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
    t.ok(matrix.length === 1);

    matrix.set(1, player);
    t.ok(behavior.getAnswer().getWinner() === null);
    matrix.set(2, player);
    const winner = behavior.getAnswer().getWinner();

    t.ok(winner.getChoose() === partner);
    t.deepEqual(winner.getLine(), [6, 7, 8]);
});


test('AdvanceBehavior', function (t) {
    t.plan(1);
    let matrix = new Matrix();
    const player = Choose.CROSS;
    const partner = Choose.ZERO;

    const behavior = new AdvanceBehavior(matrix, player, partner);
    t.ok(behavior.getFirstPoint() === 4);
});