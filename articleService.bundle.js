(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["articleService"],{

/***/ "./src/js/services/articleService.js":
/*!*******************************************!*\
  !*** ./src/js/services/articleService.js ***!
  \*******************************************/
/*! exports provided: showArticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showArticles", function() { return showArticles; });
/* harmony import */ var _core_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/constants.js */ "./src/js/core/constants.js");
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
            console.log("showArticles");
            _context.next = 3;
            return getArticles(source);

          case 3:
            response = _context.sent;
            document.getElementById("articles").innerHTML = "";
            response.articles.map(getArticleDetails).forEach(showArticle);

          case 6:
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
            console.log("getArticles");
            articlesFromSourceUrl = constructArticlesFromSourceUrl(source);
            _context2.next = 4;
            return fetch(articlesFromSourceUrl);

          case 4:
            response = _context2.sent;
            return _context2.abrupt("return", response.json());

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _getArticles.apply(this, arguments);
}

function showArticle(articleDetails) {
  console.log("showArticle");
  document.getElementById("articles").innerHTML += articleDetails;
}

function getArticleDetails(_ref) {
  var url = _ref.url,
      urlToImage = _ref.urlToImage,
      title = _ref.title;
  console.log("getArticleDetails");
  return "<li class=\"item float-item\">\n    <a href=\"".concat(url, "\">Click to read more</a>\n    <img src=\"").concat(urlToImage, "\">\n    ").concat(title, "\n  </li>");
}

function constructArticlesFromSourceUrl(source) {
  console.log("constructArticlesFromSourceUrl");
  return "".concat(_core_constants_js__WEBPACK_IMPORTED_MODULE_0__["Constants"].articlesFromSourceBaseUrl, "&sources=").concat(source);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvYXJ0aWNsZVNlcnZpY2UuanMiXSwibmFtZXMiOlsic2hvd0FydGljbGVzIiwic291cmNlIiwiY29uc29sZSIsImxvZyIsImdldEFydGljbGVzIiwicmVzcG9uc2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiYXJ0aWNsZXMiLCJtYXAiLCJnZXRBcnRpY2xlRGV0YWlscyIsImZvckVhY2giLCJzaG93QXJ0aWNsZSIsImFydGljbGVzRnJvbVNvdXJjZVVybCIsImNvbnN0cnVjdEFydGljbGVzRnJvbVNvdXJjZVVybCIsImZldGNoIiwianNvbiIsImFydGljbGVEZXRhaWxzIiwidXJsIiwidXJsVG9JbWFnZSIsInRpdGxlIiwiQ29uc3RhbnRzIiwiYXJ0aWNsZXNGcm9tU291cmNlQmFzZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLFNBQWVBLFlBQXRCO0FBQUE7QUFBQTs7Ozs7MEJBQU8saUJBQTRCQyxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFETTtBQUFBLG1CQUVrQkMsV0FBVyxDQUFDSCxNQUFELENBRjdCOztBQUFBO0FBRUNJLG9CQUZEO0FBR0hDLG9CQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLFNBQXBDLEdBQWdELEVBQWhEO0FBQ0FILG9CQUFRLENBQUNJLFFBQVQsQ0FBa0JDLEdBQWxCLENBQXNCQyxpQkFBdEIsRUFBeUNDLE9BQXpDLENBQWlEQyxXQUFqRDs7QUFKRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O1NBT1FULFc7Ozs7Ozs7MEJBQWYsa0JBQTJCSCxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ0MsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDT1csaUNBRlIsR0FFZ0NDLDhCQUE4QixDQUFDZCxNQUFELENBRjlEO0FBQUE7QUFBQSxtQkFHeUJlLEtBQUssQ0FBQ0YscUJBQUQsQ0FIOUI7O0FBQUE7QUFHUVQsb0JBSFI7QUFBQSw4Q0FJV0EsUUFBUSxDQUFDWSxJQUFULEVBSlg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQU9BLFNBQVNKLFdBQVQsQ0FBcUJLLGNBQXJCLEVBQXFDO0FBQ3BDaEIsU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNHRyxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLFNBQXBDLElBQWlEVSxjQUFqRDtBQUNIOztBQUVELFNBQVNQLGlCQUFULE9BQXVEO0FBQUEsTUFBMUJRLEdBQTBCLFFBQTFCQSxHQUEwQjtBQUFBLE1BQXJCQyxVQUFxQixRQUFyQkEsVUFBcUI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDdERuQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNHLGlFQUNXZ0IsR0FEWCx1REFFWUMsVUFGWixzQkFHRUMsS0FIRjtBQUtIOztBQUVELFNBQVNOLDhCQUFULENBQXdDZCxNQUF4QyxFQUFnRDtBQUMvQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0NBQVo7QUFDRyxtQkFBVW1CLDREQUFTLENBQUNDLHlCQUFwQixzQkFBeUR0QixNQUF6RDtBQUNILEMiLCJmaWxlIjoiYXJ0aWNsZVNlcnZpY2UuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vY29yZS9jb25zdGFudHMuanMnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNob3dBcnRpY2xlcyhzb3VyY2UpIHtcbiBjb25zb2xlLmxvZyhcInNob3dBcnRpY2xlc1wiKTtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGdldEFydGljbGVzKHNvdXJjZSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFydGljbGVzXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICByZXNwb25zZS5hcnRpY2xlcy5tYXAoZ2V0QXJ0aWNsZURldGFpbHMpLmZvckVhY2goc2hvd0FydGljbGUpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRBcnRpY2xlcyhzb3VyY2UpIHtcbiBjb25zb2xlLmxvZyhcImdldEFydGljbGVzXCIpO1xyXG4gICAgbGV0IGFydGljbGVzRnJvbVNvdXJjZVVybCA9IGNvbnN0cnVjdEFydGljbGVzRnJvbVNvdXJjZVVybChzb3VyY2UpO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXJ0aWNsZXNGcm9tU291cmNlVXJsKTtcclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dBcnRpY2xlKGFydGljbGVEZXRhaWxzKSB7XG4gY29uc29sZS5sb2coXCJzaG93QXJ0aWNsZVwiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXJ0aWNsZXNcIikuaW5uZXJIVE1MICs9IGFydGljbGVEZXRhaWxzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcnRpY2xlRGV0YWlscyh7IHVybCwgdXJsVG9JbWFnZSwgdGl0bGUgfSkge1xuIGNvbnNvbGUubG9nKFwiZ2V0QXJ0aWNsZURldGFpbHNcIik7XHJcbiAgICByZXR1cm4gYDxsaSBjbGFzcz1cIml0ZW0gZmxvYXQtaXRlbVwiPlxyXG4gICAgPGEgaHJlZj1cIiR7dXJsfVwiPkNsaWNrIHRvIHJlYWQgbW9yZTwvYT5cclxuICAgIDxpbWcgc3JjPVwiJHt1cmxUb0ltYWdlfVwiPlxyXG4gICAgJHt0aXRsZX1cclxuICA8L2xpPmA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnN0cnVjdEFydGljbGVzRnJvbVNvdXJjZVVybChzb3VyY2UpIHtcbiBjb25zb2xlLmxvZyhcImNvbnN0cnVjdEFydGljbGVzRnJvbVNvdXJjZVVybFwiKTtcclxuICAgIHJldHVybiBgJHtDb25zdGFudHMuYXJ0aWNsZXNGcm9tU291cmNlQmFzZVVybH0mc291cmNlcz0ke3NvdXJjZX1gO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==