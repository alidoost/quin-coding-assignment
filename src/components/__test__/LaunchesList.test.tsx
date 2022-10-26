import { screen, waitFor } from "@testing-library/react";
import { mockApiResult } from "../../test-utils/mock-data";

import { rest } from "msw";
import { setupServer } from "msw/node";
import LaunchesList from "../LaunchesList";
import { renderWithProviders } from "../../test-utils/utils";

export const handlers = [
  rest.get("/api/user", (req, res, ctx) => {
    return res(ctx.json(mockApiResult), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe("LaunchesList features", () => {
  it("should render all the launches info received by the API", async () => {
    renderWithProviders(<LaunchesList />);
    waitFor(async () => {
      mockApiResult.results.forEach(async (r: any) => {
        const firstLaunchEl = await screen.findAllByText(
          mockApiResult.results[r].name
        );
        expect(firstLaunchEl).toBeInTheDocument();
      });
    });
  });
});
