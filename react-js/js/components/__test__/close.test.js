import test from 'tape';
import spy from 'spy';

import React from 'react';
import { shallow } from 'enzyme';
import Close from 'reen/components/close';

test('close suite', function (t) {
    t.plan(3);
    const actionSpy = spy();
    const wrapper = shallow(<Close action={actionSpy} />);
    t.ok(wrapper.find('a').length === 1);

    wrapper.simulate('click');
    t.ok(actionSpy.called);
    t.ok(actionSpy.callCount === 1);
});