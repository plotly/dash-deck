"""
Adapted from: https://pydeck.gl/gallery/arc_layer.html

Map of commutes to work within a segment of downtown San Francisco using a 
deck.gl ArcLayer.

Green indicates a start point, and red indicates the destination.

The data is collected by the US Census Bureau and viewable in the 2017 
LODES data set: https://lehd.ces.census.gov/data/
"""

import os

import dash
import dash_deck
import dash_html_components as html
import pydeck as pdk

mapbox_api_token = os.getenv("MAPBOX_ACCESS_TOKEN")


cube = pdk.Layer(
    "ScenegraphLayer",
    data=[{"coordinates": [-122.5776844, 37.7576171]}],
    scenegraph="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoxAnimated/glTF-Binary/BoxAnimated.glb",
    get_position="coordinates",
    get_orientation=[0, 20, 90],
    get_color=[250, 100, 100, 100],
    size_scale=1000,
    _lighting="pbr",
)

view_state = pdk.ViewState(
    latitude=37.7576171,
    longitude=-122.5776844,
    bearing=45,
    pitch=50,
    zoom=8,
)

r = pdk.Deck(
    cube,
    initial_view_state=view_state,
    mapbox_key=mapbox_api_token,
)

app = dash.Dash(__name__, external_scripts=None)

URL = "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoxAnimated/glTF-Binary/BoxAnimated.glb"
r.layers[0].scenegraph = URL

app.layout = html.Div(
    dash_deck.DeckGL(r.to_json(), id="deck-gl", mapboxKey=r.mapbox_key)
)


if __name__ == "__main__":
    app.run_server(debug=True)
