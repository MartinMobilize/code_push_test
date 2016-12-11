import React, { Component } from 'react';``
import { fixImageUrl } from '../utils'

import {
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  View
} from 'react-native';


const GroupMembersItem = ({
    user
}) => (
    <View style={styles.row}>
    <View style={styles.leftCol}>
        <Image style={styles.avatar} source={{uri: fixImageUrl(user.avatar.thumb)}}/>
    </View>
    <View style={styles.rightCol}>
        <View style={styles.postTopLign}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.time}>{user.email}</Text>
        </View>
    </View>
    </View>
)

export default GroupMembersItem;

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