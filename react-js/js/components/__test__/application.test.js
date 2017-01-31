import test from 'tape';

import React from 'react';
import { mount } from 'enzyme';
import { jsdom } from 'jsdom';
import Application from 'reen/components/application';
import GameFactory from 'tic-tac-toe/game.factory';
import Behavior from 'tic-tac-toe/behavior/sequence';

global.document = jsdom('');
global.window = document.defaultView;

test('application suite', function (t) {
    t.plan(10);
    const wrapper = mount(<Application gameFactory={new GameFactory(Behavior)} />);
    const cells = wrapper.find('div.content button');
    t.ok(cells.length === 9);

    cells.forEach(function (cell) {
        t.ok(cell.text() === '');
    });
});