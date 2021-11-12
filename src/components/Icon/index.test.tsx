// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import Icon, { IconSize1, IconProps } from "./index";

// const defaultProps: IconProps = {
//   onClick: jest.fn(),
// };

// const testProps: IconProps = {
//   btnType: "primary",
//   size: "lg",
//   className: "klass",
// };

// const disabledProps: IconProps = {
//   disabled: true,
//   onClick: jest.fn(),
// };

// describe("test Icon component", () => {
//   it("should render the correct default Icon", () => {
//     const wrapper = render(<Icon {...defaultProps}>Nice</Icon>);
//     const element = wrapper.getByText("Nice") as HTMLButtonElement;
//     expect(element).toBeInTheDocument();
//     expect(element.tagName).toEqual("Icon");
//     expect(element).toHaveClass("btn btn-default");
//     expect(element.disabled).toBeFalsy();
//     fireEvent.click(element);
//     expect(defaultProps.onClick).toHaveBeenCalled();
//   });
//   it("should render the correct component based on different props", () => {
//     const wrapper = render(<Icon {...testProps}>Nice</Icon>);
//     const element = wrapper.getByText("Nice");
//     expect(element).toBeInTheDocument();
//     expect(element).toHaveClass("btn-primary btn-lg klass");
//   });
//   it("should render a link when btnType equals link and href is provided", () => {
//     console.log(IconSize1.link);
//     const wrapper = render(
//       <Icon btnType={IconSize1.link} href="http://wwww.baidu.com">
//         Link
//       </Icon>
//     );
//     const element = wrapper.getByText("Link");
//     expect(element).toBeInTheDocument();
//     expect(element.tagName).toEqual("A");
//     expect(element).toHaveClass("btn btn-link");
//   });
//   it("should render disabled Icon when disabled set to true", () => {
//     const wrapper = render(<Icon {...disabledProps}>Nice</Icon>);
//     const element = wrapper.getByText("Nice") as HTMLButtonElement;
//     expect(element).toBeInTheDocument();
//     expect(element.disabled).toBeTruthy();
//     fireEvent.click(element);
//     expect(disabledProps.onClick).not.toHaveBeenCalled();
//   });
// });
