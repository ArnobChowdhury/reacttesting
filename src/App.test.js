import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testScore } from './../utils/index';
import React from 'react';

const setUp = (initialState={}) => {
    const store = testScore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    // console.log(wrapper.debug());
    return wrapper;
}

describe('App component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [
            {
                title: 'Example title 1',
                body: 'Some text'
            },
            {
                title: 'Example title 2',
                body: 'Some text'
            },
            {
                title: 'Example title 3',
                body: 'Some text'
            },
        ]
        }
        wrapper = setUp(initialState);
    });

    it('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });

    it('Should exampleMethod_updateState Method should update state as expected', () => {
        const classInstnace = wrapper.instance();
        classInstnace.exampleMethod_updateState();
        const newState = classInstnace.state.hideBtn; 
        expect(newState).toBe(true);
    })

    it('exampleMethod_returnValue should return value as expected', () => {
        const classInstnace = wrapper.instance();
        const newValue = classInstnace.exampleMethod_returnValue(6);
        expect(newValue).toBe(7);
    })
});