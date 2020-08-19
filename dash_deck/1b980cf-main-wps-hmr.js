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
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/index.js");
/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deck.gl/layers */ "./node_modules/@deck.gl/layers/dist/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
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



 // import {JSONConverter} from '@deck.gl/json';
// import {CSVLoader} from "@loaders.gl/csv";
// import {registerLoaders} from "@loaders.gl/core";


 // import * as aggregationLayers from "@deck.gl/aggregation-layers"
// import * as geoLayers from "@deck.gl/geo-layers";
// import * as meshLayers from "@deck.gl/mesh-layers";

 // registerLoaders(CSVLoader);
// const configuration = {
//   classes: Object.assign(
//     {}, 
//     layers, 
//     // aggregationLayers,
//     // geoLayers,
//     // meshLayers
//   ),
// }
// const jsonConverter = new JSONConverter({ configuration });
// handle views
// const viewObjs = {
//   MapView, 
//   FirstPersonView, 
//   OrthographicView, 
//   OrbitView
// }

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
      var map;
      var _this$props = this.props,
          id = _this$props.id,
          json = _this$props.json,
          mapboxApiAccessToken = _this$props.mapboxApiAccessToken,
          setProps = _this$props.setProps; // First, we need to convert the JSON representation into
      // the correct Deck.gl object.
      // const deckProps = jsonConverter.convert(json);
      // deckProps.id = id;
      // // Only render the map and controller when the "views" key 
      // // is in JSON
      // if ("views" in json && json.views.length > 0){
      //   const {mapStyle} = json.views[0];
      //   // extract the view type, create View obj, add it to deckProps
      //   deckProps.views = json.views.map(view => {
      //     const viewType = view["@@type"];
      //     return new viewObjs[viewType](view);
      //   });
      //   map = <StaticMap 
      //     mapboxApiAccessToken={mapboxApiAccessToken}
      //     mapStyle={mapStyle}
      //   />;
      // } else {
      //   map = null;
      // }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DeckGL // onClick={e => console.log(e)}
      // {...deckProps}
      , null, map);
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
  json: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * `mapboxApiAccessToken` (text) = You will need a mapbox token to use deck.gl. Please create a mapbox
   * and follow the instructions here: https://docs.mapbox.com/help/how-mapbox-works/access-tokens/
   */
  mapboxApiAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * This prop is updated when an element in the map is clicked. This contains
   * the original gesture event (in JSON).
   */
  clickEvent: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * This prop is updated when an element in the map is clicked. This contains
   * the picking info describing the object being clicked.
   * 
   * Complete description here:
   * https://deck.gl/docs/developer-guide/interactivity#the-picking-info-object
   */
  clickInfo: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * This prop is updated when an element in the map is hovered. This contains
   * the original gesture event (in JSON).
   */
  hoverEvent: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * This prop is updated when an element in the map is hovered. This contains
   * the picking info describing the object being hovered.
   * 
   * Complete description here:
   * https://deck.gl/docs/developer-guide/interactivity#the-picking-info-object
   */
  hoverInfo: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * This prop is updated when the user starts dragging on the canvas. This contains
   * the original gesture event (in JSON).
   */
  dragStartEvent: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * This prop is updated when the user starts dragging on the canvas. This contains
   * the picking info describing the object being dragged.
   * 
   * Complete description here:
   * https://deck.gl/docs/developer-guide/interactivity#the-picking-info-object
   */
  dragStartInfo: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * This prop is updated when the user releases from dragging the canvas. This contains
   * the original gesture event (in JSON).
   */
  dragEndEvent: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * This prop is updated when the user releases from dragging the canvas. This contains
   * the picking info describing the object being dragged.
   * 
   * Complete description here:
   * https://deck.gl/docs/developer-guide/interactivity#the-picking-info-object
   */
  dragEndInfo: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2RlY2svLi9zcmMvbGliL2NvbXBvbmVudHMvRGVja0dMLnJlYWN0LmpzIl0sIm5hbWVzIjpbIkRlY2tHTCIsIm1hcCIsInByb3BzIiwiaWQiLCJqc29uIiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJzZXRQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Iiwic3RyaW5nIiwiY2xpY2tFdmVudCIsImNsaWNrSW5mbyIsImhvdmVyRXZlbnQiLCJob3ZlckluZm8iLCJkcmFnU3RhcnRFdmVudCIsImRyYWdTdGFydEluZm8iLCJkcmFnRW5kRXZlbnQiLCJkcmFnRW5kSW5mbyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7O0FBQ0E7Q0FRQTtBQUNBO0FBQ0E7O0NBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztJQU9xQkEsTTs7Ozs7Ozs7Ozs7Ozs2QkFDUjtBQUNMLFVBQUlDLEdBQUo7QUFESyx3QkFJRCxLQUFLQyxLQUpKO0FBQUEsVUFHREMsRUFIQyxlQUdEQSxFQUhDO0FBQUEsVUFHR0MsSUFISCxlQUdHQSxJQUhIO0FBQUEsVUFHU0Msb0JBSFQsZUFHU0Esb0JBSFQ7QUFBQSxVQUcrQkMsUUFIL0IsZUFHK0JBLFFBSC9CLEVBTUw7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFDSSwyREFBQyxNQUFELENBQ0k7QUFDQTtBQUZKLGNBSUtMLEdBSkwsQ0FESjtBQVFIOzs7O0VBeEMrQk0sNENBQUssQ0FBQ0MsUzs7O0FBMkMxQ1IsTUFBTSxDQUFDUyxZQUFQLEdBQXNCO0FBQ2xCTCxNQUFJLEVBQUUsRUFEWTtBQUVsQkMsc0JBQW9CLEVBQUU7QUFGSixDQUF0QjtBQUtBTCxNQUFNLENBQUNVLFNBQVAsR0FBbUI7QUFDZjs7OztBQUlBTixNQUFJLEVBQUVPLGlEQUFTLENBQUNDLE1BTEQ7O0FBUWY7OztBQUdBVCxJQUFFLEVBQUVRLGlEQUFTLENBQUNFLE1BWEM7O0FBY2Y7Ozs7QUFJQVIsc0JBQW9CLEVBQUVNLGlEQUFTLENBQUNFLE1BbEJqQjs7QUFxQmY7Ozs7QUFJQUMsWUFBVSxFQUFFSCxpREFBUyxDQUFDQyxNQXpCUDs7QUE0QmY7Ozs7Ozs7QUFPQUcsV0FBUyxFQUFFSixpREFBUyxDQUFDQyxNQW5DTjs7QUFzQ2Y7Ozs7QUFJQUksWUFBVSxFQUFFTCxpREFBUyxDQUFDQyxNQTFDUDs7QUE2Q2Y7Ozs7Ozs7QUFPQUssV0FBUyxFQUFFTixpREFBUyxDQUFDQyxNQXBETjs7QUFzRGY7Ozs7QUFJQU0sZ0JBQWMsRUFBRVAsaURBQVMsQ0FBQ0MsTUExRFg7O0FBNkRmOzs7Ozs7O0FBT0FPLGVBQWEsRUFBRVIsaURBQVMsQ0FBQ0MsTUFwRVY7O0FBdUVmOzs7O0FBSUFRLGNBQVksRUFBRVQsaURBQVMsQ0FBQ0MsTUEzRVQ7O0FBOEVmOzs7Ozs7O0FBT0FTLGFBQVcsRUFBRVYsaURBQVMsQ0FBQ0MsTUFyRlI7O0FBd0ZmOzs7O0FBSUFOLFVBQVEsRUFBRUssaURBQVMsQ0FBQ1c7QUE1RkwsQ0FBbkIsQyIsImZpbGUiOiIxYjk4MGNmLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGVjayBmcm9tIFwiZGVjay5nbFwiXG5pbXBvcnQgeyBTdGF0aWNNYXAgfSBmcm9tIFwicmVhY3QtbWFwLWdsXCI7XG4vLyBpbXBvcnQge0pTT05Db252ZXJ0ZXJ9IGZyb20gJ0BkZWNrLmdsL2pzb24nO1xuLy8gaW1wb3J0IHtDU1ZMb2FkZXJ9IGZyb20gXCJAbG9hZGVycy5nbC9jc3ZcIjtcbi8vIGltcG9ydCB7cmVnaXN0ZXJMb2FkZXJzfSBmcm9tIFwiQGxvYWRlcnMuZ2wvY29yZVwiO1xuaW1wb3J0IHtcbiAgTWFwVmlldywgXG4vLyAgIEZpcnN0UGVyc29uVmlldywgXG4vLyAgIE9ydGhvZ3JhcGhpY1ZpZXcsIFxuLy8gICBPcmJpdFZpZXdcbn0gZnJvbSAnQGRlY2suZ2wvY29yZSc7XG5cbmltcG9ydCAqIGFzIGxheWVycyBmcm9tIFwiQGRlY2suZ2wvbGF5ZXJzXCI7XG4vLyBpbXBvcnQgKiBhcyBhZ2dyZWdhdGlvbkxheWVycyBmcm9tIFwiQGRlY2suZ2wvYWdncmVnYXRpb24tbGF5ZXJzXCJcbi8vIGltcG9ydCAqIGFzIGdlb0xheWVycyBmcm9tIFwiQGRlY2suZ2wvZ2VvLWxheWVyc1wiO1xuLy8gaW1wb3J0ICogYXMgbWVzaExheWVycyBmcm9tIFwiQGRlY2suZ2wvbWVzaC1sYXllcnNcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cblxuLy8gcmVnaXN0ZXJMb2FkZXJzKENTVkxvYWRlcik7XG4vLyBjb25zdCBjb25maWd1cmF0aW9uID0ge1xuLy8gICBjbGFzc2VzOiBPYmplY3QuYXNzaWduKFxuLy8gICAgIHt9LCBcbi8vICAgICBsYXllcnMsIFxuLy8gICAgIC8vIGFnZ3JlZ2F0aW9uTGF5ZXJzLFxuLy8gICAgIC8vIGdlb0xheWVycyxcbi8vICAgICAvLyBtZXNoTGF5ZXJzXG4vLyAgICksXG4vLyB9XG4vLyBjb25zdCBqc29uQ29udmVydGVyID0gbmV3IEpTT05Db252ZXJ0ZXIoeyBjb25maWd1cmF0aW9uIH0pO1xuXG5cbi8vIGhhbmRsZSB2aWV3c1xuLy8gY29uc3Qgdmlld09ianMgPSB7XG4vLyAgIE1hcFZpZXcsIFxuLy8gICBGaXJzdFBlcnNvblZpZXcsIFxuLy8gICBPcnRob2dyYXBoaWNWaWV3LCBcbi8vICAgT3JiaXRWaWV3XG4vLyB9XG5cbi8qKlxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGBsYWJlbGAsIGFuZFxuICogZGlzcGxheXMgaXQuXG4gKiBJdCByZW5kZXJzIGFuIGlucHV0IHdpdGggdGhlIHByb3BlcnR5IGB2YWx1ZWBcbiAqIHdoaWNoIGlzIGVkaXRhYmxlIGJ5IHRoZSB1c2VyLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNrR0wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG1hcDtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgaWQsIGpzb24sIG1hcGJveEFwaUFjY2Vzc1Rva2VuLCBzZXRQcm9wc1xuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAvLyBGaXJzdCwgd2UgbmVlZCB0byBjb252ZXJ0IHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIGludG9cbiAgICAgICAgLy8gdGhlIGNvcnJlY3QgRGVjay5nbCBvYmplY3QuXG4gICAgICAgIC8vIGNvbnN0IGRlY2tQcm9wcyA9IGpzb25Db252ZXJ0ZXIuY29udmVydChqc29uKTtcblxuICAgICAgICAvLyBkZWNrUHJvcHMuaWQgPSBpZDtcbiAgICBcbiAgICAgICAgLy8gLy8gT25seSByZW5kZXIgdGhlIG1hcCBhbmQgY29udHJvbGxlciB3aGVuIHRoZSBcInZpZXdzXCIga2V5IFxuICAgICAgICAvLyAvLyBpcyBpbiBKU09OXG4gICAgICAgIC8vIGlmIChcInZpZXdzXCIgaW4ganNvbiAmJiBqc29uLnZpZXdzLmxlbmd0aCA+IDApe1xuICAgICAgICAvLyAgIGNvbnN0IHttYXBTdHlsZX0gPSBqc29uLnZpZXdzWzBdO1xuICAgICAgICBcbiAgICAgICAgLy8gICAvLyBleHRyYWN0IHRoZSB2aWV3IHR5cGUsIGNyZWF0ZSBWaWV3IG9iaiwgYWRkIGl0IHRvIGRlY2tQcm9wc1xuICAgICAgICAvLyAgIGRlY2tQcm9wcy52aWV3cyA9IGpzb24udmlld3MubWFwKHZpZXcgPT4ge1xuICAgICAgICAvLyAgICAgY29uc3Qgdmlld1R5cGUgPSB2aWV3W1wiQEB0eXBlXCJdO1xuICAgICAgICAvLyAgICAgcmV0dXJuIG5ldyB2aWV3T2Jqc1t2aWV3VHlwZV0odmlldyk7XG4gICAgICAgIC8vICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgIC8vICAgbWFwID0gPFN0YXRpY01hcCBcbiAgICAgICAgLy8gICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXttYXBib3hBcGlBY2Nlc3NUb2tlbn1cbiAgICAgICAgLy8gICAgIG1hcFN0eWxlPXttYXBTdHlsZX1cbiAgICAgICAgLy8gICAvPjtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICBtYXAgPSBudWxsO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEZWNrR0xcbiAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXtlID0+IGNvbnNvbGUubG9nKGUpfVxuICAgICAgICAgICAgICAgIC8vIHsuLi5kZWNrUHJvcHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21hcH1cbiAgICAgICAgICAgIDwvRGVja0dMPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRGVja0dMLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBqc29uOiB7fSxcbiAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogbnVsbFxufTtcblxuRGVja0dMLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB5b3VyIG1hcC4gVGhpcyBjYW4gYmUgZ2VuZXJhdGVkIGJ5IGNhbGxpbmdcbiAgICAgKiBwZGsuRGVjayguLi4pLnRvX2pzb24oKVxuICAgICAqL1xuICAgIGpzb246IFByb3BUeXBlcy5vYmplY3QsXG5cblxuICAgIC8qKlxuICAgICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG5cbiAgICAvKipcbiAgICAgKiBgbWFwYm94QXBpQWNjZXNzVG9rZW5gICh0ZXh0KSA9IFlvdSB3aWxsIG5lZWQgYSBtYXBib3ggdG9rZW4gdG8gdXNlIGRlY2suZ2wuIFBsZWFzZSBjcmVhdGUgYSBtYXBib3hcbiAgICAgKiBhbmQgZm9sbG93IHRoZSBpbnN0cnVjdGlvbnMgaGVyZTogaHR0cHM6Ly9kb2NzLm1hcGJveC5jb20vaGVscC9ob3ctbWFwYm94LXdvcmtzL2FjY2Vzcy10b2tlbnMvXG4gICAgICovXG4gICAgbWFwYm94QXBpQWNjZXNzVG9rZW46IFByb3BUeXBlcy5zdHJpbmcsXG5cblxuICAgIC8qKlxuICAgICAqIFRoaXMgcHJvcCBpcyB1cGRhdGVkIHdoZW4gYW4gZWxlbWVudCBpbiB0aGUgbWFwIGlzIGNsaWNrZWQuIFRoaXMgY29udGFpbnNcbiAgICAgKiB0aGUgb3JpZ2luYWwgZ2VzdHVyZSBldmVudCAoaW4gSlNPTikuXG4gICAgICovXG4gICAgY2xpY2tFdmVudDogUHJvcFR5cGVzLm9iamVjdCxcblxuXG4gICAgLyoqXG4gICAgICogVGhpcyBwcm9wIGlzIHVwZGF0ZWQgd2hlbiBhbiBlbGVtZW50IGluIHRoZSBtYXAgaXMgY2xpY2tlZC4gVGhpcyBjb250YWluc1xuICAgICAqIHRoZSBwaWNraW5nIGluZm8gZGVzY3JpYmluZyB0aGUgb2JqZWN0IGJlaW5nIGNsaWNrZWQuXG4gICAgICogXG4gICAgICogQ29tcGxldGUgZGVzY3JpcHRpb24gaGVyZTpcbiAgICAgKiBodHRwczovL2RlY2suZ2wvZG9jcy9kZXZlbG9wZXItZ3VpZGUvaW50ZXJhY3Rpdml0eSN0aGUtcGlja2luZy1pbmZvLW9iamVjdFxuICAgICAqL1xuICAgIGNsaWNrSW5mbzogUHJvcFR5cGVzLm9iamVjdCxcblxuXG4gICAgLyoqXG4gICAgICogVGhpcyBwcm9wIGlzIHVwZGF0ZWQgd2hlbiBhbiBlbGVtZW50IGluIHRoZSBtYXAgaXMgaG92ZXJlZC4gVGhpcyBjb250YWluc1xuICAgICAqIHRoZSBvcmlnaW5hbCBnZXN0dXJlIGV2ZW50IChpbiBKU09OKS5cbiAgICAgKi9cbiAgICBob3ZlckV2ZW50OiBQcm9wVHlwZXMub2JqZWN0LFxuXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHByb3AgaXMgdXBkYXRlZCB3aGVuIGFuIGVsZW1lbnQgaW4gdGhlIG1hcCBpcyBob3ZlcmVkLiBUaGlzIGNvbnRhaW5zXG4gICAgICogdGhlIHBpY2tpbmcgaW5mbyBkZXNjcmliaW5nIHRoZSBvYmplY3QgYmVpbmcgaG92ZXJlZC5cbiAgICAgKiBcbiAgICAgKiBDb21wbGV0ZSBkZXNjcmlwdGlvbiBoZXJlOlxuICAgICAqIGh0dHBzOi8vZGVjay5nbC9kb2NzL2RldmVsb3Blci1ndWlkZS9pbnRlcmFjdGl2aXR5I3RoZS1waWNraW5nLWluZm8tb2JqZWN0XG4gICAgICovXG4gICAgaG92ZXJJbmZvOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBwcm9wIGlzIHVwZGF0ZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgb24gdGhlIGNhbnZhcy4gVGhpcyBjb250YWluc1xuICAgICAqIHRoZSBvcmlnaW5hbCBnZXN0dXJlIGV2ZW50IChpbiBKU09OKS5cbiAgICAgKi9cbiAgICBkcmFnU3RhcnRFdmVudDogUHJvcFR5cGVzLm9iamVjdCxcblxuXG4gICAgLyoqXG4gICAgICogVGhpcyBwcm9wIGlzIHVwZGF0ZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgb24gdGhlIGNhbnZhcy4gVGhpcyBjb250YWluc1xuICAgICAqIHRoZSBwaWNraW5nIGluZm8gZGVzY3JpYmluZyB0aGUgb2JqZWN0IGJlaW5nIGRyYWdnZWQuXG4gICAgICogXG4gICAgICogQ29tcGxldGUgZGVzY3JpcHRpb24gaGVyZTpcbiAgICAgKiBodHRwczovL2RlY2suZ2wvZG9jcy9kZXZlbG9wZXItZ3VpZGUvaW50ZXJhY3Rpdml0eSN0aGUtcGlja2luZy1pbmZvLW9iamVjdFxuICAgICAqL1xuICAgIGRyYWdTdGFydEluZm86IFByb3BUeXBlcy5vYmplY3QsXG5cblxuICAgIC8qKlxuICAgICAqIFRoaXMgcHJvcCBpcyB1cGRhdGVkIHdoZW4gdGhlIHVzZXIgcmVsZWFzZXMgZnJvbSBkcmFnZ2luZyB0aGUgY2FudmFzLiBUaGlzIGNvbnRhaW5zXG4gICAgICogdGhlIG9yaWdpbmFsIGdlc3R1cmUgZXZlbnQgKGluIEpTT04pLlxuICAgICAqL1xuICAgIGRyYWdFbmRFdmVudDogUHJvcFR5cGVzLm9iamVjdCxcblxuXG4gICAgLyoqXG4gICAgICogVGhpcyBwcm9wIGlzIHVwZGF0ZWQgd2hlbiB0aGUgdXNlciByZWxlYXNlcyBmcm9tIGRyYWdnaW5nIHRoZSBjYW52YXMuIFRoaXMgY29udGFpbnNcbiAgICAgKiB0aGUgcGlja2luZyBpbmZvIGRlc2NyaWJpbmcgdGhlIG9iamVjdCBiZWluZyBkcmFnZ2VkLlxuICAgICAqIFxuICAgICAqIENvbXBsZXRlIGRlc2NyaXB0aW9uIGhlcmU6XG4gICAgICogaHR0cHM6Ly9kZWNrLmdsL2RvY3MvZGV2ZWxvcGVyLWd1aWRlL2ludGVyYWN0aXZpdHkjdGhlLXBpY2tpbmctaW5mby1vYmplY3RcbiAgICAgKi9cbiAgICBkcmFnRW5kSW5mbzogUHJvcFR5cGVzLm9iamVjdCxcblxuXG4gICAgLyoqXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcbiAgICAgKiB0byBEYXNoLCB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBjYWxsYmFja3MuXG4gICAgICovXG4gICAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==