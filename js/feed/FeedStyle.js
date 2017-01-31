import {StyleSheet} from 'react-native';
import primaryColor from '../styles/FontStyle';


const FeedStyles = StyleSheet.create({
    avatar: {
        height: 20,
        width: 20,
        marginRight: 2,
        borderRadius: 6,
    },
    card: {
        backgroundColor: '#FFFFFF'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10
    },
    loaderIndicator: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loader: {
        height: 100,
        width: 100,
        justifyContent: 'center',
    },
    smallLoader: {
        height: 40,
        width: 40,
        justifyContent: 'center',

    },
    activityIndicator: {
        marginTop: 30,
        justifyContent: 'center',
    },
    listHeader: {
        height: 20,
    },
    footer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 40
    },

    leftCol: {
        width: 80,
        alignItems: 'center',
        flexDirection: 'column',
    },
    rightCol: {
        flex: 1
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
    },
    content: {
        marginBottom: 12,
        marginRight: 50,
        fontSize: 16
    },
    contentWithoutMargin: {
        marginRight: 50,
        fontSize: 16
    },
    pollItem: {
        marginLeft: 10
    },
    pollScroll: {
        height: 30
    },

});

export default FeedStyles;
