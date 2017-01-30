// @flow

import  {connect} from 'react-redux';
import SMSItem from './SMSItem'

const mapStateToProps = (state, ownProps) => {

    return {
        post: ownProps.data,
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

        }
    }
};

SMSContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SMSItem);

export default SMSContainer;