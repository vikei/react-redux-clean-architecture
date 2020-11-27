import request from "../../api/library/request";
import api from "../../api/main/api";
import createStore from "./create-store";
import mainReducer from "../main/main.reducer";
import {AsyncThunkConfig} from "@reduxjs/toolkit";

declare global {
  export interface ThunkApiConfig extends AsyncThunkConfig {
    dispatch: MainDispatch;
    state: MainState;
    extra: {
      api: typeof api;
      request: typeof request;
    };
  }

  export type MainState = ReturnType<typeof mainReducer>;

  export type MainDispatch = ReturnType<typeof createStore>["dispatch"];
}
