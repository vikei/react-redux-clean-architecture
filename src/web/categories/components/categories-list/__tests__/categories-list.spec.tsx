import {build, fake, sequence} from "@jackfranklin/test-data-bot";
import userEvent from "@testing-library/user-event";
import React from "react";
import CategoryEntity from "../../../../../application/categories/entities/category.entity";
import {getByLabelText, render, screen} from "../../../../tests";
import "../../../../tests/match-media";
import CategoriesList from "../categories-list";

function buildCategoriesData() {
  const buildData = build<CategoryEntity>({
    fields: {
      id: sequence(),
      name: fake(f => f.name.title()),
    },
  });

  return Array(5)
    .fill("")
    .map(() => buildData());
}

it("render correct length of categories", function () {
  const data = buildCategoriesData();
  render(<CategoriesList data={data} onDelete={jest.fn()} />);

  expect(screen.queryAllByLabelText(/category-item/i)).toHaveLength(data.length);
});

it("render correct category item", function () {
  const data = buildCategoriesData();
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

it("delete right category", function () {
  const data = buildCategoriesData();

  const handleDelete = jest.fn();
  render(<CategoriesList data={data} onDelete={handleDelete} />);

  const [, , item] = data;
  const element = screen.getByLabelText(RegExp(`category-item-${item.id}`));

  userEvent.click(getByLabelText(element, /delete/));
  expect(handleDelete).toBeCalledTimes(1);
  expect(handleDelete).toHaveBeenCalledWith(item.id);
});
