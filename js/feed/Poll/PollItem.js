// @flow

import React, {Component} from 'react';
import Poll from './pollSelector'
import styles from '../../styles/feedStyle'
import FeedItemHeader from '../FeedItemHeader'
import FeedItemFooter from '../FeedItemFooter'
import ViewsStats     from '../ViewsStats'
import {Card} from 'react-native-material-design'

import {
    Text,
    Image,
    View
} from 'react-native';
import I18n from 'react-native-i18n'

class PollItem extends Component {


    render() {

        let {post, viewed, changePoll} = this.props;

        return (
            <View>
                <Card style={styles.card}>

                    <Card.Body>

                        <FeedItemHeader post={post} onPress={this.props.onFeedPressed}/>

                        {post.views?this._getStats(post):<Text style={styles.content} numberOfLines={1}>{post.specific.question}</Text>}

                    </Card.Body>

                    {post.views?null:(viewed?this._getViewedContent(post, viewed, changePoll):this._getUnviewedContent(post, viewed, changePoll))}

                    <FeedItemFooter key={'footer'} comments={post.comments}
                                    footerText={post.comments.comments.length + ' ' + I18n.t('COMMENTS')}/>

                </Card>
            </View>
        )
    }

    _getStats(post){
        let stats = [];

        stats.push(
            <ViewsStats key={'admin/creator'} post_type={post.post_type} value={post.specific.votes_count} viewed={post.views.total} total={post.recipients.total}/>
        )

        return stats;

    }

    _getViewedContent(post,viewed, changePoll){

        let body = []


        body.push(<Poll key={'normal'} answers={post.specific.answers} my_answers={post.specific.my_answer}
                        viewed={viewed}
                        clickHanlder={ (index, id)=> {changePoll(post.specific, post.specific.id,index, id) } }/>
        )

        return body;
    }

    _getUnviewedContent(post,viewed, changePoll){

        let body = [];

        body.push(<Card.Media key={'media'} height={90}
                              image={<Image source={require('./img/backgroundGreen.png')} />}>

                <Text style={styles.unreadButtonText}>Please make your choice</Text>

                <Poll key={'normal'} answers={post.specific.answers} my_answers={post.specific.my_answer}
                      viewed={viewed}
                      clickHanlder={ (index, id)=> {changePoll(post.specific, post.specific.id,index, id) } }/>
            </Card.Media>
        )

        return body;
    }

}

PollItem.propTypes = {
    post:React.PropTypes.object,
    viewed:React.PropTypes.bool,
    changePoll:React.PropTypes.func
}


export default PollItem;
