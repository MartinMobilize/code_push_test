import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';



const FeedDetail = ({
    data
}) => (
    <View>
        <WebView
            style={{
            flex: 1,
          }}
            ref={"WEBVIEW_REF"}
            source={{html: "<p>Hey Champs!</p><p>We know you have a mix of announcement and discussion groups on Mobilize. At the core of it, you use Mobilize to<strong> share your updates, organize your members </strong>and<strong> manage your daily operations</strong>. One thing I know you all strive for is up-to-date info for your members so you can send targeted, relevant messaging to the right people at the right time. The post below is to help you collect that info. Send this to encourage your members to fill out their profiles so you can keep track of them and send them the critical info they need. </p><p style=\"margin-left: 40px;\"><strong>PRO TIP: double check your registration form before you send this to make sure you have all the fields you want. :)</strong><br></p><h5><br></h5><h5>TEMPLATE 2: FILL OUT YOUR PROFILE</h5><p><strong>SUBJECT:</strong> We want to learn about you!</p><p>Hey <em>[network name]</em> Family! We know that getting to 'zero inbox' is everyone's goal so to help you get there we want to send you only the most relevant and interesting updates, announcements and articles. But <em>we need your help</em> to do that. </p><p><strong>Please login to Mobilize and fill out your profile</strong>. The more you share with us, the more we can make sure you don't miss out on the info you need to succeed. <strong>Click on the visit group button</strong> at the bottom of this message to fill out your profile. <br></p><p>-You &amp; the <em>[network name]</em> team<br></p>"}}
            scalesPageToFit={true}
        />
    </View>
)

export default FeedDetail;

const styles = StyleSheet.create({
    card:{
      backgroundColor:'#FFFFFF'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        paddingRight: 20
    },
    leftCol: {
        width: 80,
        alignItems: 'center',
        flexDirection: 'column',
    },
    rightCol: {
        flex:1
    },
    icon: {
        marginTop: 5,
        width: 25,
        height: 28
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    postTopLign: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        color: '#9FA4B5',
        fontSize: 16,
        textAlign: 'left'
    },
    time: {
        marginTop: 2,
        color: '#9FA4B5',
        fontSize: 14,
        textAlign: 'right'
    },
    title: {
        fontSize: 18,
        color: '#0F1C44'
    },
    content: {
        marginTop: 20,
        color: '#3F496B',
        fontSize: 16
    },
    postStatsStyle: {
        marginTop: 10,
        color: '#B8C0C9',
                justifyContent: 'center',
        fontSize: 13
    },
    pollItem:{
        marginLeft:10
    },
    pollScroll:{
        height:30
    }

});