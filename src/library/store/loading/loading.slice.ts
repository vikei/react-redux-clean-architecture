import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type LoadingStatus = "idle" | "pending" | "resolved" | "rejected";
export type LoadingKeys = string | "categories";

export type LoadingState = {
  [key in LoadingKeys]?: LoadingStatus;
};

const initialState: LoadingState = {};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (
      state,
      {payload: {key, status}}: PayloadAction<{key: LoadingKeys; status: LoadingStatus}>,
    ) => ({
      ...state,
      [key]: status,
    }),
  },
});

export const {reducer: loadingReducer} = loadingSlice;

export const {
  actions: {setLoading},
} = loadingSlice;
