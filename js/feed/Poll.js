/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
``
import StaticContainer from 'react-static-container'

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

        return (

            <View >

                <ScrollView automaticallyAdjustContentInsets={false}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true} marginLeft={10}>

                    {
                        this.props.data.map((option, index) => {

                            return (<TouchableHighlight underlayColor={'transparent'} key={option.id}
                                                        style={this.props.answers.indexOf(index) != -1? styles.buttonPressed:styles.button}
                                                        onPress={()=>{this._pollOptionSelected(index, option.id)}}>
                                    <Text
                                        style={this.props.answers.indexOf(index) != -1?styles.textSelected:styles.textUnselected}>
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


var styles = StyleSheet.create({
    Poll: {
        color: '#527FE4'
    },
    scrollView: {
        height: 60,
    },
    horizontalScrollView: {
        height: 60,
    },
    containerPage: {
        height: 50,
        width: 50,
        backgroundColor: '#527FE4',
        padding: 5,
    },
    text: {
        fontSize: 20,
        color: '#888888',
        left: 80,
        top: 20,
        height: 40,
    },
    button: {
        padding: 4,
        marginRight: 15,
        marginTop: 5,
        height: 30,
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 15,
        // fontFamily:'BrixSansBold',
        borderColor: '#CFD2DA',
        borderWidth: 1,
        // fontStyle:'BrixSansBold',
        // color:'#9FA5B5'
    },
    textUnselected: {
        fontFamily: 'BrixSansBold',
        color: '#9FA5B5'

    },
    textSelected: {
        fontFamily: 'BrixSansBold',
        color: '#FFFFFF'

    },
    buttonPressed: {
        padding: 4,
        marginRight: 15,
        marginTop: 5,
        height: 30,
        alignItems: 'center',
        backgroundColor: '#9FA5B5',
        borderRadius: 15,
        //  fontFamily:'BrixSansBold',
        borderColor: '#CFD2DA',
        borderWidth: 1,
        // fontStyle:'BrixSansBold',
        //  color:'#FFFFFF'

    },
    buttonContents: {
        flexDirection: 'row',
        width: 64,
        height: 64,
    },
    img: {
        width: 64,
        height: 64,
    }
});

export default Poll;