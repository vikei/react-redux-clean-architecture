import createStore from "./create-store";
import mainReducer from "./main.reducer";

declare global {
  export interface ThunkApiConfig {
    dispatch: MainDispatch;
    state: MainState;
  }

  export type MainState = ReturnType<typeof mainReducer>;

  export type MainDispatch = ReturnType<typeof createStore>["dispatch"];
}
