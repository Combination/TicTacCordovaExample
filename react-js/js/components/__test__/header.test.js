jest.dontMock('../header');

import React from 'react';
import { render } from 'enzyme';
import Header from 'reen/components/header';

describe('header suite', function () {
    it('first score', function () {
        const wrapper = render(
            <Header
                score={{
                    player:0,
                    partner:0
                }}
            />
        );

        const header = wrapper.find('.header');
        expect(header.length).toBe(1);

        const result = header.find('.result');
        expect(header.length).toBe(1);

        expect(header.find('.me').text()).toBe('0');
        expect(header.find('.me+*').text()).toBe('0');
    });

    it('game score', function () {
        const wrapper = render(
            <Header
                score={{
                    player:3,
                    partner:2
                }}
            />
        );

        const header = wrapper.find('.header');
        const result = header.find('.result');

        expect(header.find('.me').text()).toBe('3');
        expect(header.find('.me+*').text()).toBe('2');
    });
});