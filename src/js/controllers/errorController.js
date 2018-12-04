import { Constants } from '../core/constants.js';

let instance = null;

export class ErrorController {

    constructor() {
        if(!instance){
            instance = this;
          }

          return instance;
    }

    handleError({code, message}) {
        alert(message);
    }
}


