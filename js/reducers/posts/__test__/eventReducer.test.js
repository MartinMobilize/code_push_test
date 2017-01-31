import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import event from '../eventReducer'
import * as types from '../actionTypes';

let answer = 'yes'

it('change event selection reducer', () => {


    expect(event({}, {type:types.CHANGE_EVENT, answer:answer})).toEqual({
        viewed:true,
        specific:{
            rsvp: 'yes'}
    });
});

it('change multiple poll reducer', () => {


     answer = 'maybe'

    // You do it
    expect(event({}, {type: types.CHANGE_EVENT, answer:answer})).toEqual({
        viewed:true,
        specific:{
            rsvp: 'maybe'}
    });
});



