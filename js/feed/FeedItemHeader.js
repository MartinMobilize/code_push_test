import React, {Component} from 'react';
import {fixImageUrl} from '../utils'
import {
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
    ScrollView,
    View
} from 'react-native';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from './img/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

const postIcons = {
    event: require(`./img/event.png`),
    emailblast: require(`./img/emailblast.png`),
    poll: require(`./img/poll.png`),
    quickpost: require(`./img/quickpost.png`),
};


const FeedItemHeader = ({
    data, onPress
}) => (
    <TouchableHighlight underlayColor={'transparent'} onPress={onPress}>

        <View style={styles.column}>
            <View style={styles.row}>
                <View style={styles.leftCol}>
                    <Image style={styles.avatar} source={{uri: fixImageUrl(data.user.avatar.image)}}/>
                    <Text style={styles.name}>{data.creator.name}</Text>

                </View>
                <View style={styles.postTopLign}>
                    <Text style={styles.name}>{data.created_at}</Text>
                    <Image style={styles.icon} source={postIcons[data.post_type]}/>

                </View>
            </View>

            <View style={styles.row}>
            <View style={styles.column}>
                    <Text style={styles.title}>{data.title}</Text>
                </View>
            </View>
        </View>
    </TouchableHighlight>

)

export default FeedItemHeader;

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    column: {
        flex: 1,
        flexDirection: 'column',

    },
    leftCol: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightCol: {
        flex: 1
    },
    icon: {
        width: 25,
        height: 25,
        marginLeft:4
    },
    avatar: {
        height: 20,
        width: 20,
        resizeMode:'contain',
        borderRadius: 3
    },
    postTopLign: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'

    },
    name: {
        color: '#6f778f',
        fontSize: 14,
        marginLeft:4,
        textAlign: 'left'
    },
    time: {
        color: '#6f778f',
        fontSize: 13,
        marginLeft:4,
    },
    title: {
        fontSize: 22,
        fontFamily:'BrixSansRegular',
        color: '#3F496B'
    },
    content: {
        marginTop: 20,
        marginRight:50,
        color: '#6f778f',
        fontSize: 16
    },
    postStatsStyle: {
        marginTop: 10,
        color: '#B8C0C9',
        fontSize: 13
    },
    pollItem: {
        marginLeft: 10
    },
    pollScroll: {
        height: 30
    }

});