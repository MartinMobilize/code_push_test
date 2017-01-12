import React, {Component} from 'react';
import {fixImageUrl} from '../utils'
import Poll from './Poll'
import FeedItemHeader from './FeedItemHeader'
import {Card} from 'react-native-material-design';


const postIcons = {
    event: require(`./img/event.png`),
    emailblast: require(`./img/emailblast.png`),
    poll: require(`./img/poll.png`),
    quickpost: require(`./img/quickpost.png`),
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

        return (
            <View>
                <Card style={styles.card}>

                    <Card.Body>

                        <FeedItemHeader data={this.props.data}/>

                        <Poll data={this.props.data.specific.answers} answers={this.props.data.specific.my_answer}
                              clickHanlder={ (index, id)=> { this.props.changePoll(this.props.data.specific,this.props.postid, this.props.data.specific.id,index, id) } }/>

                        <View style={styles.row}>

                            <Text style={styles.postStatsStyle}>{this.props.data.comments.total} VIEWS</Text>

                        </View>
                    </Card.Body>
                </Card>
            </View>
        )
    }
}

export default PollItem;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF'

    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        paddingRight: 20,
        backgroundColor: '#FFFFFF'
    },
    leftCol: {
        width: 80,
        alignItems: 'center',
        flexDirection: 'column',
    },
    rightCol: {
        flex: 1
    },
    icon: {
        marginTop: 5,
        width: 25,
        height: 28
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    postTopLign: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        color: '#9FA4B5',
        fontSize: 16,
        textAlign: 'left'
    },
    time: {
        marginTop: 2,
        color: '#9FA4B5',
        fontSize: 14,
        textAlign: 'right'
    },
    title: {
        fontSize: 18,
        color: '#0F1C44'
    },
    content: {
        marginTop: 20,
        color: '#3F496B',
        fontSize: 16
    },
    postStatsStyle: {
        marginTop: 10,
        color: '#B8C0C9',
        justifyContent: 'center',
        fontSize: 13
    },
    pollItem: {
        marginLeft: 10
    },
    pollScroll: {
        height: 30
    }

});