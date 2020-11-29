import React from "react";
import {getByLabelText, render, screen} from "../../../../tests";
import "../../../../tests/match-media";
import buildCategoriesMock from "../../../../tests/build-categories-mock";
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
