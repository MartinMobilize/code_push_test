/**
 * @flow
 */
import React, { Component } from 'react';``
import Feed from '../feed/Feed'
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view';
import { fetchGroupStart } from '../reducers/groups/actions'
import { connect } from 'react-redux';

import {
  ListView,
  View,
  TouchableHighlight,
  Animated,
  StyleSheet
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

console.log('deep link!!!');
    if (screen == 'groups') {
      const groupId = parts[1];
      this.props.onGroupChange(groupId);
      this.setState({ index: 0, groupId });
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
      return <Feed style={styles.page} groupId={this.state.groupId} />;
    case 'members':
      return <View style={[ styles.page, { backgroundColor: '#673ab7' } ]} />;
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
    group: state.groups[Object.keys(state.groups)[0]]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGroupChange: (groupId) => {
      dispatch(fetchGroupStart(groupId));
    }
  }
}

Group = connect(
    mapStateToProps,
    mapDispatchToProps
)(Group);

export default Group;


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
