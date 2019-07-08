import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './../src/reducers/index';
import { middlewares } from './../src/createStore';

export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
}

export const testScore = initialState => {
    const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleWare(rootReducer, initialState);
}
