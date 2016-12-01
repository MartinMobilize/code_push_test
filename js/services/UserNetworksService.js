import AppAPI from '../network/AppAPI'

const route = '/user_networks'

class UserNetworksService {
    static getNetworks = () => {
        return AppAPI.get(route);
    }
}

export default UserNetworksService;