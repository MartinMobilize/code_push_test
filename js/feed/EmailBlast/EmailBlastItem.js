import React, {Component} from 'react';
import FeedItemHeader from '../FeedItemHeader'
import FeedItemFooter from '../FeedItemFooter'
import EmailBlastBody from './EmailBlastBody'
import ViewsStats from '../ViewsStats'
import styles from '../../styles/feedStyle'
import {Card} from 'react-native-material-design';
import {View} from 'react-native';


class EmailBlastItem extends Component {


    render() {

        let {data, onFeedPressed} = this.props;

        let blastBody = [];
        if (data.views){
            blastBody.push(
                <ViewsStats key={'admin/creator'} viewed={data.views.total} total={data.recipients.total}/>
            )
        }
        else{
            blastBody.push(
                <EmailBlastBody  data={data.specific}/>
            )
        }


        return(
        <View>
            <Card style={styles.card}>
                <Card.Body>

                    <FeedItemHeader data={data} onPress={onFeedPressed}/>

                    {blastBody}

                    <FeedItemFooter comments={data.comments} footerText={data.comments.comments.length + ' comments'}/>

                </Card.Body>
            </Card>

        </View>
        )
    }
}


export default EmailBlastItem;