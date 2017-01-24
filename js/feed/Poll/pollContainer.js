// @flow

import  {connect} from 'react-redux';
import {fetchPosts, changePoll} from '../../reducers/posts/actions'
import PollItem from './PollItem'

const mapStateToProps = (state, ownProps) => {

    return {
        post: ownProps.data,
        viewed:ownProps.data.viewed
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