import React from "react";
import {Provider} from "react-redux";
import {Store} from "redux";
import GlobalStyles from "../../../../library/elements/components/global-styles";
import AppRouter from "../../routes/app.router";

interface AppViewProps {
  store: Store<MainState>; // TODO add action type
}

function AppView({store}: AppViewProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <AppRouter />
    </Provider>
  );
}

export default AppView;
