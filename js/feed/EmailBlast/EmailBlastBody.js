/**
 * Created by martin on 19/01/2017.
 */
import React, {Component} from 'react';
import styles from '../../styles/feedStyle'

import {Text} from 'react-native';



const EmailBlastBody = ({
    data
}) => (
    <Text style={styles.content} numberOfLines={1}>{data.text}</Text>

)

export default EmailBlastBody;