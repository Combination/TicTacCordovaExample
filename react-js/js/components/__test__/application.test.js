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
    t.plan(14);
    const wrapper = mount(<Application gameFactory={new GameFactory(Behavior)} />);
    const cells = wrapper.find('div.content button');
    t.ok(cells.length === 9);

    cells.forEach(function (cell) {
        t.ok(cell.text() === '');
    });

    const centerCell = cells.at(4);
    centerCell.simulate('click');
    t.ok(centerCell.hasClass('x'));
    t.ok(centerCell.text() === 'x');
    const centralResponseCell = cells.at(8);
    t.ok(centralResponseCell.hasClass('o'));
    t.ok(centralResponseCell.text() === 'o');
});