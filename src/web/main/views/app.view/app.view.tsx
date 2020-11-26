import React from "react";
import {Provider} from "react-redux";
import {Store} from "redux";
import GlobalStyles from "../../../library/components/global-styles";
import {MessagesProvider} from "../../../library/hooks/use-messages";
import AppRouter from "../../routes/app.router";

interface AppViewProps {
  store: Store<MainState>; // TODO add action type
}

function AppView({store}: AppViewProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <MessagesProvider>
        <AppRouter />
      </MessagesProvider>
    </Provider>
  );
}

export default AppView;
