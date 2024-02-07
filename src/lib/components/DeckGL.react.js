import React from 'react';
import Deck from "deck.gl"
import { StaticMap } from "react-map-gl";
import { JSONConverter } from '@deck.gl/json';
import { CSVLoader } from "@loaders.gl/csv";
import { GLTFLoader } from "@loaders.gl/gltf";
import { registerLoaders } from "@loaders.gl/core";
import * as core from '@deck.gl/core';
import * as layers from "@deck.gl/layers";
import * as aggregationLayers from "@deck.gl/aggregation-layers";
import * as geoLayers from "@deck.gl/geo-layers";
import * as meshLayers from "@deck.gl/mesh-layers";
import PropTypes from 'prop-types';
import GL from '@luma.gl/constants';

import * as LumaGL from '../lumagl';
import makeTooltip from '../tooltip';


// CSV loader is needed to download and read CSV Files
// GLTF loader is needed to download and read GLTF and GLB Files
registerLoaders([CSVLoader, GLTFLoader]);
// Configure the JSON converter to include all possible
// layers and views.
const configuration = {
  classes: Object.assign(
    {},
    layers,
    aggregationLayers,
    geoLayers,
    meshLayers,
    // All the core elements of deck.gl
    core,
    // Cherry picked luma.gl exports relevant to deck
    LumaGL
  ),
  enumerations: {
    COORDINATE_SYSTEM: core.COORDINATE_SYSTEM,
    GL
  }
}
const jsonConverter = new JSONConverter({ configuration });


/**
 * This component lets you visualizes PyDeck and deck/json files
 * directly in Dash. It also exposes various events (such as click,
 * hover and drag) inside callbacks.
 */
export default class DeckGL extends React.Component {
  safeSetProps(events) {
    // This method sanitizes the info and event objects that are
    // output by onClick, onHover, etc. Then, it proceeds to call setProps.
    const propsToClean = ["layer", "target", "rootElement"];

    Object.keys(events).map(key => {
      const e = events[key];
      // Cleaning starts here:
      propsToClean.map(prop => {
        if (prop in e && e[prop] !== null) {
          e[prop] = e[prop].toString();
        }
      })
    })

    if ('setProps' in this.props) {
      this.props.setProps(events);
    } else {
      console.warn(
        "setProps is not a function of this.props, as a result the following object was not updated:",
        events,
      );
    }
  }

  componentDidMount() {
    const { disableContext } = this.props
    if (disableContext) {
      document
        .getElementById("deckgl-wrapper")
        .addEventListener("contextmenu", evt => evt.preventDefault());
    }
  }


  render() {
    let { enableEvents, data } = this.props;
    const { id, mapboxKey, tooltip, style } = this.props;
    const getTooltip = makeTooltip(tooltip);

    // ******* PARSE AND CONVERT JSON *******
    // If data is a string, we need to convert into JSON format
    if (typeof (data) === "string") {
      data = JSON.parse(data);
    }
    // Now, we can convert the JSON document to a deck object
    const deckProps = jsonConverter.convert(data);

    // ******** UPDATE DECK PROPS ********
    // Assign the ID to the deck object
    deckProps.id = id;
    // Extract the map style from JSON document, since the map style 
    // is sometimes located in data.views.length
    if (!("mapStyle" in deckProps) && "views" in data && data.views.length > 0) {
      deckProps.mapStyle = data.views[0].mapStyle;
    }

    // ******** STATIC MAP ******** 
    // Only render static map if a mapbox token was given
    let staticMap;
    if (mapboxKey !== null) {
      staticMap = <StaticMap
        mapboxApiAccessToken={mapboxKey}
        mapStyle={deckProps.mapStyle}
      />
    } else {
      staticMap = null;
    }

    // ******** EVENT CALLBACKS ********
    // First, convert enableEvents to list if it was a boolean
    if (enableEvents === true) {
      enableEvents = ['click', 'dragStart', 'dragEnd', 'hover'];
    }
    else if (enableEvents === false) {
      enableEvents = [];
    }
    // Now, construct the respective functions
    const clickFn = (info, e) => this.safeSetProps({ clickInfo: info, clickEvent: e });
    const dragStartFn = (info, e) => this.safeSetProps({ dragStartInfo: info, dragStartEvent: e });
    const dragEndFn = (info, e) => this.safeSetProps({ dragEndInfo: info, dragEndEvent: e });
    const hoverFn = (info, e) => this.safeSetProps({ hoverInfo: info, hoverEvent: e });

    // Finally, assign them as prop to deckProps
    deckProps.onClick = enableEvents.includes("click") ? clickFn : null;
    deckProps.onDragStart = enableEvents.includes("dragStart") ? dragStartFn : null;
    deckProps.onDragEnd = enableEvents.includes("dragEnd") ? dragEndFn : null;
    deckProps.onHover = enableEvents.includes("hover") ? hoverFn : null;

    return (
      <Deck
        getTooltip={getTooltip}
        style={style}
        {...deckProps}
      >
        {staticMap}
      </Deck>
    );
  }
}

