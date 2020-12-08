import userEvent from "@testing-library/user-event";
import React from "react";
import {getByLabelText, renderInWrapper, screen} from "../../../../tests";
import buildCategoriesMock from "../../../../tests/build-categories-mock";
import "../../../../tests/match-media";
import CategoriesList from "../categories-list";

test("render categories list", function () {
  const data = buildCategoriesMock();
  renderInWrapper(<CategoriesList data={data} onDelete={jest.fn()} />);

  expect(screen.queryByLabelText(/categories-list/i)).toBeInTheDocument();
  expect(screen.queryAllByLabelText(/category-item/i)).toHaveLength(data.length);

  expect(screen.queryAllByLabelText(/more-link/i)).toHaveLength(data.length);
  expect(screen.queryAllByLabelText(/update-link/i)).toHaveLength(data.length);
  expect(screen.queryAllByLabelText(/delete/i)).toHaveLength(data.length);
});

test("render correct category item actions", function () {
  const data = buildCategoriesMock();

  renderInWrapper(<CategoriesList data={data} onDelete={jest.fn()} />);

  const [, , item] = data;
  const element = screen.getByLabelText(RegExp(`category-item-${item.id}`));

  expect(getByLabelText(element, /more-link/)).toHaveAttribute("href", `/categories/${item.id}`);
  expect(getByLabelText(element, /update-link/)).toHaveAttribute(
    "href",
    `/categories/${item.id}/update`,
  );
  expect(getByLabelText(element, /delete/)).toBeInTheDocument();
});

test("click delete right category", function () {
  const data = buildCategoriesMock();
  const handleDelete = jest.fn();

  renderInWrapper(<CategoriesList data={data} onDelete={handleDelete} />);

  const [, , item] = data;
  const element = screen.getByLabelText(RegExp(`category-item-${item.id}`));

  userEvent.click(getByLabelText(element, /delete/));
  expect(handleDelete).toBeCalledTimes(1);
  expect(handleDelete).toHaveBeenCalledWith(item.id);
});
