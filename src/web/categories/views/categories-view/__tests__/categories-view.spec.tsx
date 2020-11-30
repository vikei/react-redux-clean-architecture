import React from "react";
import {renderInWrapper, screen} from "../../../../tests";
import "../../../../tests/match-media";
import CategoriesView from "../categories-view";

/*test("avoid call fetch when categories exist", function () {
  renderInWrapper(<CategoriesView />);
});

test("call fetch when categories don't exist", function () {
  renderInWrapper(<CategoriesView />);
});*/

test("render page elements", function () {
  renderInWrapper(<CategoriesView />);

  expect(screen.getByRole(/searchbox/i)).toBeInTheDocument();
  expect(screen.getByRole(/button/i, {name: /search/i})).toBeInTheDocument();
  expect(screen.queryByLabelText(/categories-list/i)).toBeInTheDocument();
});
