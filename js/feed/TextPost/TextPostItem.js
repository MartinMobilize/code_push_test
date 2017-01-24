import React, {Component} from 'react';
import FeedItemHeader from '../FeedItemHeader'
import FeedItemFooter from '../FeedItemFooter'
import ViewsStats from '../ViewsStats'
import styles from '../../styles/feedStyle'
import {Card} from 'react-native-material-design';
import {View} from 'react-native';


class TextPostItem extends Component {


    render() {

        let {data, onFeedPressed} = this.props;

        return(
        <View>
            <Card style={styles.card}>
                <Card.Body>

                    <FeedItemHeader data={data} onPress={onFeedPressed}/>

                    {data.views?this._getStats(data):this._getContent(data)}

                    <FeedItemFooter comments={data.comments} footerText={data.comments.comments.length + ' comments'}/>

                </Card.Body>
            </Card>

        </View>
        )
    }

    _getStats(data){

        return (<ViewsStats key={'admin/creator'} viewed={data.views.total} total={data.recipients.total}/>);
    }
    _getContent(data){
        return (<Text style={styles.content} numberOfLines={1}>{data.specific.text}</Text>);
    }
}

TextPostItem.propTypes = {
    data: React.PropTypes.object, //post object
    onFeedPressed:Reac.PropTypes.func
}

export default TextPostItem;