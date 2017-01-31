/**
 * @flow
 */

import React, {Component} from 'react';
import NetworkHeader from './NetworkHeader'
import I18n from 'react-native-i18n'

import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

import GroupItem from './GroupItem'

class GroupList extends Component {
  render() {
    if(!this.props.network.logo) {
      return (<View style={styles.navigation}><ActivityIndicator
          animating={true}
          size="large"
        /></View>)
    }
    return (
      <View style={styles.navigation}>
        <NetworkHeader network={this.props.network} />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{I18n.t('GROUPS')}</Text>
        </View>
        <View>
          {Object.keys(this.props.groups).map((groupId) => {
            const group = this.props.groups[groupId];
            return <GroupItem key={groupId} groupLogo={group.logo.thumb} groupName={group.name} groupId={groupId}
                              onItemPress={()=> {this.props.onGroupPress(group)}} />
          })}
        </View>
      </View>
    );
  }
}

export default GroupList;

const styles = StyleSheet.create({
    navigation: {
      flex: 1,
      paddingLeft: 30,
      paddingTop: 30,
      paddingRight: 10,
      backgroundColor: "#0F1C44"
    },
    header: {
        flexDirection: 'row',
        marginTop: 20,
        paddingRight: 20,
        height: 40,
        justifyContent: 'space-between'
    },
    headerTitle: {
      height:30,
      width:100,
      fontSize: 16,
      color: '#FFFFFF'
    },
    logo: {
        height: 40,
        width: 40
    }
});