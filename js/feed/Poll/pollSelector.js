/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
View,
Text,
TouchableHighlight,
ScrollView
} from 'react-native';

import FeedStyles from '../FeedStyle'
import ButtonStyles from  '../../styles/ButtonStyle'
import NormalButton from '../../components/buttons/NormalButton'

const styles = {
    feedStyle:FeedStyles,
    buttonStyle:ButtonStyles
}

class Poll extends Component {

    constructor({answers}) {
        super()
        this._pollOptionSelected = this._pollOptionSelected.bind(this);
    }

    render() {

        let {answers, my_answers, viewed} = this.props;

        let btnStyle = styles.buttonStyle.unselectedButton;
        let txtStyle = styles.buttonStyle.buttonTextUnselected;

        if (!viewed) {
            btnStyle = styles.buttonStyle.unreadButton;
            txtStyle = styles.buttonStyle.unreadButtonText;
        }

        return (

            <View >

                <ScrollView automaticallyAdjustContentInsets={false}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            style={{marginBottom:10}}>

                    {
                        answers.map((option, index) => {

                            return (
                            <NormalButton
                                key={option.id}
                                buttonStyle = {my_answers.indexOf(index) != -1? styles.buttonStyle.selectedButton:btnStyle}
                                text={option.text}
                                textStyle={my_answers.indexOf(index) != -1?styles.buttonStyle.buttonTextSelected:txtStyle}
                                onClick={()=>{this._pollOptionSelected(index, option.id)}}/>
                            )
                        })
                    }

                </ScrollView>
            </View>
        )
    }

    _pollOptionSelected(index, id) {
        this.props.clickHanlder(index, id);
    }
}

Poll.propTypes = {
    answers:React.PropTypes.array,
    my_answer:React.PropTypes.number,
    viewed:React.PropTypes.bool
}

export default Poll;