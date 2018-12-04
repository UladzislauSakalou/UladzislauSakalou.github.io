export class ArticleView {
    constructor() {
        
    }

    showArticle(articleDetails) {
        document.getElementById("articles").innerHTML += articleDetails;
    }
    
    getArticleDetails({ url, urlToImage, title }) {
        return `<li class="item float-item">
        <a href="${url}">Click to read more</a>
        <img src="${urlToImage}">
        ${title}
      </li>`;
    }

    render(articles) {
        document.getElementById("articles").innerHTML = "";
        articles.map(this.getArticleDetails).forEach(this.showArticle);
    }
}