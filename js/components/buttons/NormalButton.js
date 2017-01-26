/**
 * Created by martin on 25/01/2017.
 */

import React, {Component} from 'react';
import {
    Text,
    Image,
    TouchableHighlight,
    View,
} from 'react-native';

import ButtonStyles from '../../styles/ButtonStyle'
import FontStyles from '../../styles/FontStyle'

const styles ={
    fontStyle:FontStyles,
    buttonStyle:ButtonStyles,
}

class NormalButton extends Component{
    render() {

        let {buttonStyle, image, text, textStyle, onClick} = this.props;

        return (
            <TouchableHighlight key="button" underlayColor={'transparent'} onPress={onClick}>
                <View style={buttonStyle}>
                    {image? <Image style={styles.buttonStyle.selectableButtonIcon} source={image}/> : null}
                    <Text style={textStyle}>{text}</Text>
                </View>
            </TouchableHighlight>
        )
    }

}

export default NormalButton;