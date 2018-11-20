"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sourcesBaseUrl = 'https://newsapi.org/v2/sources?';
var articlesFromSourceBaseUrl = 'https://newsapi.org/v2/top-headlines?';
var apiKey = 'e33882e210f849fabd16f00a5c77d951';
var pageSize = 10;

var Constants =
/*#__PURE__*/
function () {
  function Constants() {
    _classCallCheck(this, Constants);
  }

  _createClass(Constants, null, [{
    key: "sourcesUrl",
    get: function get() {
      return "".concat(sourcesBaseUrl, "apiKey=").concat(apiKey);
    }
  }, {
    key: "articlesFromSourceBaseUrl",
    get: function get() {
      return "".concat(articlesFromSourceBaseUrl, "apiKey=").concat(apiKey, "&pageSize=").concat(pageSize);
    }
  }]);

  return Constants;
}();