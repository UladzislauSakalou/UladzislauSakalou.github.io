const sourcesBaseUrl = 'https://newsapi.org/v2/sources';
const articlesFromSourceBaseUrl = 'https://newsapi.org/v2/top-headlines?';
const apiKey = 'e33882e210f849fabd16f00a5c77d951';
const pageSize = 10;
const okStatus = 'ok';
const errorStatus = 'error';
const getMethod = 'GET';

export class Constants {
    static get apiKey() {
        return apiKey;
    }

    static get sourcesUrl() {
        return `${sourcesBaseUrl}`;
    }

    static get articlesFromSourceBaseUrl() {
        return `${articlesFromSourceBaseUrl}pageSize=${pageSize}`;
    }

    static get okStatus() {
        return okStatus;
    }

    static get errorStatus() {
        return errorStatus;
    }

    static get getMethod() {
        return getMethod;
    }
}