// @flow

import React, {Component, PropTypes} from 'react';
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
import FeedItemFooterStyles from '../FeedItemFooterStyle'


const styles = {
    feedStyle: FeedStyles,
    fontStyle: FontStyles,
    colorStyle: ColorStyles,
    eventStyle: EventItemStyles,
    footerStyle: FeedItemFooterStyles
}

class EventItem extends Component {

    render() {

        let {post, viewed, changeEvent, onFeedPressed} = this.props;

        const eventTime = this._calculateEventTime(post.specific.start_time, post.specific.end_time);

        return (
            <View>
                <Card style={styles.feedStyle.card}>

                    <Card.Body>

                        <FeedItemHeader creatorImage={post.user.avatar.image} creatorName={post.creator.name}
                                        createdAt={post.created_at} postType={post.post_type} postTitle={post.title}
                                        onPress={onFeedPressed}/>

                        <Text style={[styles.colorStyle.normalTextColor,styles.fontStyle.mediumFont,
                                        styles.eventStyle.eventTimeText]}>{eventTime}</Text>

                        <Text style={styles.feedStyle.contentWithoutMargin}>{post.specific.location}</Text>

                        {post.views ? this._getStats(post) : null}

                    </Card.Body>

                    {post.views ? null : (viewed ? this._getViewedContent(post.specific, viewed, changeEvent) : this._getUnviewedContent(post.specific, viewed, changeEvent))}

                    <FeedItemFooter style={styles.footerStyle.cardFooterRow} key={'footer'} comments={post.comments}
                                    footerText={post.comments.comments.length + ' ' + I18n.t('COMMENTS')}/>

                </Card>
            </View>
        )
    }

    _calculateEventTime(eventStart, eventEnd) {

        const startTime = Moment(eventStart).format('HH:mm');
        const endTime = Moment(eventEnd).format('HH:mm');

        const eventDate = Moment(eventStart).format('D MMM');

        return `${eventDate}, ${startTime}-${endTime}`;
    }

    _getStats(post) {

        return (
            <ViewsStats key={'admin/creator'} post_type={post.post_type} value={post.specific.stats.attending_count}
                        viewed={post.views.total} total={post.recipients.total}/>
        )

    }

    _getUnviewedContent(specific, viewed, changeEvent) {


        return (
            <Card.Media height={90}
                        image={<Image source={require('./img/backgroundGreen.png')} />}>

                <Text style={[styles.fontStyle.boldFont, styles.eventStyle.unviewedText]}>{I18n.t('EVENT_HINT')}</Text>

                <EventSelector viewed={viewed} answer={specific.rsvp}
                               description={specific.question}
                               clickHanlder={(answer)=> {changeEvent(answer)} }/>
            </Card.Media>
        )

    }

    _getViewedContent(specific, viewed, changeEvent) {


        return (
            <EventSelector viewed={viewed} answer={specific.rsvp}
                           description={specific.question}
                           clickHanlder={(answer)=> {changeEvent(answer) } }/>
        )

    }

}

EventItem.propTypes = {
    post: PropTypes.object,
    viewed: PropTypes.bool,
    changeEvent: PropTypes.func
}

export default EventItem;
