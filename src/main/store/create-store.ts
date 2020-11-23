import {configureStore} from "@reduxjs/toolkit";
import mainReducer from "./main.reducer";

export default function createStore() {
  return configureStore({
    reducer: mainReducer,
  });
}
