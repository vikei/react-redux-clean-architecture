import userEvent from "@testing-library/user-event";
import React from "react";
import {act, render, screen} from "../../../../tests";
import "../../../../tests/match-media";
import {buildCategoryMock} from "../../../../tests/build-categories-mock";
import CategoryForm from "../category-form";

test("submit form with data", async function () {
  const handleSubmitMock = jest.fn();
  render(<CategoryForm onSubmit={handleSubmitMock} />);

  const {name} = buildCategoryMock()();

  userEvent.type(screen.getByLabelText(/name/i), name);
  userEvent.click(screen.getByRole("button", {name: /submit/i}));

  /* Needed await because ant form async */
  await act(() => Promise.resolve());

  expect(handleSubmitMock).toHaveBeenCalledTimes(1);
  expect(handleSubmitMock).toHaveBeenCalledWith({
    name,
  });
});

test("set default values", async function () {
  const handleSubmitMock = jest.fn();
  const {name} = buildCategoryMock()();

  render(<CategoryForm initialValues={{name}} onSubmit={handleSubmitMock} />);

  expect(screen.getByLabelText(/name/i)).toHaveDisplayValue(name);
});
