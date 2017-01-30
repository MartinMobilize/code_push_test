import * as types from './actionTypes';
import poll from './pollReducer'
import emailBlast from './EmailBlastReducer'
import textPost from './TextPostReducer'
import event from './eventReducer'
import SMS from  './SMSReducer'

const posts = (state = {}, action = {}) => {
    switch (action.type) {
        case types.REQUEST_POSTS: {
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        }
        case types.RECEIVE_POSTS: {
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                selectedPoll: 0,
                items: action.posts.entities.posts,
            })
        }
        case types.INIT_POSTS:
        case types.ADD_POSTS:
            const posts = {};
            let currPost;

            if (!action.posts.entities.posts) {
                return state;
            }

            Object.keys(action.posts.entities.posts).forEach(postID => {


                    currPost = action.posts.entities.posts[postID];

                    switch (currPost.post_type) {
                        case 'poll':
                            posts[postID] = Object.assign({},
                                poll(undefined, action),
                                currPost);
                            break;
                        case 'emailblast':
                            posts[postID] = Object.assign({},
                                emailBlast(undefined, action),
                                currPost);
                            break;

                        case 'event':
                            posts[postID] = Object.assign({},
                                event(undefined, action),
                                currPost);
                            break;

                        case 'quickpost':
                            posts[postID] = Object.assign({},
                                textPost(undefined, action),
                                currPost);
                            break;

                        case 'smspost':
                            posts[postID] = Object.assign({},
                                SMS(undefined, action),
                                currPost);
                            break;

                        default:
                            posts[postID] = Object.assign({},
                                emailBlast(undefined, action),
                                currPost);
                            break;

                    }
                }
            )


            return Object.assign({}, state, state, posts);

        case types.CHANGE_EVENT:
            return Object.assign({}, state, {
                [action.id]: event(state[action.id], action)
            })


        case types.CHANGE_POLL:
            return Object.assign({}, state, {
                [action.postId]: poll(state[action.postId], action)
            })

        default:
            return state;
    }
}

export default posts;
