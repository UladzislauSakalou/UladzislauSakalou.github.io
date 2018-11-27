import * as sourceService from './services/sourceService.js';
import '../css/main.css';

window.onload = function() {
    sourceService.addListeners();
    sourceService.showSources();
};
