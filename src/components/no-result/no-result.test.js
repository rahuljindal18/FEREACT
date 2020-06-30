import React from 'react';
import {shallow} from 'enzyme';
import NoResult from './no-result.component';
import {findByTestAttr} from '../../test-utils/test-utils';

describe('No Result', () => {
    test('renders without error', () => {
        const wrapper = shallow(<NoResult/>);
        const component = findByTestAttr(wrapper, 'component-noresult');
        expect(component.length).toBe(1);
    });
});
