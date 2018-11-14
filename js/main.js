import * as sourceService from './services/sourceService.js';

window.onload = function() {
    sourceService.addListeners();
    sourceService.showSources();
};
