/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';``
import FeedItem from './FeedItem'
import StaticContainer from 'react-static-container'

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
          dataSource={this.props.dataSource}
          renderRow={(rowData) => <FeedItem data={rowData}/> }
          renderFooter={()=>(
            <View style={styles.footer}>
              <View style={styles.footerImage}>
                <ActivityIndicator style={styles.activityIndicator}
                animating={group.loadingMorePosts}
                size="large" />
              </View>
              <View style={styles.footerImage}>
                <Image source={require('./img/livetolead.png')}/>
              </View>
            </View>)}
          onEndReached={()=> {this.props.loadMoreContentAsync(group)}}
          enableEmptySections={true}
          initialListSize={10}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    activityIndicator: {
        marginTop: 30,
        justifyContent: 'center'
    },
    listHeader: {
      marginTop: 15
    },
    footer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 40,
        paddingRight: 40
    },
    footerImage: {
        flex: 1,

        flexDirection: 'row',
        justifyContent: 'center',
    }
})

export default Feed;