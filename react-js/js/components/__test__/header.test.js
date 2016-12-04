import React from 'react';
import { shallow, mount, render } from 'enzyme';

jest.dontMock('../header');

const Header = require('../header');

describe('game suite', function () {
    it('example', function () {
        expect(shallow(<div />).contains(<div />)).toBe(true);
    });
});