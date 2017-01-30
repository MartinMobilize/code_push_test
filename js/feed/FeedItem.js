import React, { Component } from 'react';
import {Card} from 'react-native-material-design';
import {
Text,
View
} from 'react-native';

import FeedItemHeader from './FeedItemHeader'
import FeedStyles from './FeedStyle'

const FeedItem = ({
    data
}) => (
    <View>
        <Card style={FeedStyles.card}>
            <Card.Body>
                <FeedItemHeader creatorImage={data.user.avatar.image} creatorName={data.creator.name}
                                createdAt={data.created_at} postType={data.post_type} postTitle={data.title}
                                onPress={onFeedPressed}/>
        <View style={FeedStyles.row}>
            <Text style={FeedStyles.postStatsStyle}>{data.comments.total} VIEWS</Text>
        </View>
        </Card.Body>
        </Card>

    </View>
)

export default FeedItem;