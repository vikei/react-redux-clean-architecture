import {render as rtlRender} from "@testing-library/react";
import * as React from "react";
import {ComponentType, ReactElement} from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import createStore from "../../store/main/create-store";
import GlobalStyles from "../library/components/global-styles";
import {MessagesProvider} from "../library/hooks/use-messages";

export default function render(ui: ReactElement) {
  const store = createStore();
  const Wrapper: ComponentType = ({children}) => (
    <Provider store={store}>
      <GlobalStyles />
      <MessagesProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </MessagesProvider>
    </Provider>
  );
  return rtlRender(ui, {wrapper: Wrapper});
}
