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
import pandas as pd

mapbox_api_token = "pk.eyJ1IjoiaGFyaXNiYWwiLCJhIjoiY2pzbmR0cTU1MGI4NjQzbGl5eTBhZmZrZCJ9.XN4kLWt5YzqmGQYVpFFqKw"  # os.getenv("MAPBOX_ACCESS_TOKEN")


DATA_URL = "https://raw.githubusercontent.com/ajduberstein/sf_public_data/master/bay_area_commute_routes.csv"
# A bounding box for downtown San Francisco, to help filter this commuter data
DOWNTOWN_BOUNDING_BOX = [
    -122.43135291617365,
    37.766492914983864,
    -122.38706428091974,
    37.80583561830737,
]


def in_bounding_box(point):
    """Determine whether a point is in our downtown bounding box"""
    lng, lat = point
    in_lng_bounds = DOWNTOWN_BOUNDING_BOX[0] <= lng <= DOWNTOWN_BOUNDING_BOX[2]
    in_lat_bounds = DOWNTOWN_BOUNDING_BOX[1] <= lat <= DOWNTOWN_BOUNDING_BOX[3]
    return in_lng_bounds and in_lat_bounds


df = pd.read_csv(DATA_URL)
# Filter to bounding box
df = df[df[["lng_w", "lat_w"]].apply(lambda row: in_bounding_box(row), axis=1)]

GREEN_RGB = [0, 255, 0, 40]
RED_RGB = [240, 100, 0, 40]

# Specify a deck.gl ArcLayer
arc_layer = pdk.Layer(
    "ArcLayer",
    data=df,
    get_width="S000 * 2",
    get_source_position=["lng_h", "lat_h"],
    get_target_position=["lng_w", "lat_w"],
    get_tilt=15,
    get_source_color=RED_RGB,
    get_target_color=GREEN_RGB,
    pickable=True,
    auto_highlight=True,
)

building = pdk.Layer(
    "ScenegraphLayer",
    data=[{"coordinates": [-122.5776844, 37.7576171]}],
    scenegraph="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoxAnimated/glTF-Binary/BoxAnimated.glb",
    # scenegraph='https://raw.githubusercontent.com/harisbal/datafiles/master/stp-level-0.gltf',
    get_position="coordinates",
    get_orientation=[0, 20, 90],
    get_color=[250, 100, 100, 100],
    size_scale=100,
    _lighting="pbr",
)

view_state = pdk.ViewState(
    latitude=37.7576171,
    longitude=-122.5776844,
    bearing=45,
    pitch=50,
    zoom=8,
)


TOOLTIP_TEXT = {
    "html": "{S000} jobs <br /> Home of commuter in red; work location in green"
}
r = pdk.Deck(
    building,
    initial_view_state=view_state,
    mapbox_key=mapbox_api_token,
)


external_scripts = [
    dict(src="https://unpkg.com/deck.gl@latest/dist.min.js"),
    dict(src="https://unpkg.com/@loaders.gl/gltf@latest/dist/dist.min.js"),
]
app = dash.Dash(__name__, external_scripts=None)

r.layers[
    0
].scenegraph = "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoxAnimated/glTF-Binary/BoxAnimated.glb"

app.layout = html.Div(
    dash_deck.DeckGL(
        r.to_json(), id="deck-gl", tooltip=TOOLTIP_TEXT, mapboxKey=r.mapbox_key
    )
)


if __name__ == "__main__":
    app.run_server(debug=True)
