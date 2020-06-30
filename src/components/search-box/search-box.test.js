import React from 'react';
import {shallow} from 'enzyme';
import SearchBox from './search-box.component';
import {findByTestAttr} from '../../test-utils/test-utils';

const setup = (props={}) => {
    const wrapper = shallow(<SearchBox {...props}/>);
    return wrapper;
}

describe('Search Box', () => {
    test('renders without error', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-searchbox');
        expect(component.length).toBe(1);
    });
    test('changes value after onChange is called',() => {
        const onChangeMock = jest.fn();
        const props = {value:'sco', handleChange: onChangeMock};
        const wrapper = setup(props);
        const component = findByTestAttr(wrapper, 'component-searchbox');
        component.simulate('change','sco');
        expect(onChangeMock.mock.calls[0][0]).toBe('sco'); 
    });

});