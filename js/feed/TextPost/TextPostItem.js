import React, {Component} from 'react';
import FeedItemHeader from '../FeedItemHeader'
import FeedItemFooter from '../FeedItemFooter'
import ViewsStats from '../ViewsStats'
import styles from '../../styles/feedStyle'
import {Card} from 'react-native-material-design'

import {View, Text} from 'react-native';


class TextPostItem extends Component {


    render() {

        let {post, onFeedPressed} = this.props;

        return(
        <View>
            <Card style={styles.card}>
                <Card.Body>

                    <FeedItemHeader post={post} onPress={onFeedPressed}/>

                    {post.views?this._getStats(post):this._getContent(post)}

                    <FeedItemFooter comments={post.comments} footerText={post.comments.comments.length + ' comments'}/>

                </Card.Body>
            </Card>

        </View>
        )
    }

    _getStats(post){

        return (<ViewsStats key={'admin/creator'} viewed={post.views.total} total={post.recipients.total}/>);
    }
    _getContent(post){
        return (<Text style={styles.content} numberOfLines={1}>{post.specific.text}</Text>);
    }
}

TextPostItem.propTypes = {
    post: React.PropTypes.object, //post object
    onFeedPressed:React.PropTypes.func
}

export default TextPostItem;