import NetworkManager from './NetworkManager'

class AppAPI {
    static get(route, body) {
        return NetworkManager.fetch(route, 'GET', body);
    }

    static put(route, body) {
        return NetworkManager.fetch(route, 'PUT', body);
    }

    static post(route, body) {
        return NetworkManager.fetch(route, 'POST', body);
    }

    static delete(route, body) {
        return NetworkManager.fetch(route, 'DELETE', body);
    }
}

export default AppAPI;