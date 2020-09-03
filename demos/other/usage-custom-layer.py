"""
Adapted from: https://pydeck.gl/gallery/custom_layer.html

============================
A custom layer named LabeledGeoJsonLayer copied from this Observable Notebook for use in pydeck:

https://observablehq.com/@pessimistress/deck-gl-custom-layer-tutorial

Registering a custom layer requires some knowledge of JavaScript and bundling.
See https://github.com/ajduberstein/pydeck_custom_layer for a minimal example layer.
"""
import os

import dash
import dash_deck
import dash_html_components as html
import pydeck
import pandas as pd

mapbox_api_token = os.getenv("MAPBOX_ACCESS_TOKEN")


# Insert here
pydeck.settings.custom_libraries = [
    {
        "libraryName": "LabeledGeoJsonLayerLibrary",
        "resourceUri": "https://unpkg.com/pydeck-custom-layer-demo/dist/bundle.js",
    }
]

DATA_URL = (
    "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"
)

custom_layer = pydeck.Layer(
    "LabeledGeoJsonLayer",
    data=DATA_URL,
    filled=False,
    billboard=False,
    get_line_color=[180, 180, 180],
    get_label="properties.name",
    get_label_size=200000,
    get_label_color=[0, 255, 255],
    label_size_units='"meters"',
    line_width_min_pixels=1,
)

view_state = pydeck.ViewState(latitude=0, longitude=0, zoom=1)

r = pydeck.Deck(custom_layer, initial_view_state=view_state, map_provider=None)

external_scripts = [
    {"src": "https://unpkg.com/pydeck-custom-layer-demo/dist/bundle.js"}
]
app = dash.Dash(__name__, external_scripts=external_scripts)

app.layout = html.Div(dash_deck.DeckGL(r.to_json(), id="deck-gl"))


if __name__ == "__main__":
    app.run_server(debug=True)
