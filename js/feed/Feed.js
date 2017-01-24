/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import FeedItem from './FeedItem'
import PollContainer from './Poll/pollContainer'
import EmailBlastContainer from './EmailBlast/EmailBlastContainer'
import TextPostContainer from './TextPost/TextPostContainer'
import EventContainer from  './Event/EventContainer'
import styles from '../styles/feedStyle'

import {
    ListView,
    View,
    Image,
    Text,
} from 'react-native';


class Feed extends Component {
    render() {
        const group = this.props.group;
        let loader = [];

        if (!this.props.dataSource || !group || !group.loaded && group.isFetching) {
            return (
                <View style={styles.loaderIndicator}>
                    <Image style={styles.loader} source={require('./img/colored-loader.gif')}/>
                </View>)
        }

        if (!this.props.dataSource) {
            return (
                <View style={styles.loaderIndicator}>
                    <Text style={styles.title}>No Posts found</Text>
                </View>)
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
              case 'quickpost':
                  return <TextPostContainer data={rowData} navigator={this.props.navigator}/>;
              default:
              return <FeedItem data={rowData}/>
            }
          } }
                    renderFooter={()=>(
            <View style={styles.footer}>

              {group.loadingMorePosts?<Image style={styles.smallLoader} source={require('./img/colored-loader.gif')}/>:null}

            </View>)}
                    onEndReached={()=> {this.props.loadMoreContentAsync(group)}}
                    onEndReachedThreshold={10}
                    enableEmptySections={true}
                    initialListSize={40}
                />
            </View>
        )
    }

}

export default Feed;