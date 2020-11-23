import React from "react";
import {Route, Switch} from "react-router-dom";
import CategoriesView from "./views/categories.view";
import CategoryView from "./views/category.view";
import CreateCategoryView from "./views/create-category.view";
import UpdateCategoryView from "./views/update-category.view";

export default function CategoriesRouter() {
  return (
    <Switch>
      <Route path="/categories" exact>
        <CategoriesView />
      </Route>
      <Route path="/categories/create">
        <CreateCategoryView />
      </Route>
      <Route path="/categories/:id" exact>
        <CategoryView />
      </Route>
      <Route path="/categories/:id/update">
        <UpdateCategoryView />
      </Route>
    </Switch>
  );
}
