import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {setCurrentGroup} from './actions'


it('set current group action', () => {
  // You do it
  expect(setCurrentGroup(1000)).toEqual(
    {
      type: 'app.currentUser.SET_CURRENT_GROUP',
      groupId: 1000
    }
  );
});
