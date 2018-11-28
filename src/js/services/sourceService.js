import { Constants } from '../core/constants.js';

export async function showSources() {
    let response = await getSources();
    response.sources.map(getSourceDetails).forEach(showSource);
}

export function addListeners() {
    document.getElementById("showNewsButton").addEventListener("click", showArticlesForSelectedSource);
}

async function showArticlesForSelectedSource() {
    let sourceSelected = document.getElementById("sourceSelected").value;
    if (sourceSelected !== "") {
        const articleService = await import(/* webpackChunkName: "articleService" */ './articleService');
        articleService.showArticles(sourceSelected);
    }
}

async function getSources() {
    let response = await fetch(Constants.sourcesUrl);
    return response.json();
}

function showSource(sourceDetails) {
    document.getElementById("sourceSelected").innerHTML += sourceDetails;
}

function getSourceDetails({ id, name }) {
    return `<option value="${id}">${name}</option>`
}

