import test from 'tape';

import React from 'react';
import { shallow } from 'enzyme';
import Close from 'reen/components/close';

test('close suite', function (t) {
    t.plan(1);
    const wrapper = shallow(<Close />);
    t.ok(wrapper.find('a').length === 1);
});