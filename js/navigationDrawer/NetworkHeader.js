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

const NetworkHeader = ({
    network
}) => (
    <View style={styles.networkHeader}>
        <View style={{flex:1, flexDirection: 'row'}}>
            <Image style={styles.logo} source={{uri: fixImageUrl(network.logo.thumb)}}/>
            <Text style={styles.headerTitle} ellipsizeMode='tail'>{network.name}</Text>
        </View>
    </View>
);

export default NetworkHeader;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginBottom: 20,
        paddingRight: 20
    },
    networkHeader: {
      flexDirection: 'row',
      height: 40
    },
    logo: {
        height: 30,
        width: 30,
        borderRadius: 5
    },
    headerTitle: {
        paddingLeft: 10,
        fontSize: 24
    }
});