import { render } from "@testing-library/react";
import Search from "./Search";
import { default as user } from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { $ } from "../test-utils";

describe("Search", () => {
  test("it should prefill input with init query", () => {
    const query = "Hello, world!";
    render(<Search initQuery={query} />);

    expect($("search-input")).toHaveValue(query);
  });

  test("it should call onSearch when search button clicked", () => {
    const onSearchSpy = jest.fn();
    const query = "hello, world!";
    render(<Search onSearch={onSearchSpy} />);

    act(() => {
      user.type($("search-input"), query);
      user.click($("search"));
    });

    expect(onSearchSpy).toHaveBeenCalledWith(query);
    expect($("search-input")).toHaveValue("");
  });

  test("it should call onSearch when user press enter on input", () => {
    const onSearchSpy = jest.fn();
    const query = "hello, world!";
    render(<Search onSearch={onSearchSpy} />);

    act(() => {
      user.type($("search-input"), `${query}`);
      user.type($("search-input"), "{enter}");
    });

    expect(onSearchSpy).toHaveBeenCalledWith(query);
    expect($("search-input")).toHaveValue("");
  });
});
