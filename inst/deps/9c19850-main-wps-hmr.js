webpackHotUpdatedash_deck("main",{

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
  "description": "A minimal deck.gl example rendering a circle with text",
  "initialViewState": {
    "longitude": -122.45,
    "latitude": 37.8,
    "zoom": 12
  },
  "layers": [{
    "@@type": "ScatterplotLayer",
    "data": [{
      "position": [-122.45, 37.8]
    }],
    "getFillColor": [255, 0, 0, 255],
    "getRadius": 1000
  }, {
    "@@type": "TextLayer",
    "data": [{
      "position": [-122.45, 37.8],
      "text": "Hello World"
    }]
  }]
};

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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_1__["DeckGL"], null);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2RlY2svLi9zcmMvZGVtby9BcHAuanMiXSwibmFtZXMiOlsianNvbiIsIkFwcCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsSUFBSSxHQUFHO0FBQUUsaUJBQWUsd0RBQWpCO0FBQTJFLHNCQUFvQjtBQUFFLGlCQUFhLENBQUMsTUFBaEI7QUFBd0IsZ0JBQVksSUFBcEM7QUFBMEMsWUFBUTtBQUFsRCxHQUEvRjtBQUF1SixZQUFVLENBQUU7QUFBRSxjQUFVLGtCQUFaO0FBQWdDLFlBQVEsQ0FBRTtBQUFFLGtCQUFZLENBQUUsQ0FBQyxNQUFILEVBQVcsSUFBWDtBQUFkLEtBQUYsQ0FBeEM7QUFBK0Usb0JBQWdCLENBQUUsR0FBRixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsR0FBYixDQUEvRjtBQUFtSCxpQkFBYTtBQUFoSSxHQUFGLEVBQTBJO0FBQUUsY0FBVSxXQUFaO0FBQXlCLFlBQVEsQ0FBRTtBQUFFLGtCQUFZLENBQUUsQ0FBQyxNQUFILEVBQVcsSUFBWCxDQUFkO0FBQWlDLGNBQVE7QUFBekMsS0FBRjtBQUFqQyxHQUExSTtBQUFqSyxDQUFiOztJQUlNQyxHOzs7Ozs7Ozs7Ozs7OzZCQUNPO0FBQ0wsMEJBQ0ksMkRBQUMsMkNBQUQsT0FESjtBQUdIOzs7O0VBTGFDLCtDOztBQVFIRCxrRUFBZixFIiwiZmlsZSI6IjljMTk4NTAtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IDAgKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBEZWNrR0wgfSBmcm9tICcuLi9saWInO1xuXG5jb25zdCBqc29uID0geyBcImRlc2NyaXB0aW9uXCI6IFwiQSBtaW5pbWFsIGRlY2suZ2wgZXhhbXBsZSByZW5kZXJpbmcgYSBjaXJjbGUgd2l0aCB0ZXh0XCIsIFwiaW5pdGlhbFZpZXdTdGF0ZVwiOiB7IFwibG9uZ2l0dWRlXCI6IC0xMjIuNDUsIFwibGF0aXR1ZGVcIjogMzcuOCwgXCJ6b29tXCI6IDEyIH0sIFwibGF5ZXJzXCI6IFsgeyBcIkBAdHlwZVwiOiBcIlNjYXR0ZXJwbG90TGF5ZXJcIiwgXCJkYXRhXCI6IFsgeyBcInBvc2l0aW9uXCI6IFsgLTEyMi40NSwgMzcuOCBdIH0gXSwgXCJnZXRGaWxsQ29sb3JcIjogWyAyNTUsIDAsIDAsIDI1NSBdLCBcImdldFJhZGl1c1wiOiAxMDAwIH0sIHsgXCJAQHR5cGVcIjogXCJUZXh0TGF5ZXJcIiwgXCJkYXRhXCI6IFsgeyBcInBvc2l0aW9uXCI6IFsgLTEyMi40NSwgMzcuOCBdLCBcInRleHRcIjogXCJIZWxsbyBXb3JsZFwiIH0gXSB9IF0gfTtcblxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPERlY2tHTCAvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9