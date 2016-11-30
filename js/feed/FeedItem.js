import React, { Component } from 'react';``

import {
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  View
} from 'react-native';

var user = {



        "id":294,
        "name":"Nina Wilkinson",
        "avatar":{
          "image":"https://s3.amazonaws.com/leaderz_development/uploads/user/avatar/4/36ca03d3-4997-48e8-8b78-5d56e1ab0f7e.jpg",
          "thumb":"https://s3.amazonaws.com/leaderz_development/uploads/user/avatar/4/thumb_36ca03d3-4997-48e8-8b78-5d56e1ab0f7e.jpg",
          "mini_thumb":"https://s3.amazonaws.com/leaderz_development/uploads/user/avatar/4/mini_thumb_36ca03d3-4997-48e8-8b78-5d56e1ab0f7e.jpg",
          "small_thumb":"https://s3.amazonaws.com/leaderz_development/uploads/user/avatar/4/small_thumb_36ca03d3-4997-48e8-8b78-5d56e1ab0f7e.jpg"
        },
        "email":"nina@mobilzie.io"
      }




const FeedItem = ({
    data
}) => (
    <View style={styles.row}>
    <View style={styles.leftCol}>
        <Image style={styles.avatar} source={{uri: user["avatar"]["image"]}}/>
        <Image style={styles.icon} source={require('./img/post.png')}/>
    </View>
    <View style={styles.rightCol}>
        <View style={styles.postTopLign}>
            <Text style={styles.name}>{user["name"]}</Text>
            <Text style={styles.time}>4 minutes ago</Text>
        </View>
        <Text style={styles.title}>{data["title"]}</Text>
        <Text style={styles.content} numberOfLines={1}>{data["content"]}</Text>
        <Text style={styles.postStatsStyle}>{data["seen_count"]} VIEWS</Text>
    </View>
    </View>
)

export default FeedItem;

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
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
    }

});