import React, { Component } from 'react';
import FeedItemHeader from './FeedItemHeader'
import {Card} from 'react-native-material-design';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';



const postIcons = {
    event: require(`./img/event.png`),
    emailblast: require(`./img/emailblast.png`),
    poll: require(`./img/poll.png`),
    quickpost: require(`./img/quickpost.png`),
};


const FeedItem = ({
    data
}) => (
    <View>
        <Card>
            <Card.Body styles={styles.card}>
        <FeedItemHeader data={data}/>
        <View style={styles.row}>
            <Text style={styles.postStatsStyle}>{data.comments.total} VIEWS</Text>
        </View>
        </Card.Body>
        </Card>

    </View>
)

export default FeedItem;

const styles = StyleSheet.create({
    card:{
      backgroundColor:'#FFFFFF'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        paddingRight: 20
    },
    leftCol: {
        width: 80,
        alignItems: 'center',
        flexDirection: 'column',
    },
    rightCol: {
        flex:1
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
    pollItem:{
        marginLeft:10
    },
    pollScroll:{
        height:30
    }

});