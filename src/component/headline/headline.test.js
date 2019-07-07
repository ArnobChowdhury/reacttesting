import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';


import { findByTestAttr, checkProps } from '../../../utils/index';

const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline Component', () => {

    describe('Checking PropTypes', () => {
        it('Should not throw any error', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@email.com',
                    age: 22,
                    onlinestatus: true
                }]
            };
            const propsError = checkProps(Headline, expectedProps)
            expect(propsError).toBeUndefined();
        });
    });
    
    describe('Have props', () => {
    
        // let wrapper;
        // beforeEach(() => {
        //     const props = {
        //         header: 'Test header',
        //         desc: 'Test description'
        //     };
        //     wrapper = setUp(props);    
        // });
        
    
        // it('Should render without errors', () => {
        //     const component = findByTestAttr(wrapper, 'HeadlineComponent');
        //     expect(component.length).toBe(1);
        // })

        // it('Should render a H1', () => {
        //     const component = findByTestAttr(wrapper, 'header');
        //     expect(component.length).toBe(1);
        // })

        // it('Should render a desc', () => {
        //     const component = findByTestAttr(wrapper, 'desc');
        //     expect(component.length).toBe(1);
        // }) 
    });

    describe('Have no props', () => {
        
        // let wrapper;
        // beforeEach(() => {
        //     wrapper = setUp();    
        // }); 

        // it('Should not render', () => {
        //     const component = findByTestAttr(wrapper, 'HeadlineComponent');
        //     expect(component.length).toBe(0);
        // })
    });

})
