// @flow

import  {connect} from 'react-redux';
import {fetchPosts, changePoll} from '../../reducers/posts/actions'
import PollItem from './PollItem'
import moment from 'moment'
import FeedService from '../../services/FeedService'
import {
    ListView
} from 'react-native';

const mapStateToProps = (state, ownProps) => {

    return {
        postid: ownProps.data.id,
        data: ownProps.data,
        id: 1
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {

    let {postId, navigator, data} = ownProps;

    return {

        changePoll: (specificPoll, specificId, index, optionId) => {
            dispatch(changePoll(specificPoll, postId, specificId, index, optionId));
        },

        onFeedPressed: () => {
            let htmlContent = data.specific.question_html;

            navigator.push({
                title: data.post_type,
                screen: "app.PollItemDetail",
                animated:false,
                passProps: {content:htmlContent}
            });

        }
    }
}

PollContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PollItem);

export default PollContainer;