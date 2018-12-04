import { Constants } from '../core/constants.js';
import * as requestProxyService from './requestProxyService.js';

let instance = null;

export class SourceService {

    constructor() {
        if(!instance){
            instance = this;
          }

          return instance;
    }
    
    async getSources() {
        let request = requestProxyService.getRequest(Constants.getMethod, Constants.sourcesUrl);
        let response = await fetch(request);
        return response.json();
    }
}


