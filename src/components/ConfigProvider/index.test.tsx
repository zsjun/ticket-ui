import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ConfigProvider,{ defaultConfigProviderProps } from "./index";

describe("test ConfigProvider component", () => {
  it("should render the correct default ConfigProvider", () => {
    const wrapper = render(<ConfigProvider {...defaultConfigProviderProps}>Nice</ConfigProvider>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});
