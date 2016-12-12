jest.dontMock('../header');

import React from 'react';
import { shallow } from 'enzyme';
import Header from 'reen/components/header';

describe('header suite', function () {
    it('first score', function () {
        const wrapper = shallow(
            <Header />
        );

        expect(wrapper.find('.header').length).toBe(1);
    });
});