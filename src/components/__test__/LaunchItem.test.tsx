import { render, screen } from "@testing-library/react";
import { launchesMockData } from "../../test-utils/mock-data";
import LaunchItem from "../LaunchItem";

describe("LaunchItem features", () => {
  it("should display the content of Launch properly when component rendered", () => {
    render(<LaunchItem launch={launchesMockData[0]} />);
    screen.getByText(launchesMockData[0].name);
    screen.getByText(launchesMockData[0].id);
    screen.getByText(launchesMockData[0].status.name);
    screen.getByText(launchesMockData[0].date);
  });
});
