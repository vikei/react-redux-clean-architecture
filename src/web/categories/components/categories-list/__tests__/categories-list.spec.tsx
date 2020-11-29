import userEvent from "@testing-library/user-event";
import React from "react";
import {getByLabelText, render, screen} from "../../../../tests";
import buildCategoriesMock from "../../../../tests/build-categories-mock";
import "../../../../tests/match-media";
import CategoriesList from "../categories-list";

test("render correct length of categories", function () {
  const data = buildCategoriesMock();

  render(<CategoriesList data={data} onDelete={jest.fn()} />);

  expect(screen.queryAllByLabelText(/category-item/i)).toHaveLength(data.length);
});

test("render correct category item", function () {
  const data = buildCategoriesMock();

  render(<CategoriesList data={data} onDelete={jest.fn()} />);

  const [, , item] = data;
  const element = screen.getByLabelText(RegExp(`category-item-${item.id}`));

  expect(getByLabelText(element, /more-link/)).toHaveAttribute("href", `/categories/${item.id}`);
  expect(getByLabelText(element, /update-link/)).toHaveAttribute(
    "href",
    `/categories/${item.id}/update`,
  );
  expect(getByLabelText(element, /delete/)).toBeInTheDocument();
});

test("delete right category", function () {
  const data = buildCategoriesMock();
  const handleDelete = jest.fn();

  render(<CategoriesList data={data} onDelete={handleDelete} />);

  const [, , item] = data;
  const element = screen.getByLabelText(RegExp(`category-item-${item.id}`));

  userEvent.click(getByLabelText(element, /delete/));
  expect(handleDelete).toBeCalledTimes(1);
  expect(handleDelete).toHaveBeenCalledWith(item.id);
});
