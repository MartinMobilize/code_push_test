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

        let {data, changePoll, postid} = this.props;

        let {stats, body} = this.getContent(data.viewed, data, changePoll);

        return (
            <View>
                <Card style={styles.card}>

                    <Card.Body>

                        <FeedItemHeader data={data} onPress={this.props.onFeedPressed}/>
                        <Text style={styles.content} numberOfLines={1}>{data.specific.question}</Text>


                        {stats}

                    </Card.Body>

                    {body}

                    <FeedItemFooter key={'footer'} comments={data.comments}
                                    footerText={data.specific.votes_count + ' votes' + ' - ' +
                                         data.comments.comments.length + ' comments'}/>

                </Card>
            </View>
        )
    }

    getContent(viewed, data, changePoll) {

        let stats = [];
        let body = []

        //There are 3 different options: the user is an admin/created the post, the user is a member that didn't
        //saw the post or that the user is a member that already saw the post
        //For each option we need to render a different body to the view

        if (data.views) {  //User is admin/creator
            stats.push(
                <ViewsStats key={'admin/creator'} viewed={data.views.total} total={data.recipients.total}/>
            )
            body = null;
        }
        else {
            stats = null;

            if (data.viewed) { //User is member that already voted

                body.push(<Poll key={'normal'} data={data.specific.answers} answers={data.specific.my_answer}
                                viewed={data.viewed}
                                clickHanlder={ (index, id)=> {changePoll(data.specific, data.specific.id,index, id) } }/>
                )

            }
            else {

                body.push(<Card.Media key={'media'} height={90}
                                      image={<Image source={require('./img/backgroundGreen.png')} />}>

                    <Text style={styles.unreadButtonText}>Please make your choice</Text>

                        <Poll key={'normal'} data={data.specific.answers} answers={data.specific.my_answer}
                              viewed={data.viewed}
                              clickHanlder={ (index, id)=> {changePoll(data.specific, data.specific.id,index, id) } }/>
                    </Card.Media>
                )
            }

        }

        return {stats, body};

    }
}

export default PollItem;
