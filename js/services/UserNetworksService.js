import AppAPI from '../network/AppAPI'

const route = '/user_networks'

class UserNetworksService {
    static getNetworks = () => {
        return AppAPI.get(route);
    }

    static getLastVisitedNetwork = () => {
        return UserNetworksService.getNetworks().then((data) => data.organizations[0]);
    }
}

export default UserNetworksService;