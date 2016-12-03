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
          {Object.keys(this.props.groups).map((groupId) => {
            const group = this.props.groups[groupId];
            return <GroupItem key={groupId} group={group} onItemPress={()=> {this.props.onGroupPress(group)}} />
          })}
      </View>
    );
  }
}

export default GroupList;