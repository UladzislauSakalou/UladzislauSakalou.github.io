import * as validationService from '../services/validationService.js';
import { SourceService } from '../services/sourceService'
import { SourceView } from '../views/sourceView';

export class SourceController {

    constructor() {
        this.sourceService = new SourceService();
        this.sourceView = new SourceView();
        this.sourceView.showArticlesForSelectedSource = this.showArticlesForSelectedSource.bind(this);
        this.sourceView.addListeners();
    }

    async showSources() {
        let response = await this.sourceService.getSources();
        if (validationService.checkIfResponseValid(response)) {
            this.sourceView.render(response.sources);
        }
    }

    async showArticlesForSelectedSource() {
        if (this.sourceView.selectedSource) {
            const articleModule = await import(/* webpackChunkName: "articleController" */ './articleController');
            let articleController = new articleModule.ArticleController();
            articleController.showArticles(this.sourceView.selectedSource);
        }
    }
}