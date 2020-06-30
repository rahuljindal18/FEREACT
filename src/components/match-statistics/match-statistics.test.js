import React from 'react';
import {shallow} from 'enzyme';
import MatchStatistics from './match-statistics.component';
import {findByTestAttr} from '../../test-utils/test-utils';
import {data} from '../../utils/data';

const setup = (props={}) => {
    return shallow(<MatchStatistics {...props}/>);
}

describe('Match Statistics', () => {
    const props = {statistics: data};
    const wrapper = setup(props);
    test('renders without errro', () => {
        const component = findByTestAttr(wrapper, 'component-matchstats');
        expect(component.length).toBe(1);
    });

    test('renders 6 team comparison components', () => {
        const component = findByTestAttr(wrapper, 'component-matchstats-team');
        expect(component.length).toBe(6);
    });

});
