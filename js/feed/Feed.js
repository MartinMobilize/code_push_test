/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';``
import FeedItem from './FeedItem'
import StaticContainer from 'react-static-container'
import InfiniteScrollView from 'react-native-infinite-scroll-view';

import {
  ListView,
  View,
  TouchableHighlight,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator
} from 'react-native';

class Feed extends Component {
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
          // renderScrollComponent={props => <InfiniteScrollView {...props} />}
          dataSource={this.props.dataSource}
          renderRow={(rowData) => <FeedItem data={rowData}/> }
          renderFooter={()=>(<StaticContainer><View style={styles.footer} ><Image source={require('./img/livetolead.png')}/></View></StaticContainer>)}
          // canLoadMore={this.props.canLoadMoreContent}
          // onLoadMoreAsync={this.props.loadMoreContentAsync}
          enableEmptySections={true}
          initialListSize={7}
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

export default Feed;