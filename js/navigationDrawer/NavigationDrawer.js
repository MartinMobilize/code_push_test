/**
 * @flow
 */

import React, { Component } from 'react';
import GroupListContainer from './GroupListContainer'
import {
	View,
        StyleSheet,
        Text
} from 'react-native';

const NavigationDrawer = ({navigator}) => (
    <GroupListContainer navigator={navigator} />
)

export default NavigationDrawer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#000000'
    }
});