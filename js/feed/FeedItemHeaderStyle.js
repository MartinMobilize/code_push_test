import {StyleSheet} from 'react-native';

const FeedItemHeaderStyles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    leftCol: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightCol: {
        flex: 1
    },
    icon: {
        width: 25,
        height: 25,
        marginLeft:12
    },
    name: {
        fontSize: 14,
        marginLeft:4,
        textAlign: 'left'
    },
    postTopLign: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'

    },
    title: {
        fontSize: 22,
        color: '#3F496B'
    },


})

export default FeedItemHeaderStyles;