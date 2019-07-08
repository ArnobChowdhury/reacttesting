import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testScore } from './../utils/index';
import React from 'react';

const setUp = (initialState={}) => {
    const store = testScore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    console.log(wrapper.debug());
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
    })
});