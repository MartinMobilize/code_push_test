// @flow

import React, {Component} from 'react';
import {Card} from 'react-native-material-design'
import Moment from 'moment'
import I18n from 'react-native-i18n'
import {
View,
Text,
Image
} from 'react-native';

import EventSelector from './EventSelector'
import FeedItemHeader from '../FeedItemHeader'
import FeedItemFooter from '../FeedItemFooter'
import ViewsStats     from '../ViewsStats'

import FeedStyles from '../FeedStyle'
import FontStyles from '../../styles/FontStyle'
import ColorStyles from '../../styles/ColorStyle'
import EventItemStyles from './EventItemStyle'


const styles = {
    feedStyle:FeedStyles,
    fontStyle:FontStyles,
    colorStyle:ColorStyles,
    eventStyle:EventItemStyles
}

class EventItem extends Component {

    render() {

        let {post, viewed, changeEvent} = this.props;

        const eventTime = this.calculateEventTime(post.specific.start_time, post.specific.end_time);

        return (
            <View>
                <Card style={styles.feedStyle.card}>

                    <Card.Body>

                        <FeedItemHeader creatorImage={post.user.avatar.image} creatorName={post.creator.name}
                                        createdAt={post.created_at} postType={post.post_type} postTitle={post.title}
                                        onPress={this.props.onFeedPressed}/>

                        <Text style={[styles.colorStyle.normalTextColor,styles.fontStyle.mediumFont,
                                        styles.eventStyle.eventTimeText]}>{eventTime}</Text>

                        <Text style={styles.feedStyle.content}>{post.specific.location}</Text>

                        {post.views?this._getStats(post):null}

                    </Card.Body>

                    {post.views?null:(viewed?this._getViewedContent(post,viewed, changeEvent):this._getUnviewedContent(post,viewed, changeEvent))}

                    <FeedItemFooter key={'footer'} comments={post.comments}
                                    footerText= {post.comments.comments.length + ' ' + I18n.t('COMMENTS')}/>

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

    _getStats(post){
        let stats = [];

        stats.push(
            <ViewsStats key={'admin/creator'} post_type={post.post_type} value={post.specific.stats.attending_count} viewed={post.views.total} total={post.recipients.total}/>
        )

        return stats;

    }

    _getUnviewedContent(post, viewed, changeEvent){

        let body = []

        body.push(<Card.Media key={'media'} height={90}
                              image={<Image source={require('./img/backgroundGreen.png')} />}>

                <Text style={[styles.fontStyle.boldFont, styles.eventStyle.unviewedText]}>{I18n.t('EVENT_HINT')}</Text>

                <EventSelector viewed={viewed} key={'normal'} answer={post.specific.rsvp}
                               description={post.specific.question}
                               clickHanlder={(answer)=> {changeEvent(answer)} }/>
            </Card.Media>
        )

        return body;

    }

    _getViewedContent(post, viewed, changeEvent){

        let body = []

        body.push(
            <EventSelector viewed={viewed} key={'normal'} answer={post.specific.rsvp}
                           description={post.specific.question}
                           clickHanlder={(answer)=> {changeEvent(answer) } }/>
        )

        return body;

    }

}

EventItem.propTypes = {
    post:React.PropTypes.object,
    viewed:React.PropTypes.bool,
    changeEvent:React.PropTypes.func
}

export default EventItem;
