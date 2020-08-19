webpackHotUpdatedash_deck("main",{

/***/ "./src/lib/components/DeckGL.react.js":
/*!********************************************!*\
  !*** ./src/lib/components/DeckGL.react.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeckGL; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var deck_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deck.gl */ "./node_modules/deck.gl/dist/esm/index.js");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var _deck_gl_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deck.gl/json */ "./node_modules/@deck.gl/json/dist/esm/index.js");
/* harmony import */ var _loaders_gl_csv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @loaders.gl/csv */ "./node_modules/@loaders.gl/csv/dist/esm/index.js");
/* harmony import */ var _loaders_gl_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @loaders.gl/core */ "./node_modules/@loaders.gl/core/dist/esm/index.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/index.js");
/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @deck.gl/layers */ "./node_modules/@deck.gl/layers/dist/esm/index.js");
/* harmony import */ var _deck_gl_aggregation_layers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @deck.gl/aggregation-layers */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/index.js");
/* harmony import */ var _deck_gl_geo_layers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @deck.gl/geo-layers */ "./node_modules/@deck.gl/geo-layers/dist/esm/index.js");
/* harmony import */ var _deck_gl_mesh_layers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @deck.gl/mesh-layers */ "./node_modules/@deck.gl/mesh-layers/dist/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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












 // Register CSV Loader and initialize json converter

Object(_loaders_gl_core__WEBPACK_IMPORTED_MODULE_5__["registerLoaders"])(_loaders_gl_csv__WEBPACK_IMPORTED_MODULE_4__["CSVLoader"]);
var configuration = {
  classes: Object.assign({}, _deck_gl_layers__WEBPACK_IMPORTED_MODULE_7__, _deck_gl_aggregation_layers__WEBPACK_IMPORTED_MODULE_8__, _deck_gl_geo_layers__WEBPACK_IMPORTED_MODULE_9__, _deck_gl_mesh_layers__WEBPACK_IMPORTED_MODULE_10__)
};
var jsonConverter = new _deck_gl_json__WEBPACK_IMPORTED_MODULE_3__["JSONConverter"]({
  configuration: configuration
}); // Those View classes will be dynamically called later

var viewObjs = {
  MapView: _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__["MapView"],
  FirstPersonView: _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__["FirstPersonView"],
  OrthographicView: _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__["OrthographicView"],
  OrbitView: _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__["OrbitView"]
};
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

var DeckGL = /*#__PURE__*/function (_React$Component) {
  _inherits(DeckGL, _React$Component);

  var _super = _createSuper(DeckGL);

  function DeckGL() {
    _classCallCheck(this, DeckGL);

    return _super.apply(this, arguments);
  }

  _createClass(DeckGL, [{
    key: "render",
    value: function render() {
      var _this = this;

      var map;
      var _this$props = this.props,
          id = _this$props.id,
          json = _this$props.json,
          mapboxApiAccessToken = _this$props.mapboxApiAccessToken; // First, we need to convert the JSON representation into
      // the correct Deck.gl object.

      var deckProps = jsonConverter.convert(json);
      deckProps.id = id; // Only render the map and controller when the "views" key 
      // is in JSON

      if ("views" in json && json.views.length > 0) {
        var mapStyle = json.views[0].mapStyle; // extract the view type, create View obj, add it to deckProps

        deckProps.views = json.views.map(function (view) {
          var viewType = view["@@type"];
          return new viewObjs[viewType](view);
        });
        map = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_2__["StaticMap"], {
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapStyle: mapStyle
        });
      } else {
        map = null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(deck_gl__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        onClick: function onClick(clickInfo, clickEvent) {
          return _this.props.setProps({
            clickInfo: clickInfo,
            clickEvent: clickEvent
          });
        }
      }, deckProps), map);
    }
  }]);

  return DeckGL;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


