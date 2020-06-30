import React from 'react';
import {shallow} from 'enzyme';
import Card from './card.component';
import {findByTestAttr} from '../../test-utils/test-utils';
import {data} from '../../utils/data';

const setup = (props={}) => {
    return shallow(<Card {...props}/>);
}

describe('Card', () => {
    const props = {cardObj: data};
    const wrapper = setup(props);
    test('renders without error', () => {
        const component = findByTestAttr(wrapper,'component-singlecard');
        expect(component.length).toBe(1)
    });
    test('renders MatchGeneralInfo component', () => {
        const component = findByTestAttr(wrapper,'component-matchgeneralinfo');
        expect(component.length).toBe(1)
    });
    test('renders MatchStatistics component', () => {
        const component = findByTestAttr(wrapper,'component-card-matchstats');
        expect(component.length).toBe(1)
    });

});
