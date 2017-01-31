import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import posts from '../reducer'
import mockPosts from '../__mocks__/posts'
import * as types from '../actionTypes';
import { normalize, arrayOf } from 'normalizr';
import {post} from '../../../schema'




const testPosts = normalize(mockPosts, arrayOf(post));


it('request posts reducer', () => {
    // You do it
    expect(posts({}, {type: types.REQUEST_POSTS})).toEqual({
        isFetching: true,
        didInvalidate: false
    });
});
it('init posts reducer', () => {

    let undefined = {posts:[{id:50094},{id:50096}]}

    // You do it
    expect(posts({}, {type: types.INIT_POSTS, posts:testPosts})).toEqual({
        undefined
    });
});