DeckGL.defaultProps = {
  json: {},
  mapboxApiAccessToken: null
};
DeckGL.propTypes = {
  /**
   * The JSON representation of your map. This can be generated by calling
   * pdk.Deck(...).to_json()
   */
  json: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object,

  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,

  /**
   * `mapboxApiAccessToken` (text) = You will need a mapbox token to use deck.gl. Please create a mapbox
   * and follow the instructions here: https://docs.mapbox.com/help/how-mapbox-works/access-tokens/
   */
  mapboxApiAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,

  /**
   * This prop is updated when an element in the map is clicked. This contains
   * the original gesture event (in JSON).
   */
  clickEvent: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object,

  /**
   * This prop is updated when an element in the map is clicked. This contains
   * the picking info describing the object being clicked.
   * 
   * Complete description here:
   * https://deck.gl/docs/developer-guide/interactivity#the-picking-info-object
   */
  clickInfo: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object,

  /**
   * This prop is updated when an element in the map is hovered. This contains
   * the original gesture event (in JSON).
   */
  hoverEvent: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object,

  /**
   * This prop is updated when an element in the map is hovered. This contains
   * the picking info describing the object being hovered.
   * 
   * Complete description here:
   * https://deck.gl/docs/developer-guide/interactivity#the-picking-info-object
   */
  hoverInfo: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object,

  /**
   * This prop is updated when the user starts dragging on the canvas. This contains
   * the original gesture event (in JSON).
   */
  dragStartEvent: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object,

  /**
   * This prop is updated when the user starts dragging on the canvas. This contains
   * the picking info describing the object being dragged.
   * 
   * Complete description here:
   * https://deck.gl/docs/developer-guide/interactivity#the-picking-info-object
   */
  dragStartInfo: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object,

  /**
   * This prop is updated when the user releases from dragging the canvas. This contains
   * the original gesture event (in JSON).
   */
  dragEndEvent: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object,

  /**
   * This prop is updated when the user releases from dragging the canvas. This contains
   * the picking info describing the object being dragged.
   * 
   * Complete description here:
   * https://deck.gl/docs/developer-guide/interactivity#the-picking-info-object
   */
  dragEndInfo: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2RlY2svLi9zcmMvbGliL2NvbXBvbmVudHMvRGVja0dMLnJlYWN0LmpzIl0sIm5hbWVzIjpbInJlZ2lzdGVyTG9hZGVycyIsIkNTVkxvYWRlciIsImNvbmZpZ3VyYXRpb24iLCJjbGFzc2VzIiwiT2JqZWN0IiwiYXNzaWduIiwibGF5ZXJzIiwiYWdncmVnYXRpb25MYXllcnMiLCJnZW9MYXllcnMiLCJtZXNoTGF5ZXJzIiwianNvbkNvbnZlcnRlciIsIkpTT05Db252ZXJ0ZXIiLCJ2aWV3T2JqcyIsIk1hcFZpZXciLCJGaXJzdFBlcnNvblZpZXciLCJPcnRob2dyYXBoaWNWaWV3IiwiT3JiaXRWaWV3IiwiRGVja0dMIiwibWFwIiwicHJvcHMiLCJpZCIsImpzb24iLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsImRlY2tQcm9wcyIsImNvbnZlcnQiLCJ2aWV3cyIsImxlbmd0aCIsIm1hcFN0eWxlIiwidmlldyIsInZpZXdUeXBlIiwiY2xpY2tJbmZvIiwiY2xpY2tFdmVudCIsInNldFByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJzdHJpbmciLCJob3ZlckV2ZW50IiwiaG92ZXJJbmZvIiwiZHJhZ1N0YXJ0RXZlbnQiLCJkcmFnU3RhcnRJbmZvIiwiZHJhZ0VuZEV2ZW50IiwiZHJhZ0VuZEluZm8iLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7QUFDQUEsd0VBQWUsQ0FBQ0MseURBQUQsQ0FBZjtBQUNBLElBQU1DLGFBQWEsR0FBRztBQUNwQkMsU0FBTyxFQUFFQyxNQUFNLENBQUNDLE1BQVAsQ0FDUCxFQURPLEVBRVBDLDRDQUZPLEVBR1BDLHdEQUhPLEVB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VDs7QUE4RWY7Ozs7Ozs7QUFPQU8sYUFBVyxFQUFFUixrREFBUyxDQUFDQyxNQXJGUjs7QUF3RmY7Ozs7QUFJQU4sVUFBUSxFQUFFSyxrREFBUyxDQUFDUztBQTVGTCxDQUFuQixDIiwiZmlsZSI6ImExYjkyYzktbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEZWNrIGZyb20gXCJkZWNrLmdsXCJcbmltcG9ydCB7IFN0YXRpY01hcCB9IGZyb20gXCJyZWFjdC1tYXAtZ2xcIjtcbmltcG9ydCB7SlNPTkNvbnZlcnRlcn0gZnJvbSAnQGRlY2suZ2wvanNvbic7XG5pbXBvcnQge0NTVkxvYWRlcn0gZnJvbSBcIkBsb2FkZXJzLmdsL2NzdlwiO1xuaW1wb3J0IHtyZWdpc3RlckxvYWRlcnN9IGZyb20gXCJAbG9hZGVycy5nbC9jb3JlXCI7XG5pbXBvcnQge1xuICBNYXBWaWV3LCBcbiAgRmlyc3RQZXJzb25WaWV3LCBcbiAgT3J0aG9ncmFwaGljVmlldywgXG4gIE9yYml0Vmlld1xufSBmcm9tICdAZGVjay5nbC9jb3JlJztcblxuaW1wb3J0ICogYXMgbGF5ZXJzIGZyb20gXCJAZGVjay5nbC9sYXllcnNcIjtcbmltcG9ydCAqIGFzIGFnZ3JlZ2F0aW9uTGF5ZXJzIGZyb20gXCJAZGVjay5nbC9hZ2dyZWdhdGlvbi1sYXllcnNcIlxuaW1wb3J0ICogYXMgZ2VvTGF5ZXJzIGZyb20gXCJAZGVjay5nbC9nZW8tbGF5ZXJzXCI7XG5pbXBvcnQgKiBhcyBtZXNoTGF5ZXJzIGZyb20gXCJAZGVjay5nbC9tZXNoLWxheWVyc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuXG4vLyBSZWdpc3RlciBDU1YgTG9hZGVyIGFuZCBpbml0aWFsaXplIGpzb24gY29udmVydGVyXG5yZWdpc3RlckxvYWRlcnMoQ1NWTG9hZGVyKTtcbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSB7XG4gIGNsYXNzZXM6IE9iamVjdC5hc3NpZ24oXG4gICAge30sIFxuICAgIGxheWVycywgXG4gICAgYWdncmVnYXRpb25MYXllcnMsXG4gICAgZ2VvTGF5ZXJzLFxuICAgIG1lc2hMYXllcnNcbiAgKSxcbn1cbmNvbnN0IGpzb25Db252ZXJ0ZXIgPSBuZXcgSlNPTkNvbnZlcnRlcih7IGNvbmZpZ3VyYXRpb24gfSk7XG5cbi8vIFRob3NlIFZpZXcgY2xhc3NlcyB3aWxsIGJlIGR5bmFtaWNhbGx5IGNhbGxlZCBsYXRlclxuY29uc3Qgdmlld09ianMgPSB7XG4gIE1hcFZpZXcsIFxuICBGaXJzdFBlcnNvblZpZXcsIFxuICBPcnRob2dyYXBoaWNWaWV3LCBcbiAgT3JiaXRWaWV3XG59XG5cbi8qKlxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGBsYWJlbGAsIGFuZFxuICogZGlzcGxheXMgaXQuXG4gKiBJdCByZW5kZXJzIGFuIGlucHV0IHdpdGggdGhlIHByb3BlcnR5IGB2YWx1ZWBcbiAqIHdoaWNoIGlzIGVkaXRhYmxlIGJ5IHRoZSB1c2VyLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNrR0wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG1hcDtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgaWQsIGpzb24sIG1hcGJveEFwaUFjY2Vzc1Rva2VuXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIC8vIEZpcnN0LCB3ZSBuZWVkIHRvIGNvbnZlcnQgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gaW50b1xuICAgICAgICAvLyB0aGUgY29ycmVjdCBEZWNrLmdsIG9iamVjdC5cbiAgICAgICAgY29uc3QgZGVja1Byb3BzID0ganNvbkNvbnZlcnRlci5jb252ZXJ0KGpzb24pO1xuXG4gICAgICAgIGRlY2tQcm9wcy5pZCA9IGlkO1xuICAgIFxuICAgICAgICAvLyBPbmx5IHJlbmRlciB0aGUgbWFwIGFuZCBjb250cm9sbGVyIHdoZW4gdGhlIFwidmlld3NcIiBrZXkgXG4gICAgICAgIC8vIGlzIGluIEpTT05cbiAgICAgICAgaWYgKFwidmlld3NcIiBpbiBqc29uICYmIGpzb24udmlld3MubGVuZ3RoID4gMCl7XG4gICAgICAgICAgY29uc3Qge21hcFN0eWxlfSA9IGpzb24udmlld3NbMF07XG4gICAgICAgIFxuICAgICAgICAgIC8vIGV4dHJhY3QgdGhlIHZpZXcgdHlwZSwgY3JlYXRlIFZpZXcgb2JqLCBhZGQgaXQgdG8gZGVja1Byb3BzXG4gICAgICAgICAgZGVja1Byb3BzLnZpZXdzID0ganNvbi52aWV3cy5tYXAodmlldyA9PiB7XG4gICAgICAgICAgICBjb25zdCB2aWV3VHlwZSA9IHZpZXdbXCJAQHR5cGVcIl07XG4gICAgICAgICAgICByZXR1cm4gbmV3IHZpZXdPYmpzW3ZpZXdUeXBlXSh2aWV3KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgICAgICBtYXAgPSA8U3RhdGljTWFwIFxuICAgICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e21hcGJveEFwaUFjY2Vzc1Rva2VufVxuICAgICAgICAgICAgbWFwU3R5bGU9e21hcFN0eWxlfVxuICAgICAgICAgIC8+O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hcCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPERlY2tcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoY2xpY2tJbmZvLCBjbGlja0V2ZW50KSA9PiB0aGlzLnByb3BzLnNldFByb3BzKHtjbGlja0luZm8sIGNsaWNrRXZlbnR9KX1cbiAgICAgICAgICAgICAgICB7Li4uZGVja1Byb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHttYXB9XG4gICAgICAgICAgICA8L0RlY2s+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5EZWNrR0wuZGVmYXVsdFByb3BzID0ge1xuICAgIGpzb246IHt9LFxuICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiBudWxsXG59O1xuXG5EZWNrR0wucHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHlvdXIgbWFwLiBUaGlzIGNhbiBiZSBnZW5lcmF0ZWQgYnkgY2FsbGluZ1xuICAgICAqIHBkay5EZWNrKC4uLikudG9fanNvbigpXG4gICAgICovXG4gICAganNvbjogUHJvcFR5cGVzLm9iamVjdCxcblxuXG4gICAgLyoqXG4gICAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cblxuICAgIC8qKlxuICAgICAqIGBtYXBib3hBcGlBY2Nlc3NUb2tlbmAgKHRleHQpID0gWW91IHdpbGwgbmVlZCBhIG1hcGJveCB0b2tlbiB0byB1c2UgZGVjay5nbC4gUGxlYXNlIGNyZWF0ZSBhIG1hcGJveFxuICAgICAqIGFuZCBmb2xsb3cgdGhlIGluc3RydWN0aW9ucyBoZXJlOiBodHRwczovL2RvY3MubWFwYm94LmNvbS9oZWxwL2hvdy1tYXBib3gtd29ya3MvYWNjZXNzLXRva2Vucy9cbiAgICAgKi9cbiAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogUHJvcFR5cGVzLnN0cmluZyxcblxuXG4gICAgLyoqXG4gICAgICogVGhpcyBwcm9wIGlzIHVwZGF0ZWQgd2hlbiBhbiBlbGVtZW50IGluIHRoZSBtYXAgaXMgY2xpY2tlZC4gVGhpcyBjb250YWluc1xuICAgICAqIHRoZSBvcmlnaW5hbCBnZXN0dXJlIGV2ZW50IChpbiBKU09OKS5cbiAgICAgKi9cbiAgICBjbGlja0V2ZW50OiBQcm9wVHlwZXMub2JqZWN0LFxuXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHByb3AgaXMgdXBkYXRlZCB3aGVuIGFuIGVsZW1lbnQgaW4gdGhlIG1hcCBpcyBjbGlja2VkLiBUaGlzIGNvbnRhaW5zXG4gICAgICogdGhlIHBpY2tpbmcgaW5mbyBkZXNjcmliaW5nIHRoZSBvYmplY3QgYmVpbmcgY2xpY2tlZC5cbiAgICAgKiBcbiAgICAgKiBDb21wbGV0ZSBkZXNjcmlwdGlvbiBoZXJlOlxuICAgICAqIGh0dHBzOi8vZGVjay5nbC9kb2NzL2RldmVsb3Blci1ndWlkZS9pbnRlcmFjdGl2aXR5I3RoZS1waWNraW5nLWluZm8tb2JqZWN0XG4gICAgICovXG4gICAgY2xpY2tJbmZvOiBQcm9wVHlwZXMub2JqZWN0LFxuXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHByb3AgaXMgdXBkYXRlZCB3aGVuIGFuIGVsZW1lbnQgaW4gdGhlIG1hcCBpcyBob3ZlcmVkLiBUaGlzIGNvbnRhaW5zXG4gICAgICogdGhlIG9yaWdpbmFsIGdlc3R1cmUgZXZlbnQgKGluIEpTT04pLlxuICAgICAqL1xuICAgIGhvdmVyRXZlbnQ6IFByb3BUeXBlcy5vYmplY3QsXG5cblxuICAgIC8qKlxuICAgICAqIFRoaXMgcHJvcCBpcyB1cGRhdGVkIHdoZW4gYW4gZWxlbWVudCBpbiB0aGUgbWFwIGlzIGhvdmVyZWQuIFRoaXMgY29udGFpbnNcbiAgICAgKiB0aGUgcGlja2luZyBpbmZvIGRlc2NyaWJpbmcgdGhlIG9iamVjdCBiZWluZyBob3ZlcmVkLlxuICAgICAqIFxuICAgICAqIENvbXBsZXRlIGRlc2NyaXB0aW9uIGhlcmU6XG4gICAgICogaHR0cHM6Ly9kZWNrLmdsL2RvY3MvZGV2ZWxvcGVyLWd1aWRlL2ludGVyYWN0aXZpdHkjdGhlLXBpY2tpbmctaW5mby1vYmplY3RcbiAgICAgKi9cbiAgICBob3ZlckluZm86IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHByb3AgaXMgdXBkYXRlZCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyBkcmFnZ2luZyBvbiB0aGUgY2FudmFzLiBUaGlzIGNvbnRhaW5zXG4gICAgICogdGhlIG9yaWdpbmFsIGdlc3R1cmUgZXZlbnQgKGluIEpTT04pLlxuICAgICAqL1xuICAgIGRyYWdTdGFydEV2ZW50OiBQcm9wVHlwZXMub2JqZWN0LFxuXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHByb3AgaXMgdXBkYXRlZCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyBkcmFnZ2luZyBvbiB0aGUgY2FudmFzLiBUaGlzIGNvbnRhaW5zXG4gICAgICogdGhlIHBpY2tpbmcgaW5mbyBkZXNjcmliaW5nIHRoZSBvYmplY3QgYmVpbmcgZHJhZ2dlZC5cbiAgICAgKiBcbiAgICAgKiBDb21wbGV0ZSBkZXNjcmlwdGlvbiBoZXJlOlxuICAgICAqIGh0dHBzOi8vZGVjay5nbC9kb2NzL2RldmVsb3Blci1ndWlkZS9pbnRlcmFjdGl2aXR5I3RoZS1waWNraW5nLWluZm8tb2JqZWN0XG4gICAgICovXG4gICAgZHJhZ1N0YXJ0SW5mbzogUHJvcFR5cGVzLm9iamVjdCxcblxuXG4gICAgLyoqXG4gICAgICogVGhpcyBwcm9wIGlzIHVwZGF0ZWQgd2hlbiB0aGUgdXNlciByZWxlYXNlcyBmcm9tIGRyYWdnaW5nIHRoZSBjYW52YXMuIFRoaXMgY29udGFpbnNcbiAgICAgKiB0aGUgb3JpZ2luYWwgZ2VzdHVyZSBldmVudCAoaW4gSlNPTikuXG4gICAgICovXG4gICAgZHJhZ0VuZEV2ZW50OiBQcm9wVHlwZXMub2JqZWN0LFxuXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHByb3AgaXMgdXBkYXRlZCB3aGVuIHRoZSB1c2VyIHJlbGVhc2VzIGZyb20gZHJhZ2dpbmcgdGhlIGNhbnZhcy4gVGhpcyBjb250YWluc1xuICAgICAqIHRoZSBwaWNraW5nIGluZm8gZGVzY3JpYmluZyB0aGUgb2JqZWN0IGJlaW5nIGRyYWdnZWQuXG4gICAgICogXG4gICAgICogQ29tcGxldGUgZGVzY3JpcHRpb24gaGVyZTpcbiAgICAgKiBodHRwczovL2RlY2suZ2wvZG9jcy9kZXZlbG9wZXItZ3VpZGUvaW50ZXJhY3Rpdml0eSN0aGUtcGlja2luZy1pbmZvLW9iamVjdFxuICAgICAqL1xuICAgIGRyYWdFbmRJbmZvOiBQcm9wVHlwZXMub2JqZWN0LFxuXG5cbiAgICAvKipcbiAgICAgKiBEYXNoLWFzc2lnbmVkIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCB0byByZXBvcnQgcHJvcGVydHkgY2hhbmdlc1xuICAgICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBzZXRQcm9wczogUHJvcFR5cGVzLmZ1bmNcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9