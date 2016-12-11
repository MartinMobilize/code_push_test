import { normalize, Schema, arrayOf } from 'normalizr';
export const network = new Schema('networks');
export const group = new Schema('groups');
export const groupStart = new Schema('groupStart');
export const userOrganization = new Schema('userOrganization');
export const groupMember = new Schema('groupMembers');
export const user = new Schema('users');
export const post = new Schema('posts');

network.define({
    groups: arrayOf(group),
    user_organization: userOrganization
})

groupStart.define({
    members: arrayOf(groupMember),
    group: group,
    feed: {
        users: arrayOf(user),
        posts: arrayOf(post)
    }
})





