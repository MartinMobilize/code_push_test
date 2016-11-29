
import React, { Component } from 'react';``
import Feed from '../feed/Feed'
import {CustomSegmentedControl} from 'react-native-custom-segmented-control'

import {
  ListView,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';


const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}


const Group = () => {
  return (
    <View style={{flex: 1}}>
        <CustomSegmentedControl
      style={{
          height: 40,
          backgroundColor: 'white',   
          marginVertical: 0,
      }}
      textValues={['Activity','Members', 'Events', 'Files', 'Settings' ]}
      selected={0}
      segmentedStyle={{
          selectedLineHeight: 2,
          fontSize:12,
          fontWeight: 'bold', // bold, italic, regular (default)
          segmentBackgroundColor: 'transparent',
          segmentTextColor: '#7a92a5',
          segmentHighlightTextColor: '#7a92a599',
          selectedLineColor: '#00adf5',
          selectedLineAlign: 'bottom', // top/bottom/text
          selectedLineMode: 'full', // full/text
          selectedTextColor: 'black',                                                  
          selectedLinePaddingWidth: 30,
          segmentFontFamily: 'system-font-bold',
          animationType: 'close-and-open',
      }}
      onSelectedWillChange={(event)=> {
      }}
      onSelectedDidChange={(event)=> {
      }}/>
      <Feed/>
      </View>
  );
}
    
export default Group;