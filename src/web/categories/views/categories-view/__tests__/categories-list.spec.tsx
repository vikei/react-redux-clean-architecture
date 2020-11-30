import userEvent from "@testing-library/user-event";
import React from "react";
import {getByLabelText, render, screen} from "../../../../tests";
import buildCategoriesMock from "../../../../tests/build-categories-mock";
import "../../../../tests/match-media";
import Categories from "../categories";

test("avoid call fetch when categories exist", function () {
  const fetchMock = jest.fn();
  const data = buildCategoriesMock();
  render(<Categories loading={false} data={data} onDelete={jest.fn()} fetch={fetchMock} />);

  expect(fetchMock).toHaveBeenCalledTimes(0);
});

test("call fetch when categories don't exist", function () {
  const fetchMock = jest.fn();
  render(<Categories loading={false} data={[]} onDelete={jest.fn()} fetch={fetchMock} />);

  expect(fetchMock).toHaveBeenCalledTimes(1);
});

test("render categories list", function () {
  const data = buildCategoriesMock();
  render(<Categories loading={false} data={data} onDelete={jest.fn()} fetch={jest.fn()} />);

  expect(screen.queryAllByLabelText(/more-link/i)).toHaveLength(data.length);
  expect(screen.queryAllByLabelText(/update-link/i)).toHaveLength(data.length);
  expect(screen.queryAllByLabelText(/delete/i)).toHaveLength(data.length);
});

test("render correct length of categories", function () {
  const data = buildCategoriesMock();

  render(<Categories data={data} fetch={jest.fn()} onDelete={jest.fn()} />);

  expect(screen.queryAllByLabelText(/category-item/i)).toHaveLength(data.length);
});

test("render correct category item", function () {
  const data = buildCategoriesMock();

  render(<Categories data={data} fetch={jest.fn()} onDelete={jest.fn()} />);

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

  render(<Categories data={data} fetch={jest.fn()} onDelete={handleDelete} />);

  const [, , item] = data;
  const element = screen.getByLabelText(RegExp(`category-item-${item.id}`));

  userEvent.click(getByLabelText(element, /delete/));
  expect(handleDelete).toBeCalledTimes(1);
  expect(handleDelete).toHaveBeenCalledWith(item.id);
});
