import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ArticlesRouter from "../../articles/articles.router";
import CategoriesRouter from "../../categories/routes/categories.router";

export default function AppRouter() {
  return (
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
  );
}
