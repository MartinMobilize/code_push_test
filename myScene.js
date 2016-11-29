import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

export default class MyScene extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <Text>Hi! My name is {this.props.title}.</Text>
      </View>
    )
  }
}


const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return;
    case 'TOGGLE_TODO': {
      state.index((todoItem) => { todoItem.id == action.id})
    }
  }
} 


const testToggleTodo = () => {
  const beforeTodo = [{
    id: 0,
    text: "asdfasdf",
    completed: false
  }, {
    id: 1,
    text: "this is another test",
    completed: false
  }]

  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  }

const afterTodo = [{
    id: 0,
    text: "asdfasdf",
    completed: false
  }, {
    id: 1,
    text: "this is another test",
    completed: true
  }]

deepFreeze(stateBefore);
deepFreeze(action);

  expect(todo(StateBefore, action)).eq
}