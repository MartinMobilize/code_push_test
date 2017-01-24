import React, {Component} from 'react';
import FeedItemHeader from '../FeedItemHeader'
import FeedItemFooter from '../FeedItemFooter'
import ViewsStats from '../ViewsStats'
import styles from '../../styles/feedStyle'
import {Card} from 'react-native-material-design'

import {View, Text} from 'react-native';
import I18n from 'react-native-i18n'


class EmailBlastItem extends Component {


    render() {

        let {post, onFeedPressed} = this.props;

        return(
        <View>
            <Card style={styles.card}>
                <Card.Body>

                    <FeedItemHeader post={post} onPress={onFeedPressed}/>

                    {post.views?this._getStats(post):this._getContent(post)}

                </Card.Body>

                <FeedItemFooter comments={post.comments} footerText={post.comments.comments.length + ' ' + I18n.t('COMMENTS')}/>

            </Card>

        </View>
        )
    }
    _getStats(post){
        return (<ViewsStats key={'admin/creator'} post_type={post.post_type} value={'0'} viewed={post.views.total} total={post.recipients.total}/>);
    }
    _getContent(post){
        return (<Text style={styles.content} numberOfLines={1}>{post.specific.text}</Text>);
    }

}

EmailBlastItem.propTypes = {
    post: React.PropTypes.object,
}


export default EmailBlastItem;