DeckGL.defaultProps = {
  data: {},
  mapboxKey: null,
  tooltip: false,
  enableEvents: false,
  disableContext: false,
  style: {}
};

DeckGL.propTypes = {
  /**
   * Your map using the Deck.gl JSON format. This can be generated by calling
   * `pdk.Deck(...).to_json()`. Both a Python dictionary and a JSON-string your map is accepted.
   */
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: PropTypes.string,

  /**
   * Custom CSS for your map. This is useful for changing the height, width, and sometimes the background color.
   */
  style: PropTypes.object,

  /**
   * Either a boolean indicating if all event callbacks should be enabled, or a list of strings
   * indicating which ones should be used. If it's a list, you will need to specify one of the
   * following gestures: `click`, `dragStart`, `dragEnd`, `hover`.
   */
  enableEvents: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string), PropTypes.bool
  ]),

  /**
   * This can be a boolean value (e.g. `True`, `False`) to display the default tooltip.
   * You can also give a dictionary specifying an `html` template and custom style using `css`. For more
   * information about templating, see: https://pydeck.gl/tooltip.html
   */
  tooltip: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),


  /**
   * You will need a mapbox token to use deck.gl. Please create a mapbox
   * and follow the instructions here: https://docs.mapbox.com/help/how-mapbox-works/access-tokens/
   */
  mapboxKey: PropTypes.string,

  /**
   * This is a boolean value (e.g. `True`, `False`)  indicating whether or not to disable the default context menu
   * that shows up when right clicking on the map. If set to `True`, right clicking to rotate
   * a map or adjust its pitch will not trigger the default context menu.
   */
  disableContext: PropTypes.bool,


  /**
   * Read-only prop. To use this, make sure that `enableEvents` is set to `True`, or that `enableEvents` is a list that contains this event type.
   * This prop is updated when an element in the map is clicked. This contains
   * the original gesture event (in JSON).
   */
  clickEvent: PropTypes.object,


  /**
   * Read-only prop. To use this, make sure that `enableEvents` is set to `True`, or that `enableEvents` is a list that contains this event type.
   * This prop is updated when an element in the map is clicked. This contains
   * the picking info describing the object being clicked.
   * Complete description here:
   * https://deck.gl/docs/developer-guide/interactivity#the-picking-info-object
   */
  clickInfo: PropTypes.object,


  /**
   * Read-only prop. To use this, make sure that `enableEvents` is set to `True`, or that `enableEvents` is a list that contains this event type.
   * This prop is updated when an element in the map is hovered. This contains
   * the original gesture event (in JSON).
   */
  hoverEvent: PropTypes.object,


  /**
   * Read-only prop. To use this, make sure that `enableEvents` is set to `True`, or that `enableEvents` is a list that contains this event type.
   * This prop is updated when an element in the map is hovered. This contains
   * the picking info describing the object being hovered.
   * Complete description here:
   * https://deck.gl/docs/developer-guide/interactivity#the-picking-info-object
   */
  hoverInfo: PropTypes.object,

  /**
   * Read-only prop. To use this, make sure that `enableEvents` is set to `True`, or that `enableEvents` is a list that contains this event type.
   * To use this, make sure that `enableEvents` is set to `True`, or that `enableEvents` is a list that contains this event type. 
   * This prop is updated when the user starts dragging on the canvas. This contains
   * the original gesture event (in JSON).
   */
  dragStartEvent: PropTypes.object,


  /**
   * Read-only prop. To use this, make sure that `enableEvents` is set to `True`, or that `enableEvents` is a list that contains this event type.
   * This prop is updated when the user starts dragging on the canvas. This contains
   * the picking info describing the object being dragged.
   * Complete description here:
   * https://deck.gl/docs/developer-guide/interactivity#the-picking-info-object
   */
  dragStartInfo: PropTypes.object,


  /**
   * Read-only prop. To use this, make sure that `enableEvents` is set to `True`, or that `enableEvents` is a list that contains this event type.
   * This prop is updated when the user releases from dragging the canvas. This contains
   * the original gesture event (in JSON).
   */
  dragEndEvent: PropTypes.object,


  /**
   * Read-only prop. To use this, make sure that `enableEvents` is set to `True`, or that `enableEvents` is a list that contains this event type.
   * This prop is updated when the user releases from dragging the canvas. This contains
   * the picking info describing the object being dragged.
   * Complete description here:
   * https://deck.gl/docs/developer-guide/interactivity#the-picking-info-object
   */
  dragEndInfo: PropTypes.object,


  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: PropTypes.func
};
