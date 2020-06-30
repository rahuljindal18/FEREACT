import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import {storeFactory, findByTestAttr} from './test-utils/test-utils';

const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<App store={store}/>).dive().dive();
    return wrapper;
}

describe('Renders', () => {
    test("renders App component", () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper,'component-app');
        expect(component.length).toBe(1);
    });
    test("renders SearchBox component", () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper,'component-app-search');
        expect(component.length).toBe(1);
    });
    test("renders Loader component when loading is true", () => {
        const initialState = {
            matchResults: {
                loading:true,
                data: [],
                error: null
            }
        };
        const wrapper = setup(initialState);
        const component = findByTestAttr(wrapper,'component-app-loader');
        expect(component.length).toBe(1);
    });
    test("renders NoResult component when data is empty", () => {
        const initialState = {
            matchResults: {
                loading:false,
                data: [],
                error: null
            }
        };
        const wrapper = setup(initialState);
        const component = findByTestAttr(wrapper,'component-app-noresult');
        expect(component.length).toBe(1);
    });
    test("renders CardList component when data is not empty", () => {
        const initialState = {
            matchResults: {
                loading:false,
                data: [{fifa_id:1}],
                error: null
            }
        };
        const wrapper = setup(initialState);
        const component = findByTestAttr(wrapper,'component-app-cardlist');
        expect(component.length).toBe(1);
    });
    test("renders ColorPicker component when data is not empty", () => {
        const initialState = {
            matchResults: {
                loading:false,
                data: [{fifa_id:1}],
                error: null
            }
        };
        const wrapper = setup(initialState);
        const component = findByTestAttr(wrapper,'component-app-colorpicker');
        expect(component.length).toBe(1);
    });
    test("renders ToggleButton component when data is not empty", () => {
        const initialState = {
            matchResults: {
                loading:false,
                data: [{fifa_id:1}],
                error: null
            }
        };
        const wrapper = setup(initialState);
        const component = findByTestAttr(wrapper,'component-app-togglebutton');
        expect(component.length).toBe(1);
    });
});