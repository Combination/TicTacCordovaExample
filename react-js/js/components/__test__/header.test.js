jest.dontMock('../header');

import React from 'react';
import { shallow } from 'enzyme';
import Header from 'reen/components/header';

describe('header suite', function () {
    it('header', function () {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('div.header').length).toBe(1);
    });
});