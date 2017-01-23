import React, {Component} from 'react';
import WebViewAutoHeight from '../../WebViewAutoHeight';
import {
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    View,
    WebView

} from 'react-native';

class EmailBlastItemDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const content = this.props.content;
        let cssStyle = ".redactor-editor{color:#0f1c44;line-height:1.42857143;font-weight:400;background:0 0;font-family:system,-apple-system,BlinkMacSystemFont,Helvetica Neue,Lucida Grande;font-size:18px}.redactor-editor code,.redactor-editor pre{font-family:Menlo,Monaco,monospace,sans-serif!important;cursor:text}.redactor-editor blockquote,.redactor-editor dl,.redactor-editor ol,.redactor-editor p,.redactor-editor pre,.redactor-editor table,.redactor-editor ul{font-size:18px;line-height:1.6em}.redactor-editor amp-img,.redactor-editor embed,.redactor-editor img,.redactor-editor object,.redactor-editor video{max-width:100%;width:auto}.redactor-editor amp-img,.redactor-editor img,.redactor-editor video{height:auto}.redactor-editor blockquote,.redactor-editor div:not(.popover,.popover-content,.link-popover),.redactor-editor dl,.redactor-editor figure,.redactor-editor ol,.redactor-editor p,.redactor-editor pre,.redactor-editor table,.redactor-editor ul{margin:0;margin-bottom:15px;border:none;background:0 0;box-shadow:none}.redactor-editor hr,.redactor-editor iframe,.redactor-editor object{margin-bottom:15px}.redactor-editor iframe{width:auto}.redactor-editor blockquote{margin-left:1.6em!important;padding-left:0;color:#777;font-style:italic}.redactor-editor blockquote:after,.redactor-editor blockquote:before{content:''}.redactor-editor ol,.redactor-editor ul{padding-left:2em}.redactor-editor ol ol,.redactor-editor ol ul,.redactor-editor ul ol,.redactor-editor ul ul{margin:2px;padding:0;padding-left:2em;border:none}.redactor-editor ol ol li{list-style-type:lower-alpha}.redactor-editor ol ol ol li{list-style-type:lower-roman}.redactor-editor dl dt{font-weight:700}.redactor-editor dd{margin-left:1em}.redactor-editor table{border-collapse:collapse;font-size:1em;width:100%}.redactor-editor table td,.redactor-editor table th{padding:5px;border:1px solid #ddd;vertical-align:top}.redactor-editor table th,.redactor-editor table thead td{font-weight:700;border-bottom-color:#888}.redactor-editor code{background-color:#d8d7d7}.redactor-editor pre{overflow:auto;padding:1em;border:1px solid #ddd;border-radius:3px;background:#f8f8f8;white-space:pre;font-size:90%}.redactor-editor hr{display:block;height:1px;border:0;border-top:1px solid #ccc}.redactor-editor h1,.redactor-editor h2,.redactor-editor h3,.redactor-editor h4,.redactor-editor h5,.redactor-editor h6{font-weight:700;color:#000;padding:0;background:0 0;text-rendering:optimizeLegibility;margin:0 0 .5em 0}.redactor-editor h1,.redactor-editor h2,.redactor-editor h3,.redactor-editor h4{line-height:1.3}.redactor-editor h1{font-size:36px}.redactor-editor h2{font-size:24px;margin-bottom:.7em}.redactor-editor h3{font-size:21px}.redactor-editor h4{font-size:18px}.redactor-editor h5{font-size:16px}.redactor-editor h6{font-size:12px;text-transform:uppercase}.redactor-editor a{color:#00beb7!important}.redactor-editor h1,.redactor-editor h2,.redactor-editor h3,.redactor-editor h4,.redactor-editor h5,.redactor-editor h6{color:#4a4a4a}";
        let htmlTemplate = "<!doctype html><html amp><head><meta charset=\"utf-8\"><script async src=\"https://cdn.ampproject.org/v0.js\"></script><meta name=\"viewport\" content=\"width=device-width, maximum-scale=1.0; user-scalable=no\"><style>@viewpost{zoom:1.0;width:device-width;}" + cssStyle + "</style><style amp-custom>body {background-color: white;}amp-img.grey-placeholder {background-color: grey;}</style><style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript></head><body><div class=\"redactor-editor\" style=\"width:100%;\">" + content + "</div></body></html>";

        return (

            <ScrollView>

                <Text>Martin header</Text>

                <WebViewAutoHeight source={{html:htmlTemplate}}/>

                <Text>Martin footer</Text>

            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bb0000',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
    topbar: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topbarTextDisabled: {
        color: 'gray'
    }

});

export default EmailBlastItemDetail;