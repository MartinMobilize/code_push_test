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

const GroupItem = ({
    group,
    onItemPress
}) => (
    <TouchableHighlight key={group.id} onPress={onItemPress}>
        <View style={styles.row}>
            <Image style={styles.logo} source={{uri: group.logo.mini_thumb}}/>
            <Text>{group.name}</Text>
        </View>
    </TouchableHighlight>
);

export default GroupItem;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginBottom: 20,
        paddingRight: 20
    },
    logo: {
        height: 40,
        width: 40
    }
});