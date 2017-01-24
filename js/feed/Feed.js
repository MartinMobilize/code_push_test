/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import FeedItem from './FeedItem'
import PollContainer from './Poll/pollContainer'
import EmailBlastContainer from './EmailBlast/EmailBlastContainer'
import EventContainer from  './Event/EventContainer'

import {
    ListView,
    View,
    StyleSheet,
    Image,
    ActivityIndicator
} from 'react-native';


class Feed extends Component {
    render() {
        const group = this.props.group;

        if (!this.props.dataSource || !group || !group.loaded && group.isFetching) {
            return (<ActivityIndicator style={styles.activityIndicator}
                                       animating={true}
                                       size="large"
            />)
        }
        return (
            <View>
                <ListView
                    renderHeader={()=>(<View style={styles.listHeader}></View>)}
                    dataSource={this.props.dataSource}
                    renderRow={(rowData) => {

            switch (rowData.post_type){
              case 'poll':
               return(
                <PollContainer postId={rowData.id} data={rowData} navigator={this.props.navigator}/>
              );
              case 'emailblast':
              return <EmailBlastContainer data={rowData} navigator={this.props.navigator}/>;
              case 'event':
                  return <EventContainer postId={rowData.id} data={rowData} navigator={this.props.navigator}/>
              default:
              return <FeedItem data={rowData}/>
            }
          } }
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

                    initialListSize={40}
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
        height:20,
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
});

export default Feed;