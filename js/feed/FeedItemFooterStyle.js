import {StyleSheet} from 'react-native';

const FeedItemFooterStyles = StyleSheet.create({
    cardFooterRow:{
        flex: 1,
        marginBottom:10,
        marginTop:10,
        flexDirection: 'row',
    },
    cardFooterRowNoTopMargin:{
        flex: 1,
        marginBottom:10,
        flexDirection: 'row',

    },
    footerText: {
        marginLeft: 6,
        justifyContent: 'center',
        fontSize: 13
    },

})

export default FeedItemFooterStyles;