import * as types from './actionTypes';

const groups = (state ={}, action = {}) => {
    switch (action.type) {
        case types.SET_GROUPS: {
            return action.groups;
        }
        default: 
            return state;
    }
}

export default groups;

// const group = (state ={
//     isFetching: false,
//     didInvalidate: false,

// }, action = {}) => {
//     switch (action.type) {
//         case types.SET_GROUPS: {
//             return action.groups;
//         }
//         default: 
//             return state;
//     }
// }

// export default group;