import React from 'react';
import {shallow} from 'enzyme';
import MatchGeneralInfo from './match-general-info.component';
import {findByTestAttr} from '../../test-utils/test-utils';
import {data} from '../../utils/data';

const setup = (props={}) => {
    return shallow(<MatchGeneralInfo {...props}/>);
}

describe('Match General Info', () => {
    const props = {generalInfo: data};
    const wrapper = setup(props);
    test('renders stage, venue, location, attendence, status', () => {
        const componentStage = findByTestAttr(wrapper, 'component-matchinfo-stage-location');
        const componentStatus = findByTestAttr(wrapper, 'component-matchinfo-stage-location');
        const componentAttendance = findByTestAttr(wrapper, 'component-matchinfo-stage-location');

        expect(componentStage.length).toBe(1);
        expect(componentStatus.length).toBe(1);
        expect(componentAttendance.length).toBe(1);

    });

});
