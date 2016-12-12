jest.dontMock('../score');

import React from 'react';
import { render } from 'enzyme';
import Score from 'reen/components/score';

describe('header suite', function () {
    it('first score', function () {
        const wrapper = render(
            <Score
                score={{
                    player:0,
                    partner:0
                }}
            />
        );

        expect(wrapper.find('.me').text()).toBe('0');
        expect(wrapper.find('.me+*').text()).toBe('0');
    });

    it('game score', function () {
        const wrapper = render(
            <Score
                score={{
                    player:3,
                    partner:2
                }}
            />
        );

        expect(wrapper.find('.me').text()).toBe('3');
        expect(wrapper.find('.me+*').text()).toBe('2');
    });
});