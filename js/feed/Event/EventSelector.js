/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import I18n from 'react-native-i18n'
import {
View,
Text,
TouchableHighlight,
Image,
} from 'react-native';

import NormalButton from '../../components/buttons/NormalButton'
import FeedStyles from '../FeedStyle'
import ButtonStyles from  '../../styles/ButtonStyle'

const styles = {
    feedStyle:FeedStyles,
    buttonStyle:ButtonStyles
}

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

        let btnStyle = styles.buttonStyle.unselectedButton;
        let txtStyle = styles.buttonStyle.buttonTextUnselected;

        if (!viewed) {
            btnStyle = styles.buttonStyle.unreadButton;
            txtStyle = styles.buttonStyle.unreadButtonText;
        }

        return (

            <View style={styles.feedStyle.row}>

                <NormalButton buttonStyle = {answer === 'yes'?styles.buttonStyle.selectedButton:btnStyle}
                              image={answer === 'yes' ||!viewed ?icons.selected.yes:icons.unselected.yes}
                              text={I18n.t('YES_ANSWER')}
                              textStyle={answer === 'yes'?styles.buttonStyle.buttonTextSelected:txtStyle}
                              onClick={()=>this._eventOptionSelected('yes')}/>

                <NormalButton buttonStyle = {answer === 'no'?styles.buttonStyle.selectedButton:btnStyle}
                              image={answer === 'no' ||!viewed ?icons.selected.no:icons.unselected.no}
                              text={I18n.t('NO_ANSWER')}
                              textStyle={answer === 'no'?styles.buttonStyle.buttonTextSelected:txtStyle}
                              onClick={()=>this._eventOptionSelected('no')}/>

                <NormalButton buttonStyle = {answer === 'maybe'?styles.buttonStyle.selectedButton:btnStyle}
                              image={answer === 'maybe' ||!viewed ?icons.selected.maybe:icons.unselected.maybe}
                              text={I18n.t('MAYBE_ANSWER')}
                              textStyle={answer === 'maybe'?styles.buttonStyle.buttonTextSelected:txtStyle}
                              onClick={()=>this._eventOptionSelected('maybe')}/>

            </View>


        )
    }

    _eventOptionSelected(answer) {
        this.props.clickHanlder(answer);
    }
}

export default Event;