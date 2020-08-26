import os
import time
import warnings


from dash.testing.application_runners import import_app


def take_snapshot(dash_duo, name):
    target = "/tmp/dash_artifacts" if not dash_duo._is_windows() else os.getenv("TEMP")
    try:
        os.makedirs(target, exist_ok=True)
    except OSError:
        warnings.warn("Unable to create the target directory", OSError)

    dash_duo.driver.save_screenshot("{}/{}.png".format(target, name))


names = ["usage", "usage-pdk"] + [
    "demos." + n.replace(".py", "") for n in os.listdir("./demos") if ".py" in n
]


def build_test(name, sleep=5):
    def test_fn(dash_duo):
        app = import_app(name)
        dash_duo.start_server(app)
        dash_duo.wait_for_element("canvas")
        time.sleep(sleep)
        take_snapshot(dash_duo, name.replace("demos.", ""))

    return test_fn


for n in names:
    var_name = "test_" + n.replace("-", "_").replace("demos.", "")
    locals()[var_name] = build_test(n)
