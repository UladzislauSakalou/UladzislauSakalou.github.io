const sourcesBaseUrl = 'https://newsapi.org/v2/sources?';
const articlesFromSourceBaseUrl = 'https://newsapi.org/v2/top-headlines?';
const apiKey = 'e33882e210f849fabd16f00a5c77d951';
const pageSize = 10;
const okStatus = 'ok';
const errorStatus = 'error';

export class Constants {
    static get sourcesUrl() {
        return `${sourcesBaseUrl}apiKey=${apiKey}`;
    }

    static get articlesFromSourceBaseUrl() {
        return `${articlesFromSourceBaseUrl}apiKey=${apiKey}&pageSize=${pageSize}`;
    }

    static get okStatus() {
        return okStatus;
    }

    static get errorStatus() {
        return errorStatus;
    }
}