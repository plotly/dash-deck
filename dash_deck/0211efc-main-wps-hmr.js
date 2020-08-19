webpackHotUpdatedash_deck("main",{

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib */ "./src/lib/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint no-magic-numbers: 0 */


var json = {
  "description": "The deck.gl website hexagonlayer example in JSON format",
  "websiteUrl": "https://deck.gl/#/examples/core-layers/hexagon-layer",
  "initialViewState": {
    "longitude": -1.4157267858730052,
    "latitude": 52.232395363869415,
    "zoom": 6.6,
    "minZoom": 5,
    "maxZoom": 15,
    "pitch": 40.5,
    "bearing": -27.396674584323023
  },
  "views": [{
    "@@type": "MapView",
    "controller": true,
    "mapStyle": "mapbox://styles/mapbox/dark-v9"
  }],
  "layers": [{
    "@@type": "HexagonLayer",
    "id": "heatmap",
    "data": "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/3d-heatmap/heatmap-data.csv",
    "loadOptions": {
      "csv": {
        "header": false
      }
    },
    "coverage": 1,
    "pickable": true,
    "autoHighlight": true,
    "elevationRange": [0, 3000],
    "elevationScale": 50,
    "extruded": true,
    "getPosition": "@@=-",
    "radius": 1000,
    "upperPercentile": 100,
    "colorRange": [[1, 152, 189], [73, 227, 206], [216, 254, 181], [254, 237, 177], [254, 173, 84], [209, 55, 78]]
  }]
};
var MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_API_KEY;
console.log(MAPBOX_ACCESS_TOKEN);

var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["DeckGL"], {
        json: json,
        id: "deck-gl",
        mapboxApiAccessToken: MAPBOX_ACCESS_TOKEN
      });
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2RlY2svLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsianNvbiIsIk1BUEJPWF9BQ0NFU1NfVE9LRU4iLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX01BUEJPWF9BUElfS0VZIiwiY29uc29sZSIsImxvZyIsIkFwcCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsSUFBSSxHQUFHO0FBQUUsaUJBQWUseURBQWpCO0FBQTRFLGdCQUFjLHNEQUExRjtBQUFrSixzQkFBb0I7QUFBRSxpQkFBYSxDQUFDLGtCQUFoQjtBQUFvQyxnQkFBWSxrQkFBaEQ7QUFBb0UsWUFBUSxHQUE1RTtBQUFpRixlQUFXLENBQTVGO0FBQStGLGVBQVcsRUFBMUc7QUFBOEcsYUFBUyxJQUF2SDtBQUE2SCxlQUFXLENBQUM7QUFBekksR0FBdEs7QUFBcVUsV0FBUyxDQUFFO0FBQUUsY0FBVSxTQUFaO0FBQXVCLGtCQUFjLElBQXJDO0FBQTJDLGdCQUFZO0FBQXZELEdBQUYsQ0FBOVU7QUFBNmEsWUFBVSxDQUFFO0FBQUUsY0FBVSxjQUFaO0FBQTRCLFVBQU0sU0FBbEM7QUFBNkMsWUFBUSxrR0FBckQ7QUFBeUosbUJBQWU7QUFBRSxhQUFPO0FBQUUsa0JBQVU7QUFBWjtBQUFULEtBQXhLO0FBQXdNLGdCQUFZLENBQXBOO0FBQXVOLGdCQUFZLElBQW5PO0FBQXlPLHFCQUFpQixJQUExUDtBQUFnUSxzQkFBa0IsQ0FBRSxDQUFGLEVBQUssSUFBTCxDQUFsUjtBQUErUixzQkFBa0IsRUFBalQ7QUFBcVQsZ0JBQVksSUFBalU7QUFBdVUsbUJBQWUsTUFBdFY7QUFBOFYsY0FBVSxJQUF4VztBQUE4Vyx1QkFBbUIsR0FBalk7QUFBc1ksa0JBQWMsQ0FBRSxDQUFFLENBQUYsRUFBSyxHQUFMLEVBQVUsR0FBVixDQUFGLEVBQW1CLENBQUUsRUFBRixFQUFNLEdBQU4sRUFBVyxHQUFYLENBQW5CLEVBQXFDLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxHQUFaLENBQXJDLEVBQXdELENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxHQUFaLENBQXhELEVBQTJFLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxFQUFaLENBQTNFLEVBQTZGLENBQUUsR0FBRixFQUFPLEVBQVAsRUFBVyxFQUFYLENBQTdGO0FBQXBaLEdBQUY7QUFBdmIsQ0FBYjtBQUNBLElBQU1DLG1CQUFtQixHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsd0JBQXhDO0FBRUFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxtQkFBWjs7SUFHTU0sRzs7Ozs7Ozs7Ozs7Ozs2QkFDTztBQUNMLDBCQUNJLDJEQUFDLDJDQUFEO0FBQ0ksWUFBSSxFQUFFUCxJQURWO0FBRUksVUFBRSxFQUFFLFNBRlI7QUFHSSw0QkFBb0IsRUFBRUM7QUFIMUIsUUFESjtBQU9IOzs7O0VBVGFPLCtDOztBQVlIRCxrRUFBZixFIiwiZmlsZSI6IjAyMTFlZmMtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IDAgKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBEZWNrR0wgfSBmcm9tICcuLi9saWInO1xuXG5jb25zdCBqc29uID0geyBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIGRlY2suZ2wgd2Vic2l0ZSBoZXhhZ29ubGF5ZXIgZXhhbXBsZSBpbiBKU09OIGZvcm1hdFwiLCBcIndlYnNpdGVVcmxcIjogXCJodHRwczovL2RlY2suZ2wvIy9leGFtcGxlcy9jb3JlLWxheWVycy9oZXhhZ29uLWxheWVyXCIsIFwiaW5pdGlhbFZpZXdTdGF0ZVwiOiB7IFwibG9uZ2l0dWRlXCI6IC0xLjQxNTcyNjc4NTg3MzAwNTIsIFwibGF0aXR1ZGVcIjogNTIuMjMyMzk1MzYzODY5NDE1LCBcInpvb21cIjogNi42LCBcIm1pblpvb21cIjogNSwgXCJtYXhab29tXCI6IDE1LCBcInBpdGNoXCI6IDQwLjUsIFwiYmVhcmluZ1wiOiAtMjcuMzk2Njc0NTg0MzIzMDIzIH0sIFwidmlld3NcIjogWyB7IFwiQEB0eXBlXCI6IFwiTWFwVmlld1wiLCBcImNvbnRyb2xsZXJcIjogdHJ1ZSwgXCJtYXBTdHlsZVwiOiBcIm1hcGJveDovL3N0eWxlcy9tYXBib3gvZGFyay12OVwiIH0gXSwgXCJsYXllcnNcIjogWyB7IFwiQEB0eXBlXCI6IFwiSGV4YWdvbkxheWVyXCIsIFwiaWRcIjogXCJoZWF0bWFwXCIsIFwiZGF0YVwiOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS92aXNnbC9kZWNrLmdsLWRhdGEvbWFzdGVyL2V4YW1wbGVzLzNkLWhlYXRtYXAvaGVhdG1hcC1kYXRhLmNzdlwiLCBcImxvYWRPcHRpb25zXCI6IHsgXCJjc3ZcIjogeyBcImhlYWRlclwiOiBmYWxzZSB9IH0sIFwiY292ZXJhZ2VcIjogMSwgXCJwaWNrYWJsZVwiOiB0cnVlLCBcImF1dG9IaWdobGlnaHRcIjogdHJ1ZSwgXCJlbGV2YXRpb25SYW5nZVwiOiBbIDAsIDMwMDAgXSwgXCJlbGV2YXRpb25TY2FsZVwiOiA1MCwgXCJleHRydWRlZFwiOiB0cnVlLCBcImdldFBvc2l0aW9uXCI6IFwiQEA9LVwiLCBcInJhZGl1c1wiOiAxMDAwLCBcInVwcGVyUGVyY2VudGlsZVwiOiAxMDAsIFwiY29sb3JSYW5nZVwiOiBbIFsgMSwgMTUyLCAxODkgXSwgWyA3MywgMjI3LCAyMDYgXSwgWyAyMTYsIDI1NCwgMTgxIF0sIFsgMjU0LCAyMzcsIDE3NyBdLCBbIDI1NCwgMTczLCA4NCBdLCBbIDIwOSwgNTUsIDc4IF0gXSB9IF0gfTtcbmNvbnN0IE1BUEJPWF9BQ0NFU1NfVE9LRU4gPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfTUFQQk9YX0FQSV9LRVlcblxuY29uc29sZS5sb2coTUFQQk9YX0FDQ0VTU19UT0tFTik7XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RGVja0dMIFxuICAgICAgICAgICAgICAgIGpzb249e2pzb259IFxuICAgICAgICAgICAgICAgIGlkPXtcImRlY2stZ2xcIn0gXG4gICAgICAgICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e01BUEJPWF9BQ0NFU1NfVE9LRU59XG4gICAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9