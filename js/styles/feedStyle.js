import { StyleSheet } from 'react-native';
import primaryColor from './common';


const styles = StyleSheet.create({
    card:{
        backgroundColor:'#FFFFFF'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        marginTop:8,
        justifyContent: 'center',
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

export default styles;
