import { connect } from 'react-redux'; 
import GroupMembersList from './GroupMembersList'
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
    const members = group.members.map((memberId) => {
      return state.groupMembers[memberId];
    })
      
    dataSource = ds.cloneWithRows(members)
  }

  return {
        dataSource: dataSource,
        group: group
    }
  
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    canLoadMoreContent: () => {
        console.log('canLoadMoreContent');
        return true;
    },
    loadMoreContentAsync: () => {
        console.log('loadMoreContentAsync');
    }
  }
}

GroupMembersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupMembersList);

export default GroupMembersContainer;