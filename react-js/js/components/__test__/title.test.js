jest.dontMock('../title');

import React from 'react';
import { shallow } from 'enzyme';
import Title from 'reen/components/title';

describe('title suite', function () {
    it('title', function () {
        const wrapper = shallow(<Title />);
        expect(wrapper.find('h2').length).toBe(1);
    });
});