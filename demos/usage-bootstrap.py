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
import dash_core_components as dcc
import pydeck as pdk
import plotly.express as px
import pandas as pd


def Col(*args, md=None, **kwargs):
    if md is None:
        class_name = f"col"
    else:
        class_name = f"col-12 col-md-{md}"

    return html.Div(*args, className=class_name, **kwargs)


def Row(*args, **kwargs):
    return html.Div(*args, className="row", **kwargs)


def Card(*args, **kwargs):
    return html.Div(*args, className="card", **kwargs)


def CardBody(*args, **kwargs):
    return html.Div(*args, className="card-body", **kwargs)


def CardHeader(*args, **kwargs):
    return html.Div(*args, className="card-header", **kwargs)


mapbox_api_token = os.getenv("MAPBOX_ACCESS_TOKEN")


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
    arc_layer,
    initial_view_state=view_state,
    api_keys={"mapbox": mapbox_api_token},
)


bootstrap_css = (
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
)
app = dash.Dash(__name__, external_stylesheets=[bootstrap_css])


deck_container = html.Div(
    dash_deck.DeckGL(
        r.to_json(), id="deck-gl", tooltip=TOOLTIP_TEXT, mapboxKey=r.mapbox_key
    ),
    style={"height": "400px", "width": "100%", "position": "relative"},
)

graph_component = dcc.Graph(
    figure=px.bar(
        px.data.tips(),
        x="sex",
        y="total_bill",
        color="smoker",
        barmode="group",
    )
)

app.layout = html.Div(
    className="container",
    children=[
        html.Br(),
        Row(
            [
                Col(Card([CardHeader("My Deck Map"), CardBody(deck_container)])),
                Col(Card([CardHeader("Some bar graph"), CardBody(graph_component)])),
            ]
        ),
        html.Br(),
        Row(
            [
                Col(Card(CardBody("Some content here"))),
                Col(Card(CardBody("Some more content here"))),
            ]
        ),
    ],
)


if __name__ == "__main__":
    app.run_server(debug=True)
