// @flow

import { connect } from 'react-redux';
import { fetchPosts } from '../reducers/posts/actions' 
import Feed from './Feed'
import moment from 'moment'
import FeedService from '../services/FeedService'
import {
  ListView
} from 'react-native';

const mapStateToProps = (state, ownProps) => {
  const groupId = ownProps.groupId,
    group = state.groups[groupId];

  const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.id !== r2.id
  });

  let dataSource; 

  if (group) {
    const posts = group.posts.map((postId) => {
      const post = state.posts[postId];
      return Object.assign({},post, {
        creator: state.users[post.user.id],
        created_at: moment(post.created_at, 'X').startOf('hour').fromNow()
      });
    })
      
    dataSource = ds.cloneWithRows(posts)
  }

  return {
        dataSource: dataSource,
        group: group,
        navigator:ownProps.navigator,
        users: state.users
    }
  
}

const mapDispatchToProps = (dispatch, ownProps) => {

    let navigator = ownProps.navigator;
  return {
    canLoadMoreContent: () => {
        return false;
    },
    loadMoreContentAsync: (group) => {
        dispatch(fetchPosts('groups', ownProps.groupId, group.posts.length, 10));
    }
  }
}

FeedContainer = connect(
    mapStateToProps,//
    mapDispatchToProps
)(Feed);

export default FeedContainer;