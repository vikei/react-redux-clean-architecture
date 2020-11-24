import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Store} from "redux";
import ArticlesRouter from "../../../../articles/elements/articles.router";
import CategoriesRouter from "../../../../categories/elements/categories.router";
import GlobalStyles from "../../../../library/elements/components/global-styles";

interface AppViewProps {
  store: Store<MainState>; // TODO add action type
}

function AppView({store}: AppViewProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            Ready to start...
          </Route>
          <Route path="/categories">
            <CategoriesRouter />
          </Route>
          <Route path="/articles">
            <ArticlesRouter />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default AppView;
