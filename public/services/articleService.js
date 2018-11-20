"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function showArticles(_x) {
  return _showArticles.apply(this, arguments);
}

function _showArticles() {
  _showArticles = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(source) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getArticles(source);

          case 2:
            response = _context.sent;
            document.getElementById("articles").innerHTML = "";
            response.articles.map(getArticleDetails).forEach(showArticle);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _showArticles.apply(this, arguments);
}

function getArticles(_x2) {
  return _getArticles.apply(this, arguments);
}

function _getArticles() {
  _getArticles = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(source) {
    var articlesFromSourceUrl, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            articlesFromSourceUrl = constructArticlesFromSourceUrl(source);
            _context2.next = 3;
            return fetch(articlesFromSourceUrl);

          case 3:
            response = _context2.sent;
            return _context2.abrupt("return", response.json());

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _getArticles.apply(this, arguments);
}

function showArticle(articleDetails) {
  document.getElementById("articles").innerHTML += articleDetails;
}

function getArticleDetails(_ref) {
  var url = _ref.url,
      urlToImage = _ref.urlToImage,
      title = _ref.title;
  return "<li class=\"item float-item\">\n    <a href=\"".concat(url, "\">Click to read more</a>\n    <img src=\"").concat(urlToImage, "\">\n    ").concat(title, "\n  </li>");
}

function constructArticlesFromSourceUrl(source) {
  return "".concat(Constants.articlesFromSourceBaseUrl, "&sources=").concat(source);
}