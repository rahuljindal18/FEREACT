import React from 'react';
import {shallow} from 'enzyme';
import CardList from './card-list.component';
import {findByTestAttr} from '../../test-utils/test-utils';

describe('Card List', () => {
    test('renders cards based on data length',() => {
        const data = [{
            fifa_id:1
        },{
            fifa_id:2
        }]
        const wrapper = shallow(<CardList data={data}/>);
        const component = findByTestAttr(wrapper, 'component-card');
        expect(component.length).toBe(data.length);
    })
});