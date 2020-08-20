# Dash Deck

Dash Deck is Dash component that brings `deck.gl` to Dash. It lets you create interactive 3D maps and views directly in Dash, and supports `pydeck` and `JSON` input.

## Getting started

### Quickstart (Python)

First install this library:
```
pip install dash-deck
```

then, define your map using the deck.gl JSON API:

```python
data = {
    "description": "A minimal deck.gl example rendering a circle with text",
    "initialViewState": {"longitude": -122.45, "latitude": 37.8, "zoom": 12},
    "layers": [
        {
            "@@type": "TextLayer",
            "data": [{"position": [-122.45, 37.8], "text": "Hello World"}],
        },
    ],
}
```

finally, create your component and add it to your layout:

```python
import dash
import dash_deck
import dash_html_components as html

deck_component = dash_deck.DeckGL(data=data, id="deck-gl")

app = dash.Dash(__name__)
app.layout = html.Div(deck_component)
```

For a full example, see `usage.py`. To find examples of the JSON API, see [the deck.gl playground](https://deck.gl/playground/).


### Quickstart (R)

(tbd)

### `pydeck` integrations

Make sure you have `pydeck` installed:
```
pip install pydeck
```

then, define a layer using `pdk` and run it:
```python
import pydeck as pdk

layer = pdk.Layer(
    "TextLayer",
    [{"position": [-122.45, 37.8], "text": "Hello World"}]
)

# Render
r = pdk.Deck(layers=[layer])
```

then, convert it to JSON and add it to your layout:

```python
import dash
import dash_deck
import dash_html_components as html

deck_component = dash_deck.DeckGL(r.to_json(), id="deck-gl")

app = dash.Dash(__name__)
app.layout = html.Div(deck_component)
```

To learn how to use `pydeck`, read more in [the official documentations](https://pydeck.gl/). You can find a complete example in `usage-pdk.py`.

### Mapbox tokens

Make sure that you have created a [Mapbox access token](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/), and export it as an environment variable. For example, you can add the following line to your `.bashrc`:
```
export MAPBOX_ACCESS_TOKEN="pk.ey..."
```

Then, inside your app, define retrieve and define it as `mapbox_api_token`:
```python
import os
mapbox_api_token = os.getenv("MAPBOX_ACCESS_TOKEN")
```

When you define your component, simply pass it to `DeckGL` as an argument:
```python
...

r = pdk.Deck(...)

deck_component = dash_deck.DeckGL(r.to_json(), id="deck-gl", mapboxKey=mapbox_api_token)

...
```


## Running the demos

First, make sure you clone the project:
```
git clone https://github.com/plotly/dash-deck.git
cd dash-deck/
```

Create and activate a conda env:
```
conda create -n deck-demos python=3.7
conda activate deck-demos
```

Or a venv (make sure your `python3` is 3.6+):
```
python3 -m venv venv
source venv/bin/activate  # for Windows, use venv\Scripts\activate.bat
```

Install all the dev and demo requirements:

```
pip install -r requirements.txt
pip install -r demos/requirements.txt
```

You can now run the demo you want to try (replace `<name>` with the layer type you want to try):
```
python demos/usage-<name>.py
```

## Tips and Advices

### Change height and width

To change `height` or `width`, ou need to specify a `"view"` dict or `pdk.View` when constructing your map dictionary or `pdk.Deck`. See `usage.py` and `usage-pdk.py` for examples on constructing a `View`.

### Callbacks and events

Various events are exposed as read-only props, and you can use them as `Input` or `State` to your callbacks. They are named `[click|hover|dragStart|dragEnd][Info|Event]`; the first part descirbes the gesture, and `Info` is the picking info describing the object being clicked and `Event` is the original gesture event (in JSON). You can read more about [`Info` in the deck.gl developer guide](https://deck.gl/docs/developer-guide/interactivity#the-picking-info-object).


## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

## License

Dash and Dash Deck are licensed under MIT. Please view LICENSE for more details.

## Contact and Support

If you are interested in supporting the development of this library, check out our [consulting & training page](https://plotly.com/consulting-and-oem/). For enterprise support and deployment, [contact us](https://plotly.com/contact-us).

## References

(TBD)