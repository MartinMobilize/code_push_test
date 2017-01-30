import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import poll from './pollReducer'
import mockPosts from './__mocks__/posts'
import * as types from './actionTypes';
import { normalize, arrayOf } from 'normalizr';
import {post} from '../../schema'



it('change single poll reducer', () => {

    const singleAnswer = [1]

    expect(poll({}, {type:types.CHANGE_POLL, answers:singleAnswer})).toEqual({
        viewed:true,
        specific:{
            my_answer: singleAnswer}
    });
});

it('change multiple poll reducer', () => {


    const multipleAnswer = [1,2]

    // You do it
    expect(poll({}, {type: types.CHANGE_POLL, answers:multipleAnswer})).toEqual({
        viewed:true,
        specific:{
            my_answer: multipleAnswer}
    });
});

it('empty selection poll reducer', () => {

    const singleAnswer = []

    expect(poll({}, {type:types.CHANGE_POLL, answers:singleAnswer})).toEqual({
        viewed:true,
        specific:{
            my_answer: singleAnswer}
    });
});



