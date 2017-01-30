/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import I18n from 'react-native-i18n'
import {
    ListView,
    View,
    Image,
    Text
} from 'react-native';

import FeedItem from './FeedItem'
import PollContainer from './Poll/pollContainer'
import EmailBlastContainer from './EmailBlast/EmailBlastContainer'
import TextPostContainer from './TextPost/TextPostContainer'
import EventContainer from  './Event/EventContainer'
import SMSContainer from './SMS/SMSContainer'
import FeedStyles from './FeedStyle'
import ColorStyles from '../styles/ColorStyle'

import loaderGif from './img/colored-loader.gif'

const MAX_ITEMS_TO_LOAD = 25

class Feed extends Component {
    render() {
        const group = this.props.group;
        let loader = [];

        if (!this.props.dataSource || !group || !group.loaded && group.isFetching) {
            return (
                <View style={FeedStyles.loaderIndicator}>
                    <Image style={FeedStyles.loader} source={loaderGif}/>
                </View>)
        }

        if (!this.props.dataSource) {
            return (
                <View style={FeedStyles.loaderIndicator}>
                    <Text style={[ColorStyles.darkTextColor, FeedStyles.title]}>{I18n.t('NO_POSTS')}</Text>
                </View>)
        }


        return (
            <View >
                <ListView
                    renderHeader={()=>(<View style={FeedStyles.listHeader}></View>)}
                    dataSource={this.props.dataSource}
                    renderRow={(rowData) => {

        switch (rowData.post_type) {
            case 'poll':
                return (
                    <PollContainer postId={rowData.id} data={rowData} navigator={this.props.navigator}/>
                );
            case 'emailblast':
                return <EmailBlastContainer data={rowData} navigator={this.props.navigator}/>;
            case 'event':
                return <EventContainer postId={rowData.id} data={rowData} navigator={this.props.navigator}/>
            case 'quickpost':
                return <TextPostContainer data={rowData} navigator={this.props.navigator}/>;
            case 'smspost':
                return <SMSContainer data={rowData} navigator={this.props.navigator}/>;
            default:
                return <FeedItem data={rowData}/>
        }

          } }
                    renderFooter={()=>(
            <View style={FeedStyles.footer}>

              {group.loadingMorePosts?<Image style={FeedStyles.smallLoader} source={loaderGif}/>:null}

            </View>)}
                    onEndReached={()=> {this.props.loadMoreContentAsync(group)}}
                    onEndReachedThreshold={0}
                    enableEmptySections={true}
                    initialListSize={MAX_ITEMS_TO_LOAD}
                />
            </View>
        )
    }

    _postContainerRendererFactory(rowData) {

        switch (rowData.post_type) {
            case 'poll':
                return (
                    <PollContainer postId={rowData.id} data={rowData} navigator={this.props.navigator}/>
                );
            case 'emailblast':
                return <EmailBlastContainer data={rowData} navigator={this.props.navigator}/>;
            case 'event':
                return <EventContainer postId={rowData.id} data={rowData} navigator={this.props.navigator}/>
            case 'quickpost':
                return <TextPostContainer data={rowData} navigator={this.props.navigator}/>;
            case 'smspost':
                return <SMSContainer data={rowData} navigator={this.props.navigator}/>;
            default:
                return <FeedItem data={rowData}/>
        }

    }


}

export default Feed;