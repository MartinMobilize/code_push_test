import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.welcome}>
        Calendar screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default CalendarScreen;