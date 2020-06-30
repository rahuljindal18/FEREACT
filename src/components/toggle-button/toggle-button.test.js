import React from 'react';
import {shallow} from 'enzyme';
import ToggleButton from './toggle-button.component';
import {findByTestAttr} from '../../test-utils/test-utils';

const setup = (props={}) => {
    return shallow(<ToggleButton {...props}/>);
}

describe('Toggle Button', () => {
    test('renders without error', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-toggle');
        expect(component.length).toBe(1);
    });
});
