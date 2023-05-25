import { act } from "react-dom/test-utils";
import { $ } from "../test-utils";
import { default as user } from "@testing-library/user-event";
import Menu from "./Menu";
import { render } from "@testing-library/react";

describe("Menu", () => {
  const menuDataMock = {
    menuButtonName: "menu button",
    menuActions: ["action 1", "action 2"],
  };

  test("it renders correctly", () => {
    render(<Menu {...menuDataMock} onItemSelect={jest.fn()} />);

    expect($("menu-button")).toHaveTextContent(menuDataMock.menuButtonName);

    act(() => {
      user.click($("menu-button"));
    });

    menuDataMock.menuActions.forEach((action) => {
      expect($(action)).toBeInTheDocument();
      expect($(action)).toHaveTextContent(action);
    });
  });

  test("it adds classes to menu button", () => {
    render(
      <Menu
        {...menuDataMock}
        menuButtonClasses="my-class"
        onItemSelect={jest.fn()}
      />
    );

    expect($("menu-button")).toHaveClass("my-class");
  });

  test("it adds classes to item button", () => {
    render(
      <Menu
        {...menuDataMock}
        menuItemClasses="my-class"
        onItemSelect={jest.fn()}
      />
    );

    act(() => {
      user.click($("menu-button"));
    });

    menuDataMock.menuActions.forEach((action) => {
      expect($(action)).toHaveClass("my-class");
    });
  });

  test("it can remove arrow", () => {
    render(
      <Menu {...menuDataMock} hideArrow={true} onItemSelect={jest.fn()} />
    );

    expect($("menu-button")).toHaveClass("menu__button--hide-arrow");
  });

  test("user can select item", () => {
    const itemSelectSpy = jest.fn();
    render(<Menu {...menuDataMock} onItemSelect={itemSelectSpy} />);

    act(() => {
      user.click($("menu-button"));
      user.click($(menuDataMock.menuActions[0]));
    });

    expect(itemSelectSpy).toHaveBeenCalledWith(menuDataMock.menuActions[0]);
  });
});
