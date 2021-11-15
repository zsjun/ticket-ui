import React from "react";
import { render } from "@testing-library/react";
import Box from "./index";

describe("test Box component", () => {
  it("should render the correct default Box", () => {
    const wrapper = render(<Box data={[122]}>Nice</Box>);
    const element = wrapper.getByText("Nice") as HTMLElement;
    expect(element.tagName).toEqual("DIV");
  });
});
