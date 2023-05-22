import { render } from "@testing-library/react";
import Counter from "./Counter";
import { act } from "react-dom/test-utils";
import { $ } from "../test-utils";
import { default as user } from "@testing-library/user-event";

describe("Counter", () => {
  test("it displays initial value", () => {
    render(<Counter initValue="42" />);
    expect($("val")).toHaveTextContent(42);
  });

  test("user can increment value", () => {
    const initValue = 10;
    render(<Counter initValue={initValue} />);

    act(() => user.click($("inc-button")));

    expect($("val")).toHaveTextContent(initValue + 1);
  });

  test("user can decrement value", () => {
    const initValue = 10;
    render(<Counter initValue={initValue} />);

    act(() => user.click($("dec-button")));

    expect($("val")).toHaveTextContent(initValue - 1);
  });
});
