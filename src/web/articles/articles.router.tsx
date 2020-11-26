import React from "react";
import {Route, Switch} from "react-router-dom";
import ArticleView from "./views/article.view";
import ArticlesView from "./views/articles.view";
import CreateArticleView from "./views/create-article.view";
import UpdateArticleView from "./views/update-article.view";

export default function ArticlesRouter() {
  return (
    <Switch>
      <Route path="/articles" exact>
        <ArticlesView />
      </Route>
      <Route path="/articles/create">
        <CreateArticleView />
      </Route>
      <Route path="/articles/:id" exact>
        <ArticleView />
      </Route>
      <Route path="/articles/:id/update">
        <UpdateArticleView />
      </Route>
    </Switch>
  );
}
