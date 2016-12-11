/**
 * @flow
 */

import React, { Component } from 'react';``
import { fixImageUrl } from '../utils'

import {
  Text,
  Image,
  StyleSheet,
  View,
  TouchableHighlight
} from 'react-native';

const GroupItem = ({
    group,
    onItemPress
}) => (
    <TouchableHighlight key={group.id} onPress={onItemPress} underlayColor="gray"> 
        <View style={styles.row}>
            <Image style={styles.logo} source={{uri: fixImageUrl(group.logo.thumb)}}/>
            <Text style={styles.text} >#{group.name}</Text>
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