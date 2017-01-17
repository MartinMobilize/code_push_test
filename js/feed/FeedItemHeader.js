import React, { Component } from 'react';
import { fixImageUrl } from '../utils'
import {
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
    ScrollView,
    View
} from 'react-native';



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

    <View style={styles.row}>
    <View style={styles.leftCol}>
        <Image style={styles.avatar} source={{uri: fixImageUrl(data.creator.avatar.image)}}/>
        <Image style={styles.icon} source={postIcons[data.post_type]}/>
    </View>
    <View style={styles.rightCol}>
        <View style={styles.postTopLign}>
            <Text style={styles.name}>{data.creator.name}</Text>
            <Text style={styles.time}>{data.created_at}</Text>
        </View>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.content} numberOfLines={1}>{"this is custom content"}</Text>
    </View>
    </View>
    </TouchableHighlight>

)

export default FeedItemHeader;

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
       // backgroundColor:'#FFFFFF',
        marginBottom: 20,
        paddingRight: 20
    },
    leftCol: {
        width: 80,
        alignItems: 'center',
        flexDirection: 'column',
    },
    rightCol: {
        flex:1
    },
    icon: {
        marginTop: 5,
        width: 25,
        height: 28
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    postTopLign: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        color: '#9FA4B5',
        fontSize: 16,
        textAlign: 'left'
    },
    time: {
        marginTop: 2,
        color: '#9FA4B5',
        fontSize: 14,
        textAlign: 'right'
    },
    title: {
        fontSize: 18,
        color: '#0F1C44'
    },
    content: {
        marginTop: 20,
        color: '#3F496B',
        fontSize: 16
    },
    postStatsStyle: {
        marginTop: 10,
        color: '#B8C0C9',
        fontSize: 13
    },
    pollItem:{
        marginLeft:10
    },
    pollScroll:{
        height:30
    }

});