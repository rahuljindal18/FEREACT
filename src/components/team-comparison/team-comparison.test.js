import React from 'react';
import {shallow} from 'enzyme';
import TeamComparison from './team-comparison.component';
import {findByTestAttr} from '../../test-utils/test-utils';

const setup = (props={}) => {
    return shallow(<TeamComparison {...props}/>);
}

describe('Team Comparison', () => {
    test('renders without error', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-teamcomparison');
        expect(component.length).toBe(1);
    });

    test('renders left, middle and right parts', () => {
        const props = {left:"India", right:"England", middle:"vs"}
        const wrapper = setup(props);
        const componentLeft = findByTestAttr(wrapper, 'component-teamcomparison-left');
        const componentRight = findByTestAttr(wrapper, 'component-teamcomparison-right');
        const componentMiddle = findByTestAttr(wrapper, 'component-teamcomparison-middle');
        expect(componentLeft.length).toBe(1);
        expect(componentRight.length).toBe(1);
        expect(componentMiddle.length).toBe(1);
    });
});
