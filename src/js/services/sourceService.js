async function showSources() {
    let response = await getSources();
    response.sources.map(getSourceDetails).forEach(showSource);
}

function addListeners() {
    document.getElementById("sourceSelected").addEventListener("change", showArticlesForSelectedSource);
}

function showArticlesForSelectedSource() {
    let sourceSelected = document.getElementById("sourceSelected").value;
    showArticles(sourceSelected);
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

