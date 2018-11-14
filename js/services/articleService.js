import { Constants } from '../core/constants.js';

export function showArticles(source) {
    getArticles(source).then(function (response) {
        document.getElementById("articles").innerHTML = "";
        response.articles.map(getArticleDetails).forEach(showArticle);
    });
}

function getArticles(source) {
    let articlesFromSourceUrl = constructArticlesFromSourceUrl(source);
    let req = new Request(articlesFromSourceUrl);
    return fetch(req)
        .then(function (response) {
            return response.json()
        });
}

function showArticle(articleDetails) {
    document.getElementById("articles").innerHTML += articleDetails;
}

function getArticleDetails(article) {
    return `<li class="item float-item">
    <a href="${article.url}">Click to read more</a>
    <img src="${article.urlToImage}">
    ${article.title}
  </li>`;
}

function constructArticlesFromSourceUrl(source) {
    return `${Constants.articlesFromSourceBaseUrl}&sources=${source}`;
}