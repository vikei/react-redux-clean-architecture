import {configureStore} from "@reduxjs/toolkit";
import request from "../../api/library/request";
import api from "../../api/main/api";
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
