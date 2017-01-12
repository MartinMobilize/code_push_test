import AppAPI from '../network/AppAPI'

const route = '/posts'

class FeedService {
    /**
     * @receiverName: 'events' or 'groups''
     */
    static getPosts = (receiverName, receiverId, offset, count) => {
        return AppAPI.get(`/${receiverName}/${receiverId}${route}?offset=${offset}&count=${count}`, {
            offset,count
        });
    }
    static setPollSelection = (postId, answerId) => {
        return AppAPI.put(`/polls/${postId}`, {answer:answerId});
}
}

export default FeedService;