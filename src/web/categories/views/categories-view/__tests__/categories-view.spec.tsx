import {rest} from "msw";
import {setupServer} from "msw/node";
import MutationObserver from "mutation-observer";
import React from "react";
import {renderInWrapper, screen, waitForElementToBeRemoved} from "../../../../tests";
import buildCategoriesMock from "../../../../tests/build-categories-mock";
import "../../../../tests/match-media";
import CategoriesView from "../categories-view";

const server = setupServer();

beforeAll(() => {
  global.MutationObserver = MutationObserver;

  server.listen();
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  server.resetHandlers();
});

test("display categories", async () => {
  const data = buildCategoriesMock();
  server.use(
    rest.get("http://blog.com/categories", (req, res, ctx) => {
      return res(ctx.json({data}));
    }),
  );

  const {container} = renderInWrapper(<CategoriesView />);

  await waitForElementToBeRemoved(() => container.querySelector(".ant-list-loading"));

  expect(screen.queryByLabelText(/categories-list/i)).toBeInTheDocument();
  expect(screen.queryAllByLabelText(/category-item/i)).toHaveLength(data.length);
});
