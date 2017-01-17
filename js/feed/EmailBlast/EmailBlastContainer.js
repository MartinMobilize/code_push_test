// @flow

import  {connect} from 'react-redux';
import EmailBlastItem from './EmailBlastItem'

const mapStateToProps = (state, ownProps) => {

    return {
        data: ownProps.data,
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {

    var {navigator, data} = ownProps;

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
}

EmailBlastContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailBlastItem);

export default EmailBlastContainer;