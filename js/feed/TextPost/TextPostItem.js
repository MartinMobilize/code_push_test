import React, {Component} from 'react';
import I18n from 'react-native-i18n'
import {Card} from 'react-native-material-design'
import {View, Text} from 'react-native';

import FeedItemHeader from '../FeedItemHeader'
import FeedItemFooter from '../FeedItemFooter'
import ViewsStats from '../ViewsStats'
import FeedStyles from '../FeedStyle'


class TextPostItem extends Component {

    static propTypes = {
        post: React.PropTypes.object, //post object
        onFeedPressed:React.PropTypes.func
    }

    render() {

        let {post, onFeedPressed} = this.props;

        return(
        <View>
            <Card style={FeedStyles.card}>
                <Card.Body>

                    <FeedItemHeader creatorImage={post.user.avatar.image} creatorName={post.creator.name}
                                    createdAt={post.created_at} postType={post.post_type} postTitle={post.title}
                                    onPress={onFeedPressed}/>

                    {post.views?this._getStats(post):this._getContent(post)}

                </Card.Body>

                <FeedItemFooter comments={post.comments} footerText={post.comments.comments.length + ' ' + I18n.t('COMMENTS')}/>

            </Card>

        </View>
        )
    }

    _getStats(post){
        return (<ViewsStats key={'admin/creator'} post_type={post.post_type} value={0} viewed={post.views.total} total={post.recipients.total}/>);
    }
    _getContent(post){
        return (<Text style={FeedStyles.content} numberOfLines={1}>{post.specific.text}</Text>);
    }
}

TextPostItem.propTypes = {
    post: React.PropTypes.object, //post object
    onFeedPressed:React.PropTypes.func
}


export default TextPostItem;