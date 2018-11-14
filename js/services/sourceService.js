import { Constants } from '../core/constants.js';
import * as articleService from './articleService.js';

export function showSources() {
    getSources().then(function (response) {
        response.sources.map(getSourceDetails).forEach(showSource);
    });
}

export function addListeners() {
    document.getElementById("sourceSelected").addEventListener("change", showArticlesForSelectedSource);
}

export function showArticlesForSelectedSource() {
    let sourceSelected = document.getElementById("sourceSelected").value;
    articleService.showArticles(sourceSelected);
}

function getSources() {
    let req = new Request(Constants.sourcesUrl);
    let promise = fetch(req)
        .then(function (response) {
            return response.json()
        });

    return promise;
}

function showSource(sourceDetails) {
    document.getElementById("sourceSelected").innerHTML += sourceDetails;
}

function getSourceDetails(source) {
    return `<option value="${source.id}">${source.name}</option>`
}

