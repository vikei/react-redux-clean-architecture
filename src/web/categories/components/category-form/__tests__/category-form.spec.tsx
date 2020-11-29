import {build, fake} from "@jackfranklin/test-data-bot";
import {act, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MatchMedia from "jest-matchmedia-mock";
import MatchMediaMock from "jest-matchmedia-mock";
import React from "react";
import CategoryDto from "../../../../../application/categories/dtos/category-dto";
import CategoryForm from "../category-form";

let matchMedia: MatchMedia;

beforeAll(() => {
  matchMedia = new MatchMediaMock();
});

afterEach(() => {
  matchMedia.clear();
});

const buildCategoriesValues = build<CategoryDto>({
  fields: {
    name: fake(f => f.name.title()),
  },
});

it("submit form with data", async function () {
  const handleSubmit = jest.fn();
  render(<CategoryForm onSubmit={handleSubmit} />);

  const {name} = buildCategoriesValues();

  userEvent.type(screen.getByLabelText(/name/i), name);
  userEvent.click(screen.getByRole("button", {name: /submit/i}));

  /* Needed await because ant form async */
  await act(() => Promise.resolve());

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({
    name,
  });
});

it("set default values", async function () {
  const handleSubmit = jest.fn();
  const {name} = buildCategoriesValues();

  render(<CategoryForm initialValues={{name}} onSubmit={handleSubmit} />);

  expect(screen.getByLabelText(/name/i)).toHaveDisplayValue(name);
});
