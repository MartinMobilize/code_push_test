import React, {Component} from 'react';
import {fixImageUrl} from '../utils'
import {
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
    ScrollView,
    View
} from 'react-native';


const postIcons = {
    event: require(`./img/event.png`),
    emailblast: require(`./img/emailblast.png`),
    poll: require(`./img/poll.png`),
    quickpost: require(`./img/quickpost.png`),
};


const FeedItemHeader = ({
    data, onPress
}) => (
    <TouchableHighlight underlayColor={'transparent'} onPress={onPress}>

        <View style={styles.column}>
            <View style={styles.row}>
                <View style={styles.leftCol}>
                    <Image style={styles.avatar} source={{uri: fixImageUrl(data.creator.avatar.image)}}/>
                    <Text style={styles.name}>{data.creator.name}</Text>

                </View>
                <View style={styles.postTopLign}>
                    <Text style={styles.name}>{data.created_at}</Text>
                    <Image style={styles.icon} source={postIcons[data.post_type]}/>

                </View>
            </View>

            <View style={styles.row}>
            <View style={styles.column}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.content} numberOfLines={1}>{"this is custom content"}</Text>
                </View>
            </View>
        </View>
    </TouchableHighlight>

)

export default FeedItemHeader;

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    column: {
        flex: 1,
        flexDirection: 'column',

    },
    leftCol: {
        flexDirection: 'row',
    },
    rightCol: {
        flex: 1
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft:4
    },
    avatar: {
        height: 20,
        width: 20,
        borderRadius: 3
    },
    postTopLign: {
        flexDirection: 'row',
        justifyContent: 'flex-end'

    },
    name: {
        color: '#6f778f',
        fontSize: 13,
        marginLeft:4,
        textAlign: 'left'
    },
    time: {
        color: '#6f778f',
        fontSize: 13,
        marginLeft:4,
    },
    title: {
        fontSize: 18,
        color: '#0F1C46'
    },
    content: {
        marginTop: 20,
        color: '#6f778f',
        fontSize: 16
    },
    postStatsStyle: {
        marginTop: 10,
        color: '#B8C0C9',
        fontSize: 13
    },
    pollItem: {
        marginLeft: 10
    },
    pollScroll: {
        height: 30
    }

});