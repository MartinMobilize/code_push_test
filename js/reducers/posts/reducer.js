import * as types from './actionTypes';
import * as groupTypes from '../groups/actionTypes'
import poll from './pollReducer'
import emailBlast from './EmailBlastReducer'
import event from './eventReducer'

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

            if(!action.posts.entities.posts){
                return state;
            }

            Object.keys(action.posts.entities.posts).forEach(postID => {


                    currPost = action.posts.entities.posts[postID];

                    switch (currPost.post_type) {
                        case 'poll':
                            posts[postID] = Object.assign({},
                                poll(undefined, action),
                                currPost);
                        case 'emailblast':
                            posts[postID] = Object.assign({},
                                emailBlast(undefined, action),
                                currPost);
                        case 'event':
                            posts[postID] = Object.assign({},
                                event(undefined, action),
                                currPost);

                        default:
                            posts[postID] = Object.assign({},
                                emailBlast(undefined, action),
                                currPost);

                    }
                }
            )


            return Object.assign({}, state, state, posts);

        case types.CHANGE_POLL:
            return Object.assign({}, state, {
                [action.postId]: poll(state[action.postId], action)
            })

        default:
            return state;
    }
}

export default posts;
