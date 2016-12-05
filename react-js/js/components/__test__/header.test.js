jest.dontMock('../header');

import React from 'react';
import { shallow } from 'enzyme';
import Header from '../header';

describe('header suite', function () {
    it('header', function () {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('h2').length).toBe(1);
    });
});