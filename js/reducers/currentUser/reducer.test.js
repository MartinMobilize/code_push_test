import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import currentUser from './reducer'
import * as types from './actionTypes';

const user = {
  email:'myemail@yopmail.com',
  group_ids:[9044],
  id:123,
  name:'my name',
  permissions:'member'
}

it('set user state reducer', () => {
  // You do it
  expect(currentUser({}, {user:user, type:types.SET_USER_STATE})).toEqual(user);
});
