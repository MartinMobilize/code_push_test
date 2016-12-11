/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';``
import StaticContainer from 'react-static-container'
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import GroupMembersItem from './GroupMembersItem'

import {
  ListView,
  View,
  TouchableHighlight,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator
} from 'react-native';

class GroupMembersList extends Component {
  render() {
    const group = this.props.group;

    if (!group || !group.loaded && group.isFetching) {
        return (<ActivityIndicator style={styles.activityIndicator}
          animating={true}
          size="large"
        />)
    }
    return (
      <View style={{flex: 1}}>
        <ListView
          renderHeader ={()=>(<View style={styles.listHeader}></View>)}
          dataSource={this.props.dataSource}
          renderRow={(rowData) => <GroupMembersItem user={rowData}/> }
          enableEmptySections={true}
          initialListSize={10}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    activityIndicator: {
        marginTop: 30
    },
    listHeader: {
      marginTop: 15
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 40,
        paddingRight: 40
    }
})

export default GroupMembersList;