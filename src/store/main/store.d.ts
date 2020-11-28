import {AsyncThunkConfig} from "@reduxjs/toolkit";
import {Request} from "../../api/library/request";
import {API} from "../../api/main/api";
import createStore from "./create-store";
import mainReducer from "./main.reducer";

declare global {
  export interface ThunkApiConfig extends AsyncThunkConfig {
    dispatch: MainDispatch;
    state: MainState;
    extra: {
      api: API;
      request: Request;
    };
  }

  export type MainState = ReturnType<typeof mainReducer>;

  export type MainDispatch = ReturnType<typeof createStore>["dispatch"];
}
