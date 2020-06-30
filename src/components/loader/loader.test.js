import React from 'react';
import {shallow} from 'enzyme';
import Loader from './loader.component';
import {findByTestAttr} from '../../test-utils/test-utils';

describe('Loader', () => {
    test('renders without error', () => {
        const wrapper = shallow(<Loader/>);
        const component = findByTestAttr(wrapper, 'component-loader');
        expect(component.length).toBe(1);
    });
});
