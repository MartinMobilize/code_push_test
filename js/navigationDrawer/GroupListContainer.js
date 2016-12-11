import { connect } from 'react-redux';
import GroupList from './GroupList';

const mapStateToProps = (state) => {
  return {
    groups: state.groups,
    network: state.network
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGroupPress: (group) => {
      ownProps.navigator.toggleDrawer({
        side: 'left',
        animated: true,
        to: 'closed'
      });

      ownProps.navigator.handleDeepLink({
        link: `groups/${group.id}/activity`
      });
    }
  }
}

const GroupListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupList);

export default GroupListContainer;