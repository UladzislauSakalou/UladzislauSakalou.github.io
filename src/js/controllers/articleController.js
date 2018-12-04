import { ArticleService } from '../services/articleService.js';
import { ArticleView } from '../views/articleView.js';

export class ArticleController {
    constructor() {
        this.articleView = new ArticleView();
        this.articleService = new ArticleService();
    }

    async showArticles(source) {
        let response = await this.articleService.getArticles(source);
        this.articleView.render(response.articles);
    }
}