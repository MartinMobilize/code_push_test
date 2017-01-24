// @flow

import React, {Component} from 'react';
import EventSelector from './EventSelector'
import styles from '../../styles/feedStyle'
import FeedItemHeader from '../FeedItemHeader'
import FeedItemFooter from '../FeedItemFooter'
import ViewsStats     from '../ViewsStats'
import {Card} from 'react-native-material-design'
import Moment from 'moment';


import {
    View,
    Text,
    Image
} from 'react-native';


class EventItem extends Component {

    render() {

        let {data, viewed, changeEvent} = this.props;

        const eventTime = this.calculateEventTime(data.specific.start_time, data.specific.end_time);

        return (
            <View>
                <Card style={styles.card}>

                    <Card.Body>

                        <FeedItemHeader data={data} onPress={this.props.onFeedPressed}/>

                        <Text style={styles.eventTimeText}>{eventTime}</Text>

                        <Text style={styles.content}>{data.specific.location}</Text>

                        {data.views?this._getStats(data):null}

                    </Card.Body>

                    {data.views?null:(viewed?this._getViewedContent(data,viewed, changeEvent):this._getUnviewedContent(data,viewed, changeEvent))}

                    <FeedItemFooter key={'footer'} comments={data.comments}
                                    footerText={data.specific.stats.attending_count + ' going' + ' - ' +
                                     data.comments.comments.length + ' comments'}/>

                </Card>
            </View>
        )
    }

    calculateEventTime(eventStart, eventEnd){

        const startTime = Moment(eventStart).format('HH:mm');
        const endTime  = Moment(eventEnd).format('HH:mm');

        const eventDate = Moment(eventStart).format('D MMM');


        return eventDate + ', ' + startTime + '-' + endTime;
    }

    _getStats(data){
        let stats = [];

        stats.push(
            <ViewsStats key={'admin/creator'} viewed={data.views.total} total={data.recipients.total}/>
        )

        return stats;

    }

    _getUnviewedContent(data, viewed, changeEvent){

        let body = []

        body.push(<Card.Media key={'media'} height={90}
                              image={<Image source={require('./img/backgroundGreen.png')} />}>

                <Text style={styles.unreadButtonText}>Please make your choice</Text>

                <EventSelector viewed={viewed} key={'normal'} answer={data.specific.rsvp}
                               description={data.specific.question}
                               clickHanlder={(answer)=> {changeEvent(answer)} }/>
            </Card.Media>
        )

        return body;

    }

    _getViewedContent(data, viewed, changeEvent){

        let body = []

        body.push(
            <EventSelector viewed={viewed} key={'normal'} answer={data.specific.rsvp}
                           description={data.specific.question}
                           clickHanlder={(answer)=> {changeEvent(answer) } }/>
        )

        return body;

    }

}

EventItem.propTypes = {
    data:React.PropTypes.object,
    viewed:React.PropTypes.bool,
    changeEvent:React.PropTypes.func
}

export default EventItem;
