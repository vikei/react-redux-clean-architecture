import userEvent from "@testing-library/user-event";
import React from "react";
import {renderInWrapper, screen} from "../../../../tests";
import Header from "../header";

test("call search on search button click", function () {
  const handleSearchMock = jest.fn();

  renderInWrapper(<Header onSearch={handleSearchMock} />);

  const searchString = "programming";
  userEvent.type(screen.getByRole(/searchbox/i), searchString);
  userEvent.click(screen.getByRole(/button/i, {name: /search/i}));

  expect(handleSearchMock).toHaveBeenCalledTimes(1);
  expect(handleSearchMock).toHaveBeenCalledWith(searchString);
});

test("render create category link", function () {
  renderInWrapper(<Header onSearch={jest.fn()} />);

  expect(screen.getByLabelText(/create-category-link/i)).toBeInTheDocument();
});
