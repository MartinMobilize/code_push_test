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

class PollItem extends Component {


    render() {

        let {data, viewed, changePoll} = this.props;

        return (
            <View>
                <Card style={styles.card}>

                    <Card.Body>

                        <FeedItemHeader data={data} onPress={this.props.onFeedPressed}/>
                        <Text style={styles.content} numberOfLines={1}>{data.specific.question}</Text>


                        {data.views?this._getStats(data):null}

                    </Card.Body>

                    {data.views?null:(viewed?this._getViewedContent(data, viewed, changePoll):this._getUnviewedContent(data, viewed, changePoll))}

                    <FeedItemFooter key={'footer'} comments={data.comments}
                                    footerText={data.specific.votes_count + ' votes' + ' - ' +
                                         data.comments.comments.length + ' comments'}/>

                </Card>
            </View>
        )
    }

    _getStats(data){
        let stats = [];

        stats.push(
            <ViewsStats key={'admin/creator'} viewed={data.views.total} total={data.recipients.total}/>
        )

        return stats;

    }

    _getViewedContent(data,viewed, changePoll){

        let body = []


        body.push(<Poll key={'normal'} data={data.specific.answers} answers={data.specific.my_answer}
                        viewed={viewed}
                        clickHanlder={ (index, id)=> {changePoll(data.specific, data.specific.id,index, id) } }/>
        )

        return body;
    }

    _getUnviewedContent(data,viewed, changePoll){

        let body = [];

        body.push(<Card.Media key={'media'} height={90}
                              image={<Image source={require('./img/backgroundGreen.png')} />}>

                <Text style={styles.unreadButtonText}>Please make your choice</Text>

                <Poll key={'normal'} data={data.specific.answers} answers={data.specific.my_answer}
                      viewed={viewed}
                      clickHanlder={ (index, id)=> {changePoll(data.specific, data.specific.id,index, id) } }/>
            </Card.Media>
        )

        return body;
    }

}

PollItem.propTypes = {
    data:React.PropTypes.object,
    changePoll:React.PropTypes.func
}


export default PollItem;
