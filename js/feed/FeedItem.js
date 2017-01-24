import React, { Component } from 'react';
import FeedItemHeader from './FeedItemHeader'
import styles from '../styles/feedStyle'
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
        <Card style={styles.card}>
            <Card.Body>
        <FeedItemHeader data={data}/>
        <View style={styles.row}>
            <Text style={styles.postStatsStyle}>{data.comments.total} VIEWS</Text>
        </View>
        </Card.Body>
        </Card>

    </View>
)

export default FeedItem;