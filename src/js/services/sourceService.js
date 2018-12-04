import { Constants } from '../core/constants.js';

let instance = null;

export class SourceService {

    constructor() {
        if(!instance){
            instance = this;
          }

          return instance;
    }
    
    async getSources() {
        let response = await fetch(Constants.sourcesUrl);
        return response.json();
    }
}


