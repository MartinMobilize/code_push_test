/**
 * @flow
 */

import React, { Component } from 'react';
import GroupListContainer from './GroupListContainer'
import {
	View
} from 'react-native';

const NavigationDrawer = ({navigator}) => (
    <GroupListContainer navigator={navigator}/>
)

export default NavigationDrawer;