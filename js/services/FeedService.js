import AppAPI from '../network/AppAPI'

const route = '/feed'

class FeedService {
    /**
     * @receiverName: 'events' or 'groups''
     */
    static getPosts = (receiverName, receiverId, offset, count) => {
        return AppAPI.get(`${receiverName}``${receiverId}``${route}`, {
            offset,count
        });
    }
}

export default FeedService;