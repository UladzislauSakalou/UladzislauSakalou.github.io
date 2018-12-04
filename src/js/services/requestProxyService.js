import * as requestFactory from '../factories/requestFactory.js';

export let getRequest = new Proxy(requestFactory.getRequest, {
    apply: function (target, thisArg, argumentsList) {
        console.log(`request constructed: ${argumentsList}`);
        return target.apply(thisArg, argumentsList);
    }
});