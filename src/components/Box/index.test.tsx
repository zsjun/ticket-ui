import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Box, { BoxSize1, BoxProps } from "./index";

const defaultProps: BoxProps = {
  onClick: jest.fn(),
};

const testProps: BoxProps = {
  btnType: "primary",
  size: "lg",
  className: "klass",
};

const disabledProps: BoxProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe("test Box component", () => {
  it("should render the correct default Box", () => {
    const wrapper = render(<Box {...defaultProps}>Nice</Box>);
    const element = wrapper.getByText("Nice") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("Box");
    expect(element).toHaveClass("btn btn-default");
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render the correct component based on different props", () => {
    const wrapper = render(<Box {...testProps}>Nice</Box>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn-primary btn-lg klass");
  });
  it("should render a link when btnType equals link and href is provided", () => {
    console.log(BoxSize1.link);
    const wrapper = render(
      <Box btnType={BoxSize1.link} href="http://wwww.baidu.com">
        Link
      </Box>
    );
    const element = wrapper.getByText("Link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("btn btn-link");
  });
  it("should render disabled Box when disabled set to true", () => {
    const wrapper = render(<Box {...disabledProps}>Nice</Box>);
    const element = wrapper.getByText("Nice") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
