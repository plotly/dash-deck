/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import { DeckGL } from '../lib';

let json;
json = { "description": "The deck.gl website hexagonlayer example in JSON format", "websiteUrl": "https://deck.gl/#/examples/core-layers/hexagon-layer", "initialViewState": { "longitude": -1.4157267858730052, "latitude": 52.232395363869415, "zoom": 6.6, "minZoom": 5, "maxZoom": 15, "pitch": 40.5, "bearing": -27.396674584323023 }, "views": [ { "@@type": "MapView", "controller": true, "mapStyle": "mapbox://styles/mapbox/dark-v9" } ], "layers": [ { "@@type": "HexagonLayer", "id": "heatmap", "data": "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/3d-heatmap/heatmap-data.csv", "loadOptions": { "csv": { "header": false } }, "coverage": 1, "pickable": true, "autoHighlight": true, "elevationRange": [ 0, 3000 ], "elevationScale": 50, "extruded": true, "getPosition": "@@=-", "radius": 1000, "upperPercentile": 100, "colorRange": [ [ 1, 152, 189 ], [ 73, 227, 206 ], [ 216, 254, 181 ], [ 254, 237, 177 ], [ 254, 173, 84 ], [ 209, 55, 78 ] ] } ] };
// json = {};
// json = { "description": "A minimal deck.gl example rendering a circle with text", "initialViewState": { "longitude": -122.45, "latitude": 37.8, "zoom": 12 }, "layers": [ { "@@type": "ScatterplotLayer", "data": [ { "position": [ -122.45, 37.8 ] } ], "getFillColor": [ 255, 0, 0, 255 ], "getRadius": 1000 }, { "@@type": "TextLayer", "data": [ { "position": [ -122.45, 37.8 ], "text": "Hello World" } ] } ] };
// json = { "description": "The deck.gl website LineLayer example in JSON format", "websiteUrl": "https://deck.gl/#/examples/line-layers/line-layer", "initialViewState": { "latitude": 47.65, "longitude": 7, "zoom": 4.5, "maxZoom": 16, "pitch": 50, "bearing": 0 }, "map": true, "pickingRadius": 5, "views": [ { "@@type": "MapView", "controller": true, "mapStyle": "mapbox://styles/mapbox/dark-v9" } ], "layers": [ { "@@type": "ScatterplotLayer", "id": "airports", "data": "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/line/airports.json", "radiusScale": 20, "getPosition": "@@=coordinates", "getFillColor": [ 255, 140, 0 ], "getRadius": 60 }, { "@@type": "LineLayer", "id": "flight-paths", "data": "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/line/heathrow-flights.json", "opacity": 0.8, "strokeWidth": 3, "getSourcePosition": "@@=start", "getTargetPosition": "@@=end", "getColor": [ 200, 32, 64, 192 ] } ] };
// json = { "description": "The deck.gl website ScatterplotLayer example in JSON format", "websiteUrl": "https://deck.gl/#/examples/core-layers/scattterplot-layer", "initialViewState": { "longitude": -74, "latitude": 40.7, "zoom": 11, "maxZoom": 16, "pitch": 0, "bearing": 0 }, "views": [ { "@@type": "MapView", "controller": true, "mapStyle": "mapbox://styles/mapbox/light-v9" } ], "layers": [ { "@@type": "ScatterplotLayer", "data": "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/scatterplot/manhattan.json", "radiusScale": 30, "radiusMinPixels": 0.25, "getPosition": "@@=-", "getFillColor": [ 0, 128, 255 ], "getRadius": 1 } ] };

// uncomment below to test strings
// json = JSON.stringify(json);



// Copy paste your token here:
const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoieGhsdWx1IiwiYSI6ImNrZTF1NG5yNzAyeTIzMnAwM295YjcxM2QifQ.GfaoGEx1qjMB_7PPG9HP3A";


class App extends Component {
    render() {
        return (
            <div>
            <DeckGL
                id={"simple-string"}
                data={json}
                mapboxKey={MAPBOX_ACCESS_TOKEN}
            />
            </div>
        );
    }
}

export default App;
