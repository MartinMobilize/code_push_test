import React, {Component} from 'react';
import {
Text,
Image,
TouchableHighlight,
StyleSheet,
View
} from 'react-native';

import {fixImageUrl} from '../utils'
import FeedItemHeaderStyles from './FeedItemHeaderStyle'
import ColorStyles from  '../styles/ColorStyle'
import FontStyles from '../styles/FontStyle'
import alignmentStyles from '../styles/AlignmentStyle'
import FeedStyles from './FeedStyle'

const postIcons = {
    event: require(`./img/event.png`),
    emailblast: require(`./img/emailblast.png`),
    poll: require(`./img/poll.png`),
    quickpost: require(`./img/quickpost.png`),
    smspost:require('./img/sms.png')
};


const FeedItemHeader = ({
    post, creatorImage, creatorName, createdAt, postType, postTitle, onPress
}) => (
    <TouchableHighlight underlayColor={'transparent'} onPress={onPress}>

        <View style={alignmentStyles.column}>
            <View style={FeedItemHeaderStyles.row}>
                <View style={FeedItemHeaderStyles.leftCol}>
                    <Image style={FeedStyles.avatar} source={{uri: fixImageUrl(creatorImage)}}/>
                    <Text style={[ColorStyles.normalTextColor, FeedItemHeaderStyles.name]}>{creatorName}</Text>

                </View>
                <View style={FeedItemHeaderStyles.postTopLign}>
                    <Text style={[ColorStyles.normalTextColor, FeedItemHeaderStyles.name]}>{createdAt}</Text>
                    <Image style={FeedItemHeaderStyles.icon} source={postIcons[postType]}/>

                </View>
            </View>

            <View style={FeedItemHeaderStyles.row}>
            <View style={alignmentStyles.column}>
                    <Text style={[FontStyles.regularFont,FeedItemHeaderStyles.title]}>{postTitle}</Text>
                </View>
            </View>
        </View>
    </TouchableHighlight>

)

export default FeedItemHeader;