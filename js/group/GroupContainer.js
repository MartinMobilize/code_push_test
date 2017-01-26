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
      this.props.navigator.setTitle({
        title: `${this.props.groups[groupId].name}` 
      });


      this.props.onGroupChange(groupId);
/*
      this.setState({
        index: 0, 
        groupId 
      });
*/
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
        return <FeedContainer style={styles.page} groupId={this.props.groupId} navigator={this.props.navigator} receiver={this.props.groups[this.props.groupId]} />;
      case 'members':
        return <GroupMembersContainer groupId={this.state.groupId} />;
      case 'events':
      case 'files':
   //     const html = "\<p>hey everyone, check out your dashboard at \</p>";
        return <FilesScreen />
  //    return <Poll/>;
    default:
      return null;
    }
  };

    _renderPager = (props) => {
    return <TabViewPagerPan {...props} swipeEnabled={false} />;
  };


    _configureTransition = () => null;


  render() {

    return (


        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          configureTransition={this._configureTransition}
          renderScene={this._renderScene}
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
    groupId: state.currentGroup
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGroupChange: (groupId) => {
      dispatch(batchActions([setCurrentGroup(groupId), fetchGroupStart(groupId)]))
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
