<!--
Thanks for your interest in Plotly's Dash Deck Component!

Note that GitHub issues in this repo are reserved for bug reports and feature
requests. Implementation questions should be discussed in our
[Dash Community Forum](https://community.plotly.com/c/dash).

Before opening a new issue, please search through existing issues (including
closed issues) and the [Dash Community Forum](https://community.plotly.com/c/dash).

When reporting a bug, please include a reproducible example! We recommend using
the [latest version](https://github.com/plotly/dash-deck/blob/master/CHANGELOG.md)
as this project is frequently updated. Issues can be browser-specific so
it's usually helpful to mention the browser and version that you are using.

-->

#### Description

#### Steps/Code to Reproduce
<!--
Example:
```python
import dash
import dash_deck
import dash_html_components as html


data = {
    "description": "A minimal deck.gl example rendering a circle with text",
    "initialViewState": {"longitude": -122.45, "latitude": 37.8, "zoom": 12},
    "layers": [
        {
            "@@type": "ScatterplotLayer",
            "data": [{"position": [-122.45, 37.8]}],
            "getFillColor": [255, 0, 0, 255],
            "getRadius": 1000,
        },
        {
            "@@type": "TextLayer",
            "data": [{"position": [-122.45, 37.8], "text": "Hello World"}],
        },
    ],
}

app = dash.Dash(__name__)

app.layout = html.Div(dash_deck.DeckGL(data, id="deck-gl"))


if __name__ == "__main__":
    app.run_server(debug=True)
```
If the code is too long, feel free to put it in a public gist and link
it in the issue: https://gist.github.com
-->

#### Expected Results
<!-- Please paste or describe the expected results.-->

#### Actual Results
<!-- Please paste or specifically describe the actual output or traceback. -->

#### Versions
<!--
Please run the following snippet and paste the output below:

from __future__ import print_function
import dash; print("Dash", dash.__version__)
import dash_html_components; print("Dash Core Components", dash_html_components.__version__)
import dash_core_components; print("Dash HTML Components", dash_core_components.__version__)
import dash_deck; print("Dash Deck", dash_deck.__version__)
-->


<!-- 
Thanks for taking the time to help up improve this component. Dash Deck 
would not be possible without awesome contributors like you!
 -->
