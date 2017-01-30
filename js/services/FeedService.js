import AppAPI from '../network/AppAPI'

const route = '/posts'

class FeedService {
    /**
     * @receiverName: 'events' or 'groups''
     */
    static getPosts = (receiverName, receiverId, offset, count) => {
        return AppAPI.get(`/${receiverName}/${receiverId}${route}?offset=${offset}&count=${count}`, {
            offset, count
        });
    }
    static setPollSelection = (specificId, answerId) => {
        return AppAPI.put(`/polls/${specificId}`, {answer: answerId});
    }
    static setEventSelection = (specificId, answer) =>{
        return AppAPI.put(`/events/${specificId}/attend`, {status: answer});
    }
}

export default FeedService;