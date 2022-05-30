import React from "react";
import { render, cleanup } from "@testing-library/react";
import BasicButton from "../components/ui/atoms/BasicButton";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("Button is disabled", () => {
  const { getByText } = render(
    <BasicButton disabled={true}>Click</BasicButton>
  );

  expect(getByText(/click/i).closest("button")).toBeDisabled();
});

it("Button is clickable", () => {
  const mockCallBack = jest.fn();
  const { getByText } = render(
    <BasicButton onClick={mockCallBack}>Click</BasicButton>
  );
  getByText(/click/i).closest("button")!.click();
  expect(mockCallBack.mock.calls.length).toEqual(1);
});

it("Button is loading", () => {
  const button = render(<BasicButton isLoading={true}>Click</BasicButton>);
  expect(button.container.getElementsByClassName("loader").length).toBe(1);
});
