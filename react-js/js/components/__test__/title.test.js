import test from 'tape';

import React from 'react';
import { shallow } from 'enzyme';
import Title from 'reen/components/title';

test('title suite', function (t) {
    t.plan(1);
    const wrapper = shallow(<Title />);
    t.ok(wrapper.find('h2').length === 1);
});