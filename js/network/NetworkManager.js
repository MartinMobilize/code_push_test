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
        const adminToken = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNjg5MywiZXhwIjoxNDg1MTY4NDY1LCJpYXQiOjE0Nzk5ODQ0NjV9.a4n3R1O33szPNl2_I8aA_SYyj-rRe_yHQpdjLJFJeok";
        const memberToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMSwiZXhwIjoxNDg1MDA5OTMzLCJpYXQiOjE0Nzk4MjU5MzN9.gF7F3HbjwyreHwgPgP0t6yEEfhyXwzhAHpj3PSxhj9o"
        return {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'App-Version' : env.appVersion,
                'Authorization': adminToken,
                'org_id': 90
            }
    }

    static _getBody(body) {
        return JSON.stringify(body);
    }
}

export default NetworkManager;
