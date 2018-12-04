import { SourceService } from '../services/sourceService';
import { SourceView } from '../views/sourceView';
import { Constants } from '../core/constants';

export class SourceController {

    constructor() {
        this.sourceService = new SourceService();
        this.sourceView = new SourceView();
        this.sourceView.showArticlesForSelectedSource = this.showArticlesForSelectedSource.bind(this);
        this.sourceView.addListeners();
    }

    async showSources() {
        let response = await this.sourceService.getSources();
        this.validateResponse(response);
        
    }

    async showArticlesForSelectedSource() {   
        if (this.sourceView.selectedSource) {
            const articleModule = await import(/* webpackChunkName: "articleController" */ './articleController');
            let articleController = new articleModule.ArticleController();
            articleController.showArticles(this.sourceView.selectedSource);
        }
    }

    async validateResponse(response) {
        if (response.status == Constants.okStatus) {
            this.sourceView.render(response.sources);
        }

        if (response.status == Constants.errorStatus) {
            const errorModule = await import(/* webpackChunkName: "errorController" */ './errorController');
            let errorController = new errorModule.ErrorController();
            errorController.handleError(response);
        }
    }
}