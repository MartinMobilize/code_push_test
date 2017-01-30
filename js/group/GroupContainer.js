// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {batchActions} from 'redux-batched-actions';
import { TabViewAnimated, TabViewPagerPan, TabBarTop } from 'react-native-tab-view';
import {
    Animated,
    StyleSheet,
} from 'react-native';

import FeedContainer from '../feed/FeedContainer'
import FilesScreen from './Files'
import { fetchGroupStart } from '../reducers/groups/actions'
import {setCurrentGroup} from '../reducers/currentGroup/actions'
import GroupMembersContainer from '../groupMembers/GroupMembersContainer'


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
      this.props.onGroupChange(groupId);
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
        return <FeedContainer style={styles.page} groupId={this.props.currentGroup} navigator={this.props.navigator} receiver={this.props.groups[this.props.currentGroup]} />;
      case 'members':
        return <GroupMembersContainer groupId={this.props.currentGroup} />;
      case 'events':
      case 'files':
        return <FilesScreen />
    default:
      return null;
    }
  };

    _renderPager = (props) => {
    return <TabViewPagerPan {...props} swipeEnabled={false} />;
  };


    _configureTransition = () => null;


  render() {

    const currGroup = this.props.groups[this.props.currentGroup];
    if (currGroup) {
        this.props.navigator.setTitle({
            title: `${currGroup.name}`
        });
    }

      return (

        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          configureTransition={this._configureTransition}
          renderScene={this._renderScene.bind(this)}
          renderHeader={this._renderHeader}
          renderPager={this._renderPager}
          onRequestChangeTab={this._handleChangeTab}
        />
    );
  }
}
    

const mapStateToProps = (state) => {

  return {
    groups: state.groups,
    currentGroup: state.currentGroup
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGroupChange: (groupId) => {
      dispatch(setCurrentGroup(groupId));
      dispatch(fetchGroupStart(groupId));
    },
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
