import React from 'react';
import {shallow} from 'enzyme';
import ColorPicker from './color-picker.component';
import {findByTestAttr} from '../../test-utils/test-utils';

const setup = (props={}) => {
    return shallow(<ColorPicker {...props}/>);
}

describe('Color Picker', () => {
    test('renders without error', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-colorpicker');
        expect(component.length).toBe(1);
    });

    test('changes color when onchange is called', () => {
        const colorChangeMock = jest.fn();
        const props = {hexVal: '#fff000', handleColorChange: colorChangeMock};
        const wrapper = setup(props);
        const component = findByTestAttr(wrapper, 'component-colorpicker-input');
        component.simulate('change','#fff000');
        expect(colorChangeMock.mock.calls[0][0]).toBe('#fff000');
    });
});