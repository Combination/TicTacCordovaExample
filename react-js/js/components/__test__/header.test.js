import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';
import Header from 'reen/components/header';

test('header suite', function(t) {
    t.plan(1);

    const wrapper = shallow(
        <Header />
    );

    t.ok(wrapper.find('.header').length === 1);
});