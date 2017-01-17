// @flow

import React, {Component} from 'react';
import {fixImageUrl} from '../../utils'
import Poll from './poll'
import styles from '../../styles/feedStyle'
import FeedItemHeader from '../FeedItemHeader'
import {Card} from 'react-native-material-design';


const postIcons = {
    event: require(`./../img/event.png`),
    emailblast: require(`./../img/emailblast.png`),
    poll: require(`./../img/poll.png`),
    quickpost: require(`./../img/quickpost.png`),
};

import {
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
    ScrollView,
    View
} from 'react-native';

class PollItem extends Component {


    render() {

        let {data,changePoll, postid} = this.props;

        return (
            <View>
                <Card style={styles.card}>

                    <Card.Body>

                        <FeedItemHeader data={data} onPress={this.props.onFeedPressed}/>

                        <Poll data={data.specific.answers} answers={data.specific.my_answer}
                              clickHanlder={ (index, id)=> {changePoll(data.specific, data.specific.id,index, id) } }/>

                        <View style={styles.row}>

                            <Text style={styles.postStatsStyle}>{data.comments.total} VIEWS</Text>

                        </View>
                    </Card.Body>
                </Card>
            </View>
        )
    }
}

export default PollItem;
