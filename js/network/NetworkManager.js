import * as env from '../env'
import ApiUtils from './ApiUtils'

class NetworkManager {
    static fetch(route, method, body) {
        return fetch(this._getUrl(route), {
            method: method,
            headers: this._getHeaders(),
            body: this._getBody(body)
        })
        .then(ApiUtils.checkStatus)
        .then(response => response.json())
        .catch(e=>e);
    }

    static _getUrl(route) {
         return `${env.httpProtocol}${env.envUrl}${route}`;
    }

    static _getHeaders() {
        const memberToken  = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNjcwMzQsImV4cCI6MTQ5MDk2Mzk0MywiaWF0IjoxNDg1Nzc5OTQzfQ.6RRFSt9k2Y7X_m7BqteOXJaIId9KSUDrNWbygcpgWx4";
        const adminToken = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNjcwMTUsImV4cCI6MTQ4OTk5OTE2MiwiaWF0IjoxNDg0ODE1MTYyfQ.HLNYWY0t2nFzBUQJoE_LsvmFhtwH8WeOchOzcnP9_qk";
        return {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'App-Version' : env.appVersion,
                'Authorization': memberToken,
                'org_id': 4416
            }
    }

    static _getBody(body) {
        return JSON.stringify(body);
    }
}

export default NetworkManager;
