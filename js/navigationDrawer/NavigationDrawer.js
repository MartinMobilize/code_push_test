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
