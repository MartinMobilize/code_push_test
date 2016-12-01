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
        <Text>{group.name}</Text>
    </View>
);

export default GroupItem;

const styles = StyleSheet.create({
});