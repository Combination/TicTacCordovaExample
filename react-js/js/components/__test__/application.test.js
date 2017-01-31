import test from 'tape';

import React from 'react';
import { render } from 'enzyme';
import Application from 'reen/components/application';
import GameFactory from 'tic-tac-toe/game.factory';
import Behavior from 'tic-tac-toe/behavior/sequence';

test('application suite', function (t) {
    t.plan(1);
    const wrapper = render(<Application gameFactory={new GameFactory(Behavior)} />);
    t.ok(true);
});