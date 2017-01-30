import React, {Component} from 'react';
import {
StyleSheet,
Text,
ScrollView,
} from 'react-native';

import WebViewAutoHeight from '../../WebViewAutoHeight';

class PollItemDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const content = this.props.content;
        const cssStyle = "@font-face{font-family:BrixSansMedium;src:local('BrixSansMedium'),url('Brix Sans Medium.ttf') format('truetype')}@font-face{font-family:BrixSansRegular;src:local('BrixSansRegular'),url('Brix Sans Regular.ttf') format('truetype')}@font-face{font-family:BrixSansBold;src:local('BrixSansBold'),url('Brix Sans Bold.ttf') format('truetype')}body,html{width:100%;height:100%;margin:0;padding:0}body{color:#0F1C44;font-family:-apple-system;font-family:BrixSansRegular;font-size:18px;-webkit-font-smoothing:antialiased;margin:0;overflow:hidden}*{-webkit-margin-before:0;-webkit-margin-after:0;-webkit-margin-start:0;-webkit-margin-end:0;user-select:none}.redactor-editor{color:#0F1C44;font-weight:500;background:0 0;font-family:-apple-system;font-family:BrixSansRegular;font-size:18px;margin:0 28px;max-width:100%}.redactor-editor code,.redactor-editor pre{font-size:16px;font-family:Menlo,Monaco,monospace,sans-serif!important}.redactor-editor strong{font-family:BrixSansBold;font-weight:700}.redactor-editor br{line-height:0}.redactor-editor blockquote,.redactor-editor div,.redactor-editor dl,.redactor-editor ol,.redactor-editor p,.redactor-editor pre,.redactor-editor table,.redactor-editor ul{font-size:18px;line-height:30px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;position:relative}.redactor-editor blockquote{line-height:28px}.redactor-editor embed,.redactor-editor img,.redactor-editor object,.redactor-editor video{object-fit:contain;max-width:100%;min-height:auto;text-decoration:none;border:0}.redactor-editor amp-img,.redactor-editor img{height:auto!important;max-width:100%}.redactor-editor amp-img{border:1px solid #CFD2DA;box-shadow:0 2px 4px 0 #F6F6F6;margin:0 auto 15px}.redactor-editor blockquote,.redactor-editor div,.redactor-editor dl,.redactor-editor figure,.redactor-editor ol,.redactor-editor p,.redactor-editor pre,.redactor-editor table,.redactor-editor ul{margin:0;margin-bottom:15px;border:none;background:0 0;box-shadow:none;max-width:100%;width:100%;display:block}.redactor-editor hr,.redactor-editor iframe,.redactor-editor object{margin-bottom:15px}.redactor-editor iframe{width:auto}.redactor-editor blockquote{margin-left:1.6em!important;padding-left:0;color:#777;font-style:italic}.redactor-editor blockquote:after,.redactor-editor blockquote:before{content:''}.redactor-editor ul{list-style:none;margin:0 0 15px 0;padding:0}.redactor-editor ul li{font-size:18px;line-height:36px}.redactor-editor ul li:before{content:\"•\";margin-right:15px;color:#1CC8BC;font-size:18px}.redactor-editor ol{margin:0 0 15px 0;padding:0;-webkit-padding-start:1.25em}.redactor-editor ol ol,.redactor-editor ol ul,.redactor-editor ul ol,.redactor-editor ul ul{margin:2px;padding:0;padding-left:2em;border:none}.redactor-editor ol ol li{list-style-type:lower-alpha}.redactor-editor ol ol ol li{list-style-type:lower-roman}.redactor-editor dl dt{font-weight:700}.redactor-editor dd{margin-left:1em}.redactor-editor table{border-collapse:collapse;font-size:1em;width:100%;border:0!important}.redactor-editor table td,.redactor-editor table th{padding:5px;border:1px solid #ddd;vertical-align:top}.redactor-editor table th,.redactor-editor table thead td{font-weight:700;border-bottom-color:#888}.redactor-editor code{background-color:#d8d7d7}.redactor-editor pre{overflow:auto;padding:1em;border:1px solid #ddd;border-radius:3px;background:#f8f8f8;white-space:pre;font-size:90%}.redactor-editor hr{display:block;height:1px;border:0;border-top:1px solid #ccc}.redactor-editor h1,.redactor-editor h2,.redactor-editor h3,.redactor-editor h4,.redactor-editor h5,.redactor-editor h6{font-weight:400;padding:0;background:0 0;text-rendering:optimizeLegibility;margin:0 0 .5em 0}.redactor-editor h1{font-size:30px;font-family:BrixSansMedium;line-height:70px}.redactor-editor h2,.redactor-editor h3,.redactor-editor h5,.redactor-editor h6{font-size:20px;font-family:BrixSansMedium}.redactor-editor a{color:#00beb7!important}";
        let htmlTemplate = "<!doctype html><html amp><head><meta charset=\"utf-8\"><script async src=\"https://cdn.ampproject.org/v0.js\"></script><meta name=\"viewport\" content=\"width=device-width, maximum-scale=1.0; user-scalable=no\"><style>@viewpost{zoom:1.0;width:device-width;}" + cssStyle + "</style><style amp-custom>body {background-color: white;}amp-img.grey-placeholder {background-color: grey;}</style><style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript></head><body><div class=\"redactor-editor\">" + content + "</div></body></html>"

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

export default PollItemDetail;