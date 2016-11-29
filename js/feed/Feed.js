/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';``
import FeedItem from './FeedItem'

import {
  ListView,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

const feed = {
    "posts":[
      {
        "id":185,
        "notification_type":"specific",
        "postable_type":"TextPost",
        "post_type":"quickpost",
        "updated_at":"2016-11-07T04:28:19+00:00",
        "last_reminder_date":null,
        "email_comments_to_all":true,
        "public_comments":true,
        "widgets":[
        ],
        "notify_by_email":false,
        "user_id":294,
        "remind_visible":false,
        "can_delete":false,
        "can_view_members":true,
        "can_comment":true,
        "postable_type_plur":"text_posts",
        "created_at":"2016-11-07T04:28:19+00:00",
        "title":"Welcome to your new communication center",
        "content": "Hey there, my name is Nina and i'm the customer success manager at Mobilize",
        "creator":294,
        "user":294,
        "recipients":{
          "total":2
        },
        "specific":{
          "text":"<p>Hey there,</p><p><br></p><p>My name is Nina and I'm the Customer Success Manager at Mobilize. I'm so happy to have you on board! We understand how group communication can be messy sometimes, so we created this communication center to make your life easier :)</p><p><br></p><h4><img class=\"fr-dib fr-draggable\" src=\"https://media.giphy.com/media/l0MYC0LajbaPoEADu/giphy.gif\" style=\"width: 300px;\"></h4><h4><br></h4><h4><strong>Check out the example posts I created for you below, and discover cool ways to communicate like a pro!</strong></h4><p><br></p><p>Cheers,</p><p>Nina</p><p><br></p>",
          "id":91,
          "document":null,
          "group_id":45,
          "post_id":185,
          "creator":{
            "name":"Nina Wilkinson",
            "id":294
          }
        },
        "lite":true,
        "seen_count":1,
        "has_clicks":false,
        "comments":{
           "comments":[],
           "total":0
        },
        "dialogs":{
          "dialogs":[
          ],
          "total":0
        }
      },
      {
        "id":184,
        "notification_type":"specific",
        "postable_type":"Poll",
        "post_type":"poll",
        "updated_at":"2016-11-07T04:28:19+00:00",
        "last_reminder_date":null,
        "email_comments_to_all":false,
        "public_comments":true,
        "widgets":[
        ],
        "notify_by_email":false,
        "user_id":294,
        "remind_visible":false,
        "can_delete":false,
        "can_view_members":true,
        "can_comment":true,
        "postable_type_plur":"polls",
        "created_at":"2016-11-07T04:28:19+00:00",
        "title":"Example #1: Drive them to take action",
        "content": "How would you like to get involved? Yes not maybe.",
        "creator":294,
        "user":294,
        "recipients":{
          "total":2
        },
        "specific":{
          "created_at":"2016-11-07T04:28:19+00:00",
          "poll_type":"multi",
          "question":"<p><h4>How would you like to get involved?</h4></p>",
          "id":31,
          "group_id":45,
          "creator":294,
          "post_id":184,
          "my_answer":[
          ],
          "votes_count":0,
          "no_answer":2,
          "did_not_vote":[
            293,
            294
          ],
          "answers":[
            {
              "id":117,
              "text":"Organize events",
              "votes_count":0,
              "votes":[
              ]
            },
            {
              "id":118,
              "text":"Contribute content",
              "votes_count":0,
              "votes":[
              ]
            },
            {
              "id":119,
              "text":"Be a speaker",
              "votes_count":0,
              "votes":[
              ]
            },
            {
              "id":120,
              "text":"Recruit people",
              "votes_count":0,
              "votes":[
              ]
            }
          ]
        },
        "lite":true,
        "seen_count":1,
        "has_clicks":false,
        "comments":[
        ],
        "comments_total":0,
        "dialogs":{
          "dialogs":[
          ],
          "total":0
        }
      },
      {
        "id":183,
        "notification_type":"specific",
        "postable_type":"Event",
        "post_type":"event",
        "updated_at":"2016-11-07T04:28:19+00:00",
        "last_reminder_date":null,
        "email_comments_to_all":false,
        "public_comments":true,
        "widgets":[
        ],
        "notify_by_email":false,
        "user_id":294,
        "remind_visible":false,
        "can_delete":false,
        "can_view_members":true,
        "can_comment":true,
        "postable_type_plur":"events",
        "created_at":"2016-11-07T04:28:19+00:00",
        "title":"Example #2: Organize events that bring everyone together",
        "content": "Learn from the pros. We're so excited to host all of you at our kickoff",
        "creator":294,
        "user":294,
        "recipients":{
          "total":2
        },
        "specific":{
          "object_type":"event",
          "id":63,
          "timezone_name":"PST",
          "details":"<h4>Learn from the pros</h4><p>We're so excited to host all of you at our kickoff, so you can discover all the tips & tricks from our mentors on how to become a pro! Please come prepared with your questions.</p><p><br></p><p><br></p>",
          "image":{
            "image":{
              "url":"/assets/mob_default.jpg",
              "thumb":{
                "url":"/assets/mob_default.jpg"
              },
              "small_thumb":{
                "url":"/assets/mob_default.jpg"
              },
              "mini_thumb":{
                "url":"/assets/mob_default.jpg"
              }
            }
          },
          "group_id":45,
          "full_location":"---\naddress_components:\n- long_name: San Francisco\n short_name: SF\n types:\n - locality\n - political\n- long_name: San Francisco County\n short_name: San Francisco County\n types:\n - administrative_area_level_2\n - political\n- long_name: California\n short_name: CA\n types:\n - administrative_area_level_1\n - political\n- long_name: United States\n short_name: US\n types:\n - country\n - political\nadr_address: <span class=\"locality\">San Francisco</span>, <span class=\"region\">CA</span>,\n <span class=\"country-name\">USA</span>\nformatted_address: San Francisco, CA, USA\ngeometry:\n location:\n lat: 37.7749295\n lng: -122.41941550000001\n viewport:\n south: 37.70339999999999\n west: -122.52699999999999\n north: 37.812\n east: -122.34820000000002\nicon: https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png\nid: 1b9ea3c094d3ac23c9a3afa8cd4d8a41f05de50a\nname: San Francisco\nplace_id: ChIJIQBpAG2ahYAR_6128GcTUEo\nreference: CoQBcwAAAM7iiABFoRUtrYtwv3ZLLXcgTPD3WWkkTnXFBiK5gEU4fjskbbRApXkwrGMgXxPJdZPLi-eskFqGJMUJDDeT9oDmQjzSPQC5-CRYaJ26e0FaUMi-jww8VIgCQbJymvO2fCSAe7MyO8sgJxg2Kcnkf46QMpmd6rE3sCudyP5QYPjTEhAWIXLEU4ZYy_eQnQbgFD3oGhSNSOTPgytUWG5rQLPIJk5die_NTQ\nscope: GOOGLE\ntypes:\n- locality\n- political\nurl: https://maps.google.com/?q=San+Francisco,+CA,+USA&ftid=0x80859a6d00690021:0x4a501367f076adff\nutc_offset: -420\nvicinity: San Francisco\nhtml_attributions: []\n",
          "location":"San Francisco",
          "name":"Example #2: Organize events that bring everyone together",
          "timezone":-8.0,
          "updated_at":"2016-11-07T04:28:19+00:00",
          "created_at":"2016-11-07T04:28:19+00:00",
          "timezone_id":"America/Los_Angeles",
          "post_id":183,
          "start_time":"2016-11-16T20:28:19-08:00",
          "end_time":"2016-11-16T21:28:19-08:00",
          "allowed_posts":[
            "QuickPost",
            "EmailBlast",
            "Poll",
            "FileAttachment"
          ],
          "is_admin":true,
          "last_reminder_date":null,
          "creator":294,
          "rsvp":"no-respond",
          "attending_members":[
            294
          ],
          "answered":[
            294
          ],
          "did_not_respond":[
            293
          ],
          "stats":{
            "no_answer":1,
            "attending_count":1,
            "no_count":0,
            "maybe_count":0,
            "total_count":2
          }
        },
        "lite":true,
        "seen_count":1,
        "has_clicks":false,
        "comments":{
           "comments":[],
           "total":0
        },       
        "dialogs":{
          "dialogs":[
          ],
          "total":0
        }
      },
      {
        "id":182,
        "notification_type":"specific",
        "postable_type":"TextPost",
        "post_type":"emailblast",
        "updated_at":"2016-11-07T04:28:18+00:00",
        "last_reminder_date":null,
        "email_comments_to_all":false,
        "public_comments":false,
        "widgets":[
          {
            "default_text":"there",
            "id":"mob-widget-1",
            "tag_id":"first_name",
            "tag_title":"First Name",
            "tag_type":"text",
            "type":"merge_tags",
            "uuid":"GCZ-HVNEFPIBB-QDMX-HFG"
          },
          {
            "default_text":"*address is missing*",
            "id":"mob-widget-2",
            "tag_i":"design_level2",
            "tag_title":"Address",
            "tag_type":"checkbox",
            "type":"merge_tags",
            "uuid":"P8CAJAFZP-SKDYPYT6OMXQ"
          },
          {
            "bg_color":"#1ABC9C",
            "id":"mob-widget-3",
            "should_redirect_to_url":false,
            "text":"Yes, Thank you!",
            "text_color":"#FFFFFF",
            "type":"custom_button",
            "url":"",
            "uuid":"YETTO0_REKHXTGRSFD_QZG"
          }
        ],
        "notify_by_email":false,
        "user_id":294,
        "remind_visible":false,
        "can_delete":false,
        "can_view_members":true,
        "can_comment":true,
        "postable_type_plur":"text_posts",
        "created_at":"2016-11-07T04:28:18+00:00",
        "title":"Example #3: Communicate with a personal touch",
        "content": "If yes, please click the Yes button belor. If not, please do something else",
        "creator":294,
        "user":294,
        "recipients":{
          "total":2
        },
        "specific":{
          "text":"<p>Hey <iframe id=\"mob-widget-1\" scrolling=\"no\" style=\"vertical-align: middle; border: none\" width=\"81\" height=\"22\"></iframe>,</p><p>Thank you for being such an integral part of our group! You've made a great impact and we would like to send you a small gift to show our appreciation ;)</p><p><img class=\"fr-dib fr-draggable\" src=\"https://media2.giphy.com/media/UyFI8W4ynhfJS/200w.gif\" style=\"width: 200px;\"></p><p><br></p><p>Is this the correct mailing address for you?</p><p><iframe id=\"mob-widget-2\" scrolling=\"no\" style=\"vertical-align: middle; border: none\" width=\"90\" height=\"22\"></iframe></p><p><br>If yes, please click the Yes button below. If not, please reply back with your correct mailing address.<br></p><p><iframe id=\"mob-widget-3\" scrolling=\"no\" style=\"vertical-align: middle; border: none\" width=\"151\" height=\"39\"></iframe><br></p><p><br></p><p><br></p>",
          "id":90,
          "document":null,
          "group_id":45,
          "post_id":182,
          "creator":294
        },
        "lite":true,
        "seen_count":1,
        "has_clicks":true,
        "comments":{
           "comments":[],
           "total":0
        },
        "dialogs":{
          "dialogs":[
          ],
          "total":0
        }
      }
    ],
    "stats":{},
    "users":[
      {
        "id":294,
        "name":"Nina Wilkinson",
        "avatar":{
          "image":"https://s3.amazonaws.com/leaderz_development/uploads/user/avatar/4/36ca03d3-4997-48e8-8b78-5d56e1ab0f7e.jpg",
          "thumb":"https://s3.amazonaws.com/leaderz_development/uploads/user/avatar/4/thumb_36ca03d3-4997-48e8-8b78-5d56e1ab0f7e.jpg",
          "mini_thumb":"https://s3.amazonaws.com/leaderz_development/uploads/user/avatar/4/mini_thumb_36ca03d3-4997-48e8-8b78-5d56e1ab0f7e.jpg",
          "small_thumb":"https://s3.amazonaws.com/leaderz_development/uploads/user/avatar/4/small_thumb_36ca03d3-4997-48e8-8b78-5d56e1ab0f7e.jpg"
        },
        "email":"nina@mobilzie.io"
      },
      {
        "id": 293,
        "name": "Or Frenkel",
        "avatar": {
          "image": "https://s3.amazonaws.com/mobilizestatic/defaultavatars/avatar.jpg",
          "thumb": "https://s3.amazonaws.com/mobilizestatic/defaultavatars/avatar.jpg",
          "mini_thumb": "https://s3.amazonaws.com/mobilizestatic/defaultavatars/avatar.jpg",
          "small_thumb": "https://s3.amazonaws.com/mobilizestatic/defaultavatars/avatar.jpg"
        },
        "email": "or@mobilzie.io"
      }
    ]
}



class Feed extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.state = {
      dataSource: ds.cloneWithRows(feed["posts"])
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <FeedItem data={rowData}/> }
        />
      </View>
    );
  }
}

export default Feed;