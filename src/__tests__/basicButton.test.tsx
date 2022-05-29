import React from "react";
import { render } from "@testing-library/react";
import BasicButton from "../components/ui/atoms/BasicButton";

it("Button is disabled", () => {
  const { getByText } = render(<BasicButton disabled={true} />);
  expect(getByText(/Click me/i).closest("button")).toBeDisabled();
});
