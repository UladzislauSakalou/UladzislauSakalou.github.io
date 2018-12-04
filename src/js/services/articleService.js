import { Constants } from '../core/constants.js';

let instance = null;

export class ArticleService {
    
    constructor() {
        if(!instance){
            instance = this;
        }

        return instance;
    }
    
    async getArticles(source) {
        let articlesFromSourceUrl = this.constructArticlesFromSourceUrl(source);
        let response = await fetch(articlesFromSourceUrl);
        return response.json();
    }
    
    constructArticlesFromSourceUrl(source) {
        return `${Constants.articlesFromSourceBaseUrl}&sources=${source}`;
    }
}

