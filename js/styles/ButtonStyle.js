import {StyleSheet} from 'react-native';

const ButtonStyles = StyleSheet.create({

    selectedButton: {
        flexDirection: 'row',
        marginRight: 8,
        height: 30,
        alignItems: 'center',
        backgroundColor: '#9FA5B5',
        borderRadius: 15,
        borderColor: '#CFD2DA',
        borderWidth: 1
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
    unreadButton:{
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: 'transparent',
        borderRadius: 15,
        marginRight:8,
        borderColor: '#FFFFFF',
        borderWidth: 1,
    },
    buttonRow:{
        flexDirection: 'row',
        alignItems:'center',
        marginRight:15,
        backgroundColor: '#F2F2F5',
        borderRadius: 15,
    },
    buttonIcon:{
        marginLeft:6,
        width:20,
        resizeMode:'contain',
        height:20
    },
    selectableButtonIcon:{
        marginLeft:6,
        width:15,
        resizeMode:'contain',
        height:15
    },
    buttonText:{
        marginLeft:6,
        marginTop:6,
        marginBottom:6,
        marginRight:6,
        fontSize: 14,
        color: '#3F496B'
    },
    buttonTextUnselected: {
        fontFamily: 'BrixSansBold',
        marginLeft:6,
        marginRight:6,
        marginTop:6,
        marginBottom:6,
        color: '#9FA5B5'
    },
    unreadButtonText:{
        color:'#FFFFFF',
        marginLeft:6,
        marginRight:6,
        marginTop:6,
        marginBottom:6,
        fontFamily:'BrixSansBold'
    },
    buttonTextSelected: {
        fontFamily: 'BrixSansBold',
        marginLeft:6,
        marginRight:6,
        marginTop:6,
        marginBottom:6,
        color: '#FFFFFF'
    },





})

export default  ButtonStyles;
