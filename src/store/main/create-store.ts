import {configureStore} from "@reduxjs/toolkit";
import api from "../../application/api/api";
import request from "../../application/library/request";
import mainReducer from "./main.reducer";

export default function createStore() {
  return configureStore({
    reducer: mainReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api,
            request,
          },
        },
      }),
  });
}
