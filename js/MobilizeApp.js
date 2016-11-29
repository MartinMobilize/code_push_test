/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Group from './group/group';

import {
  Text,
  Image,
  View,
  ScrollView,
  ListView,
  Navigator
} from 'react-native';


class MobilizeApp extends Component {
  render() {
      return(
        <Group/>
    );
  }
}

export default MobilizeApp;