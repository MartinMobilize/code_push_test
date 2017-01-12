/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';``
import StaticContainer from 'react-static-container'

import {
ScrollView} from 'react-native';

class Martin extends Component {
  render() {

    return (
      <View style={{flex: 1}}>
    <ScrollView horizontal={true} tabLabel="poll">
      <Text>Today</Text>
       <Text>Tomorrow</Text>
       <Text>Dont knoew</Text>
       <Text>Today</Text>
       <Text>Tomorrow</Text>
       <Text>Dont knoew</Text>

    </ScrollView>
      </View>
    )
  }
}


export default Martin;