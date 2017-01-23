// @flow

import  {connect} from 'react-redux';
import EventItem from './EventItem'
import {changeEvent} from '../../reducers/posts/actions'


const mapStateToProps = (state, ownProps) => {

    return {
        data: ownProps.data,
    }

};

const mapDispatchToProps = (dispatch, ownProps) => {

    let {navigator, data} = ownProps;

    return {
        onFeedPressed: () => {
            let htmlContent = data.specific.html;

            navigator.push({
                title: "Email Blast",
                screen: "app.EmailBlastItemDetail",
                animated: false,
                passProps: {content: htmlContent}
    });

        },
        changeEvent: (answer) => {
            dispatch(changeEvent(data.id, data.specific.id, answer));
        }
    }
};

EventContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventItem);

export default EventContainer;