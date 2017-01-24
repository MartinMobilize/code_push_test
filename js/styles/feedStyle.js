import {StyleSheet} from 'react-native';
import primaryColor from './common';


const styles = StyleSheet.create({
    loaderIndicator: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loader:{
        height: 100,
        width: 100,
        justifyContent: 'center',
    },
    smallLoader:{
        height: 40,
        width: 40,
        justifyContent: 'center',

    },
    activityIndicator:{
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
        marginBottom:40
    },
    footerImage: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#FFFFFF'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10
    },
    statsRow:{
        flex: 1,
        marginTop:10,
        flexDirection: 'row',
    },
    footerRow: {
        flex: 1,
        flexDirection: 'row',
    },
    cardFooterRow:{
        flex: 1,
        marginBottom:10,
        marginTop:10,
        flexDirection: 'row',

    },
    button_row:{
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: '#F2F2F5',
        borderRadius: 15,
    },
    unreadButton:{
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: 'transparent',
        borderRadius: 15,
        marginRight:8,
        borderColor: '#FFFFFF',
        borderWidth: 1,
    },
        unreadButtonText:{
        color:'#FFFFFF',
        marginLeft:6,
        marginRight:6,
        marginTop:6,
        marginBottom:6,
        fontFamily:'BrixSansBold'
    },
    eventColumn:{
        flex: 1,
        flexDirection: 'column',
        //backgroundColor: '#1CC8BC',

    },
    eventIcon:{
        marginLeft:6,
        width:15,
        resizeMode:'contain',
        height:15
    },
    eventTimeText:{
        color: '#6f778f',
        marginBottom:6,
        marginRight:50,
        fontFamily:'BrixSansMedium',
        fontSize: 16

    },
    statsIcon:{
        marginLeft:6,
        width:20,
        resizeMode:'contain',
        height:20
    },
    row2: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 8,
        justifyContent: 'center',
        marginRight: 30
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
        height: 20,
        resizeMode:'contain',
        width: 20,
        marginRight: 2,
        borderRadius: 3,
    },
    avatar_border: {
        height: 20,
        width: 20,
        borderRadius: 3,
        borderWidth: 2,
        borderColor: '#FFFFFF'
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
        color: '#6f778f',
        marginBottom:12,
        marginRight:50,
        fontFamily:'BrixSansRegular',
        fontSize: 16
    },
    postStatsStyle: {
        color: '#6f778f',
        marginLeft: 6,
        justifyContent: 'center',
        fontSize: 13
    },
    statsText:{
        fontFamily: 'BrixSansRegular',
        marginLeft:6,
        marginTop:6,
        marginBottom:6,
        marginRight:6,
        fontSize: 14,
        color: '#3F496B'
    },
    pollItem: {
        marginLeft: 10
    },
    pollScroll: {
        height: 30
    },
    unselectedButton: {
        flexDirection: 'row',
        alignItems:'center',
        marginRight: 8,
        height: 30,
            backgroundColor: 'transparent',
        borderRadius: 15,
        borderColor: '#CFD2DA',
        borderWidth: 1,
    },
    textUnselected: {
        fontFamily: 'BrixSansBold',
        marginLeft:6, 
        marginRight:6,
         marginTop:6, 
        marginBottom:6,
        color: '#9FA5B5'

    },
    textSelected: {
        fontFamily: 'BrixSansBold',
        marginLeft:6,
        marginRight:6,
        marginTop:6,
        marginBottom:6,
        color: '#FFFFFF'

    },
    selectedButton: {
        flexDirection: 'row',
        marginRight: 8,
        height: 30,
        alignItems: 'center',
        backgroundColor: '#9FA5B5',
        borderRadius: 15,
        borderColor: '#CFD2DA',
        borderWidth: 1
    }


});

export default styles;
