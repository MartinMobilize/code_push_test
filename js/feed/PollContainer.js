import { connect } from 'react-redux';
import { fetchPosts, changePoll} from '../reducers/posts/actions' 
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
        id:1
    }
  
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    canLoadMoreContent: () => {
        return false;
    },
    changePoll:(postId, specificId,index, optionId) => {
      dispatch(changePoll(postId, specificId, index, optionId));
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