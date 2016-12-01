/**
 * @flow
 */

import React, { 
  Component,
} from 'react';

import {
  ListView,
  View
} from 'react-native';

import GroupItem from './GroupItem'

import UserNetworksService from '../services/UserNetworksService'

const groupstest = UserNetworksService.getNetworks().then((result)=> {
  console.log("loaded user networks");

}).catch((error) => {
        console.error(error);
      });

const groups = [{
    id: 1,
    name: 'First Group',
},{
    id: 2,
    name: 'Second Group',
},{
    id: 3,
    name: 'Third Group',
}];

class GroupList extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.state = {
      dataSource: ds.cloneWithRows(groups)
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <GroupItem group={rowData}/> }
        />
      </View>
    );
  }
}

export default GroupList;