import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import currentGroup from '../reducer'
import * as types from '../actionTypes';


it('set current group reducer', () => {
  // You do it
  expect(currentGroup({}, {groupId:100, type:types.SET_CURRENT_GROUP})).toEqual(100);
});
