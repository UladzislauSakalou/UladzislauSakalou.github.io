import "@babel/polyfill";
import 'whatwg-fetch';
import { SourceController } from './controllers/sourceController'
import '../css/main.less';

window.onload = function () {
    let sourceController = new SourceController();
    sourceController.showSources();
};
