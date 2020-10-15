import React from "react";
import { render, screen } from "@testing-library/react";
import { Primary } from "./Music.stories";

const rootId = 'music-component-root'

describe("<Music />", () => {

  test("all stories render", () => {
    render(<Primary />);
    expect(screen.getByTestId(rootId)).toBeDefined();
  });
});