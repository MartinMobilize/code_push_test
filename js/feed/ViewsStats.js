/**
 * Created by martin on 18/01/2017.
 */
import React, {Component} from 'react';
import {
Text,
Image,
View,
} from 'react-native';

import ViewOnlyButton from '../components/buttons/ViewOnlyButton'

import FeedStyles from './FeedStyle'
import ViewStatsStyles from './ViewStatsStyle'
import FontStyles from '../styles/FontStyle'

const styles = {
    fontStyle:FontStyles,
    feedStyle:FeedStyles,
    statsStyle:ViewStatsStyles
}


const img = {
    event: require('./img/going.png'),
    poll: require('./img/votes.png'),
   // smspost: require('./img/sms.png'),
   // quickpost: require('./img/quickpost.png'),
   // emailblast: require('./img/emailblast.png')
}


class ViewsStats extends Component {
    render() {

        let {post_type, value, viewed, total} = this.props;

        return (
            <View style={styles.statsStyle.statsRow}>

                <ViewOnlyButton text={viewed + '/' + total} image={require('./img/eye.png')}/>

                {img[post_type] ? <ViewOnlyButton text={value} image={img[post_type]}/> : null}

            </View>
        )
    }
}

ViewsStats.propTypes = {
    post_type:React.PropTypes.string,
    value:React.PropTypes.number,
    viewed:React.PropTypes.number,
    total:React.PropTypes.number
}

export default ViewsStats;
