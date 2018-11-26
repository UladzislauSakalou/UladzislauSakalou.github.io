import { Constants } from '../core/constants.js';

export async function showArticles(source) {
    let response = await getArticles(source);
    document.getElementById("articles").innerHTML = "";
    response.articles.map(getArticleDetails).forEach(showArticle);
}

async function getArticles(source) {
    let articlesFromSourceUrl = constructArticlesFromSourceUrl(source);
    let response = await fetch(articlesFromSourceUrl);
    return response.json();
}

function showArticle(articleDetails) {
    document.getElementById("articles").innerHTML += articleDetails;
}

function getArticleDetails({ url, urlToImage, title }) {
    return `<li class="item float-item">
    <a href="${url}">Click to read more</a>
    <img src="${urlToImage}">
    ${title}
  </li>`;
}

function constructArticlesFromSourceUrl(source) {
    return `${Constants.articlesFromSourceBaseUrl}&sources=${source}`;
}