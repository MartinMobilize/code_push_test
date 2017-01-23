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
    TouchableHighlight,
    Image,
} from 'react-native';


const icons = {
    selected:{
        yes:require('./img/yes.png'),
        no:require('./img/no.png'),
        maybe:require('./img/maybe.png'),
    },
    unselected:{
        yes:require('./img/yes_gray.png'),
        no:require('./img/No_gray.png'),
        maybe:require('./img/Maybe_gray.png'),
    }
}

class Event extends Component {

    constructor({answers}) {
        super()
        this._eventOptionSelected = this._eventOptionSelected.bind(this);
    }

    render() {

        let {answer, viewed} = this.props;

        let btnStyle = styles.unselectedButton;
        let txtStyle = styles.textUnselected;

        if (!viewed) {
            btnStyle = styles.unreadButton;
            txtStyle = styles.unreadButtonText;
        }

        return (

            <View style={styles.row}>

                <TouchableHighlight underlayColor={'transparent'} onPress={()=>this._eventOptionSelected('yes')}>
                    <View style={answer === 'yes'?styles.selectedButton:btnStyle}>
                        <Image style={styles.eventIcon} source={answer === 'yes' ||!viewed ?icons.selected.yes:icons.unselected.yes}/>
                        <Text style={answer === 'yes'?styles.textSelected:txtStyle}>YES</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'transparent'} onPress={()=>this._eventOptionSelected('no')}>
                    <View style={answer === 'no'?styles.selectedButton:btnStyle}>
                        <Image style={styles.eventIcon} source={answer === 'no' ||!viewed ?icons.selected.no:icons.unselected.no}/>
                        <Text style={answer === 'no'?styles.textSelected:txtStyle}>NO</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'transparent'} onPress={()=>this._eventOptionSelected('maybe')}>
                    <View style={answer === 'maybe'?styles.selectedButton:btnStyle}>
                        <Image style={styles.eventIcon} source={answer === 'maybe' ||!viewed ?icons.selected.maybe:icons.unselected.maybe}/>
                        <Text style={answer === 'maybe'?styles.textSelected:txtStyle}>MAYBE</Text>
                    </View>
                </TouchableHighlight>


            </View>


        )
    }

    _eventOptionSelected(answer) {
        this.props.clickHanlder(answer);
    }
}

export default Event;