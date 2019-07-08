import moxios from 'moxios';
import { testScore } from './../../utils';
import { fetchPosts } from './../actions/index';

describe('fetchPosts action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('Should update store correctly', () => {

        const expectedState = [
            {
                title: 'Example Title 1',
                body: 'Some text',
            },
            {
                title: 'Example Title 2',
                body: 'Some text',
            },
            {
                title: 'Example Title 3',
                body: 'Some text',
            },
        ];
        const store = testScore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState();
                expect(newState.posts).toBe(expectedState);
            })
    })
});