import { ArticleService } from '../services/articleService.js';
import { ArticleView } from '../views/articleView.js';
import * as validationService from '../services/validationService.js';


export class ArticleController {
    constructor() {
        this.articleView = new ArticleView();
        this.articleService = new ArticleService();
    }

    async showArticles(source) {
        let response = await this.articleService.getArticles(source);
        if (validationService.checkIfResponseValid(response)) {
            this.articleView.render(response.articles);
        }
    }
}