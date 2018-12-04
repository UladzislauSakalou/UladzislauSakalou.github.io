import { Constants } from '../core/constants.js';

export function getRequest(method, url) {
    var requestHeaders = new Headers();
    requestHeaders.append('X-Api-Key', Constants.apiKey);

    let init = {
        method: method,
        headers: requestHeaders
    }

    let request = new Request(url, init);

    return request;
}