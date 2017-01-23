// @flow

import React, {Component} from 'react';
import EventSelector from './EventSelector'
import styles from '../../styles/feedStyle'
import FeedItemHeader from '../FeedItemHeader'
import FeedItemFooter from '../FeedItemFooter'
import ViewsStats     from '../ViewsStats'
import {Card} from 'react-native-material-design';

import {
    View,
    Text,
    Image
} from 'react-native';


const postIcons = {
    event: require(`./../img/event.png`),
    emailblast: require(`./../img/emailblast.png`),
    poll: require(`./../img/poll.png`),
    quickpost: require(`./../img/quickpost.png`),
};


class EventItem extends Component {


    render() {

        let {data, changeEvent} = this.props;

        let {stats, body} = this.getContent(data.viewed, data, changeEvent);

        return (
            <View>
                <Card style={styles.card}>

                    <Card.Body>

                        <FeedItemHeader data={data} onPress={this.props.onFeedPressed}/>

                        <Text style={styles.eventTimeText}>{data.specific.location}</Text>

                        <Text style={styles.content}>{data.specific.location}</Text>

                        {stats}

                    </Card.Body>

                    {body}

                    <FeedItemFooter key={'footer'} comments={data.comments}
                                    footerText={data.specific.stats.attending_count + ' going' + ' - ' +
                                     data.comments.comments.length + ' comments'}/>

                </Card>
            </View>
        )
    }

    getContent(viewed, data, changeEvent) {

        let stats = [];
        let body = []

        //There are 3 different options: the user is an admin/created the post, the user is a member that didn't
        //saw the post or that the user is a member that already saw the post
        //For each option we need to render a different body to the view

        if (!data.views) { //User is admin/creator

            stats.push(
                <ViewsStats key={'admin/creator'} viewed={data.views.total} total={data.recipients.total}/>
            )
            body = null;
        }
        else {

            stats = null;

            if (data.viewed) {//User is memeber that see the feed for first time

                body.push(
                    <EventSelector viewed={viewed} key={'normal'} data={data.specific.answers}
                                   description={data.specific.question}
                                   clickHanlder={(index)=> {changeEvent(data.specific, data.specific.id,index) } }/>
                )
            }
            else {  //User is memeber that see the feed for first time

                body.push(<Card.Media key={'media'} height={90}
                                      image={<Image source={require('./img/backgroundGreen.png')} />}>

                        <Text style={styles.unreadButtonText}>Please make your choice</Text>


                        <EventSelector viewed={viewed} key={'normal'} data={data.specific.answers}
                                       description={data.specific.question}
                                       clickHanlder={(index)=> {changeEvent(data.specific, data.specific.id,index) } }/>
                    </Card.Media>
                )
            }

        }

        return {stats, body};

    }
}

export default EventItem;
