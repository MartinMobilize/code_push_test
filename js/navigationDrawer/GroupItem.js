/**
 * @flow
 */

import React, { Component } from 'react';``

import {
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  View
} from 'react-native';

const GroupItem = ({
    group,
    onClick
}) => (
    <View style={styles.row}>
        <Image style={styles.logo} source={{uri: group.logo.mini_thumb}}/>
        <Text>{group.name}</Text>
    </View>
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