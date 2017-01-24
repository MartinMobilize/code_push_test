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


const ViewsStats = ({
    viewed, total
}) => (
    <View style={styles.row}>
        <View style={styles.button_row}>
            <Image style={styles.statsIcon} source={require('./img/eye.png')}/>
            <Text style={styles.statsText}>{viewed}/{total}</Text>
        </View>
    </View>

);

export default ViewsStats;
