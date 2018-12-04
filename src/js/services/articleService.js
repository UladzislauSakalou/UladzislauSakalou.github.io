import { Constants } from '../core/constants.js';
import * as requestProxyService from './requestProxyService.js';

let instance = null;

export class ArticleService {

    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    async getArticles(source) {
        let articlesFromSourceUrl = this.constructArticlesFromSourceUrl(source);
        let request = requestProxyService.getRequest(Constants.getMethod, articlesFromSourceUrl);
        let response = await fetch(request);
        return response.json();
    }

    constructArticlesFromSourceUrl(source) {
        return `${Constants.articlesFromSourceBaseUrl}&sources=${source}`;
    }
}

