import AppAPI from '../network/AppAPI'

const route = '/groups'

class GroupsService {
    static onEnter = (id) => {
        return AppAPI.get(`${route}/${id}/on_enter`);
    }
}

export default GroupsService;