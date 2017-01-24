/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import styles from '../../styles/feedStyle'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView
} from 'react-native';


class Poll extends Component {

    constructor({answers}) {
        super()
        this._pollOptionSelected = this._pollOptionSelected.bind(this);
    }

    render() {

        let {data, answers, viewed} = this.props;

        let btnStyle = styles.unselectedButton;
        let txtStyle = styles.textUnselected;

        if (!viewed){
            btnStyle = styles.unreadButton;
            txtStyle = styles.unreadButtonText;
        }

        return (

            <View >

                <ScrollView automaticallyAdjustContentInsets={false}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            style={{marginBottom:10}}>

                    {
                        data.map((option, index) => {

                            return (<TouchableHighlight underlayColor={'transparent'} key={option.id}
                                                        style={
                                                            answers.indexOf(index) != -1? styles.selectedButton:btnStyle}
                                                        onPress={()=>{this._pollOptionSelected(index, option.id)}}>
                                    <Text
                                        style={answers.indexOf(index) != -1?styles.textSelected:txtStyle}>
                                        {option.text}
                                    </Text>
                                </TouchableHighlight>
                            )
                        })
                    }

                </ScrollView>
            </View>
        )
    }

    _pollOptionSelected(index, id) {
        // this.setState({id:id});
        this.props.clickHanlder(index, id);
    }
}

export default Poll;