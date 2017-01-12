import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
    WebView

} from 'react-native';

class FilesScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { canGoBack: false };
    }

    render() {

        return (
            <View >
              <TouchableOpacity
                  disabled={!this.state.canGoBack}
                  onPress={this.onBack.bind(this)}
              >
                <Text style={this.state.canGoBack ? styles.topbarText : styles.topbarTextDisabled}>Go Back</Text>
              </TouchableOpacity>

              <WebView
                  style={{
            height: 300,
          }}
                  ref={"WEBVIEW_REF"}
                  onNavigationStateChange=
                      {this.onNavigationStateChange.bind(this)}
                  source={{html: "<p>Hey Champs!</p><p>We know you have a mix of announcement and discussion groups on Mobilize. At the core of it, you use Mobilize to<strong> share your updates, organize your members </strong>and<strong> manage your daily operations</strong>. One thing I know you all strive for is up-to-date info for your members so you can send targeted, relevant messaging to the right people at the right time. The post below is to help you collect that info. Send this to encourage your members to fill out their profiles so you can keep track of them and send them the critical info they need. </p><p style=\"margin-left: 40px;\"><strong>PRO TIP: double check your registration form before you send this to make sure you have all the fields you want. :)</strong><br></p><h5><br></h5><h5>TEMPLATE 2: FILL OUT YOUR PROFILE</h5><p><strong>SUBJECT:</strong> We want to learn about you!</p><p>Hey <em>[network name]</em> Family! We know that getting to 'zero inbox' is everyone's goal so to help you get there we want to send you only the most relevant and interesting updates, announcements and articles. But <em>we need your help</em> to do that. </p><p><strong>Please login to Mobilize and fill out your profile</strong>. The more you share with us, the more we can make sure you don't miss out on the info you need to succeed. <strong>Click on the visit group button</strong> at the bottom of this message to fill out your profile. <br></p><p>-You &amp; the <em>[network name]</em> team<br></p>"}}
                  scalesPageToFit={true}
              />
            </View>
        )
    }
    onNavigationStateChange(navState) {
        this.setState({
            canGoBack: navState.canGoBack
        });
    }
    onBack() {
        this.refs["WEBVIEW_REF"].goBack();
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

export default FilesScreen;