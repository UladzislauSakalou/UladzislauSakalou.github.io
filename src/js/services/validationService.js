import { Constants } from '../core/constants.js';

export async function checkIfResponseValid(response) {
    if (response.status == Constants.okStatus) {
        return true;
    }

    if (response.status == Constants.errorStatus) {
        const errorModule = await import(/* webpackChunkName: "errorController" */ './errorHandlingService.js');
        let errorController = new errorModule.ErrorService();
        errorController.handleError(response);
    }
}