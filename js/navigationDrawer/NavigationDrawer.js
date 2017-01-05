/**
 * @flow
 */

import React, { Component } from 'react';
import GroupListContainer from './GroupListContainer'
import {
	View,
        StyleSheet
} from 'react-native';

const NavigationDrawer = ({navigator}) => (
        <View style={styles.menu}>
        <GroupListContainer navigator={navigator}/>
        </View>
)

export default NavigationDrawer;

const styles = StyleSheet.create({
    menu: {
        flex: 1
    }
});