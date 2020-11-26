import React from "react";
import {render} from "react-dom";
import createStore from "./store/library/create-store";
import * as serviceWorker from "./web/library/utils/service-worker";
import worker from "./server/worker";
import AppView from "./web/main/components/views/app.view";

async function init() {
  await worker.start();
  render(<AppView store={createStore()} />, document.getElementById("root"));
}

init()
  .then(() => console.info("App is running..."))
  .catch(e => console.error("Failure to boot app:", e));

serviceWorker.unregister();
