/**
 * Created by martin on 18/01/2017.
 */
import React, {Component} from 'react';
import styles from '../styles/feedStyle'
import Icon from 'react-native-vector-icons/Ionicons';

import {
    Text,
    Image,
    View,
} from 'react-native';


const img = {
    event: require('./img/going.png'),
    poll: require('./img/votes.png'),
   // smspost: require('./img/sms.png'),
   // quickpost: require('./img/quickpost.png'),
   // emailblast: require('./img/emailblast.png')
}

const ViewsStats = ({
    post_type, value, viewed, total
}) => (
    <View style={styles.statsRow}>
        <View style={styles.button_row}>
            <Image style={styles.statsIcon} source={require('./img/eye.png')}/>
            <Text style={styles.statsText}>{viewed}/{total}</Text>
        </View>
        {img[post_type] ? <View style={styles.button_row}>
                                <Image style={styles.statsIcon} source={img[post_type]}/>
                                <Text style={styles.statsText}>{value}</Text>
                            </View> : null}

    </View>

);

export default ViewsStats;
