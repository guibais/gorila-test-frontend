import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BasicInput from "../../components/ui/atoms/basicInput";

afterEach(cleanup);

const setup = () => {
  const utils = render(
    <BasicInput
      className="input-test"
      name="input"
      placeholder="placeholder"
      currency="R$"
    />
  );
  const input = utils.container.querySelector(".input-test");
  return {
    input,
    ...utils,
  };
};

test("It should keep a R$ in front of the input", () => {
  const { input } = setup();
  fireEvent.change(input!, { target: { value: "123" } });
  expect(input).toHaveValue("R$123");
});
