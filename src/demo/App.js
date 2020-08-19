/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import { DeckGL } from '../lib';

const json = { 
    "description": "A minimal deck.gl example rendering a circle with text", 
    "initialViewState": { "longitude": -122.45, "latitude": 37.8, "zoom": 12 }, 
    "layers": [ 
        { 
            "@@type": "ScatterplotLayer", 
            "data": [ { "position": [ -122.45, 37.8 ] } ], 
            "getFillColor": [ 255, 0, 0, 255 ], 
            "getRadius": 1000 
        },
        { 
            "@@type": "TextLayer", 
            "data": [ { "position": [ -122.45, 37.8 ], 
            "text": "Hello World" } ] 
        } 
    ] 
};


// Copy paste your token here:
const MAPBOX_ACCESS_TOKEN = undefined;


class App extends Component {
    render() {
        return (
            <DeckGL 
                json={json} 
                id={"deck-gl"} 
                mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
            />
        )
    }
}

export default App;
