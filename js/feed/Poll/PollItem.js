// @flow

import React, {Component, PropTypes} from 'react';
import {Card} from 'react-native-material-design'
import I18n from 'react-native-i18n'
import {
    Text,
    Image,
    View
} from 'react-native';

import Poll from './pollSelector'
import FeedItemHeader from '../FeedItemHeader'
import FeedItemFooter from '../FeedItemFooter'
import ViewsStats     from '../ViewsStats'

import PollItemStyles from './PollItemStyle'
import FeedStyles from '../FeedStyle'
import FontStyles from '../../styles/FontStyle'
import FeedItemFooterStyles from '../FeedItemFooterStyle'

const styles = {
    pollStyle:PollItemStyles,
    fontStyle:FontStyles,
    feedStyle:FeedStyles,
    footerStyle:FeedItemFooterStyles
}

class PollItem extends Component {


    render() {

        let {post, viewed, changePoll} = this.props;

        return (
            <View>
                <Card style={styles.feedStyle.card}>

                    <Card.Body>

                        <FeedItemHeader creatorImage={post.user.avatar.image} creatorName={post.creator.name}
                                        createdAt={post.created_at} postType={post.post_type} postTitle={post.title}
                                        onPress={this.props.onFeedPressed}/>

                        {post.views?this._getStats(post):<Text style={styles.feedStyle.contentWithoutMargin} numberOfLines={1}>{post.specific.question}</Text>}

                    </Card.Body>

                    {post.views?null:(viewed?this._getViewedContent(post, viewed, changePoll):this._getUnviewedContent(post, viewed, changePoll))}

                    <FeedItemFooter comments={post.comments}
                                    style={styles.footerStyle.cardFooterRow}
                                    footerText={post.comments.comments.length + ' ' + I18n.t('COMMENTS')}/>

                </Card>
            </View>
        )
    }

    _getStats(post){

        return(
            <ViewsStats post_type={post.post_type} value={post.specific.votes_count} viewed={post.views.total} total={post.recipients.total}/>
        )

    }

    _getViewedContent(post,viewed, changePoll){


       return(<Poll answers={post.specific.answers} my_answers={post.specific.my_answer}
                        viewed={viewed}
                        clickHanlder={ (index, id)=> {changePoll(post.specific, post.specific.id,index, id) } }/>
        )

    }

    _getUnviewedContent(post,viewed, changePoll){

        return(<Card.Media height={90}
                              image={<Image source={require('./img/backgroundGreen.png')} />}>

                <Text style={[styles.fontStyle.boldFont, styles.pollStyle.unviewedText]}>{I18n.t('POLL_HINT')}</Text>

                <Poll answers={post.specific.answers} my_answers={post.specific.my_answer}
                      viewed={viewed}
                      clickHanlder={ (index, id)=> {changePoll(post.specific, post.specific.id,index, id) } }/>
            </Card.Media>
        )

    }

}

PollItem.propTypes = {
    post:PropTypes.object,
    viewed:PropTypes.bool,
    changePoll:PropTypes.func
}


export default PollItem;
