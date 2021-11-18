import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal,{ defaultModalProps } from "./index";

describe("test Modal component", () => {
  it("should render the correct default Modal", () => {
    const wrapper = render(<Modal {...defaultModalProps}>Nice</Modal>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("div");
  });
});
