import React, {Component, PropTypes} from 'react';
import {Card} from 'react-native-material-design'
import I18n from 'react-native-i18n'
import {View} from 'react-native';

import FeedItemHeader from '../FeedItemHeader'
import FeedItemFooter from '../FeedItemFooter'
import ViewsStats from '../ViewsStats'
import FeedStyles from '../FeedStyle'
import FeedItemFooterStyles from '../FeedItemFooterStyle'


class SMSItem extends Component {

    render() {

        let {post, onFeedPressed} = this.props;

        return(
        <View>
            <Card style={FeedStyles.card}>
                <Card.Body>

                    <FeedItemHeader creatorImage={post.user.avatar.image} creatorName={post.creator.name}
                                    createdAt={post.created_at} postType={post.post_type} postTitle={post.title}
                                    onPress={onFeedPressed}/>

                    {post.views?this._getStats(post):null}

                </Card.Body>

                <FeedItemFooter style={FeedItemFooterStyles.cardFooterRowNoTopMargin} comments={post.comments}
                                footerText={post.comments.comments.length + ' ' + I18n.t('COMMENTS')}/>

            </Card>

        </View>
        )
    }

    _getStats(post){

        return (<ViewsStats key={'admin/creator'} post_type={post.post_type} value={0} viewed={post.views.total} total={post.recipients.total}/>);
    }
}

SMSItem.propTypes = {
    post: PropTypes.object, //post object
    onFeedPressed:PropTypes.func
}

export default SMSItem;