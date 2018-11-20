"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function showSources() {
  return _showSources.apply(this, arguments);
}

function _showSources() {
  _showSources = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getSources();

          case 2:
            response = _context.sent;
            response.sources.map(getSourceDetails).forEach(showSource);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _showSources.apply(this, arguments);
}

function addListeners() {
  document.getElementById("sourceSelected").addEventListener("change", showArticlesForSelectedSource);
}

function showArticlesForSelectedSource() {
  var sourceSelected = document.getElementById("sourceSelected").value;
  showArticles(sourceSelected);
}

function getSources() {
  return _getSources.apply(this, arguments);
}

function _getSources() {
  _getSources = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(Constants.sourcesUrl);

          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response.json());

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _getSources.apply(this, arguments);
}

function showSource(sourceDetails) {
  document.getElementById("sourceSelected").innerHTML += sourceDetails;
}

function getSourceDetails(source) {
  return "<option value=\"".concat(source.id, "\">").concat(source.name, "</option>");
}