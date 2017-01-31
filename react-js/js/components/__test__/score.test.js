import test from 'tape';

import React from 'react';
import { render } from 'enzyme';
import Score from 'reen/components/score';

test('start score', function (t) {
    t.plan(2);
    const wrapper = render(
        <Score
            score={{
                player:0,
                partner:0
            }}
        />
    );

    t.ok(wrapper.find('.me').text() === '0');
    t.ok(wrapper.find('.me+*').text() === '0');
});

test('play score', function (t) {
    t.plan(2);

    const wrapper = render(
        <Score
            score={{
                player:3,
                partner:2
            }}
        />
    );

    t.ok(wrapper.find('.me').text() === '3');
    t.ok(wrapper.find('.me+*').text() === '2');
});