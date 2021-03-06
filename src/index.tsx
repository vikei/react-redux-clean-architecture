import React from "react";
import {render} from "react-dom";
import worker from "./server/main/worker";
import createStore from "./store/main/create-store";
import * as serviceWorker from "./web/library/utils/service-worker";
import AppView from "./web/main/views/app.view";

async function init() {
  await worker.start();
  render(<AppView store={createStore()} />, document.getElementById("root"));
}

init()
  .then(() => console.info("App is running..."))
  .catch(e => console.error("Failure to boot app:", e));

serviceWorker.unregister();
