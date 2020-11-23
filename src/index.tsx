import React from "react";
import {render} from "react-dom";
import AppView from "./main/elements/views/app.view";
import * as serviceWorker from "./main/service-worker";
import createStore from "./main/store/create-store";
import worker from "./server/worker";

async function init() {
  await worker.start();
  render(<AppView store={createStore()} />, document.getElementById("root"));
}

init()
  .then(() => console.info("App is running..."))
  .catch(e => console.error("Failure to boot app:", e));

serviceWorker.unregister();
