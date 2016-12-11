/**
 * @flow
 */
import React, { Component } from 'react';``
import FeedContainer from '../feed/FeedContainer'
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view';
import { fetchGroupStart } from '../reducers/groups/actions'
import GroupMembersContainer from '../groupMembers/GroupMembersContainer'

import { connect } from 'react-redux';

import {
  ListView,
  View,
  TouchableHighlight,
  Animated,
  StyleSheet,
  Text
} from 'react-native';

class Group extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'activity', title: 'Activity' },
      { key: 'members', title: 'Members' },
      { key: 'events', title: 'Events' },
      { key: 'files', title: 'Files' }
    ],
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  onNavigatorEvent(event) {
     if (event.type == 'DeepLink') {
      this.handleDeepLink(event);
     }
  }

  handleDeepLink(event) {
    const parts = event.link.split('/');
    const screen = parts[0];

    if (screen == 'groups') {
      const groupId = parts[1];
      this.props.navigator.setTitle({
        title: `${this.props.groups[groupId].name}` 
      });

      const navigatorButtons = {
        rightButtons: [
          {
            title: 'Edit', // for a textual button, provide the button title (label)
            id: 'edit', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
            testID: 'e2e_rules', // optional, used to locate this view in end-to-end tests
            disabled: false, // optional, used to disable the button (appears faded and doesn't interact)
            disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
          },
          {
            icon: require('../feed/img/emailblast.png'), // for icon button, provide the local image asset name
            id: 'add' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
          }
        ]
      };

      this.props.navigator.setButtons(navigatorButtons);

      this.props.onGroupChange(groupId);
      this.setState({
        index: 0, 
        groupId 
      });
    }
  }

  _handleChangeTab = (index) => {
    this.setState({
      index 
    });
  };

  _renderHeader = (props) => {
    return (
      <TabBarTop
        {...props}
        pressColor='rgba(255, 64, 129, .5)'
        onTabPress={this._handleTabItemPress}
        renderLabel={this._renderLabel(props)}
        indicatorStyle={styles.indicator}
        tabStyle={styles.tab}
        style={styles.tabbar}
      />
    );
  }

  _renderLabel = (props) => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(inputIndex => inputIndex === index ? '#D6356C' : '#222');
    const color = props.position.interpolate({
      inputRange,
      outputRange,
    });

    return (
      <Animated.Text style={[ styles.label, { color } ]}>
        {route.title}
      </Animated.Text>
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case 'activity':
      return <FeedContainer style={styles.page} groupId={this.state.groupId} receiver={this.props.groups[this.state.groupId]} />;
    case 'members':
      return <GroupMembersContainer groupId={this.state.groupId} />;
    default:
      return null;
    }
  };

  render() {
    return (
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onRequestChangeTab={this._handleChangeTab}
        />
    );
  }
}
    

const mapStateToProps = (state) => {
  return {
    groups: state.groups
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGroupChange: (groupId) => {
      dispatch(fetchGroupStart(groupId));
    }
  }
}

GroupContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Group);

export default GroupContainer;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    backgroundColor: '#ff4081',
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    margin: 8,
  },
  tabbar: {
    backgroundColor: '#fff',
  },
  tab: {
    opacity: 1,
  },
  page: {
    backgroundColor: '#f9f9f9',
  },
});
