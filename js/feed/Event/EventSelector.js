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
    Image,
} from 'react-native';


class Event extends Component {

    constructor({answers}) {
        super()
        this._eventOptionSelected = this._eventOptionSelected.bind(this);
    }

    render() {

        let {data, answers, description, viewed} = this.props;

        let btnStyle = styles.unselectedButton;
        let txtStyle = styles.textUnselected;

        if (!viewed){
            btnStyle = styles.unreadButton;
            txtStyle = styles.unreadButtonText;
        }

        return (

            <View style={styles.row}>
                <View style={btnStyle} onPress={()=>{this._eventOptionSelected(0)}}>
                    <Image style={styles.eventIcon} source={ require(`./img/yes.png`)}/>
                    <Text style={txtStyle}>YES</Text>
                </View>

                <View style={btnStyle} onPress={()=>{this._eventOptionSelected(0)}}>
                    <Image style={styles.eventIcon} source={ require(`./img/no.png`)}/>
                    <Text style={txtStyle}>NO</Text>
                </View>

                <View style={btnStyle} onPress={()=>{this._eventOptionSelected(0)}}>
                    <Image style={styles.eventIcon} source={ require(`./img/maybe.png`)}/>
                    <Text style={txtStyle}>MAYBE</Text>
                </View>


            </View>


        )
    }

    _eventOptionSelected(index) {
        // this.setState({id:id});
        this.props.clickHanlder(index, id);
    }
}

export default Event;