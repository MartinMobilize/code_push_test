/**
 * @flow
 */

import React, {Component} from 'react';

import {
  ListView,
  View
} from 'react-native';

import GroupItem from './GroupItem'

class GroupList extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
          {this.props.groups.map((group) => {
            return <GroupItem key={group.id} group={group} />;
          })}
      </View>
    );
  }
}

export default GroupList;