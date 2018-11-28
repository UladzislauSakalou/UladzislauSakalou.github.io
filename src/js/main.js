import "@babel/polyfill";
import 'whatwg-fetch';
import * as sourceService from './services/sourceService.js';
import '../css/main.less';

window.onload = function() {
    sourceService.addListeners();
    sourceService.showSources();
};
