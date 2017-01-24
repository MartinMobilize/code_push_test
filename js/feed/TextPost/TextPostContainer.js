// @flow

import  {connect} from 'react-redux';
import TextPostItem from './TextPostItem'

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

        }
    }
};

TextPostContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextPostItem);

export default TextPostContainer;