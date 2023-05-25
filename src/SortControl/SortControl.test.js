import { render } from "@testing-library/react";
import SortControl, { sortOptions } from "./SortControl";
import { $ } from "../test-utils";
import { default as user } from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("SortControl", () => {
  test("default sort is release date", () => {
    render(<SortControl onSortSelect={jest.fn()} />);

    expect($("menu-button")).toHaveTextContent(sortOptions[0]);
  });

  test("can set init sort", () => {
    render(<SortControl initSort={sortOptions[1]} onSortSelect={jest.fn()} />);

    expect($("menu-button")).toHaveTextContent(sortOptions[1]);
  });

  test("user can change sort selection", () => {
    const onSortSelectSpy = jest.fn();
    render(<SortControl onSortSelect={onSortSelectSpy} />);

    act(() => {
      user.click($("menu-button"));
      user.click($(sortOptions[1]));
    });

    expect($("menu-button")).toHaveTextContent(sortOptions[1]);
    expect(onSortSelectSpy).toHaveBeenCalledWith(sortOptions[1]);
  });
});
