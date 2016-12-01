import { connect } from 'react-redux';
import GroupList from './GroupList';

const mapStateToProps = (state) => {
  return {
    groups: state.groups
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGroupClick: (id) => {
    //   dispatch(action)
    }
  }
}

const GroupListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupList);

export default GroupListContainer;