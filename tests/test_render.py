import os
import time

from dash.testing.application_runners import import_app

names = ['usage', 'usage-pdk'] + [
    "demos." + n.replace(".py", "")
    for n in os.listdir("./demos")
    if ".py" in n
]


def build_test(name, sleep=5):
    def test_fn(dash_duo):
        app = import_app(name)
        dash_duo.start_server(app)
        dash_duo.wait_for_element('canvas')
        time.sleep(sleep)
        dash_duo.take_snapshot(name + ".py")

    return test_fn


for n in names:
    var_name = "test_" + n.replace("-", "_").replace("demos.", "")
    locals()[var_name] = build_test(n)
