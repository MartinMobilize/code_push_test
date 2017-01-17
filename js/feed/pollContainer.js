import {connect} from 'react-redux';
import {fetchPosts, changePoll} from '../reducers/posts/actions'
import PollItem from './PollItem'
import moment from 'moment'
import FeedService from '../services/FeedService'
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

    var postId = ownProps.postId;

    return {
        canLoadMoreContent: () => {
            return false;
        },
        changePoll: (specificPoll, specificId, index, optionId) => {
            dispatch(changePoll(specificPoll, postId, specificId, index, optionId));
        },
        loadMoreContentAsync: (group) => {
            dispatch(fetchPosts('groups', ownProps.groupId, group.posts.length, 10));
        }
    }
}

PollContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PollItem);

export default PollContainer;