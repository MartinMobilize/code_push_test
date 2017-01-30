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

    constructor(props) {

        super(props);

        let {comments} = props;

        let commentsImages = this._getCommentAvatars(comments);

        this.state = {
            commentsImages: commentsImages
        };

    }

    render() {

        let {style, comments, footerText} = this.props;


        // Check the amount of comments. If less than 3, show 0/1/2/3 images according to the comments counter.
        //Otherwise show the first 3 comments images.
        images_count = comments.total > 3 ? 3 : comments.total;
        let images = [];

        for (i = 0; i < images_count; i++) {
            images.push(
                <Image key={i} style={FeedStyles.avatar}
                       source={{uri: fixImageUrl(this.state.commentsImages[i])}}/>
            )

        }

        return (
            <View style={style}>

                {images}

                <Text style={[ColorStyles.normalTextColor, FeedItemFooterStyles.footerText]}>{footerText}</Text>
            </View>
        )
    }

    componentWillReceiveProps(props) {
        let {comments} = props;

        let commentsImages = this._getCommentAvatars(comments);

        this.setState({
            commentsImages: commentsImages
        });

    }

    _getCommentAvatars(comments) {

        let commentsImages = [];

        comments.comments.forEach(comment => {
            commentsImages.push(comment.user.avatar.image);
        })

        return commentsImages;

    }

}


export default FeedItemFooter;
