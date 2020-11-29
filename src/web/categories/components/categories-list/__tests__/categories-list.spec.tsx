import {build, fake, sequence} from "@jackfranklin/test-data-bot";
import {getByLabelText, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MatchMediaMock from "jest-matchmedia-mock";
import MatchMedia from "jest-matchmedia-mock";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import CategoryEntity from "../../../../../application/categories/entities/category.entity";
import CategoriesList from "../categories-list";

let matchMedia: MatchMedia;

beforeAll(() => {
  matchMedia = new MatchMediaMock();
});

afterEach(() => {
  matchMedia.clear();
});

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
  console.log(data);
  render(<CategoriesList data={data} onDelete={jest.fn()} />, {
    wrapper: ({children}) => <BrowserRouter>{children}</BrowserRouter>,
  });

  expect(screen.queryAllByLabelText(/category-item/i)).toHaveLength(data.length);
});

it("render correct category item", function () {
  const data = buildCategoriesData();
  render(<CategoriesList data={data} onDelete={jest.fn()} />, {
    wrapper: ({children}) => <BrowserRouter>{children}</BrowserRouter>,
  });

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
  render(<CategoriesList data={data} onDelete={handleDelete} />, {
    wrapper: ({children}) => <BrowserRouter>{children}</BrowserRouter>,
  });

  const [, , item] = data;
  const element = screen.getByLabelText(RegExp(`category-item-${item.id}`));

  userEvent.click(getByLabelText(element, /delete/));
  expect(handleDelete).toBeCalledTimes(1);
  expect(handleDelete).toHaveBeenCalledWith(item.id);
});
