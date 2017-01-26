import React, {Component} from 'react';
import {
Text,
Image,
View
} from 'react-native';

import {fixImageUrl} from '../utils'
import FeedStyles from './FeedStyle'
import ColorStyles from '../styles/ColorStyle'
import FeedItemFooterStyles from './FeedItemFooterStyle'

class FeedItemFooter extends Component {

    render() {

        let {comments, footerText} = this.props;


        // Check the amount of comments. If less than 3, show 0/1/2/3 images according to the comments counter.
        //Otherwise show the first 3 comments images.
        images_count = comments.total > 3 ? 3 :comments.total ;
        let images = [];

        for (i = 0; i < images_count; i++) {
           images.push(
               <Image key = {i} style={FeedStyles.avatar}
                      source={{uri: fixImageUrl(comments.comments[i].user.avatar.image)}}/>
           )

        }

        return (
            <View style={FeedItemFooterStyles.cardFooterRow}>

                {images}

                <Text style={[ColorStyles.normalTextColor, FeedItemFooterStyles.footerText]}>{footerText}</Text>
            </View>
        )
    }
}


export default FeedItemFooter;
