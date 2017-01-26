/**
 * Created by martin on 25/01/2017.
 */

import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
} from 'react-native';

import ButtonStyles from '../../styles/ButtonStyle'
import FontStyles from '../../styles/FontStyle'

const styles ={
    fontStyle:FontStyles,
    buttonStyle:ButtonStyles,
}

class ViewOnlyButton extends Component{
    render() {

        let {image, text} = this.props;

        return (
            <View style={styles.buttonStyle.buttonRow}>
                { image ? <Image style={styles.buttonStyle.buttonIcon} source={this.props.image}/> : null }
                <Text style={[styles.fontStyle.regularFont, styles.buttonStyle.buttonText]}>{text}</Text>
            </View>
        )
    }

}

export default ViewOnlyButton;