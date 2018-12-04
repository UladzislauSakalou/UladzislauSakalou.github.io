let instance = null;

export class ErrorHandlingService {

    constructor() {
        if(!instance){
            instance = this;
          }

          return instance;
    }

    handleError({code, message}) {
        console.log(`error code: ${code}`);
        alert(message);
    }
}


