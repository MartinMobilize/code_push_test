/**
 * @flow
 */

import React, { Component } from 'react';``
import {
    Text,
    Image,
    StyleSheet,
    View,
    TouchableHighlight
} from 'react-native';

import { fixImageUrl } from '../utils'


const GroupItem = ({
    groupLogo,
    groupName,
    groupId,
    onItemPress
}) => (
    <TouchableHighlight key={groupId} onPress={onItemPress} underlayColor="gray">
        <View style={styles.row}>
            <Image style={styles.logo} source={{uri: fixImageUrl(groupLogo)}}/>
            <Text style={styles.text} >#{groupName}</Text>
        </View>
    </TouchableHighlight>
);

export default GroupItem;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginBottom: 12,
        marginTop: 12,
        paddingRight: 20,
        alignItems: 'flex-start'
    },
    text: {
        paddingLeft: 10,
       fontSize: 22,
       color: '#0F1C46'
    },
    logo: {
        height: 30,
        width: 30,
        borderRadius: 5
    }
});