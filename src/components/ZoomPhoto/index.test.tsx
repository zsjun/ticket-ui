import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ZoomPhoto,{ defaultZoomPhotoProps } from "./index";

describe("test ZoomPhoto component", () => {
  it("should render the correct default ZoomPhoto", () => {
    const wrapper = render(<ZoomPhoto {...defaultZoomPhotoProps}>Nice</ZoomPhoto>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});
